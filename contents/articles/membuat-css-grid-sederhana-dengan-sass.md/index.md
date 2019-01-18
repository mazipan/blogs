---
title: Membuat CSS Grid Sederhana dengan SASS
date: 2017-04-08T11:51:58+00:00
author: Irfan Maulana
categories: CSS, Frontend, Programming
tags: css, frontend, sass
template: article.pug
---
<figure style="width: 480px" class="wp-caption aligncenter"><img src="https://i.stack.imgur.com/F4cBF.jpg" alt="Membuat CSS Grid Sederhana dengan SASS" width="480" height="307" /><figcaption class="wp-caption-text"><span style="color: #999999;"><em>Gambaran grid layout pada sebuah halaman web</em></span></figcaption></figure> 

**Membuat CSS Grid** - CSS Grid merupakan layout kumpulan class CSS yang digunakan untuk mengatur layout sebuah halaman website. Pada framework-framework CSS populer di luar sana, hampir semuanya mengakomodir kebutuhan CSS Grid dengan pendekatannya masing-masing.

CSS Grid biasanya membagi layout ke dalam konsep `row` dan `column`. Dimana `row` akan berfungsi seperti `tr` pada _table_ HTML, sedangkan `column` akan berfungsi layaknya `td` pada _table_ HTML.

<span class="more"></span>

Pada tutorial kali ini kita akan coba membuat CSS Grid sendiri dengan sedikit mencontoh pada apa yang dilakukan oleh beberapa framework populer diluar sana dengan bantuan [CSS Pre-Processor SASS](https://mazipanneh.com/blog/2017/04/mengenal-dan-belajar-sass-sebagai-css-pre-processor/) agar mempermudah kita dalam membuatnya, bila Anda belum familiar dengan SASS mungkin Anda perlu membaca artikel <a href="https://www.codepolitan.com/setup-sass-dengan-nodejs-dan-gulp-58e1e72eb3ded" target="_blank">Setup SASS dengan Node.js dan Gulp</a> terlebih dahulu, atau bila Anda lebih familiar dengan Grunt sebagai task Runner silahkan download [Ebook membuat Framework CSS sendiri](https://mazipanneh.com/blog/download-ebook-programming/)&nbsp;karena di dalamnya terdapat langkah-langkah setup SASS dengan Grunt.

Pertama kita akan buat class `.row` kita, namun sebelumnya kita akan men-_define_ **mixin&nbsp;**`clearfix` yang akan kita pakai di class `.row` kita, sebagai berikut :

<div class="gist-oembed" data-gist="mazipan/9a58bd1a8bda0a8a5b4bb2daf2a5ddb8.json">
</div>

Mixin `clearfix` ini digunakan agar antar class `row` tidak terjadi tumpang tindih karena di dalamnya biasanya akan banyak menggunakan _rule_ `float: something`.

Setelah membuat **mixin** tersebut, kita akan membuat class `.row`-nya sedikit mengikuti dengan apa yang dibuat oleh framework foundation dalam menetapkan max-width nya agar ketika ditampilkan dilayar yang terlalu lebar tidak sampai _fullscreen_ , berikut kodenya:

<div class="gist-oembed" data-gist="mazipan/1d89fdcae5d021382de10a550c46d437.json">
</div>

Setelah berhasil membuat row, kita akan membuat class `.column` kita, dan mengikuti dari beberapa framework populer yang membagi column mereka kedalam 12 bagian maka kita juga akan membaginya kedalam 12 bagian, dimana kita akan memberikan nama class sesuai dengan urutan angka dari `column-1`&nbsp;sampai `column-12` yang masing-masing memiliki lebar yang jika dijumlahkan akan menjadi 100% width. Untuk implementasi kodenya, kurang lebih seperti berikut :

<div class="gist-oembed" data-gist="mazipan/a03e39916e1aaa6d8fe7d456a5d63313.json">
</div>

Dan kebutuhan dasar CSS Grid kita telah selesai dibuat dengan cepat, sederhana namun tetap memenuhi kaidah Grid Layout. Anda bisa memodifikasi, menambahkan ataupun mengurangi sesuai dengan kebutuhan masing-masing karena artikel ini memang dibuat untuk kebutuhan belajar dasar-dasarnya saja.

Untuk menggunakan class tersebut bisa lihat contoh kode berikut :

<div class="gist-oembed" data-gist="mazipan/ce3041dc41e44c341e50300dd39b5180.json">
</div>

Anda bisa melihat hasil tampilan kode tersebut di halaman demo <a href="https://mazipan.github.io/bem-kit/demo/#grids" target="_blank" rel="nofollow">bem-kit</a>&nbsp;ini.

Untuk full source code pembuatan Grid CSS Anda bisa coba lihat di github repo saya <a href="https://github.com/mazipan/bem-kit" target="_blank">disini</a>, disitu sudah terdapat cara saya membuat Grid CSS beserta beberapa tambahan kebutuhan lainnya seperti `offset` dan lain-lain yang bisa Anda lihat <a href="https://github.com/mazipan/bem-kit/blob/master/src/_scss/rules/_grids.scss" target="_blank" rel="nofollow">disini</a>. Anda bisa juga melihat artikel saya mengenai CSS, SASS dan teknologi terkait lainnya <a href="http://mazipanneh.com/blog/tag/css/" target="_blank">disini</a>&nbsp;. Artikel ini telah di publikasikan juga di <a href="https://www.codepolitan.com/panduan-membuat-css-grid-sederhana-dengan-sass-58e20d5ecc48f" target="_blank" rel="nofollow">codepolitan.com</a>.

Download Ebook Programming&nbsp;[disini](https://mazipanneh.com/blog/download-ebook-programming/)

Terima kasih dan semoga bermanfaat.

Ditulis oleh <a href="https://mazipanneh.com/blog/" target="_blank">Irfan Maulana</a> di sore hari yang mendung kala itu. 🙂