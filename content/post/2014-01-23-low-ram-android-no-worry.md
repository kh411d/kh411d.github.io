---
categories:
- Internet &amp; Tech
date: 2014-01-23T13:40:58Z
date_gmt: 2014-01-23 06:40:58 +0700
tags: []
title: Low RAM Android? No Worry at All
url: /2014/01/23/low-ram-android-no-worry/
---

[![lowramandroid](/images/lowramandroid.jpg)](/images/lowramandroid.jpg)Ever think to change my old android smartphone into a much better one, however the android market seems to change very fast, in every years you will see how many new android device being shipped with their new technology, hardware, and new operating system, which is IMHO I don't think that the enhancement they made, is having a big difference in a way I use my phone. So I somehow manage to wait for another 3 or 5 years for replacing my devices.

Over time years passed, I will need to update phone operating system that will take a lot of hardware resources especially RAM/Memory consumption. I still using **Nexus S ( 384mb RAM )** as my current daily use phone, connected to my Pebble smartwatch, and CyanogenMod 11 (KitKat 4.4.2) ROM installed, I'm not using original Android ROM since google stop OTA update after JellyBean (4.3.1).

In this post I'm going to share my experience and tips how I manage to use a very small RAM usage on Nexus S. You will need to download some nifty little app from Play Store and tweaking some of your android settings,

1. **Use a Memory Management app such as Memory Booster to monitor your RAM usage.**You may look into the PlayStore for this kind of app, there are so many options, I currently use one from **_[Imoblife. Inc](https://play.google.com/store/apps/details?id=imoblife.memorybooster.lite&hl=en)_**, it's quite reliable and it could monitor running background service that were not listed on default setting of android App Management. This app also has a simple shortcut to free-ing RAM directly from notification bar, very simple.
2. **Turn off Google Now feature.**Actually I like this feature, good enough to provide you with realtime information such as traffic, weather, etc based on your realtime position, time, and condition. However it really took a lot of memory usage bcoz of all information is delivered in realtime process.  
 You can turn Google Now on or off from within the Google Search app: 
  1. Open the Google Search app.
  2. Touch ![](https://storage.googleapis.com/support-kms-prod/SNP_2918040_en_v1) **Menu > Settings > Google Now**. You may need to lower the keyboard to see the Menu icon.

If you have a Nexus 5 and want to turn Google Now on or off, touch & hold empty space on any Home screen, then touch **Settings > Google Now**.
3. **Turn off Google reporting location system (this is required to be turned on when you are using Google Now or Maps)**In addition to using your GPS, Android collects location data from 3G Tower or nearby Wi-Fi routers. Scanning for Wi-Fi this way uses up RAM and your battery life. To turn off location reporting, go into **Settings > Location > Google Location Reporting** and turn both Location Reporting and Location History off. Please note that this will also cause your Google Now, Maps and ADM find my android no longer can be used. So use this tip at your own discretion.
4. **Don't use any application widget.**App widget might extremely drain your RAM and also your battery life, considering not to use lot of widget or don't use any widget at all is a best way to keep your memory usage low. You may check with memory booster if you wanna know how much memory is used by all widgets.
5. **Use default launcher from Android stock only.**Having custom launcher is great but how big they eat your RAM is also great too. I know they may advertised with lite memory usage, slick, fast but actually, it take additional RAM usage no matter how small memory being used by custom launcher.
6. **Hibernate some running service that you don't actually use.**You might want to hibernate (long sleep but not dead) some of your apps that always running in the background eating your RAM and battery life, [_**Greenify**_](https://play.google.com/store/apps/details?id=com.oasisfeng.greenify&hl=en) is the right app to do this job, the app itself is not a task killer or disabler, it doesn't "freeze" apps. The apps that Greenify hibernates are still usable if you want to switch to them, and you can still pass data to them as though they were running.  
 Once installed, simply add the applications you want Greenify to hibernate when they move to the background, and let the app do its thing. At any time you can see the apps that have been hibernated, the apps that are running in the background, and any pending apps that Greenify will manage when you're finished using them. Greenify comes with free and donation app, free app can not hibernate system service.
7. **Disable Google background Service that always running without your consence.**Somehow while you monitoring your RAM usage you see a system background service such as Google Backup Transport that always running in a background eating lot of RAM even you're not using Google backup feature. Take a look at [Disable Service](https://play.google.com/store/apps/details?id=cn.wq.disableservice) app, this app helps to disable services running in background! _(Root access needed)._ You can install this app on any device running Android version **2.2** or higher.  
 When opening app you can see a screen displaying all the services running and not running. You can see two tabs **General Apps** the one installed by user and **System Apps** that are used by System Applications. Use this app at your own risk, coz not all service is ok to be disabled, you may want to read this thread ( **http://forum.xda-developers.com/showthread.php?t=2455525** ) before using it.

I'm having a good result when applying all of those step above and I can manage about 100mb free RAM on my Nexus S. I don't do gaming on my phone and I'm not using so many social network application, I only use Twitter, Path and Foursquare installed on my phone and still have lot of free memory. Just Try it, there will be a big difference.