---
title: 'Perjalanan Menjadi Frontend Developer Bagi Pemula - Seri 2 - Mengenal CSS'
date: 2017-03-13T22:12:36+00:00
author: Irfan Maulana
categories: CSS, Frontend, Programming
tags: css, frontend, programming
template: article.pug

---

<img class="aligncenter" src="https://4.bp.blogspot.com/-bSC70QFZkuI/Vuww_pDfYWI/AAAAAAAAG9E/qyILtW2DIQQNAL6perYoxoMsU1bYnMSFQ/s640/css-introduction.png" alt="Mengenal CSS" />

**Mengenal CSS** &#8211; Setelah seri 1 [membahas HTML](https://mazipanneh.com/blog/2017/03/perjalanan-menjadi-frontend-developer-bagi-pemula-seri-1-mengenal-html/), pada seri kedua kali ini saya akan membahas mengenai CSS dasar.
   
Sekali lagi saya mengingatkan bahwa tulisan ini adalah rangkaian untuk memberikan pengetahuan dasar bagi mereka yang pemula yang ingin belajar dan mengetahui dasar untuk menjadi Frontend Developer.

Berikut bahasan mengenai CSS, silahkan disimak.

&nbsp;

**Apa itu CSS ?**
   
CSS merupakan kependekan dari _Cascading Style Sheet_. Beberapa orang menyebut CSS merupakan kosmetik dari sebuah halaman web namun pada penerapannya CSS seringkali mempunyai peran yang lebih vital dari hanya sebuah kosmetik. CSS memberikan layout, posisi, eksistensi dan variasi pada sebuah elemen HTML, CSS juga menentukan bagaimana satu elemen HTML ditampilkan disebuah website. CSS menghapuskan penggunaan HTML attribute sebagai style formatting dan memindahkan ke dalam CSS.

&nbsp;

**Bagaimana memulai CSS ?**
   
CSS datang bersamaan dengan HTML tag

<pre>&lt;style&gt;
    body{something}
&lt;/style&gt;&nbsp;
</pre>

di dalam _head_ block dari sebuah HTML, saya biasa menyebut CSS seperti ini sebagai **internal CSS**.

CSS juga bisa datang bersamaan dengan HTML elemen dengan langsung menambahkan attribut

<pre>&lt;div style="..."&nbsp;&gt;&lt;/div&gt;
</pre>

pada elemen tersebut, saya sendiri menyebut CSS seperti ini sebagai **inline CSS**.

Selain itu CSS juga bisa di definikan di file tersendiri yang artinya terpisah dari file HTML nya yakni menggunakan file dengan ekstensi .css. Untuk memanggilnya sendiri menggunakan tag _link_ didalam head block juga, namun dengan pendefinisian url path dari file tersebut, misal

<pre>&lt;link rel="stylesheet" type="text/css" href="pathFileCSS" /&gt;&nbsp;
</pre>

CSS seperti ini saya sebut sebagai **eksternal CSS**.

CSS memiliki urutan prioritas tersendiri bila ada hal yang sama didefinisikan namun dengan tipe CSS yang berbeda-beda, berikut adalah urutan prioritas tersebut :

  1. Inline CSS langsung pada attribute HTML.
  2. Internal CSS dan kemudian Eksternal CSS yang terdefinikan di head.
  3. User Agent CSS atau CSS standard bawaan dari masing-masing browser.

&nbsp;

**CSS Syntax**
   
Syntax css ditulis menggunakan key-value dengan colon atau titik dua (:) sebagai pembatas antara key dan value ini, sementara untuk pembatas antara rule menggunakan semicolon atau titik koma (;).
   
Misal :

<pre>font-size: 14px;
color: red;
</pre>

Jika menggunakan internal maupun eksternal CSS maka masing-masing rule dibuka dan tutup menggunakab curly bracket ({}), misal :

<pre>.font-red{
    font-size: 14px;
    color: red;
}
.font-blue{
    font-size: 14px;
    color: blue;
}
</pre>

&nbsp;

**CSS Selector Dasar**
   
CSS Selector digunakan untuk mencari element HTML yang akan diberikan style. CSS akan memberikan style kepada elemen HTML yang didefinisikan di dalam selector seperti berdasarkan attribut id, class atau yang lainnya. Selector ID digunakan untuk mencari elemen yang unik yang memiliki attribute ID seperti yang dituliskan dan hanya satu di suatu halaman web. Selector ID ditulis menggunakan awalan tagar (#) kemudian nama ID dari elemen tersebut, contoh :

<pre>#font-red{
    font-size: 14px;
    color: red;
}
</pre>

