---
categories:
- Internet &amp; Tech
date: 2011-07-06T20:38:44Z
date_gmt: 2011-07-06 13:38:44 +0700
tags: []
title: Facebook PHP SDK v3.01 now free cookies
url: /2011/07/06/facebook-php-sdk-v3-01-now-free-cookies/
---

Now the new SDK has been released, on the beginning of june 2011 I guess.

Well the main different from v3.00 is? Now the CSRF state is rely on persistent data which is a session named "state" and not using cookie anymore!, and if you see on the constructor , it checks whether session already start yet, giving an option to start the session.

Feel free to update, as usual the code rely on [github](https://github.com/facebook/php-sdk/)