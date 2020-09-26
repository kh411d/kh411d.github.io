---
comments: true	# set false to hide Disqus
date: 2020-09-26T06:34:11+07:00
image: /images/gopherdockersea.jpg
menu: 		# set "main" to add this content to the main menu
share: true	# set false to hide share buttons
tags: ["serverless","golang","rest-api","netlify","vercel","flyio"]
title: Practical Rest Api in Go on Cheap Serverless
url: /2020/09/26/practical-rest-api-in-go-on-cheap-serverless
---

By doing serverless and FAAS, you will have more focus on shipping code instead of worrying about the servers or runtimes. It simplifies your infrastructure stack, cheaper pricing model, auto-scale, and ease of use. 

But it sometimes often makes extensive use of third-party services (such as databases, auth services, message queues, caching, searching, etc) So, bear in mind that your code is only a function which works when it's paired with other functions.

### Why choose Go?
Go have advantages on the packaging system, cross-platform compilation, and easy deployment. Go compiles to machine code, so it natively runs on the host machine. Go also have built-in _goroutines_ that make it easy to do concurrent requests. [We can benefit from Go concurrency to keep a small memory footprint and short runtime](https://dave.cheney.net/2016/12/22/never-start-a-goroutine-without-knowing-how-it-will-stop) that relate to the provider's runtime and memory limits.

### The Code

{{< codepen id="eYZQYWZ" user="kh411d" height="328" tab="result" theme="dark" >}}
---
Recently, I’ve built an API for a _Web Component_ and that be [my custom-made clap button](https://khal.web.id/2020/09/23/build-a-medium-like-clap-button-using-svelte-custom-element-api/), similar to what you've seen on Medium site. The API code is in Go language, it’s a simple REST API to fetch/update the number of claps for a single web page. Practically, you can use/modified the API for your own made web component.

{{< github_button button="fork" user="kh411d" repo="clapi" text="Fork the repository" large="true">}}

The code should be easily deployed to Vercel, Fly, and Netlify. The reason why I choose those providers is in [my previous article](https://khal.web.id/2020/09/20/serverless-faas-providers-with-no-credit-card-required/). For the 3rd party database, I'm using FaunaDB by Fauna, or you can switch with Redis by Lambda store. FYI, Fauna has a partnership with Vercel/Netlify

Before starting the project, I tend to read each provider's documentation on how to deploy functions, so then it will affect how you structured your code. As results,

1. _Vercel_ needs your handler function to be created in a directory named `/api` and their system will scan all the files under that folder looking for files that [export a function matching the net/http Go API](https://vercel.com/docs/serverless-functions/supported-languages#go).
2. _Netlify_ required a handler function to receive events from AWS API Gateway and simply make your handler available on the main package to serve AWS Lambda RPC, since Netlify lets you deploy _[serverless Lambda functions without an AWS account](https://docs.netlify.com/functions/overview/)_
3. _Fly_ let you [deploy the app as a Docker image](https://fly.io/docs/hands-on/create-app/) or [deploy it from the original source](https://fly.io/docs/getting-started/golang/). So you'll need to create your own Http listener, they will run your image as a service in different server locations.

Let's take a look at the handler file `/api/handler.go`, you'll see that I have 2 different handlers, one to serve `net/http` listener on Localhost and Fly, also to be served as a function on Vercel.
```go
//ServeHTTP net/http handler
func ServeHTTP(w http.ResponseWriter, r *http.Request) {
    ... 
}
```
And another one to serve AWS Lambda RPC _(Remote Procedure Call)_
```go
//ServeLambda AWS lambda event handler
func ServeLambda(r events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
    ...
}
```
So now let see the main package, `/main.go`, it will check `AWS_LAMBDA_FUNCTION_NAME` variable whether to serve Http or AWS Lambda RPC.
```go
func main() {
	if os.Getenv("AWS_LAMBDA_FUNCTION_NAME") == "" {
		http.HandleFunc("/", api.ServeHTTP)
		http.ListenAndServe(":3000", nil)
	} else {
		// Make the handler available for Remote Procedure Call by AWS Lambda
		lambda.Start(api.ServeLambda)
	}
}
```

Now you see that each provider has a different way to compile your code into a function, and another thing to catch on, each provider usually has their own configuration file that needed upon deployment (CI/CD), Take a look at `/netlify.toml` file,
```toml
[build]
  command = "make build" //Your app build command
  functions = "functions" //Your app function exec/binary directory
[build.environment]
  # Change this path with the path to your repository
  GO_IMPORT_PATH = "github.com/kh411d/clapi" //Your git provider repository path
```

The build command should correspond to toml configuration, as you see below, the go binary should be put in the `functions` directory as it specified on the toml configurations.

```makefile
build:
	mkdir -p functions      // create functions dir as specified in toml
	go get ./...            // install all dependencies
	go build -o functions/clapi  // build and output the binary to functions directory
```

To ease deployment (CI/CD), Vercel and Netlify make use of Git provider integration (Github/Gitlab/BitBucket) and they both have their own web-dashboard that shows you a deployment status, domain, logs, etc. 

Fly required you to install `flyctl` on your local device, it's a cli tool that lets you create an account and deploy the app. `flyctl` will be your [cli-dashboard](https://fly.io/docs/getting-started/working-with-fly-apps/)

### 3rd Party Services

Lastly, we need a storage to put all the count, as I mentioned before, we're going to use FaunaDB and Redis as an option, take a look at `/api/handler.go`, if there is no FaunaDB configuration then it will look for Redis configuration.

```go
func init() {
...
if conf.Get("FAUNADB_SECRET_KEY") != nil {
    dbconn, err = db.NewFaunaDB()
    ...
} else if conf.Get("REDIS_HOST") != nil {
    //use redis instead
    dbconn, err = db.NewRedisDB()
    ...
} 
...
}
```

There is a couple of steps to set up these databases, it will be explained on the README file. All the database code is in `/db` directory, and each database driver should follow this interface `/db/kv.go`,

```go
type KV interface {
	Add(string, []byte, time.Duration) error
	Set(string, []byte, time.Duration) error
	Delete(string) error
	Get(string) ([]byte, error)
	Incr(string) error
	IncrBy(string, int64) error
	WithContext(context.Context) KV
}
```

All the rest of the deployment notes already on the README file along with the repository. FaunaDB is a bit new for me, it's not meant to be a key-value database and the query might need improvement. The code shown might not fit for production release, so feel free to modified and use it at your own risk.

> Serverless doesn't mean you don't need servers, it was meant for you not to think about the servers.