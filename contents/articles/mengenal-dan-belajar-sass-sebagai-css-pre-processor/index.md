---
title: Mengenal dan Belajar SASS Sebagai CSS Pre-Processor
date: 2017-04-05T11:56:36+00:00
author: Irfan Maulana
categories: CSS, Frontend, Programming
tags: css, frontend, sass
template: article.pug
---
<img class="aligncenter" src="http://wiseheartdesign.com/images/articles/sass-lang.png" alt="Mengenal dan Belajar SASS Sebagai CSS Pre-Processor" />

**Mengenal SASS**, **Belajar SASS** - Sudah tau **SASS** ? Yap hari ini kita akan belajar dan mengenal SASS sebagai salah satu vendor CSS Pre-processor yang tersedia di pasaran. Artikel ini ditujukan untuk yang sudah paham dengan CSS, bila Anda merasa masih terlalu awam dengan CSS mungkin [artikel ini](https://mazipanneh.com/blog/2017/03/perjalanan-menjadi-frontend-developer-bagi-pemula-seri-2-mengenal-css/) akan membantu Anda memahami CSS.

Pre-processor sendiri merupakan extend dari CSS, dimana ketika kita ngoding CSS kita biasa berkutat dengan bahasa yang sudah harus matang dan tidak boleh ada proses lagi bagi browser untuk memahami nya, ini yang membuat kita tidak bisa menanamkan _logic_ seperti perulangan, peng-kondisian, ataupun pemakaian kembali kode yang ada. Dari sinilah lahir berbagai pre-processor untuk CSS, termasuk SASS itu sendiri.

<span class="more"></span>

Jadi dengan SASS kita bisa melakukan banyak hal yang sebelumnya tidak mungkin dilakukan oleh CSS dengan hasil akhir yang sama yakni file dengan ekstensi CSS. Tentunya pre-processor semacam SASS ini sudah menjadi kebutuhan umum bagi project yang lumayan besar, dikerjakan banyak orang, dan memiliki tingkat kompleksitas tinggi terutama di kode CSS nya. Jadi ayo belajar mengenai SASS !

SASS merupakan pre-processor yang dikembangkan diatas Ruby sebagai _Engine_ nya, yang berarti kita juga butuh Ruby untuk menjalankannya atau sekedar ingin belajar dan mencobanya. Syukurlah sekarang ini sudah dikembangkan library untuk _porting_ ke berbagai bahasa termasuk NodeJS yang memang favorit bagi banyak _Frontend Developer_.

Saya pernah menulis di codepolitan mengenai instalasi minimal untuk SASS di NodeJS menggunakan Gulp sebagai compiler runner nya, Anda bisa baca [disini](https://www.codepolitan.com/setup-sass-dengan-nodejs-dan-gulp-58e1e72eb3ded), Saya juga pernah menulis [Ebook membuat Framework CSS sendiri](https://mazipanneh.com/blog/download-ebook-programming/) yang berisi juga langkah-langkah untuk setup SASS di NodeJS menggunakan Grunt, Anda bisa baca jika belum mengetahui kedua hal tersebut.

SASS memiliki 2 jenis syntax yakni SASS native dan SCSS syntax, Saya sendiri rekomendasi menggunakan SCSS syntax karena lebih mudah untuk dipelajari kita juga hanya akan membahas syntax SCSS di tulisan kali ini.

**Variabel**

Pertama kita akan bahas mengenai penggunaan variabel dalam SASS, yang memiliki fungsi seperti variabel dalam bahasa pemrograman lain, bisa digunakan berulang dan oleh fungsi-fungsi lain. Variable pada SASS ditandai dengan **$** sebagai prefixnya, berikut contoh penggunaan variabel dalam SASS :

<div class="gist-oembed" data-gist="mazipan/0114631c2bec4e15a2f50743fd5f6d59.json">
</div>

**Nesting**

Seringkali di CSS kita harus berulang-ulang menulis selector yang sama dan di dengan SASS kita tidak perlu melakukannya, contoh saja bila biasanya kita di CSS harus menuliskan :

<div class="gist-oembed" data-gist="mazipan/05e0c60250f4699a5651f10a82e46666.json">
</div>

Maka di SASS kita dipermudah dengan cukup mengetikkan :

<div class="gist-oembed" data-gist="mazipan/a4bd0e2c50bc2a11340e6098fefbe422.json">
</div>

Selain itu kita bisa juga menambahkan tanda **&** yang berarti kita ingin menyertakan parent nya sebagai prefix di output nya nanti, seperti contoh berikut :

<div class="gist-oembed" data-gist="mazipan/ca8f21dc452082e19c82f3e600bca20e.json">
</div>

**Import**

Salah satu keunggulan SASS dibandingkan CSS biasa adalah bahwa SASS bisa memecah satu file CSS kedalam beberapa file SASS kecil yang bisa tetap di compile jadi satu file CSS, ini sangat berguna untuk tetap menjaga kode kita mudah dibaca dengan mengurangi line of code dalam satu file. Kita bisa menggunakan fitur **@import** dari SASS ini. Kita bisa memberi nama file SASS dengan diawali underscore (_) yang berarti file tersebut tidak akan di produksi menjadi file CSS melainkan hanya digunakan sebagai modul yang nantinya akan di import oleh file lain.

**Mixin**

Sebagai developer seringkali kita tidak ingin mengetik hal yang sama berulang kali, mixin salah satu yang mengakomodir keinginan kita tersebut. Dengan mixin kita seperti membuat satu fungsi yang nantinya akan kita pakai di tempat lain. Berikut adalah contoh mixin yang bisa dilihat di gist dibawah :

<div class="gist-oembed" data-gist="mazipan/9a58bd1a8bda0a8a5b4bb2daf2a5ddb8.json">
</div>

Dan berikut adalah gist untuk contoh penggunaan mixin tersebut :

<div class="gist-oembed" data-gist="mazipan/1d89fdcae5d021382de10a550c46d437.json">
</div>

**Extend**

Seperti pada OOP extend juga digunakan untuk mewarisi apa yang dipunyai oleh parent yang di extend sehingga tidak perlu lagi mengetik hal yang sama. Berikut contoh penggunaan @extend ini :

<div class="gist-oembed" data-gist="mazipan/a5afb2c80b9979af316d855ad9222b1e.json">
</div>

**Operator**

SASS bisa melakukan berbagai perhitungan matematis untuk membantu kita, seperti dalam contoh kode berikut dimana saya melakukan perhitungan width class column :

<div class="gist-oembed" data-gist="mazipan/a03e39916e1aaa6d8fe7d456a5d63313.json">
</div>

**Kondisional**

SASS bisa melakukan kondisional berdasarkan variabel yang di assign, contoh sederhananya seperti kode berikut :

<div class="gist-oembed" data-gist="mazipan/70787b375f2156086b041af1b88840ef.json">
</div>

**Perulangan**

Untuk melakukan perulangan SASS bisa menggunakan for maupun while, berikut contoh kode looping menggunakan @for :

<div class="gist-oembed" data-gist="mazipan/a03e39916e1aaa6d8fe7d456a5d63313.json">
</div>

Sedangkan contoh menggunakan @while bisa dilihat disini :

<div class="gist-oembed" data-gist="mazipan/7fb031dec1395802f516a71245ca4d34.json">
</div>

SASS bisa juga melakukan perulangan menggunakan @each, yang ini silahkan baca di [official website](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) nya ya.

Demikian penjelasan singkat dari saya mengenai SASS sebagai CSS Pre-processor.

Saya juga pernah membuat presentasi mengenai pengenalan SASS ini, silahkan dilihat [disini](https://www.slideshare.net/IrfanMaulana21/bliblidotcom-sass-introduction) atau [disini](https://speakerdeck.com/mazipan/sass-css-preprocesoor-introduction). Baca juga artikel saya lainnya mengenai CSS, SASS dan hak terkait [disini](https://mazipanneh.com/blog/tag/css/).

Download Ebook Programming [disini](https://mazipanneh.com/blog/download-ebook-programming/)

Semoga bermanfaat bagi yang baru belajar mengenai SASS ya.

Ditulis oleh Irfan Maulana di jam istirahat kerja.

Salam.