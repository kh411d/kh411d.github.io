---
date: 2011-03-03T08:09:05+07:00
tags:
- facebook
- tutorial
title: Two ways to Login or Authenticate using Facebook JS SDK Dialog box
url: /2011/03/03/two-ways-to-login-or-authenticate-using-facebook-js-sdk-dialog-box/
image: /images/facebookdev.jpg
---

There is two easy way to authenticate a user with Facebook JS SDK, 

Using FB.UI,
 
    FB.ui(
        {
            method: 'oauth',
            display:'iframe',
            perms:APP_EXT_PERMISSIONS
        },
        function(response) {
            if(response.session) {
                console.dir(response);
                if(redirectURL) location.href = redirectURL;
            }
        }
    );

Using FB.DIALOG,

    FB.login(function(response) 
        {
            if (response.session) {
                if (response.perms) {
                    //Logged and Permission Granted
                    if(redirectURL) location.href = redirectURL;
                } else {
                    //Logged and Permisssion NOT Granted
                    if(redirectURL) location.href = redirectURL;
                }
            } else {
            alert("Only Authorized User can use this Application!");
                //Not Logged
            }
        }, 
        {
            perms: APP_EXT_PERMISSIONS
        }
    );

> FB.UI dialog can use an iframe or a popup window, in an iframe, you need to set the cookie by your self to create a facebook session. 

> FB.dialog can only use a popup window, and cookie will be created automatically as your user granted the application.