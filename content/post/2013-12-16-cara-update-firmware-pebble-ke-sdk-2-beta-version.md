---
categories:
- Internet &amp; Tech
date: 2013-12-16T22:18:10Z
date_gmt: 2013-12-16 15:18:10 +0700
tags: []
title: Cara update Firmware Pebble ke SDK 2 Beta version
url: /2013/12/16/cara-update-firmware-pebble-ke-sdk-2-beta-version/
---

**Update: Semua intruksi dibawah ini bisa dilakukan hanya dengan menggunakan browser henpon.**

Halo Pebble'ers (\*ha ha namanya ga asik) belakangan ini Pebble mengeluarkan versi Firmware Beta untuk SDK2, update salah satunya adalah mengaktifkan kegunaan Accelerometer yg bisa mengukur movement dari pemakai dan [Javascript Kit](https://developer.getpebble.com/2/guides/javascript-guide.html) yg memudahkan developer untuk mengintegrasikan aplikasi pebble dengan web service semacam facebook, foursquare, yahoo weather, dll tanpa menggunakan 3rd party app seperti [httpebble](http://forums.getpebble.com/discussion/5384/httpebble-framework-for-http-communication-and-other-things-via-watch-apps).

Versi update terakhir pada saat artikel ini ditulis adalah [Firmware 2.0 Beta 3](https://developer.getpebble.com/2/releasenotice-beta3.html) , versi ini kalo gw lihat sudah cukup stabil dan reliable. Pada versi BETA 2 sebelumnya masih terjadi kendala di Javascript Kit yg mengharuskan Pebble Android app harus berada di foreground. Untuk bisa melakukan instalasi firmware ini pemakai diharuskan registrasi terlebih dahulu di portal [auth.getpebble.com ](https://auth.getpebble.com/) setelah login semua langkah dan prosedur instalasi bisa dilakukan di [developer.getpebble.com](https://developer.getpebble.com/2/getting-started/) , artikel ini hanya penjelasan tambahan untuk prosedur instalasi.

Untuk proses instalasi BETA firmware ada 2 file yg di perlukan, semua file bisa di download di [developer.getpebble.com](https://developer.getpebble.com/2/getting-started/) , proses instalasi juga sedikit berbeda untuk platform Android dan IOS, untuk IOS atau Iphone sayangnya akan melalui proses approval dari pihak pebble nya, lo harus mengisi form mengenai aplikasi apa yg akan lo buat, proses selanjutnya sama seperti platform android.

1. Dari 3 poin yg tertera pada [developer.getpebble.com](https://developer.getpebble.com/2/getting-started/) untuk end-user alias non dev, lo hanya download "Android App" dgn extension "PebbleApp-2.0-BETA3.apk" atau "IOS App" (poin 1) dan Firmware file dengan extension ".pbz". Perlu diperhatikan disini, ada 2 jenis firmware file keduanya spesifik dengan serial number yg ada di belakang jam tangan, jika serial number **diawali dengan angka**, download **Pebble Firmware 2.0-BETA3 for ev2\_4**. , jika **diawali dengan huruf "Q"**, download **Pebble Firmware 2.0-BETA3 for v1\_5.**
2. Download kedua file yang dibutuhkan langsung ke henpon, gw harap aplikasi folder explorer (ES explorer, Astro) sudah ter-install di henpon.
3. Hapus semua aplikasi yang ada di Jam tangan melalui Pebble Android/IOS app yg terinstall, agar nantinya setelah update ke firmware terbaru ga ada yang bentrok, karena aplikasi yang dibuat dengan SDK 1 sama sekali tidak bisa digunakan di firmware terbaru ini.
4. Uninstall Pebble "Android App" yang terinstall di henpon, pastikan pada setting android di bagian security - Device administration box "Unknown Source" sudah di cek, gunanya untuk mengizinkan instalasi aplikasi selain dari Play Store.
5. Lalu lakukan instalasi file "**PebbleApp-2.0-BETA3.apk**" dari folder explorer, di-klik saja lalu pilih "package installer" (logo android) untuk instalasi, pastikan pebble android app sudah terinstall.
6. Setelah Pebble Android App terinstall, lakukan instalasi **Pebble-2.0-BETA3-[ev2\_4 atau v1\_5].pbz** dari folder explorer, di-klik saja, nanti file akan dikenali oleh Pebble Android App, proses "Updating" akan segera berlangsung, tunggu sekitar 2-3 menit sampai proses instalasi selesai, Jam tangan akan melakukan reboot ketika update firmware telah selesai.
7. Setelah semua selesai, silahkan sujud sukur, potong kambing, tumpengan atau undang tetangga buat tahlilan (\*Hahaha bcanda broh)

Setelah itu lo bisa langsung menuju [MyPebbleFaces.com](http://www.mypebblefaces.com/) silahkan di filter result berdasarkan SDK 2.0, ada beberapa aplikasi yg menurut gw cukup menarik seperti,

1. [Aerotracker](http://www.mypebblefaces.com/apps/9157/6582/) sebuah aplikasi tracking GPS,
2. [ Tap Time ](http://www.mypebblefaces.com/apps/9519/7122/)watchface hemat energi,
3. [Pebsona Golden](http://www.mypebblefaces.com/apps/1444/7926/) watchface paling bagus, tapi boros memori henpon,
4. [Binary watchface](http://www.mypebblefaces.com/apps/6659/5613/) kayaknya susah sih kalo ga pernah blajar binary 8-4-2-1 ,
5. [RChrono](http://www.mypebblefaces.com/apps/8829/7900/) aplikasi wajib buat para runner, tapi ini bisa juga sebagai timer serbaguna kalo menurut gw,
6. [Spoon](http://www.mypebblefaces.com/apps/10947/8172/) bisa checkin foursquare dari pebble lo (\*keren bro, cobain deh)
7. [LetsMuv](http://letsmuv.com/) aplikasi ini mirip seperti fitbit, nike fuelband

Oya, Pebble sdk 2 memperkenalkan fitur app config untuk pebble watchapp, config ini bisa dilihat di Pebble Android App di menu Watch App dgn gear icon,

[![image](/images/wpid-Screenshot_2013-12-17-00-30-16.png "Screenshot_2013-12-17-00-30-16.png")](/images/wpid-Screenshot_2013-12-17-00-30-16.png)

Wokeh Bro Sis gitu deh, catatan aja, langkah diatas udah gw coba berulang2x di android dan sukses2x aja, untuk aplikasi IOS gw belum pernah coba, tapi kalo gw pikir sih mirip aja ya, sori banget nih kalo gw kurang nge-bantu :)

Selamat mencoba!! Break a leg :))