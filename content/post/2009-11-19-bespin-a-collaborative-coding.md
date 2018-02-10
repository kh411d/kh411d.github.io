---
categories:
- Internet &amp; Tech
date: 2009-11-19T15:10:30Z
date_gmt: 2009-11-19 08:10:30 +0700
tags: []
title: Bespin a Collaborative Coding dengan teman2x kamu somewhere out there in the
  cloud
url: /2009/11/19/bespin-a-collaborative-coding-dengan-teman2x-kamu-somewhere-out-there-in-the-cloud/
---

[caption id="" align="alignleft" width="180" caption="bespin"][![bespin](http://people.mozilla.com/~cbeard/Bespin_Logo.png "bespinlogo")](https://wiki.mozilla.org/Labs/Bespin)[/caption]

Pertama gw mo kasih tau dulu nih, apaan sih tuh "Bespin" , ini product adalah suatu terobosan baru oleh Mozilla Labs yang merupakan sebuah code editor dengan berbasis web, tentunya bertujuan untuk meningkatkan produktivitas dari developer, karena editor ini merupakan web based dengan kata lain bespin bisa di gunakan oleh seluruh developer di mana aja dengan istilah "Code In The Cloud", tentu saja dengan browser yang menunjang (Firefox3,Chrome,Safari), karena tidak semua browser bisa menunjang aplikasi ini.

Feature-feature yang ada pada Bespin cukup banyak, mungkin bisa di cek di [websitenya ](http://https://wiki.mozilla.org/Labs/Bespin), satu hal yang menarik perhatian gw adalah feature collaborative coding (masih beta sih ..), yang tentunya akan gw bahas disini semampu gw, mudah2xan sih jelas (kekekekek)....

Hal pertama yang harus lo lakukan adalah melakukan registrasi ke [http://bespin.mozilla.com](https://bespin.mozilla.com/index.html) , setelah itu login dengan username dan password.  
 Setelah Logged in, kalo dilihat di menu atas bespin punya 6 Menu,  
 Command Line Access : Command line untuk berbagai macam feature seperti create project, open files, follow user, dll, <https://wiki.mozilla.org/Labs/Bespin/UserGuide>  
 Show Files : Bertindak sebagai file manager, untuk melihat project2x yang udah lo buat dan project2x yang di share sama temen2x lo,  
 Save, View in browser, Font size,  
 terakhir Collaboration paling ujung kanan, untuk mengetahui siapa saja yang sedang mengedit file yang udah lo share.

Ok sekarang kita mulai dengan membuat project baru, klik tombol "Show Files", disini lo bisa melihat project2x yang ada ato ter-share, masukkan perintah berikut di konsol  
 > **project create projectaku**

buat file index.html di bawah projectaku  
 > newfile /projectaku/index.html  
 file index.html akan langsung terloaded di editor, klik button "Save"

untuk memulai kolaborasi, tentunya lo harus mempunyai teman/group, misal username teman adalah "kambing" , untuk memulai koneksi dengan teman gunakan command line berikut:  
 > follow kambing

lalu share projectaku supaya bisa di edit bareng dengan user "kambing",  
 > share add projectaku kambing edit

ketika user "kambing" logged in, user ini sudah bisa melihat project yang dishare melalui "Show Files", atau ketikan  
 > open /usersaya+projectaku/index.html

jika file index.html di edit bersama , akan terlihat kolaborasi realtime, melalui menu collaboration kita bisa melihat siapa saja yang sedang mengedit file tersebut.

Udah ya... met nyoba2x deh .....