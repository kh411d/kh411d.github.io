---
comments: true # set false to hide Disqus
date: 2018-01-25T00:40:18+07:00
image: /images/arch-screenfetch.png
share: true    # set false to hide share buttons
tags: ["macos", "archlinux","linux"]
title: Rusty Macbook Air getting new Air from Archlinux
---

Today I accidentally deleted my primary OSX partition from my very old MacBook air 4,2 (2011) with the last installed os was el Capitan. From the beginning, I just want to give my MacBook some extra space but it turns out cleaning all the HDD ...LOL, I seriously don't know how in the hell this could happen, this is a lesson for not to clean your HDD in the middle of the night.

And then I follow up the step from the Apple website on how to reinstall OSX, turns out that I have to download a 10Gb update including el Capitan. 

# Whaaa whaa whaaaaattttt!!!

Without a doubt, I immediately cancel the download, had crossed my mind to get a Linux OS. So many distros can be installed, googled around and I found that Archlinux is a better option because of its crowded community, simplicity, and support for many file systems. And also I like how ArchLinux define simplicity,

> without unnecessary additions or modifications 

much more customizable by your needs, imagine it as one big playground of LEGO blocks for the operating system. You only need a 500Mb Archlinux Iso to get this done, Compare with 10Gb download and endless waiting.

I'd like to share my experience starting from installing Archlinux and get started with Archlinux, me myself is not a Linux power user, I do a lot of googling to get through the installation, so here I'll explain all of my findings.

#### Get the ISO forget the Archboot

