---
layout: post
status: publish
published: true
title: IE dan jpeg MIME TYPE
author:
  display_name: Khalid Adisendjaja
  login: admin
  email: contact@khal.web.id
  url: http://khal.web.id
author_login: admin
author_email: contact@khal.web.id
author_url: http://khal.web.id
wordpress_id: 117
wordpress_url: http://www.khalidadisendjaja.web.id/?p=117
date: '2009-11-19 15:26:49 +0700'
date_gmt: '2009-11-19 08:26:49 +0700'
categories:
- Internet &amp; Tech
tags: []
comments:
- id: 466
  author: Aianamie
  author_email: gracious.ayanamie@gmail.com
  author_url: http://www.rahminovita.wordpress.com
  date: '2010-04-22 14:06:39 +0700'
  date_gmt: '2010-04-22 07:06:39 +0700'
  content: huehehe betul betul betulll.... :D
- id: 12834
  author: Eda
  author_email: 1z4jgolo@mail.com
  author_url: ''
  date: '2014-11-26 01:07:19 +0700'
  date_gmt: '2014-11-25 18:07:19 +0700'
  content: Well, apparently not. I've made some quick tests with a PNG file of which
    I ceganhd the extension to BMP. Firefox 3.5, Opera 10 and Chrome 3, all return
    the mime type as being image/bmp. Surprisingly, the browser you despise the most,
    Internet Explorer 6, reports a image/x-png mime type. Yeah, image/x-png, another
    mime type for you  , but at least it's PNG.Anyway, my main point was that I could
    upload a PY file with an image mime type, by using cURL or whatever and you won't
    even know. But, then again, this is a Python application, so uploading PY files
    probably don't matter, but in PHP applications, and I'm sure you know that, an
    uploaded PHP file means great trouble.I'm wondering if Python has any library
    that guesses a file's mime type by reading the actual bytes. PHP has such a library
    called fileinfo. That would be almost proper validation.
---
[![](http://www.khalidadisendjaja.web.id/wp-content/uploads/2009/11/lg_noie_6-296x300.jpg "lg_noie_6")](http://www.khalidadisendjaja.web.id/wp-content/uploads/2009/11/lg_noie_6.jpg)Harus nya IE uth ga di pake2x lagi ya .... sumpeh deh.  
 Hari ini gw menemukan keganjilan, entahlah ... bugs kaleee ... ketika meng-upload file jpeg dari local kompi, bukannya MIME yang terdeteksi harusnya image/jpeg menurut RFC1341 eh malah bikin mime sendiri image/pjpeg, yang menyebakan form tidak bisa valid, hanya karna hal tersebut, ya udah deh validasi gw tambahin image/pjpeg, ternyata untuk beberapa file jpg aja.

IE oh IE life would be more easier without you (hhmm ... so how can I download Firefox?#@$)

wkwkwkwkwk