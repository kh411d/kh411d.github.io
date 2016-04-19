---
layout: post
status: publish
published: true
title: 'Getting People Likes and Comments from facebook comment post '
author:
  display_name: Khalid Adisendjaja
  login: admin
  email: contact@khal.web.id
  url: http://khal.web.id
author_login: admin
author_email: contact@khal.web.id
author_url: http://khal.web.id
excerpt: A simple way to know people likes and comment on your post or other people
  post is through Comment Graph Api, you will need an access token to use it, this
  might be useful when you want to count the total of people who likesyour post.
wordpress_id: 236
wordpress_url: http://khalidadisendjaja.web.id/?p=236
date: '2011-03-15 14:19:33 +0700'
date_gmt: '2011-03-15 07:19:33 +0700'
categories:
- Internet &amp; Tech
tags: []
comments:
- id: 4088
  author: Dee. *Ditya Tya* (@miss_deetya)
  author_email: miss_deetya@twitter.example.com
  author_url: http://twitter.com/miss_deetya
  date: '2014-02-20 15:16:25 +0700'
  date_gmt: '2014-02-20 08:16:25 +0700'
  content: "Halo pak Khalid salam kenal :) saya baru seminggu ini menemukan blog bapak
    ini, dan hari ini baru sedikit 'ubek2' isinya....ijin baca2 ya pak :D  bagus2
    isinya..\r\n\r\nUntuk fbid, mohon dijelaskan lagi pak, saya kurang paham...link
    di atas itu dicoba atau bagaimana ya pak? Terima kasih..."
---
A simple way to know people likes and comment on your post or other people post is through Comment Graph Api, you will need an access token to use it, this might be useful when you want to count the total of people who likesyour post.

Every post on your News Feed (Photos, Photo Album, Video, Status, notes) will have an fbid that you can use it for the Comment Graph Api, take a look with firebug for fbid if you want to check it.

test that fbid ,

 
    <pre lang="html">//Getting All Comment Detail and items
    https://graph.facebook.com/[fbid]/?access_token=xxxxxxxxxxxxxxxxxxxxxxxxxx
    
    //Getting People who likes the post
    https://graph.facebook.com/[fbid]/likes/?access_token=xxxxxxxxxxxxxxxxxxxxxxxxxx

So everytime you make some simple quiz on facebook that required people to like or comment on participant post, now you can check it with the graph api.