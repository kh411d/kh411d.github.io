---
date: 2014-04-11T08:51:42+07:00
tags: ["heartbleed","cybersecurity","bugfix"]
title: 'Internet geger gegara HeartBleed [BUG] '
url: /2014/04/11/internet-geger-gegara-heartbleed-bugs/
image: /images/heartbleedcover.jpg
---

2 atau 3 hari yang lalu sekitar 66% website di seluruh dunia sempat geger dengan adanya _[bug](https://en.wikipedia.org/wiki/Software_bug)_ pada _[OpenSSL](http://en.wikipedia.org/wiki/Openssl)_ (\*yaitu sebuah software kriptografi yang banyak dipakai di sekian banyak aplikasi website dan berguna untuk melindungi data koneksi pengguna ketika sedang melakukan aktivitas internet)

Ada beberapa pihak yang menyalahgunakan bug ini untuk mencuri data-data pengguna internet yang bisa berupa password, kartu kredit, email, dll. Beberapa situs besar seperti Yahoo-pun terkena dampaknya, sebuah [perusahaan security men-demokan mencuri username dan password](http://www.cnet.com/news/heartbleed-bug-undoes-web-encryption-reveals-user-passwords/), dengan menggunakan Heartbleed script. Ada beberapa website lokal seperti Kaskus juga mengalami hal ini.

List dari beberapa website yang mengalami Heartbleed bug bisa dilihat di [heartbleed-masstest](https://github.com/musalbas/heartbleed-masstest/blob/master/top1000.txt)

![xkcd-heartbleed](http://imgs.xkcd.com/comics/heartbleed.png)

Jadi sekarang, bagaimana caranya mencegah agar hal ini tidak terjadi pada kita sebagai pengguna internet, apalagi dengan maraknya aktivitas di internet banking yang notabene menggunakan OpenSSL. 

Ketika sebuah website menggunakan SSL, bisa kita lihat pada _browser address bar_ terdapat tulisan `https://` di pojok kiri kotak, untuk mengetahui apakah website yang sering lo kunjungin masih mengalami bug ini, bisa dicoba tool yang satu ini [heartbleed-test](http://filippo.io/Heartbleed/).

Sayangnya fix untuk bug ini hanya bisa dilakukan di sisi server website, jadi pengguna hanya bisa menunggu apakah website tersebut sudah melakukan fix pada heartbleed bug.

Untuk server admin, berikut ada penjelasan OpenSSL version yang terjangkit bug ini,

- OpenSSL 1.0.1 through 1.0.1f (inclusive) are vulnerable
- OpenSSL 1.0.1g is NOT vulnerable
- OpenSSL 1.0.0 branch is NOT vulnerable
- OpenSSL 0.9.8 branch is NOT vulnerable

Ingin tahu lebih lanjut? [Heartbleed Site](http://heartbleed.com)