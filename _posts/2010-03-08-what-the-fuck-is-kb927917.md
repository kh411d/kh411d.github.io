---
layout: post
status: publish
published: true
title: 'What the f**k is KB927917 '
author:
  display_name: Khalid Adisendjaja
  login: admin
  email: contact@khal.web.id
  url: http://khal.web.id
author_login: admin
author_email: contact@khal.web.id
author_url: http://khal.web.id
excerpt: "Ok then ... what ??? , I've got a surprise from IE678, it getting on my
  nerve (but not in a long time), I've found out that one of my web apps cannot be
  view by any IE browser, so what the hell is happen, the browser keep telling me
  this line below,\r\n\r\n\r\nWebpage error details\r\nUser Agent: Mozilla/4.0 (compatible;
  MSIE 8.0; Windows NT 5.1; Trident/4.0)\r\nTimestamp: Mon, 8 Mar 2010 09:10:13 UTC"
wordpress_id: 155
wordpress_url: http://www.khalidadisendjaja.web.id/?p=155
date: '2010-03-08 17:17:52 +0700'
date_gmt: '2010-03-08 10:17:52 +0700'
categories:
- Internet &amp; Tech
tags: []
comments: []
---
Ok then ... what ??? , I've got a surprise from IE678, it getting on my nerve (but not in a long time), I've found out that one of my web apps cannot be view by any IE browser, so what the hell is happen, the browser keep telling me this line below,

    <br></br>
    Webpage error details<br></br>
    User Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)<br></br>
    Timestamp: Mon, 8 Mar 2010 09:10:13 UTC<br></br>
    Message: HTML Parsing Error: Unable to modify the parent container element before the child element is closed (KB927917)<br></br>
    Line: 0<br></br>
    Char: 0<br></br>
    Code: 0<br></br>
    URI: http://xxx.xxxxxx.com/apps/xxxxx/index.php<br></br>

Make me cofused for a while, figure it out what happen, are there un closing tag on the layout? are there a javascript error? which one the error details doesn't seem have enough information......,

So then, I started checking the layout and try to find my <script></script> tag, on the middle of the layout that might be trying to modify the DOM before all HTML load up.

I move the script tag to the bottom of the layout before the tag body, or if you guys using jquery, you can use this,  
`$(document).ready(function() {});`

Ok then, all works properly, so my tips is "kill IE" !!@#@!!!????