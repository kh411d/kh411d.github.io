---
date: 2014-02-19T07:55:27+07:00
tags: ["nodejs","tutorial"]
title: '[NOTE] Upgrade NodeJS lokal via NPM dan "n" module'
url: /2014/02/19/note-upgrade-nodejs-lokal-via-npm-dan-n-module/
image: /images/nodejscover.jpg
---

**Sebelum NodeJS-nya di-upgrade, cek dulu versi yang ter-install,**

```bash
$ node -v
v0.10.12
```
**Bersih2x NPM Cache,**
```bash 
$ sudo npm cache clean -f
```
**Install "n" [Node binary manager](https://github.com/visionmedia/n) ,**
```bash 
$ sudo npm install -g n
```
**Upgrade Node ke versi terakhir,**
```bash
$ sudo n 0.10.26
```
**Atau bisa langsung upgrade ke versi stable terakhir,**
```bash
$ sudo n stable
```
**Cek versi node yg telah terupgrade,**
```bash
$ node -v
v0.10.26
```