---
author: 
comments: true	# set false to hide Disqus
date: 2020-09-21T07:48:16+07:00
image: /images/sveltecover.jpg
menu: 		# set "main" to add this content to the main menu
share: true	# set false to hide share buttons
tags: ["svelte","SPA","html5","tutorial"]
title: Build a Medium-Like Clap Button using Svelte Custom Element API
url: /2020/09/21/build-a-medium-like-clap-button-using-svelte-custom-element-api
---

Short stories, In August 2017, Medium replaced their Recommend button with a "clap" button, which readers can click as many times as they want to show how much they enjoyed the article. Back then, this is how the Medium writers are going to be paid.

Yeah I know, the one that we're going to make in this tutorial is so last years and outdated, but Hey! Why not? It still matters and It doesn’t cost you anything, the clap button still providing good feedback to writers, so they'll know which posts do well and which could use some work.

So, this is what we're going to make,

{{< codepen id="eYZQYWZ" user="kh411d" height="328" tab="html,result" theme="dark" >}}

We're going to create a web component by using _[Svelte custom element API](https://svelte.dev/docs#Custom_element_API)_. As you can see on the codepen editor, I'm using a custom HTML tag `<clap-it \>` which can be very useful to implement in any webpage or working together with another JS Framework/library.

__TL; DR;__ hopefuly you're already familiar with Svelte, I'm going to use the project repository as base {{< github_button button="fork" user="kh411d" repo="clap-it" >}}

###### Svelte Part
Clone the repo and install,
```bash
$ cd clap-it
$ npm install
```

Open the `rollup.config.js` file. There are a couple of changes that I've made to enable custom element and SCSS compiling _(svelte-preprocess)_,

```javascript
// add this import at the top:
import preprocess from 'svelte-preprocess';

/* ... */

// and add preprocess as a plugin:
export default {
  /* ... */
  plugins: [
    svelte({
      /* ... */
      customElement: true,
      preprocess: preprocess()
    })
  }),
  /* ... */
}
```

Now, open up `clap-it.svelte` file in `src` directory, 

```html
<svelte:options tag="clap-it" />
```
This tag will compile Svelte component to web component and a tag name should be specified, in this case, the tag name will be `clap-it`.

```javascript
import { onMount, tick } from 'svelte';

export let api;

onMount(async () => {
  await tick()
  const res = await fetch( api +  `?url=` + window.location.href );
  var initial = await res.text();
  counter.update(n => parseInt(initial,10));
});
```

The `onMount` lifecycle is meant to fetch the initial clap count from the API after the component is first rendered to the DOM. Notice the `await tick()`, this is a workaround for the [prop initialization issue in the custom element](https://github.com/sveltejs/svelte/issues/2227). If you remove it, you might not be able to access the exported `api`, so the tick is kinda waiting until any pending state changes applied to the DOM.

```javascript
import { writable } from 'svelte/store';

let bufferedCount = 0;
const counter = writable(0);

function increment() {
  addClass("clapped clap", 250)
    count.update(n => {
      bufferedCount++
      return n + 1
    });
    incTimeout = setTimeout(increment, 200);
}
```
_[svelte/stores](https://svelte.dev/tutorial/writable-stores)_ is used as a counter, the `counter` will increase both store value and the `bufferedCount` by one per 200ms on `on:mousedown` event until `on:mouseup` event triggered.


```javascript
const unsubscribe = counter.subscribe(value => {
  countValue = value;	
	if (bufferedCount != 0) {
		clearTimeout(timeout);
    timeout = setTimeout(() => {
      httpPost(api,bufferedCount, window.location.href)
      bufferedCount = 0;
 		}, 1500);
  }
});
```

```html
<div class="count-container">
    <div class="count">{countValue}</div>
  </div>
```

The counter will notify the `countValue` whenever the counter value changes. If there is no changes/update on the counter within 1.5sec, then the `bufferedCount` will be sent to the API. You might be wondering what is the use of `bufferedCount` and all the timeout, this is actually a trick, because it would not be efficient to make an API call in every click, so we need to buffer the count for a certain time, in this case within 1.5sec.


###### Animation Part