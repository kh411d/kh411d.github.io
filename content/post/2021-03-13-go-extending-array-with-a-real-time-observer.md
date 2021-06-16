---
title: "Go extending Array with a Real-time Observer"
date: 2021-03-13T11:35:00+07:00
image: /images/golearn.png
share: true	# set false to hide share buttons
tags: ["golang","tutorial"]
url: /2021/03/13/go-extending-array-with-a-real-time-observer
---

Let say, an array in which each element holds a random countdown value, so when its time ended, it needs to spawn a worker (i.e. go-routine) as soon as possible. Luckily, in Go, we can create a custom type variable and benefit from the go-routine itself. For this tutorial, we're going to have an array that has an observer to monitor its values.
```go
var theArray []string
theArray = append(theArray,"Hello, There!")
```
The idea, every time a value is added to the observed variable `theArray`, the observer could immediately take action in real-time, as long as the main thread has not ended yet.

Rather than using the default type `[]string`, let's make a custom type called `observee` so later we can freely extend the type.
```go
type observee []string
//initialize
var theArray observee
//start the observer
theArray.observer()
//append array
theArray = append(theArray,"Hi! I'm the one to be observed")
```
After the `theArray` initialized, we then call the observer function to start observing, which extended from the `observee` type itself. 
```go
type observee []string
func (o *observee) observer(fn func(observee)){
    //Do something!!!
    fn(*o)
}
```
As you noticed that I'm using a pointer `*o`, feel free to remove the pointer and see what happened. If we [run the code](https://play.golang.org/p/LXkuKtSDacy) below, the observer will print and monitor the values of the `theArray` after its appended.  
```go
func main() {
    var theArray observee
    //empty values
    theArray.observer(func(o observee){
        fmt.Println(o)
    })
    //append 1
    theArray = append(theArray,"Hi! it's me")
    theArray.observer(func(o observee){
        fmt.Println(o)
    })
    //append 2
    theArray = append(theArray,"Hi! another me")
    theArray.observer(func(o observee){
        fmt.Println(o)
    })
}
```
```text
[]
[Hi! it's me]
[Hi! it's me Hi! another me]
```
Furthermore, to make the observation happen in real-time we need to create the observer's routine. In other words, the observer needs to have its lifespan and continuously giving information to its caller. 

But before that, let's create the worker first, `theArray` value will hold detail about when will the worker launched, and because all the workers need to finish together then it needs to be synchronized.

```go
type work struct {
    wg *sync.WaitGroup
}

func (w *work) countdown(workerID int) string {
    // return "[worker id]-[time(sec) to launch]-[timestamp added]"
    return fmt.Sprintf("%d-%d-%d", workerID, rand.Intn(5), time.Now().UnixNano())
}
func (w *work) ready(v string) (launchID int, ok bool) {
    id, tx, ts := w.data(v)
    if id > 0 && time.Now().Sub(time.Unix(0, ts)).Seconds() > float64(tx) {
        launchID = id
        ok = true
    }
    return
}
func (w *work) launch(i int) {
    w.wg.Add(1)
    go func(i int, wg *sync.WaitGroup) {
        defer wg.Done()
        fmt.Printf("worker %d is launched\n", i)
    }(i, w.wg)
}
func (w *work) data(v string) (id int, tx int, ts int64) {
    if v == "" {
        return
    }
    s := strings.Split(v, "-")
    id, _ = strconv.Atoi(string(s[0]))
    tx, _ = strconv.Atoi(string(s[1]))
    ts, _ = strconv.ParseInt(string(s[2]), 10, 64)
    return
}
```

And for the observee we modified a little bit so it will loop through each element of `theArray` and send information to caller function such as the array index and the value,

