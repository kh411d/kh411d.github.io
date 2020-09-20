---
author: 
comments: true	# set false to hide Disqus
date: 2020-09-20T13:20:21+07:00
draft: true
image: /images/goserverlesscover.jpg
menu: 		# set "main" to add this content to the main menu
share: true	# set false to hide share buttons
tags: ["serverless","FAAS","netlify","vercel","zeit","flyio","tutorial","golang"]
title: Serverless/FAAS Providers With No Credit Card Required
url: /2020/09/20/serverless-faas-providers-with-no-credit-card-required
---

Have you ever been in a situation where you met a strange girl, asking her out for an easy walk in a sunny afternoon, introduce each other, giving your number, email, Facebook, Github account, even your home address, and then suddenly she's asking you for a credit card, she said, it's for our good, I won't do evil. What would you do? well, in my experience, that makes no sense at all, at least it never happened though.

![hustle film](/images/hustlegirls.jpg)

Well, I guess it's happening, but in another reality, welcome to the world wide web, when you come across with a _[free trial](https://en.wiktionary.org/wiki/free_trial)_ term, they might be asking for your credit card, what kind of marketing is this? why would I want to give my card just only for a _free trial_? they already have my email, my phone number, and my PO BOX, credit card is not something to be given to someone you're not serious into, otherwise, your card number will end up scattered in every place you visited, and that's a nightmare.

#### FAAS and Furious

Hey, wait up, I know I'm a bit off-topic here, it begins from my small project, a hobby, I need to find a server which has fewer configurations, ease of use, accountable, and most of all it's free, no charge, _free trial_ is ok. In second thoughts, a _[FAAS (Function as a Service)](https://www.cloudflare.com/learning/serverless/glossary/function-as-a-service-faas/)_ providers might be a good fit for this project. 

If you haven't know what it is, _[Serverless](https://martinfowler.com/articles/serverless.html)_ doesn’t mean you don’t need servers. Instead, you need fewer servers to manage. You have more control but less flexibility, no need to install software, no scaling configuration, faster scaling, also you pay what you use, means, you pay only when your _service/ function or code_ is running, if one of your function crashed, it will be replaced with another one immediately, so it won't bring down your app.

But there is a but, in _FAAS_ architecture, you might notice a _[cold starts](https://www.serverless.com/blog/keep-your-lambdas-warm)_, when a function starts for the first time, it will respond slower than usual. Every _Serverless/FAAS_ provider has different idle function lifetimes and limitations, such as _memory_, _payload_, and _execution limits_. 

Last but not least, _The Orchestration_, in case you have a lot of _functions_, it can result in more configuration than needed, in plain words, you need to orchestrate all of your _functions_ to make them cooperate, talk to each other, yeah I know, it's like minions, each minion has a different job. The minion that drives the car will never be the minion holding the rocket launcher.

![minion faas](/images/minionfaas.jpg)

#### No Credit Card Providers

It is a shame for some big companies who still need your credit card for a trial service, let's say Google (Cloud functions), AWS (Lambda), and Azure Functions, they are the biggest providers, and they happen to ask your credit card upon registration. They also focus on configurability, so there's must be a lot of things to configure, so I think I'm gonna pass on these three.

So then I found these small three, no credit card required, fit for your hobby/small project, easy to use, and also offering a developer experience _(git integration, ci/cd, logging, etc)_ Lately, I’ve been using Go as server-side programming, fortunate these providers are supporting it.

###### [Vercel/Zeit](https://vercel.com/) Functions

This is the one that I first come across that offer me [the easiest way integrating my function](https://vercel.com/docs/serverless-functions/introduction) to their system out of the box, which is, what you need to do is creating and `/api` directory inside your app folder, Vercel will scan all the Go files in that directory looking for an exported function that matches the net/http Go API, and then the function will be served as Serverless Functions, that's it. 

```
func Handler(w http.ResponseWriter, r *http.Request) {
    ...
}
```
Deployment(CI/CD) is handled by Github integration, you need to give access to Vercel to manage deployment. For free registration, you will have,
- HTTPS-enabled Custom Domains
- Continuous Deployment with Git
- High-performance Edge Network
- Unlimited Websites & APIs
- Serverless Functions in Node.js, Go, and more

###### [Netlify](http://netlify.com) Functions (AWS Lambda)

I think most everyone knows it, who doesn't? Most people use Netlify to host SSG(Static Site Generator) websites and SPA (Single Page Application) such as NextJS, ReactJS, or VueJS app. And apparently, Netlify lets you deploy _[serverless Lambda functions without an AWS account](https://docs.netlify.com/functions/overview/)_, and with function management handled directly within Netlify. Yay!!!

It's a bit different from Vercel, [your handler should follow AWS API Gateway proxy](https://docs.netlify.com/functions/build-with-go),
```
func handler(ctx context.Context, request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
  # Your server-side functionality
}
```

and the response must be compatible with the AWS API Gateway response:
```
return &events.APIGatewayProxyResponse{
        StatusCode: 200,
        Body:       "Hello, World",
    }, nil
```

and then in your main package, 
```
package main
...
func main() {
    // Make the handler available for Remote Procedure Call by AWS Lambda
    lambda.Start(handler)
}
```

Netlify can build your source Go functions into AWS Lambda compatible binaries. Before building your Go source, Netlify needs to know the expected Go import path for your project. Use the `GO_IMPORT_PATH` environment variable to set the right import path. You can do this in your _netlify.toml_ file. The path value should point to your source repository on your Git provider.

Deployment(CI/CD) also handled by Github integration, for a starter account you'll get,
- Automated builds from Git
- Deploy to global Edge network
- Site previews for every push
- Instant rollbacks to any version
- Deploy static assets & dynamic serverless functions (JS & Go)

###### [Fly.io](http://fly.io) (Flyctl)

When low latency is necessary and data always needs to be real-time, Flyio is probably the best choice that is free for a side project, you'll get $10/mo of service credit and you can [run a very small VM](https://fly.io/docs/about/pricing/).

There is a tagline on their site _Deploy App Servers, Close to Your Users_ . It means that they are focusing on _edge computing_, or in other words, bringing the functions as close as possible to the end-users to reduce latency to an absolute minimum. At this time of writing, [Fly.io currently have 19 datacenter locations/regions](https://fly.io/docs/reference/regions/). Fly.io will run your application docker images on servers in different cities.

__Deploying on Fly.io.__ I haven't tried this myself but it seems very possible, you need to have this `flyctl` tool installed on your system, upon installing, you have to register for a fly.io account, no credit card required, simply follow the guidelines [Installing flyctl](https://fly.io/docs/getting-started/installing-flyctl/), and then continue with [Build, Deploy, and Run a Go Application](https://fly.io/docs/getting-started/golang/)

__TL; DR;__ `flyctl init` will create a `fly.toml` file, Select Go (Go Builtin) for the builder, and then get ready for deployment `flyctl deploy`, keep in mind that flyctl will create docker images on your local computer, it will download all required images such as golang image approx 1gb, so make sure you have good storage space and internet connection.

`flyctl open` will open a browser on the HTTP version of the site.

> “Every kid coming out of Harvard, every kid coming out of school now thinks he can be the next Mark Zuckerberg, and with these new technologies like cloud computing, he actually has a shot.” 
> 
> ~ Marc Andreessen, Co-founder of Netscape, Board Member of Facebook