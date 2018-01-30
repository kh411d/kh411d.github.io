---
categories:
- Internet &amp; Tech
date: 2011-03-15T14:19:33Z
date_gmt: 2011-03-15 07:19:33 +0700
tags: []
title: 'Getting People Likes and Comments from facebook comment post '
url: /2011/03/15/getting-people-likes-and-comments-from-facebook-comment-post/
---

A simple way to know people likes and comment on your post or other people post is through Comment Graph Api, you will need an access token to use it, this might be useful when you want to count the total of people who likesyour post.

Every post on your News Feed (Photos, Photo Album, Video, Status, notes) will have an fbid that you can use it for the Comment Graph Api, take a look with firebug for fbid if you want to check it.

test that fbid ,

 
    <pre lang="html">//Getting All Comment Detail and items
    https://graph.facebook.com/[fbid]/?access_token=xxxxxxxxxxxxxxxxxxxxxxxxxx
    
    //Getting People who likes the post
    https://graph.facebook.com/[fbid]/likes/?access_token=xxxxxxxxxxxxxxxxxxxxxxxxxx

So everytime you make some simple quiz on facebook that required people to like or comment on participant post, now you can check it with the graph api.