I'd like to have something such as ubuntu light GUI that will guide you through the installation step, so then I found Archboot, been trying to install Archlinux from Archboot USB bootdisk several times with no luck so it's just wasting my time, it seems this arch boot iso is outdated, I gave up.
It would be better if you could just use the iso that you can download here [https://www.archlinux.org/download/](https://www.archlinux.org/download/)

#### Boot to Arch ISO

1. [Download the iso](https://www.archlinux.org/download/) flash it to your usb disk with dd command or any software, check this great post of [raspberrypi installation](https://www.raspberrypi.org/documentation/installation/installing-images/mac.md) for reference.
2. You may need a usb-ethernet dongle to connect with the internet, or some people using their cellphone internet tether through usb cable.

Plug in your USB bootdisk and hold ‘alt/option’ button while your system boots up, choose the USB to boot from.

#### Partition

After boot system is up, check your available drive,

```
$ lsblk
```

Delete all partitions on your ssd, and then create 4 partitions, these are partitions from my current installation,

```
$ lsblk
NAME MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda    8:0    0  113G  0 disk 
├─sda1
│      8:1    0    1G  0 part /boot
├─sda2
│      8:2    0  512M  0 part [SWAP]
├─sda3
│      8:3    0   32G  0 part /
└─sda4
       8:4    0 79.5G  0 part /home
```

As you can see my boot partition is 1G, this was actually unintended, everything could go wrong if you did this in the middle of the night. 256Mb should be enough for /boot partition. 

```
Disk: /dev/sda
              Size: 113 GiB, 121332826112 bytes, 236978176 sectors
          Label: gpt, identifier: F17EF130-xxxx-xxxx-xxxx-xxxxxxxxxxxx

    Device            Start         End     Sectors    Size Type
    /dev/sda1          2048     2099199     2097152      1G EFI System          
    /dev/sda2       2099200     3147775     1048576    512M Linux swap
    /dev/sda3       3147776    70256639    67108864     32G Linux root (x86-64)
    /dev/sda4      70256640   236978142   166721503   79.5G Linux home

```

I'm always keep this url open while partitioning [cgdisk-walkthrough](https://www.rodsbooks.com/gdisk/cgdisk-walkthrough.html)

```
# cgdisk /dev/sda
```

After you're done, format and mount your newly created partition, File system root **/** inside the terminal belongs to USB stick, while everything mounted inside **/mnt** is the target media AKA your SSD.

```
# mkfs.vfat -F32 /dev/sda1
# mkswap /dev/sda2
# mkfs.ext4 /dev/sda3
# mkfs.ext4 /dev/sda4
# mkdir /mnt/boot && mount /dev/sda1 /mnt/boot
# mkdir /mnt/home && mount /dev/sda4 /mnt/home
# mount /dev/sda3 /mnt
# swapon /dev/sda2
```

#### Installation

```
# pacstrap /mnt base base-devel
# genfstab -U -p /mnt >> /mnt/etc/fstab
```

Modify fstab configuration for SSD drive type, this is important, do not skip.

```
# nano /mnt/etc/fstab
```

add additional parameters,

```
rw,relatime,data=ordered,discard
```

Mine will look like this,

```
# /dev/sda3
UUID=b532cc5e-70c4-431c-80e5-bd9d40440606   /           ext4        rw,relatime,data=ordered,discard    0 1

# /dev/sda4
UUID=d5a039d9-c08e-4b26-8e12-9e38bec1fd46   /home       ext4        rw,relatime,data=ordered,discard    0 2
```

#### Connect the internet

If you're using ethernet cable or usb cable, you may check your network interface with this, 

```
# ip link
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: wlp2s0b1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DORMANT group default qlen 1000
    link/ether 10:40:f3:8c:30:f4 brd ff:ff:ff:ff:ff:ff
```

My interface is **wlp2s0b1**
```
# dhcpcd wlp2s0b1
# ping google.com
```

If you can use WiFi, connect it with this command, 
```
# wifi-menu
```


#### System Configuration

```
# arch-chroot /mnt /bin/bash 
# echo archer > /etc/hostname  #Your hostname
# ln -s /usr/share/zoneinfo/Asia/Jakarta /etc/localtime 
# hwclock --systohc --utc 
```

```
# nano /etc/local.gen
```

Uncomment UTF8 locale,
```
#en_SG ISO-8859-1
en_US.UTF-8 UTF-8
#en_US ISO-8859-1
```

```
# locale-gen
# echo LANG=en_US.UTF-8 > /etc/locale.conf
```

Add user account,
```
# useradd -m -g users -G wheel -s /bin/bash yourself && passwd yourself
```
Change **yourself** to your liking.

Give yourself sudo rights,
```
# nano /etc/sudoers # uncomment wheel line
```

```
 %wheel ALL=(ALL) NOPASSWD: ALL
```

### The Bootloader

I'm not goin to dualboot this macbook so then I'm not gonna use GRUB nor REFIND for booting into the system, I'm gonna use [**systemd-boot**](https://wiki.archlinux.org/index.php/systemd-boot) to boot into archlinux,

```
# pacman -S dosfstools intel-ucode
# bootctl --path=/boot install
```

After the systemd-boot (gummiboot) installed, we need to add a boot entries for archlinux.

Create a file for boot entry within this directory path,
```
/boot/loader/entries/arch.conf
```

First you need to get your root "/" (/dev/sda3) PARTUUID,
```
# blkid -s PARTUUID -o value /dev/sda3
ed724519-29ca-4e08-b27a-b4852d310dee
```

Edit the arch.conf file add this entry, replace root PARTUUID with this one *ed724519-29ca-4e08-b27a-b4852d310dee*

```
title Arch Linux 
linux /vmlinuz-linux 
initrd /intel-ucode.img 
initrd /initramfs-linux.img 
options root=PARTUUID=ed724519-29ca-4e08-b27a-b4852d310dee rw quiet
```

And now lets tell the boot manager to use this arch.conf configuration,
```
# echo "default arch" > /boot/loader/loader.conf
```

Before rebooting, you may want to install some network tools,
```
# pacman install iw wireless_tools wpa_supplicant dialog
```

also install networkmanager and enable it using NetworkManager.service. [Read Arch wiki for more info](https://wiki.archlinux.org/index.php/NetworkManager).

You're done now for installation, lets reboot,
```
# exit
# umount -R /mnt
# sudo reboot // or systemctl reboot
```

# Post Installation

### Configure your wifi

You can use wifi-menu, netctl, dhcpd or anything to connect, here we try to use network manager,

```
$ sudo systemctl disable dhcpcd
$ sudo pacman -S networkmanager network-manager-applet
$ sudo systemctl enable NetworkManager
$ nmcli dev wifi connect <wifi-name> password <password>
```


### Install CPU tools
```
$ sudo pacman -S cpupower
$ sudo systemctl enable cpupower
```

Edit /etc/default/cpupower
```
# Define CPUs governor
governor='powersave'
```

### Sound Utilities

```
$ sudo pacman -S alsa-utils alsa-plugins
```

### Install Xorg

```
$ sudo pacman -S xorg acpid
$ systemctl enable acpid
```

### Install Desktop GUI

There is so many [desktop GUI](https://wiki.archlinux.org/index.php/desktop_environment#List_of_desktop_environments) that you may want to experience yourself, but [XFCE4](https://wiki.archlinux.org/index.php/xfce#Installation) is become my first choice because of speed and flexibility.

```
$ sudo pacman -S xfce4 xfce4-goodies
```

### Install Display Manager (User Login)
 
Same as desktop GUI, there is so many [display manager](https://wiki.archlinux.org/index.php/Display_manager) to experience yourself, as my choice fell to [LightDM](https://wiki.archlinux.org/index.php/LightDM)

```
$ sudo pacman -S lightdm lightdm-gtk-greeter-setting
$ systemctl enable lightdm.service
```

Now you're all set, reboot and enjoy your new Macbook Arch.
Things you may need to know, ArchLinux has a [community driven repository](https://aur.archlinux.org/) that you can download and build yourself or using some package manager such as **yaourt**, **pacaur**, or **trizen** for easy install. I'm not goin to explain all of these things it depends to your liking. I'll leave this to you to explore and have fun with it.