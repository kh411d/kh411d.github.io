---
author: 
comments: true	# set false to hide Disqus
date: 2020-09-23T07:48:16+07:00
image: /images/sveltecover.jpg
menu: 		# set "main" to add this content to the main menu
share: true	# set false to hide share buttons
tags: ["svelte","SPA","html5","tutorial"]
title: Build a Medium-Like Clap Button using Svelte Custom Element API
url: /2020/09/23/build-a-medium-like-clap-button-using-svelte-custom-element-api
---

Short stories, In August 2017, Medium replaced their Recommend button with a "clap" button, which readers can click as many times as they want to show how much they enjoyed the article. Back then, this is how the Medium writers are going to be paid.

Yeah I know, the one that I build is so last years and outdated, but Hey! Why not? It still matters and It doesn’t cost a thing. The clap button still providing good feedback to writers, and it helps them to know which posts do well and which could use some work and hopefully helping people to be better at writing.

{{< codepen id="eYZQYWZ" user="kh411d" height="328" tab="html,result" theme="dark" >}}
---
With help from _[Svelte custom element API](https://svelte.dev/docs#Custom_element_API)_, we can easily create some web components as you see on the codepen editor, `<clap-it \>` is a custom element that can be very easy to implement in any webpage or working together with another JS Framework/library.

__TL; DR;__ hopefully you're already familiar with Svelte, I'm going to breakdown how I build this component, but first, you need to fork the repository. 

{{< github_button button="fork" user="kh411d" repo="clap-it" text="Fork the repository" large="true">}}

## Svelte Part
Clone the repo and then install all required modules,
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

The `onMount` lifecycle will fetch the initial clap count from the API after the component is first rendered to the DOM. Notice the `await tick()`, this is a workaround for the [prop initialization issue in the custom element](https://github.com/sveltejs/svelte/issues/2227). If you remove it, you might not be able to access the exported `api` prop, so the tick is kinda waiting until any pending state changes applied to the DOM.

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
we need _[svelte/stores](https://svelte.dev/tutorial/writable-stores)_ to be used as a counter, when `on:mousedown` triggered, the `counter` will recursively increase the value of both store and the `bufferedCount` per 200ms, and it stop until `on:mouseup` triggered.
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
The counter will notify the `countValue` whenever the counter value changes. If there is no changes/update on the counter within 1.5sec, then the `bufferedCount` will be sent to the API. You might be wondering what is the use of `bufferedCount` and all the _timeout_, this is actually a trick, because it would not be efficient to make an API call in every click, so we need to buffer the count for a certain time, in this case within 1.5sec.


## CSS Styles

Open the index file `public/index.html`, because of the behavior of shadow DOM, styles are encapsulated, any global CSS styles will not be applied to the custom element, 

```html
<clap-it style="width:60px;height:60px;fill:red;stroke:red;color:red;" api=""/>
```

So, to make a workaround, the styles need to be inlined, we're going to bind the inline style to the clap container by exporting the `style` prop, whatever style applied to `clap-it` component will be applied to the container inside the shadow DOM,

```html
<script>
...
export let style;
...
</script>
<div id="clap-container" style="{style}">
...
</div>
```

## Animation

The animation itself is pretty much simple, the button will be animated when increment happened, which is when you clicked the clap button,
```javascript
function increment() {
    ...
  addClass("clapped clap", 250)
    ...
}
```

The clapped and clap class is going to switch on and off, and creating a small animation on SVG object, the animation is done by using some `@keyframes` rule. It will gradually change from the current style to the new style at certain times, you need to bind the animation to an element to get an animation to work.

```html
<svg on:mousedown on:mouseup>
    <!-- The Clap icon outline -->
    <g class="outline"></g> 
    <!-- The Clap icon line sparkle -->
    <g class="sparkle"></g>
    <!-- The full colored icon clap hand -->
    <g class="flat"></g>
</svg>
```

For example, open the `src/clap-it.scss` file, `@keyframes blinkin` animation is bind to `.count` class, so then it will create a blinking effect when the `.clap` class activated.

```scss
    &.clap {
    .sparkle path {
        @include animate-once(spark);
      }
      @include animate-once(pulse);
      .count {
        @include animate-once(blinkin);
      }
    }
  @keyframes blinkin {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
```

## Usage


After npm build, `bundle.js` will be created in `public/build` directory, 
```bash
$ cd clap-it
$ npm run build && npm run start
```
Last time I checked, the size of `bundle.js` is approx 16kb, and it's only 6kb gzipped, pretty small isn't it. This bundle already includes all the JS code, CSS code, and also the SVG. to make it work, all you need to do is to apply the `bundle.js` and the `<clap-it />` custom tag on any webpage you want.

```html
<html>
    <head>
        <script src='http:// your-website .com/js/bundle.js'></script>
    </head>
    <body>
        <clap-it style="width:60px;height:60px;fill:red;stroke:red;color:red;" api=""/>
    </body>
</html>
```

I know it's not perfect, feel free to make your own modification, my goal is only to make it works. Please let me know if you made some changes or found some bugs.

Soon, I'm going to publish a working API to be paired with this component, stay tune.


> Well, I suppose, these days onward you can clap only with one hand.