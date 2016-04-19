---
layout: post
status: publish
published: true
title: Iframe on Facebook Fan Pages Tabs
author:
  display_name: Khalid Adisendjaja
  login: admin
  email: contact@khal.web.id
  url: http://khal.web.id
author_login: admin
author_email: contact@khal.web.id
author_url: http://khal.web.id
wordpress_id: 171
wordpress_url: http://www.khalidadisendjaja.web.id/?p=171
date: '2010-07-20 16:47:33 +0700'
date_gmt: '2010-07-20 09:47:33 +0700'
categories:
- Internet &amp; Tech
tags: []
comments: []
---
Iframe will not be supported on facebook fab pages tab, the strange thing is only on the first load of the tab that facebook will give you an error "iframe not supported"

I really dunno is this accidentally or maybe on purpose, I just figured out that apps on Fab Pages Tab need an action from user, so then to get iframe work on tab,

1. In your Tab Url file ex:index.php, create a href tag, that will link to "somefile.php"  
 ex: <a href="somefile.php">Click here to begin</a>
2. Edit your somefile.php and insert <iframe> tag or <fb:iframe/> tag  
 ex: <fb:iframe src="" width="" height="" />
3. You might want to make a dummy loading image, just to attract user to click the image  
 ex: <img src="url to loading image" /><Br/><a href="somefile.php">Click here to begin</a>

There are another way that use fbsj as shown in this article,  
 http://jesperastrom.com/facebook/2-simple-hacks-to-create-an-iframe-on-a-facebook-fan-page-tab/  
 The script from the article look like this,

 
    <pre lang="html">
    <a onClick="outside_location.setInnerFBML(location_two);" style="cursor: pointer;">
    Click here to launch game.</p> <p><div id="outside_location">
    <img src='[Enter a url to an image here]' /><br /> <fb:iframe width="760" height="760" frameborder="0" src="http://www.facebook.com/MotherStore" /> </div>
    </a></p> <p>
    <fb:js-string var="location_two">
    <fb:iframe width="[With of iFrame]" height="[Height of iFrame]" style='margin-top: -50px; margin-left: -40px; margin-bottom: -40px; margin-right: -50px;' frameborder='0' src='[Enter the source of the iFrame here]' scrolling='no' />
    </fb:js-string>
    </p>
    <p>
    <script type="text/javascript" charset="utf-8">
    var outside_location = document.getElementById('outside_location');