Selector class akan memberikan style kepada semua elemen HTML yang memiliki attribute class dengan nilai seperti yang tersebut. Class ini tidak unik seperti ID dan tujuannya memang agar bisa digunakan berulang-ulang. Selector class ini ditulis dengan awalan titik (.), contoh :

<pre>.font-red{
    font-size: 14px;
    color: red;
}
</pre>

Kita bisa juga menggunakan selector langsung berupa element HTML nya yang mana akan berefek ke semua elemen yang di definisikan, contoh :

<pre>input{
    font-size: 14px;
    color: red;
}
a{
    color: blue;
}
</pre>

&nbsp;

**CSS Selector Kombinasi**
   
Selector bisa juga dikombinasikan lebih dari satu, tujuannya biasanya untuk lebih mendetailkan pencarian suatu elemen. Selector kombinasi ini bisa dibagi menjadi dua berdasarkan funsinya.

1. Bersarang (Nested)
   
Digunakan untuk mencari anak dari suatu elemen HTML berdasarkan parent nya, contoh :

<pre>.class1 p{
    color: red;
}
.class1 &gt; p{
    color: blue;
}
</pre>

Kita bisa menggunakan spasi maupun tanda panah kekanan (>), dimana spasi akan mengambil semua anak dari parent nya sedangkan tanda > hanya akan mengambil anak yang tepat berada dibawah parentnya.

2. Bersebelahan (Sibling)
   
Untuk mencari sibling dari suatu elemen kita bisa menggunakan tanda (+) maupun tanda (~), dimana tanda (+) akan mencari yang tepat dan terdekat berada di sebelah (bukan sebagai anaknya) suatu elemen sedangkan tanda (~) akan mencari semua yang ada disebelah elemen tersebut, contoh :

<pre>.class1 + p{
    color: red;
}
.class1 ~ p{
    color: blue;
}
</pre>

&nbsp;

**CSS Selector Lanjutan**
   
Kita bisa juga memilih suatu elemen yang mengandung suatu kata, misal :

<pre>[class*="bli-"]{
    color: red;
}
</pre>

Yang artinya kita ingin mendapatkan semua elemen yang mempunyai class dengan awalan bli-.

Lebih lanjut soal selector CSS bisa dibaca [disini](https://www.w3schools.com/cssref/css_selectors.asp)

**
   
** 

**Pseudo Class**
   
Digunakan untuk mendefinisikan beberapa spesial state dari suatu elemen HTML seperti ketika di hover, ketika aktif, ketika di disable dan state lainnya. Syntaxnya menggunakan titik dua (:) setelah selectornya, misal :

<pre>.link:hover{
    color: red;
}
.link:focus{
    color: red;
}
.link:active{
    color: red;
}

</pre>

**
   
** 

**Pseudo Element**
   
Digunakan untuk memberikan style pada suatu bagian tertentu di dalam element HTML. Syntaxnya menggunakan dua kali titik dua (::) setelah selectornya, misal :

<pre>.link::before{
    color: red;
}
.link::after{
    color: red;
}
ul li::last-child{
    color: red;
}

</pre>

**
   
** 

**Menggabungkan Rule**
   
Kita bisa menggabungkan beberapa rule yang memiliki spesifikasi sama kedalam satu inisialisasi. Syntaxnya menggunakan koma (,), misal :

<pre>.link, a, .ref{
    color: red;
}

</pre>

**
   
** 

**Catatan tambahan**

Materi ini juga pernah saya bawakan di beberapa forum, berikut sumber materi nya :

Slide presentasi :&nbsp;[disini](https://www.slideshare.net/IrfanMaulana21/journey-to-the-front-end-world-part2-the-cosmetic)

Contoh kode :&nbsp;[disini](https://github.com/mazipan/journey-to-the-frontend-world/tree/master/part-2)

Halaman demo :&nbsp;[disini](https://mazipan.github.io/journey-to-the-frontend-world/part-2/index.html)

Download Ebook Programming&nbsp;[disini](https://mazipanneh.com/blog/download-ebook-programming/)