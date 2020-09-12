---
date: 2015-04-19T08:42:06+07:00
tags:
- cybersecurity
- clickjacking
- frame-busting
- telco
title: Ulah nakal ISP praktik clickjacking
url: /2015/04/19/ulah-nakal-isp-praktik-browser-frame-busting/
image: /images/framebusting.png
---

Beberapa ISP di indonesia tanpa konsumen sadari sebenarnya sangat sering melakukan praktik _clickjacking_ hampir di semua website yg konsumen kunjungi, alasan ISP melakukan hal ini tidak lain adalah penempatan iklan gratis dari ISP tersebut tanpa sepengetahuan si empunya website.

Lalu, bagaimanakah cara kerja _clickjacking_ ini? Ketika _user_ mengunjungi sebuah website misal "Forbes .com", ISP akan membungkus "Forbes .com" dalam sebuah _iframe_ yang lalu ditampilkan pada browser _user_, bagian luar iframe biasanya akan menampilkan baner iklan liar dari ISP tersebut.

![image](/images/wpid-img_20150419_144851.jpg "IMG_20150419_144851.jpg")

Ada juga cara iklan ISP yang lebih frontal lagi dengan cara _overlaying_ browser _user_ dengan sebuah ads dari ISP tersebut.

![image](/images/wpid-img_20150419_152923.jpg "IMG_20150419_152923.jpg")

Tentunya ada beberapa website yg telah menerapkan mekanisme untuk mencegah _clickjacking_, salah satunya adalah [Stackoverflow.com](http://stackoverflow.com).

![image](/images/wpid-img_20150419_151511.jpg "IMG_20150419_151511.jpg")

Ketika situs ini dibuka, situs akan menotifikasi konsumen adanya framing.

Di dalam thread ini _[Frame Buster Buster … buster code needed](http://stackoverflow.com/questions/958997/frame-buster-buster-buster-code-needed)_ ada beberapa cara yang bisa kamu coba agar praktik frame busting tidak terjadi pada situs kamu.

[Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html)

> Social engineering scams are a particular concern. With these scams, attackers present a post intended to get the target user to click on a link. That link usually leads to the user downloading some malicious code that has the potential to steal information on the user’s computer or mobile device. These scams are sometimes also called phishing and baiting, as well as click-jacking. Whatever they’re called, just know that not every post on social media is safe to click on. You should take special care to treat every link with suspicion, especially those that look like click bait.
>
> ~ Rick Delgado