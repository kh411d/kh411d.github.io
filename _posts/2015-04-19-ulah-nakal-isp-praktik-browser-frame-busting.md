---
layout: post
status: publish
published: true
title: Ulah nakal ISP praktik browser Frame Busting
author:
  display_name: Khalid Adisendjaja
  login: admin
  email: contact@khal.web.id
  url: http://khal.web.id
author_login: admin
author_email: contact@khal.web.id
author_url: http://khal.web.id
wordpress_id: 1107
wordpress_url: http://khalidadisendjaja.web.id/?p=1107
date: '2015-04-19 15:42:06 +0700'
date_gmt: '2015-04-19 08:42:06 +0700'
categories:
- Internet &amp; Tech
tags:
- security
- iframe
- frame-busting
- isp
- telco
comments: []
---
[![image](/images/wpid-img_20150419_141835.jpg "IMG_20150419_141835.jpg")](/images/wpid-img_20150419_141835.jpg) Beberapa ISP di indonesia tanpa konsumen sadari sebenarnya sangat sering melakukan praktik frame busting hampir di semua website yg konsumen kunjungi, alasan ISP melakukan hal ini tidak lain adalah penempatan iklan gratis dari ISP tersebut tanpa sepengetahuan si empunya website.

Lalu, bagaimanakah cara kerja Frame Busting ini? Ketika konsumen mengunjungi sebuah website misal "Forbes.com", ISP akan membungkus "Forbes.com" dalam sebuah _iframe/frames_ lalu kemudian ditampilkan pada browser konsumen, bagian sisi diluar iframe biasanya akan menampilkan iklan gambar dari ISP tersebut.

[![image](/images/wpid-img_20150419_144851.jpg "IMG_20150419_144851.jpg")](/images/wpid-img_20150419_144851.jpg)

Ada juga cara iklan ISP yang lebih frontal lagi, yaitu dengan menerapkan Clickjacking pada konsumennya sendiri, dengan cara meng-overlay iframe dengan sebuah ads dari ISP tersebut.

[![image](/images/wpid-img_20150419_152923.jpg "IMG_20150419_152923.jpg")](/images/wpid-img_20150419_152923.jpg)

Ada beberapa website yg menerapkan mekanisme untuk mencegah frame busting, salah satunya adalah [Stackoverflow.com](http://stackoverflow.com).

[![image](/images/wpid-img_20150419_151511.jpg "IMG_20150419_151511.jpg")](/images/wpid-img_20150419_151511.jpg)

Ketika situs ini dibuka, situs akan menotifikasi konsumen adanya framing, lalu kemudian framing akan dihilangkan oleh mekanisme tersebut.

Nah bagaimana caranya agar Frame Busting ini tidak terjadi pada blog/situs pribadi kamu, sebenarnya caranya cukup mudah, hanya dengan menyisipkan snippet javascript pada header halaman blog/situs, contoh script bisa dilihat pada thread stackoverflow berikut ini <http://stackoverflow.com/questions/958997/frame-buster-buster-buster-code-needed>, ok selamat mencoba.

Entah kenapa ISP sekarang tuh serakah semua, udah lah pulsa internet masih bisa dibilang mahal, ditambah lagi dengan iklan-iklan maksa seperti ini, masalah legal/ilegal nya juga pun sepertinya masih tidak jelas.