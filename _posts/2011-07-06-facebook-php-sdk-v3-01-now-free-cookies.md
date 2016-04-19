---
layout: post
status: publish
published: true
title: Facebook PHP SDK v3.01 now free cookies
author:
  display_name: Khalid Adisendjaja
  login: admin
  email: contact@khal.web.id
  url: http://khal.web.id
author_login: admin
author_email: contact@khal.web.id
author_url: http://khal.web.id
wordpress_id: 275
wordpress_url: http://khalidadisendjaja.web.id/?p=275
date: '2011-07-06 20:38:44 +0700'
date_gmt: '2011-07-06 13:38:44 +0700'
categories:
- Internet &amp; Tech
tags: []
comments: []
---
Now the new SDK has been released, on the beginning of june 2011 I guess.

Well the main different from v3.00 is? Now the CSRF state is rely on persistent data which is a session named "state" and not using cookie anymore!, and if you see on the constructor , it checks whether session already start yet, giving an option to start the session.

Feel free to update, as usual the code rely on [github](https://github.com/facebook/php-sdk/)