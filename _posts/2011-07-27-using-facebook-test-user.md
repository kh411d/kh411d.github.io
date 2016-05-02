---
layout: post
title: Using Facebook Test User
date: '2011-07-27 15:59:35 +0700'
date_gmt: '2011-07-27 08:59:35 +0700'
categories:
- Internet &amp; Tech
tags: []
---
If you don't know what Facebook Test User is? you may check the documentation on [http://developers.facebook.com/docs/test\_users/](http://developers.facebook.com/docs/test_users/ "Facebook Test User Docs")

Test User is a Tool that could be a handy when you need to have some users to interact with your application, facebook currently provide this through Graph Api and you can easily try out with your app application id and secret. And you actually not need the facebook php-sdk you can use your own CURL class lib, you can use my php class on github <http://goo.gl/QRz1n>

Some Wrapper I've made,

 
    <pre lang="php">$acc = new Facebook_TestAccount($appID,$Secret,$app_access_token);
    
    //Create N User
    $acc->createMany($_REQUEST['n'],$parameter)
    
    //Delete All User created by App
    $acc->deleteAll()
    
    //Listing all user created by App Access Token
    $acc->access()

And some basic things like connecting user each other, edit a user, etc .  
 you can try the example on my github link above, the class is part of my plan to make a simple web app for facebook app administration like getting an insights, approving request, creating test user, etc.  
 anything that modify