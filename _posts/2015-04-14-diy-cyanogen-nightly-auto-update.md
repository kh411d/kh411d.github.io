---
layout: post
status: publish
published: true
title: DIY Cyanogen nightly Auto Update
author:
  display_name: Khalid Adisendjaja
  login: admin
  email: contact@khal.web.id
  url: http://khal.web.id
author_login: admin
author_email: contact@khal.web.id
author_url: http://khal.web.id
wordpress_id: 1092
wordpress_url: http://khalidadisendjaja.web.id/?p=1092
date: '2015-04-14 07:20:00 +0700'
date_gmt: '2015-04-14 00:20:00 +0700'
categories:
- Internet &amp; Tech
tags:
- google
- android
- CyanogenMod
- cyanogen
- oneplus
- cyandelta
comments: []
---
[![image](/images/wpid-wp-1428958109831.png "wp-1428958109831")](/images/wpid-wp-1428958109831.png) Instead of waiting and whining when will your OnePlus One get an OTA update, you could just quickly fetch the latest nightly build from CyanogenMod.org download page, **just be careful not to download ROM that's not suitable with your phone or else it will bricked your phone**, as an example if your phone is OnePlus One, Bacon is the only ROM that you need to download.

Before going further, your phone need to be rooted and have one of these two recovery software installed, either ClockworkMod or TWRP recovery.

[spoiler title="How to Root and Unlock your device"]

- You need [Fastboot and ADB](http://www.androidcentral.com/installing-android-sdk-windows-mac-and-linux-tutorial) installed on you PC
- 1. After Fastboot and ADB installed, go to your terminal windows, and do this next step
  2. ./fastboot oem unlock (You can skip this step if your phone’s bootloader is already unlocked).
  3. ./fastboot flash recovery . Image file should be the TWRP recovery image.
  4. ./fastboot reboot

[/spoiler]

> **After one of the recovery above installed, make sure that you create a Nandroid backup from the recovery system and copy that backup to your external drive or PC.**

Don't forget to download the Gapps if you still want to use Google Play and friends. You may download the latest signed zip on [CyanogenMod.org](http://wiki.cyanogenmod.org/w/Google_Apps) websites.

The CM version of Gapps that you're about to download must be the same with the ROM version that you're going to flash/install, or else you might having a bootloop when rebooting your phone.

OK then here comes the magic where CyanDelta lets you update your CyanogenMod ROM by downloading just a small file (about 10 MB) instead of a big full zip file (about 200 MB) each time.

You may [install CyanDelta updater](https://play.google.com/store/apps/details?id=com.cyandelta&feature=nav_result#?t=W251bGwsMSwxLDMsImNvbS5jeWFuZGVsdGEiXQ..) from playstore or check their website at [www.cyandelta.com](http://www.cyandelta.com).

Now that you have 2 downloaded files, the CM12 ROM zipped and CM12 Gapps signed zipped. Copy these files to your phone.

Open the CyanDelta updater and then import your ROM file to CyanDelta,

[![image](/images/wpid-wp-1428957353905.jpeg "wp-1428957353905")](/images/wpid-wp-1428957353905.jpeg)

If there is an available update, please do update the file first before installing the ROM.

If the installation takes longer than it should, turn off your phone, reboot into recovery mode, wipe data/factory reset, and then reboot system.

After all installation step is finished, you may reboot once again into recovery mode and then install the Gapps signed zip file, reboot system.

Enjoy your nightly ROM, don't forget to install CyanUpdater once again after a factory reset.