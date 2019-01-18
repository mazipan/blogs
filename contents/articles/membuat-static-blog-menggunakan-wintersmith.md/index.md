---
title: Membuat Static Blog Menggunakan Wintersmith
date: 2017-05-05T10:32:07+00:00
author: Irfan Maulana
categories: Blogging, Programming
tags: blogging, programming, wintersmith
template: article.pug
---
<figure style="width: 664px" class="wp-caption aligncenter"><img src="http://wintersmith.io/images/wintersmith-og.png" alt="Wintersmith.io Logo" width="664" height="456" /><figcaption class="wp-caption-text"><span style="color: #808080;"><em>Wintersmith.io Logo</em></span></figcaption></figure> 

**Membuat Static Blog Menggunakan Wintersmith** - Static blog adalah blog yang tidak memiliki data dinamis atau hanya terdiri dari sekumpulan file-file static seperti HTML, CSS, Javascript serta Images. Dan salah satu platform yang paling sering digunakan untuk membuat blog static ini adalah Jekyll. Kepopuleran Jekyll semakin menjadi-jadi setelah menjadi official static site generator yang diusung oleh Github Pages, yang artinya kita tidak perlu melakukan build file di lokal komputer kita baru kemudian commit ke repository namun dari Github Pages bisa langsung melakukan auto build ketika kode kita commit.

<span class="more"></span>

Namun pada tulisan kali ini kita tidak akan membahas Jekyll, tentu saja karena memang sudah terlalu populer dan berbagai tutorial bisa ditemukan dengan mudah bahkan banyak yang berbahasa Indonesia. Kali ini kita akan bahas static site generator lain yakni <a href="http://wintersmith.io" target="_blank" rel="noopener noreferrer"><strong>Wintersmith</strong></a>.

Wintersmith seperti official website-nya menawarkan _Flexible, minimalistic, multi-platform static site generator built on top of node.js_ memiliki beberapa keunggulan dibanding Jekyll menurut saya, diantaranya sebagai berikut :

1. Menggunakan Engine NodeJs 
   
2. Templating dengan PUG/Jade 
   
3. Sudah Tersedia Banyak Plugin Standard

Yuk, cusss kita mulai saja belajar membuat Blog Static menggunakan Wintersmith. Silahkan disimak langkah-langkahnya berikut ini :

**1. Instalasi Wintersmith**

Wintersmith seperti yang dijelaskan diatas menggunakan engine NodeJS sehingga untuk memasangnya tinggal menggunakan `npm` saja.

    npm install wintersmith -g
    

**2. Membuat Project Baru**

    wintersmith new [project_name]
    

Setelahnya akan langsung digenerate hampir semua kebutuhan dasar dalam blog static termasuk dengan beberapa plugin dasar yang dibutuhkan, dan untuk menjalankan project ini Anda bisa menggunakan perintah :

    cd [project_name]
    wintersmith preview
    

**3. Build File Static**

Dan untuk men-generate static file yang nanti bisa kita host dimanapun, termasuk <a href="http://mazipanneh.com/blog/2017/05/mengenal-github-pages-sebagai-static-hosting/" target="_blank" rel="noopener noreferrer">Github Pages </a>, kita bisa menggunakan perintah :

    wintersmith build
    

File static akan di generate ke dalam folder `build`, kita bisa copykan ke branch berbeda sebagai static blog, contoh yang direkomendasikan menggunakan branch **gh-pages**.

**4. Memodifikasi Konfigurasi**

Konfigurasi dasar dari wintersmith terdapat pada file `config.json`, disini terdapat setup dasar seperti title, url, serta plugin yang kita gunakan. Kali ini kita akan coba memodifikasi dan menambahkan beberapa keterangan di `config.json` dan berikut adalah contohnya, dimana kita menambahkan beberapa keterangan di `locals` sesuai dengan blog yang akan kita buat :

    {
      "locals": {
        "url": "https://ft-umj-4.github.io/story",
        "logoUrl": "https://ft-umj-4.github.io/ft-umj-iv.jpg",
        "name": "FT UMJ IV",
        "owner": "GROUP FT UMJ IV",
        "description": "Secuil cerita dan dokumentasi kegiatan dari group FT UMJ IV",
        "sitemap": "sitemap.xml",
        "discuss_id": "ft-umj-4-github-io"
      },
      "plugins": [
        "./plugins/paginator.coffee"
      ],
      "require": {
        "moment": "moment",
        "_": "underscore",
        "typogr": "typogr"
      },
      "jade": {
        "pretty": true
      },
      "markdown": {
        "smartLists": true,
        "smartypants": true
      },
      "paginator": {
        "perPage": 3
      }
    }
    

**5. Menambahkan Plugin Baru**

Wintersmith punya beberapa plugin yang mungkin akan kita butuhkan, daftar lengkapnya bisa dilihat di <a href="https://github.com/jnordberg/wintersmith/wiki/Plugins" target="_blank" rel="noopener noreferrer">wiki plugins</a> mereka. 
   
