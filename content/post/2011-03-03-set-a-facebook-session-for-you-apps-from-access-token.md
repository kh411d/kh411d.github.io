---
date: 2011-03-03T08:52:36+07:00
tags:
- facebook
- tutorial
title: Set a facebook session app from access token
url: /2011/03/03/set-a-facebook-session-for-you-apps-from-access-token/
image: /images/facebookdev.jpg
---

In some situation you will want to create a facebook session for your app, for example you get the `code` query string after user granted your app, now you can construct the url like below,
 
    https://graph.facebook.com/oauth/access_token?client_id=YOUR_APP_ID&redirect_uri=YOUR_URL&client_secret=YOUR_APP_SECRET&code=THE_CODE_FROM_ABOVE

And then you need to construct session variables base from the access token, these are functions that might help you,

 
    //Build your session variables
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


Usage,

    $accessToken = file_get_contents("https://graph.facebook.com/oauth/access_token?client_id=YOUR_APP_ID&redirect_uri=YOUR_URL&client_secret=YOUR_APP_SECRET&code=THE_CODE_FROM_ABOVE");

    //get session variables
    $params = generateSessionVars($accessToken);
    
    //SET COOKIE DIRECTLY TO BE USED BY PHP SDK
    $facebook->setSession($params);

The php-sdk will identify whether the session is set.