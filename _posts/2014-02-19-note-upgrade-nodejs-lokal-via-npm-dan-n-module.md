---
layout: post
status: publish
published: true
title: '[NOTE] Upgrade NodeJS lokal via NPM dan "n" module'
author:
  display_name: Khalid Adisendjaja
  login: admin
  email: contact@khal.web.id
  url: http://khal.web.id
author_login: admin
author_email: contact@khal.web.id
author_url: http://khal.web.id
wordpress_id: 896
wordpress_url: http://khalidadisendjaja.web.id/?p=896
date: '2014-02-19 14:55:27 +0700'
date_gmt: '2014-02-19 07:55:27 +0700'
categories:
- Internet &amp; Tech
tags: []
comments: []
---
**Sebelum NodeJS-nya di-upgrade, cek dulu versi yang ter-install,**

 
    $node -v
    v0.10.12

**Bersih2x NPM Cache,**

 
    sudo npm cache clean -f

**Install "n" [Node binary manager](https://github.com/visionmedia/n) ,**

 
    sudo npm install -g n

**Upgrade Node ke versi terakhir,**

 
    sudo n 0.10.26

**Atau bisa langsung upgrade ke versi stable terakhir,**

 
    sudo n stable

**Cek versi node yg telah terupgrade,**

 
    $node -v
    v0.10.26