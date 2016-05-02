---
layout: post
title: 'Getting People Likes and Comments from facebook comment post '
date: '2011-03-15 14:19:33 +0700'
date_gmt: '2011-03-15 07:19:33 +0700'
categories:
- Internet &amp; Tech
tags: []
---
A simple way to know people likes and comment on your post or other people post is through Comment Graph Api, you will need an access token to use it, this might be useful when you want to count the total of people who likesyour post.

Every post on your News Feed (Photos, Photo Album, Video, Status, notes) will have an fbid that you can use it for the Comment Graph Api, take a look with firebug for fbid if you want to check it.

test that fbid ,

 
    <pre lang="html">//Getting All Comment Detail and items
    https://graph.facebook.com/[fbid]/?access_token=xxxxxxxxxxxxxxxxxxxxxxxxxx
    
    //Getting People who likes the post
    https://graph.facebook.com/[fbid]/likes/?access_token=xxxxxxxxxxxxxxxxxxxxxxxxxx

So everytime you make some simple quiz on facebook that required people to like or comment on participant post, now you can check it with the graph api.