Yang pertama perlu ditambahkan ketika ingin menggunakan plugin adalah depedency di dalam `package.json`, kemudian menginstall semua depedency dengan `npm install`, dan berikut contoh instalasi beberapa pluginyang saya gunakan juga :

**5.a. Menambahkan wintersmith-sassify**

wintersmith-sassify merupakan plugin yang digunakan ketika kita ingin menggunakan SASS pre-processor dibandingkan CSS biasa, kita menginstall dengan cara

    npm install wintersmith-sassify
    

Setelahnya akan ada depedency tambahan di `package.json` kita, selanjutnya kita akan menambahkan konfigurasi baru di `config.json` seperti berikut :

    "sassify": {
        "outputStyle": "compressed",
        "sourceComments": false,
        "sourceMap": false
    }
    

Sehingga `config.json` kita selengkapnya akan menjadi seperti ini :

    {
      "locals": {
        "url": "https://ft-umj-4.github.io/story",
        "logoUrl": "https://ft-umj-4.github.io/ft-umj-iv.jpg",
        "name": "FT UMJ IV",
        "owner": "GROUP FT UMJ IV",
        "description": "Secuil cerita dan dokumentasi kegiatan dari group FT UMJ IV",
        "sitemap": "sitemap.xml",
        "discuss_id": "ft-umj-4-github-io"
      },
      "plugins": [
        "./plugins/paginator.coffee",
        "wintersmith-sassify"  
      ],
      "require": {
        "moment": "moment",
        "_": "underscore",
        "typogr": "typogr"
      },
      "jade": {
        "pretty": true
      },
      "markdown": {
        "smartLists": true,
        "smartypants": true
      },
      "paginator": {
        "perPage": 10
      },
      "sassify": {
        "outputStyle": "compressed",
        "sourceComments": false,
        "sourceMap": false
      }
    }
    

**5.b. Menambahkan wintersmith-tag**

wintersmith-tag digunakan untuk menambahkan tag pada artikel yang kita post, instalasinya menggunakan

    npm install wintersmith-tag
    

Setelahnya kita akan mengubah Sehingga `config.json` kita seperti ini :

    {
      "locals": {
        "url": "https://ft-umj-4.github.io/story",
        "logoUrl": "https://ft-umj-4.github.io/ft-umj-iv.jpg",
        "name": "FT UMJ IV",
        "owner": "GROUP FT UMJ IV",
        "description": "Secuil cerita dan dokumentasi kegiatan dari group FT UMJ IV",
        "sitemap": "sitemap.xml",
        "discuss_id": "ft-umj-4-github-io"
      },
      "plugins": [
        "./plugins/paginator.coffee",
        "wintersmith-sassify",
        "wintersmith-tag"     
      ],
      "require": {
        "moment": "moment",
        "_": "underscore",
        "typogr": "typogr"
      },
      "jade": {
        "pretty": true
      },
      "markdown": {
        "smartLists": true,
        "smartypants": true
      },
      "paginator": {
        "perPage": 10
      },
      "tag": {
        "perPage": 10
      },
      "sassify": {
        "outputStyle": "compressed",
        "sourceComments": false,
        "sourceMap": false
      }
    }
    

Dan untuk menggunakannya, kita hanya perlu menambah tags ditiap atikel markdown yang kita buat, seperti contoh :

    ---
    title: Daftar Anggota FT UMJ IV
    author: ft-umj-iv
    date: 2009-12-12
    template: article.jade
    tags: people
    ---
    

**5.b. Menambahkan wintersmith-sitemap**

wintersmith-sitemap digunakan untuk men-generate file `sitemap.xml` yang bisa kita submit ke webmaster search engine nantinya, untuk instalasinya kita juga harus menambahakan plugin lainnya yang juga menjadi depedency dari wintersmith-sitemap, seperti berikut :

    npm install wintersmith-sitemap wintersmith-contents
    

Setelahnya kita akan menambahkan di `config.json` pada bagian plugins

    {
      "plugins": [
        "./plugins/paginator.coffee",
        "wintersmith-sassify",
        "wintersmith-tag",  
        "wintersmith-contents",
        "wintersmith-sitemap",
        "wintersmith-tag"        
      ]
    }
    

Plugin ini akan menghasilkan file `sitemap.xml` pada saat kita build.

Salah satu contoh blog static yang sudah live dibuat menggunakan wintersmith bisa dilihat di <a href="https://ft-umj-4.github.io/story/" target="_blank" rel="noopener noreferrer">https://ft-umj-4.github.io/story/</a> dimana kodenya juga bisa dilihat dan dipelajari secara gratis di github <a href="https://github.com/ft-umj-4/story" target="_blank" rel="noopener noreferrer">https://github.com/ft-umj-4/story</a>, atau lebih lengkap silahkan kunjungi showcase mereka <a href="https://github.com/jnordberg/wintersmith/wiki/Showcase" target="_blank" rel="noopener noreferrer">disini</a>.

Demikian panduan membuat blog static menggunakan wintersmith dari saya.
   
Semoga bermanfaat, 

Ditulis oleh Irfan Maulana di siang hari.

Salam