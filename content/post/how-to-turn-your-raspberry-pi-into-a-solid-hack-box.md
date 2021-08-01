+++
author = ""
comments = false
date = 2021-08-01T08:00:00Z
draft = true
image = "/images/kaliraspi.jpg"
share = false
tags = ["tutorial", "hacking", "raspberrypi", "kali", "linux"]
title = "How to turn your Raspberry Pi into a solid hack box"
url = "/2021/08/01/how-to-turn-your-raspberry-pi-into-a-solid-hack-box"

+++
Have you ever been insecure while you are using any public WIFI? Did you suspect someone sniffing on your network, stealing your credential, phishing your network?

All of these might happened if you're using any WIFI connection in a coffee shop, a cafe, a coworking place, in a conference room, on your own office, or maybe in your neighborhood.

Of course, you can prevent this by using a VPN on a public network, but sometimes it just can't work, or maybe you are just too cheap for that expensive VPN subscription. If this happened, this Raspberry Pi (RPi) hack box could be a low-cost alternative to protect you from cyberattacks which might come in handy another day.

### So let's get started

The RPi that I'm going to use is the **_1st gen model B version_**. Yeah, I know it's 2021, so why not the 4th version. It's an advantage that the 1st gen doesn't need a lot of power to turn it on, so you can plug it into a laptop, power bank, phone charger, or maybe even the phone itself. The current that comes from those appliances probably these days would be around 3 Ampere that was more than enough.

![](/images/raspi1bheatsinkedimax.jpg)

I'm using a 16Gb sd card, add two heatsinks because of overclocking, and a wireless adapter from Edimax (EW-7811Un) because the 1st gen doesn't have any built-in wifi yet, so you need one.

The last thing you need to get is the [Kali Linux ARM image from their site](https://www.kali.org/get-kali/#kali-arm), flash the image to the sd card either using `dd` _(careful erasing your own laptop drive)_ or an app such as Etcher just to be safe. The size of the image is quite big 1 to 2Gb so it would take a longer time to flash, please be patient.

You can read how to the flashing from the Kali Linux site, it's explained very well. Just follow the step-by-step instructions.

The current kernel version by the time this article is written, `5.4.83-Re4son`

### Configure the Autologin

If you're on Linux PC then you don't need a keyboard for the RPi, but if you're on Mac or Windows then you'll need one. 

I'm going to use the RPi as a headless Linux box so there is no need for a monitor, so we need to set up an autologin and enabling the SSH. So every time you're in a new public space you're going to rely on your phone WIFI hotspot for the first time, you need to add your phone hotspot SSID to the RPi to be auto-logged in, from there you can register a new public SSID to the RPi and switch the network.