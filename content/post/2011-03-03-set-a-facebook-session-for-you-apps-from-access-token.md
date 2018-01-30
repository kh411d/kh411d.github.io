---
categories:
- Internet &amp; Tech
date: 2011-03-03T15:52:36Z
date_gmt: 2011-03-03 08:52:36 +0700
tags: []
title: Set a facebook session app from access token
url: /2011/03/03/set-a-facebook-session-for-you-apps-from-access-token/
---

In some situation you will want to create a facebook session for your apps, for example you have a CODE  
 variable from facebook after user granting your application and then you fetch the access token like this way below,

 
    <pre lang="php">$accessToken = file_get_contents("https://graph.facebook.com/oauth/access_token?
         client_id=YOUR_APP_ID&redirect_uri=YOUR_URL&
         client_secret=YOUR_APP_SECRET&code=THE_CODE_FROM_ABOVE");

A session apps need these variables included (uid, access\_token, and sig) I believe that you already had the latest facebook PHP-SDK, "sig" is a signature for your cookie base on your App Secret, your need to create session variables by manually and then set that variables with "setSession" method on PHP-SDK.

These are functions that might help you,

 
    <pre lang="php">//Build your session variables
    function generateSessionVars($accessToken)
    {
    $e = explode('|',$accessToken);
    $s = explode('-',$e[1]);
    
    $params = array(
    'uid'=>trim($s[1]),
    'access_token' => trim($accessToken)
    );
    $params['sig'] = generateSignature($params,APP_SECRET);
    
    return $params;
    }
    //Generate session signature base on you App Secret
    function generateSignature($params,$secret) {
    
    // work with sorted data
    ksort($params);
    
    // generate the base string
    $base_string = '';
    foreach($params as $key => $value) {
    $base_string .= $key . '=' . $value;
    }
    $base_string .= $secret;
    
    return md5($base_string);
    }


Wrap it out,

 
    <pre lang="php">//get session variables
    $params = generateSessionVars($access_token);
    //SET COOKIE DIRECTLY TO BE USED BY PHP SDK
    $facebook->setSession($params);


If cookie created succesfully your PHP-SDK library could identify with getSession() method if session  
 is set or not.