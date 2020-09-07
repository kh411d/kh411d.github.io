+++
author = ""
comments = true # set false to hide Disqus
date = "2016-05-16T00:00:00Z"
draft = false
image = "/images/retroarchgaming.jpg"
menu = ""       # set "main" to add this content to the main menu
share = true    # set false to hide share buttons
slug = "how-to-retro-gaming-with-retroarch"
tags = ["gaming", "retro","retroarch"]
title = "How to retro gaming with RetroArch"
url = "/2016/05/16/how-to-retro-gaming-with-retroarch/"
+++
I'm accidentally found this awesome stuff over the internet when I was googling about the super Mario game, a website called [Emuparadise](www.emuparadise.me/
) point me directly to [RetroArch website](http://www.libretro.com/index.php/home-2/). At first thought maybe it's just another kind of emulator that specific to just one console, a little bit curious so then I tried this emulator, surprisingly it can run on any platform such as Linux, Windows, Blackberry, OSX, RaspberryPi, Android, iOS and it can be installed on some gaming device such as Xbox, Playstation, GameCube, Wii, 3DS. The cross-platform emulator is awesome don't you think?

That's not all guys, RetroArch can emulate a lot of gaming console starting from Atari to Nintendo, so this RetroArch is like a container for much retro gaming console, all console in one app! How awesome that can be. But there will always be a downward when we tight different stuff into one bucket, ex. user will take a long time to configure the system for a specific console device. But it doesn't matter for me, because it's worth it, the developers put a great effort into this, beers for all. 

RetroArch is not a plug n play emulator, you need to configure it by yourself to make it work. And you need to download all the assets that are required by your own, such as emulator core, gamepad overlay, etc. Sounds hassle right, but believe me, it's not. Coz I'm here trying to explain How to use RetroArch to play your beloved super Mario bros on your mobile device. 

I'm using an android version of RetroArch, the same as the Ios version I think. So this will guide you on how to set up RetroArch on your mobile device. [You may download RetroArch from Playstore by clicking this link](https://play.google.com/store/apps/details?id=com.retroarch). After RetroArch is installed and running on your device you may follow this guide below,

1. **Downloading Core**
   
    A core is the emulator engine, go to "Main Menu" tab > "Online Updater" > "Core Updater", here you can pick any type of console emulator engine from atari to SNES, for the sake of this guide I will choose "SNES / Super Famicom (Snes9x Next)" so later we can play super Mario at the end.

2. **Update Database, Overlays, and Shaders**
   
    Go back to "Main Menu" tab > "Online Updater", and then click all of these three menus "Update Databases" (This updates the database files of games and emulators so when you scan for ROMs, RetroArch can automatically detect them.), "Update Overlays" (This is important because it will download all the gamepad overlay needed for the ROMs), and "Update GLSL Shaders" (To make old graphic look nice). Wait until all download is finished.

3. **Setting up your ROMs directory**
   
    Go to "Setting" tab > "Directory", you may see a list of directory configuration, choose > "File Browser Dir" and then pick the directory where will your ROMs will be located.

4. **Set a gamepad overlay**
   
    Go back to "Setting" tab > "Onscreen Overlay" > "Overlay Preset" > "gamepads" > "snes" then go click "snes.cfg", this will set a virtual gamepad for super nintendo rom.

5. **Download Super Mario Rom**
    
    There are so many websites providing free ROMs, but actually, I like this one EmuParadise, [Click here to download Super Mario ROMs](http://www.emuparadise.me/Super_Nintendo_Entertainment_System_(SNES)_ROMs/Super_Mario_All-Stars_+_Super_Mario_World_(USA)/35738-download), put downloaded ROM to where you set your ROMs directory before (Step 3).

6. **Yeay! Time for Retro gaming**   
     * Go to "Main Menu" tab, First you need to load the emulator engine click "Load Core" then pick "SNES/Super Famicom (Snes9x Next)" and then go back to the "Main Menu" tab. 
     * Lastly we will load the ROM, click "Load Content" > "Select File And Detect Core", then pick the super Mario ROM that you've just downloaded, and then pick "Load Archive With Core", if you have more than one emulator engine for SNES, you need to pick one. If it's not, then it will start the game immediately.   

![RetroArch retro gaming](/images/screenshotsnessupermairoretroarch.jpg)

At the game overlay, if you click the button with the RetroArch logo on it, you will be directed to the "Main menu" tab. At the most top, you will find a "Quick Menu" menu, here you can set a shader, config options for emulator engine, save state, load state, etc. "Quick Menu" menu only available if there is a game running.

Easy right? this is a simple setup just to get this app running, there's still a lot of configuration that you may explore, some config might crash your device but that's ok, reboot FTW haha. Enjoy the game guys, mind to buy a beer for the devs.


