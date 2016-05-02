---
layout: post
title: PATH_INFO OR ORIG_PATH_INFO
date: '2010-08-10 16:30:57 +0700'
date_gmt: '2010-08-10 09:30:57 +0700'
categories:
- Internet &amp; Tech
tags: []
---
First of all I'm using codeigniter for the web app, which is hosted on php4 environment someday I moved the apps to another shared host which have php5 installed , on my URI\_PROTOCOL in config.php files , I change  
 $config['uri\_protocol'] = "PATH\_INFO";

And then when testing the apps there was some problem with the route dunno is this an issue or else, it really takes time for me to find out why the route always looping back again again and again, my first guess was on htaccess that maybe the mod\_rewrite module doesnt work, but the guess was wrong , and then I checked again on web apps route.php, hook configuration, site path, base dir, my adventure end in URL.php bcoz the segments/rsegments always return none.

Try to print out $\_SERVER variable , and now so this is the problem , the PATH\_INFO variable was gone no where, but there is ORIG\_PATH\_INFO, an so my first guess of the problem was on PHP version so then I found this article,  
 http://www.binarytides.com/blog/path\_info-orig\_path\_info-apache-and-php/  
 ,well I think its explained very well, on his condition it happen when he use .htaccess redirect and in my condition it happen when I use .htaccess mod\_rewrite.

PATH\_INFO relies on the Apache [AcceptPathInfo Directive](http://httpd.apache.org/docs/2.0/mod/core.html#acceptpathinfo)