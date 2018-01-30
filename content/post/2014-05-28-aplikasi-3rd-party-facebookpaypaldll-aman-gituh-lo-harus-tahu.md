---
categories:
- Internet &amp; Tech
date: 2014-05-28T20:08:25Z
date_gmt: 2014-05-28 13:08:25 +0700
tags:
- facebook
- google
- paypal
- linkedin
- oauth
- openid
- security
- cover redirect
- vulnerability
title: Aplikasi 3rd Party (Facebook,Paypal,dll) Aman gituh?? Lo harus tahu!
url: /2014/05/28/aplikasi-3rd-party-facebookpaypaldll-aman-gituh-lo-harus-tahu/
---

[![48a572c60b93255986ba073bf5b1d865 (1)](/images/48a572c60b93255986ba073bf5b1d865-1.jpg)](/images/48a572c60b93255986ba073bf5b1d865-1.jpg)Yang gue maksud Aplikasi 3rd party disini adalah sebuah aplikasi yang berjalan sebagai aplikasi tambahan dari beberapa aplikasi yang sudah popular, aplikasi ini bisa berupa website, client app, mobile web, mobile app, desktop app, microsite, dll. (\*mengulang kata aplikasi... halah)

Sebagai contoh kalo lo termasuk pengguna Twitter, lo pasti tau aplikasi yang namanya seismic, hootsuite, atau uber Twitter, semua aplikasi tersebut adalah aplikasi 3rd party dari Twitter. Aplikasi ini adalah aplikasi yang dibuat oleh pihak ketiga diluar dari Twitter, aplikasi ini mendapatkan izin dari pihak Twitter untuk mengakses data2x user dan menggunakannya di dalam aplikasi. Begitu hal nya sama dengan seperti Facebook, Google+, LinkedIn, Instagram, dan masih banyak lagi.

Aplikasi 3rd party tentunya bisa disalahgunakan oleh pembuatnya untuk mencuri data user atau mungkin karena adanya kelalaian dari pembuatnya sehingga membuat data dari para pengguna aplikasi bisa dicuri seperti dijelaskan [disini](http://khalidadisendjaja.web.id/2013/11/07/mari-berbagi-soal-privasi-di-sosial-media-online/).

Ada sebuah pattern/skema/pola yang selalu dipakai oleh aplikasi 3rd party untuk mendapatkan akses data penggunanya, misal ketika pengguna aplikasi ingin menggunakan aplikasi 3rd party, pengguna akan diberikan pilihan untuk login dengan akun facebook pengguna, dalam tahap ini pengguna akan di alihkan ke halaman facebook untuk memberikan izin akses data pengguna kepada aplikasi 3rd party, setelah proses selesai pengguna aplikasi akan dialihkan kembali ke halaman home aplikasi 3rd party, dalam hal ini aplikasi 3rd party telah mendapatkan **access token** yang bisa digunakan sebagai kunci untuk mengakses data facebook pengguna. Proses ini dinamakan [Open Redirect](https://www.owasp.org/index.php/Open_redirect), protokol yang digunakan untuk proses otorisasi dinamakan [OAuth](http://en.wikipedia.org/wiki/OAuth).

Sekarang bayangkan jika ada sebuah situs/aplikasi malware yang berpura-pura menjadi Aplikasi 3rd party lalu mengalihkan pengguna ke situs Facebook untuk memberikan akses data, tapi setelah proses selesai, bukannya mengarahkan pengguna kembali ke halaman aplikasi 3rd party, aplikasi malware ini memberitahu Facebook untuk mengarahkan pengguna ke aplikasi malware daripada aplikasi 3rd party yang seharusnya.

Dengan cara ini hacker mungkin dapat mengarahkan pengguna ke situs sendiri dan mendapatkan akses token. Sehingga hacker dapat mengakses Facebook API seolah-olah itu dari aplikasi 3rd party yg seharusnya dan mencuri data pengguna. Proses hacking ini dinamakan [Cover Redirect Vulnerability](http://tetraph.com/covert_redirect/) , hal ini bisa terjadi karena kelalaian developer aplikasi 3rd party yang tidak memverifikasi redirect url yang akan diproses.

Simulasi dari proses hacking diatas bisa dilihat dibawah ini, (\*Percepat ke 2:47 untuk proses simulasi)

http://youtu.be/HUE8VbbwUms?t=2m47s

Sayangnya ini bisa terjadi tidak hanya dengan facebook saja, tapi situs popular lain seperti google,linkedin,paypal, dll yang menggunakan protokol OAuth dan OpenId bisa membocorkan data pengguna jika developer aplikasi 3rd party lalai dalam mengamankan aplikasinya.

Cara menanggulangi dari sisi pengguna sebenarnya cukup mudah, tetapi memerlukan awareness juga dari penggunanya, misal ketika setelah proses otorisasi selesai, pengguna dialihkan ke situs yang mencurigakan, pengguna bisa langsung membatalkan data akses aplikasi 3rd party melalui situs dimana pengguna memberikan izin akses datanya (Facebook, Twitter, LinkedIn, Google, dll) atau pengguna bisa menggunakan servis gratis seperti [MyPermissions.org](http://mypermissions.org/) di situs ini semua izin akses yang pengguna berikan pada aplikasi 3rd party akan terlisting.