---
date: 2011-07-27T08:59:35+07:00
tags:
- facebook
- tutorial
title: Using Facebook Test User
url: /2011/07/27/using-facebook-test-user/
image: /images/facebookdev.jpg
---

If you don't know what Facebook Test User is? you may check the documentation on [http://developers.facebook.com/docs/test\_users/](http://developers.facebook.com/docs/test_users/ "Facebook Test User Docs")

Test User is a tool that could be handy when you need to have some users to interact with your application, facebook currently provide this through Graph Api. 

I've made this simple php class consuming only facebook test account API, you may copy-paste from [github](https://github.com/kh411d/PHP-Facebook-App-Admin/blob/master/lib/Facebook_TestAccount.class.php)

Some example,

    $acc = new Facebook_TestAccount($appID,$Secret,$app_access_token);
    
    //Create N User
    $acc->createMany($_REQUEST['n'],$parameter)
    
    //Delete All User created by App
    $acc->deleteAll()
    
    //Listing all user created by App Access Token
    $acc->access()
