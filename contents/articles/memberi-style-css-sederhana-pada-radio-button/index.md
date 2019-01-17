---
title: Memberi style CSS sederhana pada Radio Button
date: 2017-03-31T10:24:37+00:00
author: Irfan Maulana
categories:
  - CSS
  - Frontend
  - Programming
tags: css, frontend, sass
template: article.pug

---
<img width="469" height="313" alt="Memberi style CSS sederhana pada Radio Button" src="https://i.stack.imgur.com/Ngv2E.png" title="" class="aligncenter size-custom" />

Pernahkan Anda melihat komponen input dengan tipe Radio standard yang di sajikan oleh HTML ? Betapa tidak enaknya dipandang mata bukan ? Maka sekarang kita akan coba memberikan sentuhan sederhana kita agar tampilan input dengan tipe Radio ini lebih nyaman untuk dilihat mata.

Pertama, kita akan coba buat elemen HTML radio kita dan coba saja kita lihat apa yang ditampilkan oleh browser kita apabila tidak ada satupun style yang berada disana, berikut potongan kode HTML nya :

<div class="gist-oembed" data-gist="mazipan/064088c71371de3ed8e7150e611b0b1b.json">
</div>

Dengan kode tersebut, akan menghasilkan tampilan seperti berikut :

<figure style="width: 191px" class="wp-caption aligncenter"><img src="https://cdn-images-1.medium.com/max/800/1*uyIFVh7aFFk0WHsg8nXEbA.png" alt="Radio Button Standard" width="191" height="24" /><figcaption class="wp-caption-text"><span style="color: #999999;"><em>Radio Button Standard</em></figcaption></figure></span>

Bila Anda kesulitan memahami kode HTML tersebut Anda mungkin perlu membaca tulisan ini dahulu&nbsp;[Perjalanan Menjadi Frontend Developer Bagi Pemula – Seri 1 – Mengenal HTML](https://mazipanneh.com/blog/2017/03/perjalanan-menjadi-frontend-developer-bagi-pemula-seri-1-mengenal-html/).

<!--more-->

Untuk memberikan sentuhan baru pada komponen ini, maka kita perlu menambahkan beberapa rule CSS kepada potongan kode HTML tersebut. Namun karena kita kan banyak mengulang kata-kata class utama yang akan kita beri style jadi saya memilih menggunakan pre-processor SASS agar membantu memudahkan dalam menulis style tersebut, bila Anda belum tau apa itu SASS silahkan baca dulu artikel berikut&nbsp;[Mengenal&nbsp;dan Belajar SASS Sebagai CSS Pre-Processor.](https://mazipanneh.com/blog/2017/04/mengenal-dan-belajar-sass-sebagai-css-pre-processor/)

Langsung saja, saya telah membuat gist untuk kode SASS yang akan memberikan style pada elemen HTML kita diatas. Silahkan dibaca, dipelajari dan dimodifikasi seenak Anda sesuai dengan kebutuhan masing-masing. Anda bisa temui kodenya seperti berikut :

<div class="gist-oembed" data-gist="mazipan/b13a1add0b1983c6357092e360ed8f5f.json?file=simple-styling-radios.scss">
</div>

Tampilan dari kode diatas akan menghasilkan tampilan yang kurang lebih seperti gambar berikut :

<figure style="width: 275px" class="wp-caption aligncenter"><img src="https://cdn-images-1.medium.com/max/800/1*RMQD11Vh2eqfTe3hP94gUw.png" alt="Radio Button Setelah diberi CSS" width="275" height="32" /><figcaption class="wp-caption-text"><span style="color: #999999;"><em>Radio Button Setelah diberi CSS</em></figcaption></figure></span>

Pada intinya kita memanipulasi psedo element **:before** dan **:after** dari label input Radio tersebut dan menggantinya dengan border solid 1px yang ditambah border radius 50% agar menjadi lingkaran, kita juga menambahkan state di psedo class **:checked** untuk membedakan ketika radio tersebut sedang dalam keadaan terpilih dan tidak.

Selamat belajar ya, bila Anda pemula dan susah memahami beberapa istilah yang saya sebutkan diatas Anda mungkin perlu membaca tulisan ini terlebih dahulu&nbsp;[Perjalanan Menjadi Frontend Developer Bagi Pemula – Seri 2 – Mengenal CSS](https://mazipanneh.com/blog/2017/03/perjalanan-menjadi-frontend-developer-bagi-pemula-seri-2-mengenal-css/).

Anda juga bisa melihat live preview dari pekerjaan tersebut <a href="https://codepen.io/mazipan/pen/ryQZON" target="_blank">disini</a>.

Telah di posting juga di medium saya <a href="https://medium.com/@mazipanneh/sass-untuk-styling-sederhana-radio-1aaef180f62c" target="_blank">disini</a>.

Download Ebook Programming&nbsp;[disini](https://mazipanneh.com/blog/download-ebook-programming/)

Terima kasih,

Ditulis sesaat sebelum pulang kerja oleh Irfan Maulana