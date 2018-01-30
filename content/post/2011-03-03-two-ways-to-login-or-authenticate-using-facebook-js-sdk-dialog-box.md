---
categories:
- Internet &amp; Tech
date: 2011-03-03T15:09:05Z
date_gmt: 2011-03-03 08:09:05 +0700
tags: []
title: Two ways to Login or Authenticate using Facebook JS SDK Dialog box
url: /2011/03/03/two-ways-to-login-or-authenticate-using-facebook-js-sdk-dialog-box/
---

Two easy way to have your app users get authenticate with Facebook JS SDK,  
 you may use FB.UI or FB.LOGIN, as example below,

Using FB.UI,

 
    <pre lang="javascript">FB.ui(
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

 
    <pre lang="javascript">FB.login(function(response) {
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
    }, {
    perms: APP_EXT_PERMISSIONS
    });

For your notes, that FB.UI can set the dialog as an iframe or a popup window, if set in iframe you need to set the cookie by your self to make a facebook session. FB.dialog can only set as a popup window, and cookie will be created automatically as your user granted the application.