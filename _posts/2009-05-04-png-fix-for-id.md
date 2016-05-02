---
layout: post
title: PNG fix for IE
date: '2009-05-04 18:22:20 +0700'
date_gmt: '2009-05-04 11:22:20 +0700'
categories:
- Internet &amp; Tech
tags: []
---
Thanks to Angus Turnbull http://www.twinhelix.com, that have made this fix ....

Great tools for making PNG image looks good on IE .... , there is two files that need to be used to make it work

1. iepngfix.htc  
 http://code.google.com/p/widgetfx/source/browse/widgetfx.org/iepngfix.htc

2. iepngfix\_tilebg.js  
 http://code.google.com/p/widgetfx/source/browse/widgetfx.org/iepngfix\_tilebg.js?r=144

Include iepngfix.htc on your css style file  
 <pre name="code" class="css" >  
 \*html img, \*html #anydivid {  
 behavior: url(style/iepngfix.htc);  
 border:0;  
 padding:0; }  
 </pre>

include this iepngfix\_tilebg.js on you html header, it support for transparent image on background position and repeat.

More complete detail ... you can check his website,

http://www.twinhelix.com/css/iepngfix/

 
    <pre class="prettyprint lang-js"><span class="com">
    </span>