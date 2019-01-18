---
title: Mengenal Github Pages Sebagai Static Hosting
date: 2017-05-01T04:24:15+00:00
author: Irfan Maulana
categories: Programming
tags: github, programming
template: article.pug
---
![Mengenal Github Pages](https://s-media-cache-ak0.pinimg.com/originals/89/90/1d/89901d0db4f147c4ce11fd97fd6d241c.jpg)

**Mengenal Github Pages Sebagai Static Hosting** - Siapa developer/programmer yang tidak kenal github ? Salah satu sosial coding yang menyediakan platform penyimpanan project kita baik private ataupun open ke publik dengan menggunakan GIT sebagai versioning control nya. Pada perkembangannya github tidak hanya dikenal sebagai layanan penyedia penyimpanan kode melainkan juga memiliki banyak fitur yang sangat mendukung lingkungan developer dalam mengembangkan aplikasi mereka, seperti project issue tracking, kanban board, forking, dll. 

Github kini menjelma layaknya sosial media bagi para programmer di seluruh dunia untuk berbagi ide, kode dan project. Ada banyak sekali project open-souce besar yang lahir dari hasil kolaborasi para developer diatas platform Github ini. Dengan makin dekatnya github dengan lingkungan developer maka kita sebagai developer juga mesti lebih bisa memanfaatkan berbagai fitur yang sebenarnya sudah disediakan oleh Github, dan salah satu yang akan kita bahas kali ini adalah Github Pages. 

<span class="more"></span>

<a href="https://pages.github.com" target="_blank">Github Pages</a> merupakan hosting static file gratis yang disediakan oleh Github untuk para developer. Static file disini ialah seperti HTML, CSS, Javascript, Images, dll, yakni kode-kode client-side sebuah website yang tidak lagi memerlukan compile, transpile ataupun webserver untuk menjalankannya. Dalam bahasa bodohnya kita tidak bisa meng-hosting file yang akan generate dinamyc content dari database seperti yang biasa kita lakukan dari kode backend kita. Jadi kode wordpress tidak bisa ya di host di Github Pages, karena wordpress kan akan generate dinamyc konten dari Database lewat kode PHP. 

Ah, static file seperti itu apa berguna buat kita para developer ? Bukankah kode kita banyak yang dinamyc content ? Tentu saja karena dunia nyata kita banyak bergelut dg data yang dinamis. Namun tentu juga feature ini tidak dibuat jika tidak membantu developer itu sendiri. Karena pada perkembangannya kita bisa membuat banyak konten menarik dan berguna hanya menggunakan static file konten ini. 
  
Salah satu hal yang sering dibutuhkan oleh para developer adalah homepage atau halaman demo untuk project yang dia buat dan ini sangat terbantu dengan adanya Github Pages ini, karena kita kini bisa buat halaman homepage/demo dari project kita tanpa harus bayar hosting lagi.
  
Kita bahkan bisa membuat sebuah Blog hanya dari sebuah static konten, dimana biasanya sebuah Blog seringkali di generate dari dinamyc konten. Adanya berbagai tools static file generator seperti Jekyll, winterrsmith dll yang nanti akan dijelaskan di artikel terpisah membuat kita mampu membuat Blog hanya bermodalkan static konten dan bisa di host di Github Pages. 

Kalau sudah tau manfaat dari static file hosting dari Github Pages ini, lantas bagaimana kalau saya ingin mulai membuat Github Pages ini ? Apa saja yang mesti dibuat ? 
  
Pada dasarnya semuanya sudah dijelaskan dengan mudah di official website nya di <a href="https://pages.github.com" target="_blank">https://pages.github.com</a>, namun saya akan coba jelaskan ulang langkah-langkahnya dalam bahasa Indonesia, semoga tidak ada yang terlewat. Berikut cara membuat Github Pages :
  


1. Pastinya kalian perlu membuat akun Github, karena github page adalah fitur yang hanya kalian bisa rasakan kalau kalian pengguna github.
  


2. Buat repository dengan nama yang sama dengan nama username Github kalian dengan ditambahkan **github.io** dibelakangnya. Jadi bila username Github saya adalah **mazipan** maka saya akan membuat repository dengan nama **mazipan.github.io**, Github akan dengan otomatis membaca branch master dari repository ini sebagai static file yang akan dibuat Github Pages nantinya.
  


3. Buat file index.html di dalamnya dan seperti biasa tambahkan kata legendaris **Hello World** didalamnya untuk mengetahui apakah Github Pages kita telah bisa mengakses repository yang benar.
  


4. Akses github Pages di https://**username**.github.io, seperti contoh punya saya di mazipan.github.io
  


5. Tarammmmm, Github page sudah jadi dan bisa digunakan.

Seeingkali kita membuat banyak repository yang membutuhkan homepage/halaman demo dan ini akan menyusahkan kalau semuanya harus membuat homepage/halaman demonya di dalam repository **username**.github.io ini. Akan lebih mudah jika kita bisa langsung menambahkan page baru dari repository yang bersangkutan dan tidak perlu copy static file ke repo **username**.github.io.
  

  
Untuk kebutuhan ini github Pages juga sudah menyediakan fiturnya, jadi setelah kita mempunyai repository **username**.github.io Sebagai halaman utama dari github Pages kita, kita juga bisa menambahkan page baru langsung dari repository lain.
  

  
Untuk bisa menggunakan fitur ini ada beberapa alternatif yang bisa kita coba, beberapa diantaranya adalah dengan cara berikut :
  

  
1. Kita bisa membuat branch **gh-pages** di repository lain yang ingin kita buat homepage/halaman demonya, github Pages akan secara otomatis menganggap branch ini sebagai page baru di github Pages kita sehingga nantinya bisa kita akses di **username**.github.io/**nama_repository**
  

  
Namun perlu diingat bahwa hanya static file yang bisa dibaca oleh Github Pages.

2. Kita bisa juga tidak harus membuat branch gh-pages namun langsung menggunakan branch master kita sebagai page baru namun diperlukan sedikit perubahan konfigurasi di setting repository kita, dengan cara :

+ Masuk ke repository kita, misal https://github.com/mazipan/bem-kit
   
+ Masuk ke tab setting, misal https://github.com/mazipan/bem-kit/settings
   
+ Scroll kebawah dan cari setting Github Pages.
   
+ Pada pilihan **Source**, kita bisa ganti menggunakan branch yang kita mau, misalkan master.
   
+ Page baru berhasil dibuat. 

Baca juga berbagai <a href="https://mazipanneh.com/blog/open-source-project/" target="_blank">open source repository</a> yang saya buat.
  

  
Demikian sedikit pengenalan Github Pages dari saya, semoga bermanfaat.

Ditulis oleh Irfan Maulana di pagi hari kalau itu.
  

  
Salam.