---
categories:
- Internet &amp; Tech
date: 2011-09-13T14:40:34Z
date_gmt: 2011-09-13 07:40:34 +0700
tags: []
title: Twitter Age Gateway Workflow Design
url: /2011/09/13/twitter-age-gateway-workflow-design/
---

What I'm trying to do here is to explain as easy as possible how to make an age filtering for your twitter follower, as we know that twitter doesn't support any kind of filtering base on twitter user profile for following your twitter account.  
![](http://fbbhmublogcontest.think.web.id/tracker/174414662636405/tracker.png)  
 This could be useful when you're managing any adult or alcohol related twitter account that need legal attention to your follower for publishing related content.

Actually this could be done easily (not so easily if you're not a developer) by yourself, its required two process,

Daemon Process which is how your system monitoring the followers finding for unverified, blocked, or verified followers from database and twitter API (it will need your twitter username and password or a twitter OAUTH for authentication).

[![](/images/twitterAgeGateway_daemon2.png "twitterAgeGateway_daemon2")](/images/twitterAgeGateway_daemon2.png)

And Follower verifying process, where your follower go to refferral link gateway that included from DM that you sent to your follower for verifying process, follower will be redirected to web page that have form submission to confirm his/her age,gender, etc.Â After validation completed you may mark that follower as verified.

[](/images/twitterAgeGateway_verifying.png)[![](/images/twitterAgeGateway_verifying2.png "twitterAgeGateway_verifying2")](/images/twitterAgeGateway_verifying2.png)

Okay now is that for tools to make this happen, I'm gonna use PHP for development so here are some library that you might use :

- PEAR [System\_Daemon](http://pear.php.net/package/System_Daemon/) package, or maybe just create simple php script that make process id on background  
 - [TwitterOAuth](https://github.com/abraham/twitteroauth) Library, I'm gonna use Abraham Library  
 - Small PHP framework like [Silex](http://silex.sensiolabs.org) made from Symfony2 mantained by Fabpot  
 - Or maybe you want to use [Ephipany](https://github.com/jmathai/epiphany) you may bundle it with [Twitter-async](https://github.com/jmathai/twitter-async) both maintained by Jason Mathai

I'm gonna give my work for my next article,  
 So its to be continued ...