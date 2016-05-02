---
layout: post
title: Getting Ready for IFRAME Facebook App based
date: '2010-10-28 13:58:22 +0700'
date_gmt: '2010-10-28 06:58:22 +0700'
categories:
- Internet &amp; Tech
tags: []
---
Ok this time you need to be ready for migrating your facebook apps to IFrame based apps, as it written on [Facebook Developer Roadmap](http://developers.facebook.com/roadmap) that facebook,  
 "We will stop allowing new FBML applications, but will continue to support existing FBML tabs and applications. Instead, we recommend using IFrames." at the End of 2010.

And then OAUTH 2.0 will required for new applications,  
 "We will remove the ability for new applications to use our old authentication mechanism, but will continue to support existing applications using our old method." at the End of 2010

Take a look at Facebook new [PHP-SDK](http://github.com/facebook/php-sdk/) on github, that might help your life easier.

Here we go then, I suppose you already know how to "set up a new application" , just go to <http://www.facebook.com/developer> ,

Important things you should not miss:  
 Go to "Website" Tab, fill in the Site Url with your callback url.  
 Go to "Facebook Integration" and then pick Iframe for canvas type

Use the new PHP-SDK,

 
    <pre lang="php">//instantiate object
    $facebook = new Facebook(array(
    'appId'  => APP_APPLICATION_ID,
    'secret' => APP_SECRET,
    'cookie' => true
    ));
    
    //Get Login Url for new user redirection
    
    $loginUrl = $facebook->getLoginUrl(array(
    //if you look at the SDK, "<strong>canvas</strong>" option wasn't there, this is why when user added your application
    //it keep redirected to your callback url
    '<strong>canvas</strong>'    => 1,
    //turn off the fbconnect option
    'fbconnect' => 0,
    )
    );
    
    //Check for user session, redirect to login url, if user hasn't already add your app
    if (!$facebook->getSession()) {
    //need to use of javascript location.href , for redirection all page
    echo "<script type='text/javascript'>top.location.href = '".$loginUrl."';</script>";
    }

Or maybe you want to make a bootstrap function for an easier call,

 
    <pre lang="php">define('EXT_PERMISSIONS','publish_stream,email,birthday');
    define('PAGE_CANVAS_URL', 'http://www.facebook.com/myfanpage');
    
    function bootstrap(){
      global $facebook;
      //Get Login Url for redirection if user not yet authorized your apps
       $loginUrl = $facebook->getLoginUrl(array('canvas' => 1,
    							     'fbconnect' => 0,
    							     'req_perms' => EXT_PERMISSIONS,
    							     'next' => PAGE_CANVAS_URL));
      //Check for facebook session , redirect to Login Url for unauthorized user
    	if (!$facebook->getSession()) {
    	   echo "<script type='text/javascript'>top.location.href = '".$loginUrl."';</script>";
    		exit;
    	}
      //Checking Permission , redirect if user hasn't yet approved the required extended permission
         list($permissions) = $facebook->api(array('method'=>'fql.query',
    								  'query'=>'SELECT '.EXT_PERMISSIONS.'
    										   FROM permissions
    										   WHERE uid = '.$facebook->getUser()
    								));
      foreach($permissions as $value){
          if(!$value){
    	     echo "<script type='text/javascript'>top.location.href = '".$loginUrl."';</script>";
    		 exit;
    	  }
      }
       return true;
     }
    
    bootstrap();


Thats it , hope it help.