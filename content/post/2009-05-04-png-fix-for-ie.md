---
comments: true # set false to hide Disqus
date: 2009-05-04T11:22:20+0700
draft: false
image: /images/ie6.jpg
share: true    # set false to hide share buttons
tags: ["bugfix","ie6","tutorial"]
title: PNG fix for IE
---

Thanks to Angus Turnbull who made this fix and made PNG image looks good on IE, these are two files that you need to implement,

1. [iepngfix.htc](http://code.google.com/p/widgetfx/source/browse/widgetfx.org/iepngfix.htc)
2. [iepngfix_tilebg.js](http://code.google.com/p/widgetfx/source/browse/widgetfx.org/iepngfix\_tilebg.js?r=144)

### Usage

Include iepngfix.htc on your css style file  
   
    <pre name="code" class="css" >  
        *html img, *html #anydivid {  
        behavior: url(style/iepngfix.htc);  
        border:0;  
        padding:0; }  
    </pre>

include this `iepngfix_tilebg.js` on you html header, it's support transparent image on background position and repeat.

More complete detail ... you can check his website http://www.twinhelix.com/css/iepngfix/
