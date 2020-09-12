---
date: 2009-11-19T08:10:30+07:00
tags: 
- bespin
- tutorial
title: Koding bareng dengan Bespin
url: /2009/11/19/bespin-a-collaborative-coding-dengan-teman2x-kamu-somewhere-out-there-in-the-cloud/
---

_Bespin from Mozilla Labs_ adalah sebuah code editor dengan berbasis web, tentunya bertujuan untuk meningkatkan produktivitas dari developer, karena editor ini berbasis web maka bespin bisa di gunakan oleh developer dimanapun berada, sayangnya tidak semua browser bisa menunjang aplikasi ini.

>"Code In The Cloud" - Bespin

Feature-feature yang ada pada Bespin cukup banyak, satu hal yang menarik perhatian gw adalah feature collaborative coding. Hal pertama yang harus lo lakukan adalah melakukan registrasi dan login ke [bespin.mozilla.com](https://bespin.mozilla.com/index.html)

Kita mulai dengan membuat project baru, klik menu `Show Files`,  
`> project create myproject`

Buat file `index.html` di bawah myproject  
`> newfile /myproject/index.html`  

File index.html akan langsung ter-_upload_ di editor, lalu klik button `Save`

Untuk memulai kolaborasi, tentunya harus mempunyai teman/group, misal username teman adalah `kambing`,  
`> follow kambing`

Lalu share myproject supaya bisa di edit bareng dengan user `kambing`,  
`> share add myproject kambing edit`

ketika user `kambing` logged in, user ini sudah bisa melihat project yang dishare melalui menu `Show Files`, atau ketik di console,   
`> open /usersaya+myproject/index.html`

jika file `index.html` di edit bersama , akan terlihat kolaborasi realtime, melalui menu collaboration kita bisa melihat siapa saja yang sedang mengedit file tersebut.
