---
layout: post
status: publish
published: true
title: DnsCrypt sikat bersih Telco intrusive ads ( Telkomsel, XL-Axiata )
author:
  display_name: Khalid Adisendjaja
  login: admin
  email: contact@khal.web.id
  url: http://khal.web.id
author_login: admin
author_email: contact@khal.web.id
author_url: http://khal.web.id
wordpress_id: 1100
wordpress_url: http://khalidadisendjaja.web.id/?p=1100
date: '2015-04-18 23:30:00 +0700'
date_gmt: '2015-04-18 16:30:00 +0700'
categories:
- Internet &amp; Tech
tags:
- security
- android
- dns
- dnscrypt
- ads
- intrusive
- opendns
comments: []
---
![opendnsintrusiveads](/images/opendnsintrusiveads.jpg)Syebel, jengkel, kesal, bosan, gegara iklan pengganggu/ intrusive ads beberapa provider telco di Indonesia seperti Telkomsel dan XL Axiata, bahkan banyak dari beberapa orang/badan/lembaga yang membuat petisi akan hal ini tetapi tidak mendapatkan respon dari pemerintah.

Iklan tersebut dapat dikategorikan intrusive ads karena iklan yang diberikan oleh provider telekom ini dilakukan tanpa izin atau kerjasama dengan pemilik situs/website dan bahkan isi konten dari iklan tersebut sama sekali tidak berhubungan dengan konten website yang dituju oleh konsumen.

Berikut adalah sebuah solusi yang sebenarnya bisa dilakukan oleh orang banyak dari level end-user (pengguna biasa) atau advance-user (memiliki pengetahuan dasar soal IT networking)

DnsCrypt merupakan sebuah side-project dari OpenDNS (Penyedia jasa layanan DNS dan security). Nah dimanakah peranan dnscrypt ini? boleh kita ambil contoh, ketika kita mencari "www.google.com" pada browser, henpon/komputer akan meneruskan proses pencarian ke alamat DNS server yang terpasang oleh ISP (Telkomsel, XL Axiata) dimana nantinya akan diterjemahkan menjadi sebuah angka-angka yg kita kenal sebagai IP address contoh "74.125.200.139", proses ini dinamakan DNS resolving.

Nah, proses DNS resolving ini sama sekali tidak terproteksi/terenkripsi jadi siapapun itu termasuk ISP bisa langsung membelokkan/mengubah hasil dari query sebuah alamat website, misal yang seharusnya masuk ke halaman google.com malah masuk ke halaman iklan intrusive ISP.

DnsCrypt akan melakukan sebuah proteksi/enkripsi dari semua dns traffic di henpon/komputer serta dnscrypt-proxy akan meneruskan DNS resolve ke alamat DNS yang mendukung dnscrypt seperti OpenDNS.

Jadi sebenarnya kegunaan DnsCrypt disini cukup besar, sebagai cara untuk melindungi diri sendiri, mempercepat pengalaman browsing, filter konten, dan bahkan ketika salah ketik URL akan langsung dibenerin oleh OpenDNS jadi terhindar phising deh.

Besar kemungkinan bahwa dnscrypt akan mem-ByPass program internet sehat atau nawala yang dilakukan oleh ISP di Indonesia.

DnsCrypt tersedia untuk pengguna windows, mac, linux, iphone, dan android.

Untuk pengguna Mac dan Windows semuanya sudah tinggal download,

[Download DNSCrypt for Mac](http://opendns.github.com/dnscrypt-osx-client/)  
[Download DNSCrypt for Windows](https://github.com/opendns/dnscrypt-win-client)

Untuk pengguna Linux,

[DNSCrypt Tools for Linux](http://opendesktop.org/content/show.php/DNScrypt+Tools?content=164488)

Untuk pengguna Iphone (Jailbroken)

[GuizmoDNS](http://modmyi.com/cydia/com.guizmo.dns)

Untuk pengguna Android (Rooted & Flashable), bisa dibaca how to install nya disini [DNScrypt proxy for Android install](http://forum.xda-developers.com/showthread.php?p=56068030)

DnsCrypt untuk android sudah dicoba dg henpon sendiri menggunakan OnePlus One, CM 12 rom, Android 5.0.2, cekidot Post thread #13 dari link diatas.

Ketika berhasil menginstall, buka halaman http://www.opendns.com/welcome, hasilnya harus seperti gambar dibawah sebelah kiri, lalu buka http://www.internetbadguys.com opendns akan mendeteksi bahwa ini adalah website phising seperti gambar sebelah kanan.

[![image](/images/wpid-img_20150418_230228.jpg "IMG_20150418_230228.jpg")](/images/wpid-img_20150418_230228.jpg)

Reddit yg tadinya tidak bisa diakses, sudah bisa diakses kembali,  
[![wpid-20150418_231153.jpg](/images/wpid-20150418_231153-300x280.jpg)](/images/wpid-20150418_231153.jpg)

sources:  
<https://www.opendns.com/about/innovations/dnscrypt/>  
<http://dnscrypt.org>