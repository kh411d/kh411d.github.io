---
comments: true # set false to hide Disqus
date: 2016-05-16T00:00:00Z
image: /images/retroarchcover.jpg
share: true    # set false to hide share buttons
tags: ["gaming", "retroarch", "tutorial"]
title: How to retro gaming with RetroArch
url: /2016/05/16/how-to-retro-gaming-with-retroarch/
---

Lately, I've been amazed by Retroarch, this is not like any other emulators, it can be played on any platform i.e. Linux, Windows, Blackberry, OSX, RaspberryPi, Android, iOS and also Xbox, Playstation, GameCube, Wii, 3DS. The cross-platform emulator is awesome, isn't it?

That's not all, RetroArch can emulate a lot of gaming console starting from Atari, SEGA, Nintendo, GameCube, NDS, PSX, MAME, or even a game watch. It's kinda like a bucket with a lot of game consoles inside.

But surely there will be some cons, it's not a plug and play emulator, the user has to do some configurations before playing, but it's worth it, believe me. The developers put a great effort into this, :ramen: for them. I currently have this installed on my android phone and my RaspberryPi box.

So I made a short guide on how to config the system. But first [click here to download Retroarch from their site](http://www.retroarch.com).  

Seconds, you need a ROM, it's the game file that gets extracted from SEGA/Nintendo cartridge, Playstation CD, or anything console. ROM can only be read by console emulators such as Retroarch.  

There are so many websites providing free ROMs, just search for this keyword "super Mario SNES ROM" in any search engine, for the sake of this guide please download only SNES ROM, after that, you may rename the file with `supermario.zip` (it's optional)

##### Core Engine
   
The core is the most important thing that emulates the game console, from the **main menu**, choose `Online Updater > Core Updater > Nintendo - SNES / SFC (Snes9x)`, where you're going to download a SNES core, feel free to download any other core you want.

##### Overlays
   
In this part, you're going to download some gamepad overlays. Go back to **main menu** and then choose `Online Updater > Update Overlays`, it will download all the overlays needed for the ROMs.

Now you're going to set a SNES gamepad overlay, go to **settings menu** and then choose `Onscreen Display > Onscreen Overlay > Overlay Preset > gamepads > snes > sens.cfg`   

##### ROMs directory
   
After you got the ROM, go to **settings menu**, and then choose `Directory > File Browser`, choose the directory where your downloaded ROMs is located. 

##### Yay! Time for retro gaming

Back to **main menu**, load the game `Load Content > Start directory > supermario.zip > Load Archive`, if you have more than one SNES cores, you'll need to choose one. If it's not, then the game will start immediately.   

![RetroArch retro gaming](/images/screenshotsnessupermairoretroarch.jpg)
