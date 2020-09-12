---
date: 2010-08-10T09:30:57+07:00
tags:
- codeigniter
- php
title: path_info or orig_path_info
url: /2010/08/10/path_info-or-orig_path_info/
---

The story begin when I was migrating my Codeigniter app from php4 to php5 hosting environment and then I change the `uri_protocol` config,

    $config['uri_protocol'] = "PATH_INFO";

And then the app crashed!?? I had to debug the code for quite sometimes :tired_face:

Debugging the `$_SERVER` variable, and turns out the `PATH_INFO` variable wasn't exist, but the `ORIG_PATH_INFO` variable is exist, hmm is it the PHP version problem? 

So then I found this article [path_info, orig_path_info, apache and php](http://www.binarytides.com/blog/path\_info-orig\_path\_info-apache-and-php/), well I guess that explained very well, on his condition mentioned in the article, the problem happened when he use `.htaccess redirect` and in my condition it happen when I use `.htaccess mod_rewrite`

`PATH_INFO` relies on the Apache [AcceptPathInfo Directive](http://httpd.apache.org/docs/2.0/mod/core.html#acceptpathinfo)