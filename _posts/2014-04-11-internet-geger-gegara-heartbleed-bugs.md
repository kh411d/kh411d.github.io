---
layout: post
title: 'Internet geger gegara HeartBleed [BUG] '
date: '2014-04-11 15:51:42 +0700'
date_gmt: '2014-04-11 08:51:42 +0700'
categories:
- Internet &amp; Tech
tags: []
---
[![heartbleed](/images/heartbleed.png)](http://heartbleed.com/)2 atau 3 hari yang lalu sekitar 66% website di seluruh dunia sempat geger dengan adanya [_bug_](https://en.wikipedia.org/wiki/Software_bug) pada [OpenSSL](http://en.wikipedia.org/wiki/Openssl) (\*yaitu sebuah software kriptografi yang banyak dipakai di sekian banyak aplikasi website dan berguna untuk melindungi data koneksi pengguna ketika sedang melakukan aktivitas internet)

Ada beberapa pihak yang menyalahgunakan bug ini untuk mencuri data2x pengguna internet yang bisa berupa password, kartu kredit, email, dll. Beberapa situs besar seperti Yahoo-pun terkena dampaknya, sebuah [perusahaan security men-demokan mencuri username dan password](http://www.cnet.com/news/heartbleed-bug-undoes-web-encryption-reveals-user-passwords/), dengan menggunakan Heartbleed script. Ada beberapa website lokal seperti Kaskus juga mengalami hal ini.

List dari beberapa yang mengalami Heartbleed bug bisa dilihat di [heartbleed-masstest](https://github.com/musalbas/heartbleed-masstest/blob/master/top1000.txt), untuk mengetahui apakah website yang sering lo kunjungin masih mengalami bug ini, bisa dicoba tool yang satu ini [heartbleed-test](http://filippo.io/Heartbleed/)

Ilustrasi dibawah bisa menjelaskan sedikit, bahaya dari Heartbleed,

[![](http://imgs.xkcd.com/comics/heartbleed.png)](https://xkcd.com/1353/)

Jadi sekarang, bagaimana caranya mencegah agar hal ini tidak terjadi pada kita sebagai pengguna internet, apalagi dengan maraknya aktivitas di internet banking yang notabene menggunakan OpenSSL. Ketika sebuah website menggunakan SSL, bisa kita lihat pada browser address bar, protokol yang digunakan adalah **"https://....."** agar kita yakin apakah website tersebut aman, bisa di-cek dengan menggunakan tool diatas. Sayangnya fix untuk bug ini hanya bisa dilakukan di sisi server website, jadi pengguna hanya bisa menunggu apakah website tersebut sudah melakukan fix pada heartbleed bug.

Untuk server admin, berikut ada penjelasan OpenSSL version yang terjangkit bug ini,

- OpenSSL 1.0.1 through 1.0.1f (inclusive) are vulnerable
- OpenSSL 1.0.1g is NOT vulnerable
- OpenSSL 1.0.0 branch is NOT vulnerable
- OpenSSL 0.9.8 branch is NOT vulnerable

Klik saja website ini <http://heartbleed.com> untuk kenalan lebih intim sama yang namanya heartbleed bug atau Hati Berdarah tapi kutu-an .. halah