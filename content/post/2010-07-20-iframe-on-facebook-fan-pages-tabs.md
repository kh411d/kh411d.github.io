---
date: 2010-07-20T09:47:33+07:00
tags:
- facebook
- tutorial
title: Iframe on Facebook Fan Pages Tabs
url: /2010/07/20/iframe-on-facebook-fan-pages-tabs/
image: /images/facebookdev.jpg
---

Iframe will not be supported on facebook fan pages tab, the strange thing is, it only happened on first load and the you'll get this error `iframe not supported`

I just figured out that apps on Fan Pages Tab need an action from user, so then to get an iframe working on tab,

1. In your Tab Url file i.e. `index.php`, create a href tag, that will link to `somefile.php`  
   ```html 
   <a href="somefile.php">Click here to begin</a>
   ```
2. Edit your somefile.php and insert `<iframe>` tag or `<fb:iframe/>` tag  
   ```html
   <fb:iframe src="" width="" height="" />
   ```
3. You might want to make a dummy loading image, just to attract user to click the image,  
   ```html
      <img src="url to loading image" />
      <a href="somefile.php">Click here to begin</a>
   ```

Alternatively using FBJS as shown in this article, [2 simple hacks to create an iframe on a facebook fan page tab](http://jesperastrom.com/facebook/2-simple-hacks-to-create-an-iframe-on-a-facebook-fan-page-tab/)
 
The script from the article look like this,
```javascript 
    <a onClick="outside_location.setInnerFBML(location_two);" style="cursor: pointer;">
      Click here to launch game.
      <div id="outside_location">
         <img src='[Enter a url to an image here]' /><br /> <fb:iframe width="760" height="760" frameborder="0" src="http://www.facebook.com/MotherStore" /> 
      </div>
    </a>
   
    <fb:js-string var="location_two">
         <fb:iframe width="[With of iFrame]" height="[Height of iFrame]" style='margin-top: -50px; margin-left: -40px; margin-bottom: -40px; margin-right: -50px;' frameborder='0' src='[Enter the source of the iFrame here]' scrolling='no' />
    </fb:js-string>
   
    <script type="text/javascript" charset="utf-8">
    var outside_location = document.getElementById('outside_location');
```