```go
type observee []string
func (o *observee) observer(fn func(int, string, *sync.Mutex)) *sync.Mutex {
    var mu sync.Mutex
    //Start a go routine
    go func(mu *sync.Mutex) {
        //Forever loop through each array element
        nextIdx := 0
        for {
            if x := *o; x != nil {
                fn(nextIdx, x[nextIdx], mu)
                nextIdx++
                if nextIdx == len(x) {
                    nextIdx = 0
                }
            }
        }
    }(&mu)
    return &mu
}
```
Ok then, let's try it.
```go
func main() {
    var theArray observee
    var wg sync.WaitGroup
    worker := &work{
        wg: &wg,
    }
    //Observe and launch worker
    theArray.observer(func(i int, v string, mu *sync.Mutex) {
        if id, ok := worker.ready(v); ok {
            theArray[i] = ""
            worker.launch(id)
        }
    })
    //Append workers to array
    for i := 1; i <= 10; i++ {
        theArray = append(theArray, worker.countdown(i))
    }

    wg.Wait()
    time.Sleep(5 * time.Second)
}
```
If we [run the code](https://play.golang.org/p/SpabGsAIIJq) above, the observer will continuously try to launch a worker from `theArray`. However, running a go-routine without knowing how to stop is not a good idea. So, what if we create a more controllable observer? In which we can restart/kill the observer and modify the observe duration like a ticker.

```go
type observee []string

func (o *observee) observer(fn func(int, string, *sync.Mutex), td time.Duration) (*sync.Mutex, *time.Ticker) {
    var mu sync.Mutex
    t := time.NewTicker(td)
    //Start a go routine
    go func(mu *sync.Mutex) {
        //Forever loop through each array element
        nextIdx := 0
        for {
            select {
            case <-t.C:
                if x := *o; x != nil {
                    fn(nextIdx, x[nextIdx], mu)
                    nextIdx++
                    if nextIdx == len(x) {
                        nextIdx = 0
                    }
                }
            }
        }
    }(&mu)

    return &mu, t
}
```

The code below will simulate how is the ticker stops the observer and then continued as we set manually.

```go
func main() {
    var theArray observee
    var wg sync.WaitGroup
    worker := &work{
        wg: &wg,
    }

    _, t := theArray.observer(func(i int, v string, mu *sync.Mutex) {
        if id, ok := worker.ready(v); ok {
            theArray[i] = ""
            worker.launch(id)
        }
    }, 1*time.Nanosecond) //observing each element per 1 Nanosecond

    for i := 1; i <= 10; i++ {
        theArray = append(theArray, worker.countdown(i))
    }

    wg.Wait()

    time.Sleep(1 * time.Second)
    t.Stop()
    fmt.Println("Stop observer, and wait for 5 secs\nno worker will launched\n")
    time.Sleep(5 * time.Second)

    fmt.Println("Ticker reset, continue observing")
    t.Reset(1 * time.Nanosecond)

    time.Sleep(3 * time.Second)

}
```
[Run the code](https://play.golang.org/p/XjHrXUUVChF), 
```text
$ go run 
worker 8 is launched
worker 7 is launched
worker 10 is launched
worker 1 is launched
worker 5 is launched
worker 9 is launched
Stop observer, and wait for 5 secs
no worker will launched

Ticker reset, continue observing
worker 3 is launched
worker 2 is launched
worker 4 is launched
worker 6 is launched
```

Hey, wait a sec! If we could reset and resume the ticker, then it means that the go-routine wasn't actually killed, right? the go-routine will be alive until the main thread is shutdown. Let's modified the code so we can kill the observer before the main thread is ended.

```go
type observee []string

func (o *observee) observer(fn func(int, string, *sync.Mutex), td time.Duration) (*sync.Mutex, chan<- struct{}) {
    var mu sync.Mutex
    done := make(chan struct{})
    //Start a go routine
    go func(mu *sync.Mutex) {
        //Forever loop through each array element
        nextIdx := 0
        for {
            select {
            case <-done:
                return
            case <-time.NewTicker(td).C:
                if x := *o; x != nil {
                    fn(nextIdx, x[nextIdx], mu)
                    nextIdx++
                    if nextIdx == len(x) {
                        nextIdx = 0
                    }
                }
            }
        }
    }(&mu)

    return &mu, done
}
```

So instead of using the ticker, we're going to use a `done` channel to kill the observer,

```go
func main() {
    var theArray observee
    var wg sync.WaitGroup
    worker := &work{
        wg: &wg,
    }

    _, t := theArray.observer(func(i int, v string, mu *sync.Mutex) {
        mu.Lock() //Lock the process so there will be no leftover
        if id, ok := worker.ready(v); ok {
            theArray[i] = ""
            worker.launch(id)
        }
        mu.Unlock()
    }, 1*time.Nanosecond) //observing each element per 1 Nanosecond

    for i := 1; i <= 10; i++ {
        theArray = append(theArray, worker.countdown(i))
    }

    wg.Wait()

    time.Sleep(1 * time.Second)
    t <- struct{}{}
    fmt.Println("Stop observer, and wait for 5 secs\nno worker will launched\n")
    time.Sleep(5 * time.Second)

    fmt.Println("Append another worker to array, there will be no observer to launch the worker")
    for i := 11; i <= 13; i++ {
        theArray = append(theArray, worker.countdown(i))
    }

    time.Sleep(5 * time.Second)

    fmt.Println("Failed to launch:")
    fmt.Println(theArray)

}
```

[Run the code](https://play.golang.org/p/K5fdj8WswQD), as you see, the observer doesn't launch any worker when the appending is resumed.

```text
$ go run
worker 10 is launched
worker 8 is launched
worker 7 is launched
worker 9 is launched
worker 1 is launched
Stop observer, and wait for 5 secs
no worker will launched

Append another worker to array, there will be no observer to launch the worker
Failed to launch:
[ 2-2-1615865175011360000 3-2-1615865175011362000 4-4-1615865175011362000 5-1-1615865175011363000 6-3-1615865175011373000 11-4-1615865181014639000 12-1-1615865181014644000 13-2-1615865181014645000]
```

Ok, we're not done yet, as you see that the observer is only listening to changes that occurred from the main thread, the `func main()`, What if the observer must listen to changes from multiple routines? Let's give it a try.

```go
func main() {
    var theArray observee
    var wg sync.WaitGroup
    worker := &work{
        wg: &wg,
    }

    mu, t := theArray.observer(func(i int, v string, mu *sync.Mutex) {
        mu.Lock()
        if id, ok := worker.ready(v); ok {
            theArray[i] = ""
            worker.launch(id)
        }
        mu.Unlock()
    }, 1*time.Nanosecond) //observing each element per 1 Nanosecond

    for i := 1; i <= 10; i++ {
        go func(mu *sync.Mutex, i int) {
            mu.Lock()
            theArray = append(theArray, worker.countdown(i))
            mu.Unlock()
        }(mu, i)
    }

    wg.Wait()

    time.Sleep(5 * time.Second)
    t <- struct{}{}

}
```

[Run the code](https://play.golang.org/p/yiMjZv3V7bx) I guess it went well too, as you see that I'm using `mu.Lock()` and `mu.Unlock()` before and after appending `theArray` feel free to comment those lines and see what happened. 

```text
$ go run 
worker 2 is launched
worker 6 is launched
worker 4 is launched
worker 9 is launched
worker 5 is launched
worker 3 is launched
worker 10 is launched
worker 7 is launched
worker 1 is launched
worker 8 is launched
```

Ok, that’s a wrap. If you have any questions, suggestions or if I made a mistake, don’t hesitate to poke me on Twitter or email.