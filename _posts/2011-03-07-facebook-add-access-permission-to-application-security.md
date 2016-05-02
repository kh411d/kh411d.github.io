---
layout: post
title: Facebook add access permission to Application Security
date: '2011-03-07 15:45:37 +0700'
date_gmt: '2011-03-07 08:45:37 +0700'
categories:
- Internet &amp; Tech
tags: []
---
Sometime when you made some apps, there were another user that only want to check about the insight of the apps, or maybe just want to test the apps, on the old days you might have to give all access to the apps from www.facebook.com/developer.

These day , facebook make a flexibility to define access permission for user that want to check your apps, those  
 permissions are?

I'm trying to explain in a simple way,

 Access\\Feature Technical Settings  
 (facebook.com/developer) Manage users Insights  
 (facebook.com/insights) Advertise Reset  
 App Secret Delete App Sandbox Mode Need Verification Administrator o o o o o o o o Developer o x o x x x o o Tester x x x x x x o x Insights x x o x x x x oSo if you see the table above, adding users to your apps, only works if you have a permission as an  
 administrator, an insight user cannot view the apps when on sandbox mode, but the tester can and without any  
 verification to test it.

Ok thats it , hope it help, if I'm doing wrong here please let me know will ya.