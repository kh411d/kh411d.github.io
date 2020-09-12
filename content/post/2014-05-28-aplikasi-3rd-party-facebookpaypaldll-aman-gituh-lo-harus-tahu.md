---
date: 2014-05-28T13:08:25+07:00
tags:
- oauth
- openid
- cybersecurity
- open-redirect
title: Amankah login dengan akun sosial media pada aplikasi lain?
url: /2014/05/28/aplikasi-3rd-party-facebookpaypaldll-aman-gituh-lo-harus-tahu/
image: /images/loginsocial.png
---

Tentunya banyak dari kamu yang menggunakan aplikasi dengan opsi untuk login menggunakan beberapa akun sosial media yang kamu miliki seperti facebook, twitter, google, linkedin dll. Misal ketika kamu login menggunakan facebook, dalam prosesnya, biasanya pengguna akan dialihkan ke halaman login facebook agar kamu bisa memberikan izin otorisasi, akhirnya facebook akan memberikan **access token** yang kemudian mengalihkan kamu kembali kepada aplikasi tersebut.

`https://www.facebook.com/dialog/oauth?client_id=app-id&redirect_uri=http://app-site.com`

Proses pengalihan/_redirecting_ inilah yang menjadi celah yang memungkinkan para _attacker_ mendapatkan data login pengguna, jika kamu lihat url diatas, _attacker_ mungkin saja merekonstruksi link menjadi,

`https://www.facebook.com/dialog/oauth?client_id=app-id&redirect_uri=http://attacker-site.com`

 Sehingga proses _redirection_ mengarah ke website si _attacker_, setelah itu proses ini lalu dipakai untuk memfasilitasi apa yang dinamakan ___phising attack___.

Ini bisa terjadi karena aplikasi tersebut tidak memverifikasi domain pada proses pengalihan menggunakan `redirect_uri` ini biasa terjadi karena aplikasi menggunakan metoda [Open Redirect](https://www.owasp.org/index.php/Open_redirect) pada proses _redirection_.

Cara terbaik untuk menghindari kerentanan _Open Redirect_ adalah dengan menghindari penggunaan `redirect_uri` secara langsung pada url akan lebih baik jika di set pada sisi server. Jika tidak dapat dihindari, hal itu dapat ditangani dengan memvalidasi `redirect url` dan melakukan _whitelist_ URL yang disetujui.

> What is every hacker's weekend gateaway?
> 
> They go phising.
>
>
> ~ Punny Leone