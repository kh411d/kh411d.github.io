---
date: 2011-03-07T08:45:37+07:00
tags:
- facebook
- tutorial
title: Facebook add access permission to Application Security
url: /2011/03/07/facebook-add-access-permission-to-application-security/
image: /images/facebookdev.jpg
---

Sometime when you made some apps, there were another user who wants to check about the insight of the app, or maybe just want to test the apps, back then you might have to give all access to a user through www.facebook.com/developer.

These day facebook make a flexibility to define access permission per user,

I'm trying to explain in a simple way,

| Access | Technical Dashboard | Manage users | Insights Dashboard | Adv | Reset App Secret | Delete App | Sandbox Mode  
|---------------|---|---|---|---|---|---|---|
| Administrator | o | o | o | o | o | o | o |
| Developer     | o | x | o | x | x | o | o |
| Tester        | x | x | x | x | x | o | x |
| Insights      | x | x | o | x | x | x | o |
 
So if you see the table above, adding users to your apps, only works if you have a permission as an  administrator, an insight user cannot view the apps when on sandbox mode, but the tester can and without any  verification to test it.

Ok thats it , hope it help, if I'm doing wrong here please let me know.