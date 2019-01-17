---
title: 'Perjalanan Menjadi Frontend Developer Bagi Pemula - Seri 1 - Mengenal HTML'
date: 2017-03-12T16:31:48+00:00
author: Irfan Maulana
categories: Frontend, HTML, Programming
tags: frontend, html, programming
template: article.pug
---
<img class="aligncenter" src="https://d3rj1gznkm47xj.cloudfront.net/6c91737b-715e-4c59-aad0-b947bb097907.png" alt="Mengenal HTML" />

**Mengenal HTML** &#8211; Web developer kini bisa dipisahkan ke dalam 2 spesialisasi yakni Backend dan Frontend developer. Dalam post ini kita akan membahas beberapa pengetahuan dasar untuk menjadi Frontend developer.&nbsp;

Pada postingan pertama saya akan membahas pengetahuan dasar mengenai HTML, kenapa dimulai dari HTML ? Tentu saja karena HTML menjadi dasar bagi semua web developer dan saya ingin membahas dari hal yang mendasar karena memang target dari post ini adalah mereka yang benar-benar pemula dan ingin belajar mengenai web development terutama di sisi Frontend.

**
   
** 

**Apa itu HTML ?**

HTML atau Hypertext Markup Language merupakan kerangka dari halaman website, suatu kode yang membangun sebuah tampilan website. Saya memberikan ilustrasi bahwa membuat kode HTML sama seperti saat kita bermain game _Tetris&nbsp;_dimana kita diharuskan meletakkan satu blok ke dalam tempat yang sesuai, bila di anggap bahwa website itu adalah sebuah rumah maka HTML adalah batu bata yang menyusun dan menegakkan rumah tersebut.
   
**
   
** 

<!--more-->

**HTML Dasar**
   
HTML mempunyai inisialisasi deklarasi di baris paling awal&nbsp;

<pre>&lt;!DOCTYPE html&gt;</pre>

Setiap element HTML diawali dengan tag pembuka dan diakhiri dengan tag penutup.
   
Kita bisa memulai kode HTML di dalam tag

<pre>&lt;html&gt;&lt;/html&gt;</pre>

Di bawah html tag ada tag _head_ yang berisi informasi mengenai identitas suatu website seperti title, icon, metatag.
   
Di dalam tag _head_ kita juga bisa manambahkan sumber daya eksternal yang dibutuhkan untuk di load diawal seperti CSS ataupun kritikal Javascript.

Setelah tag head baru akan ada tag _body_, di dalam tag body inilah kita akan menulis komponen HTML kita yang sebenarnya.

Sebelum tag penutup _body_ biasanya digunakan untuk meload script baik internal maupun eksternal.
   
**
   
** 

**HTML Element**

HTML Element merupakan semua yang dimulai tag pembuka dan diakhiri dengan tag penutup.

HTML Element bisa dibuat bersarang (nested), yang artinya suatu elemen menjadi anak (child) dari elemen lainnya, contoh :

<pre>&lt;div&gt;
&nbsp; &nbsp; I am parent
&nbsp; &nbsp; &lt;div&gt;I am child&lt;/div&gt;
&lt;/div&gt;</pre>

**
   
** 

**HTML Attribute**

HTML Attribute merupakan informasi tambahan pada sebuah HTML Element.
   
Di deklarasikan pada tag pembuka dari sebuah HTML Element.
   
HTML Element biasanya berupa key-value, contoh :

<pre>&lt;div id="sayaSebuahAttribute"&nbsp;
class="sayaJugaAttibute"&nbsp;
data-target="iniJugaLoh"&gt;
&lt;/div&gt;</pre>

**
   
** 

**Heading dan Text**

Tag heading yang biasa digunakan untuk title dan subtitle adalah h1, h2, &#8230; h6. Penggunaan heading dapat membantu SEO karena memudahkan search engine untuk mengidentifikasi halaman website Anda. Heading akan membuat satu block yang artinya elemen setelahnya akan berada di baris baru bukan disampingnya.

Untuk text sendiri kita bisa menggunakan tag  _p_ yang mewakili sebuah paragraf baru ataupun _span_ yang merupakan text biasa. Pada text juga terdapat beberapa tahun yang bisa digunakan untuk formating seperti _strong, b, i, em, small_, dan lainnya.
   
**
   
** 

**Block**

Block adalah elemen HTML yang sering kali digunakan sebagai wadah bagi elemen-elemen lain. Sifat dasar block ini sendiri akan membuat satu baris baru dari elemen terakhir diatasnya.

Block yang paling umum digunakan adalah tag _div_. Selain itu ada beberapa tag block yang merepresentasikan posisinya seperti&nbsp;_header, main, footer, aside, nav, article, section,_ dan lain-lain.
   
**
   
** 

**Table**

Table digunakan untuk menampilkan data atau bisa juga untuk mengorganisir beberapa elemen dengan lebih mudah dan teratur. Seperti namanya table ditandai dengan tag _<table></table>_.&nbsp;

Di dalam table ada sebuah wadah&nbsp;_thead_ yang merupakan wadah bagi header sebuah tabel dan juga _tbody_ yang merupakan wadah bagi isi konten dari tabel tersebut.

Baris pada sebuah table ditandai dengan tag _<tr>_ sedangkan untuk kolom digunakan tag _<td>_ kecuali jika kolom tersebut ada di dalam header maka bisa digunakan tag _<th>._&nbsp;Kita bisa juga menggabungkan beberapa baris atau kolom dengan menambahkan attribute _rowspan_ atau _colspan_ di element yang akan digabungkan.
   
**
   
** 

**List**

List merupakan elemen yang digunakan untuk menyajikan data atau elemen secara berurutan kebawah. Untuk membuat liat kita bisa menggunakan block <ul>&nbsp;</ul> atau <ol>&nbsp;</ol> dimana _ol_ biasa dikenal dengan ordered list atau liat yang berurutan dan _ul_ sebaliknya. Untuk item dibawah nya kita bisa menggunakan tag <li>&nbsp;</li>.

Yang perlu di garis bawahi adalah bahwa kita bisa menggunakan list tidak selalu untuk hal yg disusun berurutan secara horizontal namun bisa juga hal lainnya, namun kita sering menggunakan listrik ketika harus bermain dengan siblings nya pada akhirnya, seperti saat pembuatan menu atau navigasi.
   
**
   
** 

**Form**

Form merupakan kumpulan dari beberapa inputan yang akan dikirimkan/diproses secara bersamaan.

Menggunakan tag <form>&nbsp;</form> sebagai deklarasi nya dan terdapat block <fieldset>&nbsp;</fieldset> sebagai wadah bagi beberapa inputan yang akan disatukan kedalam satu kelompok tampilan.
   
**
   
** 

**Input**

Input merupakan elemen yang bisa menerima isian dari pengguna. Terdapat banyak variasi dari input element ini yang masing-masing nya memiliki kegunaan dan tampilan yang berbeda sesuai dengan spesifikasi nya.

Beberapa bisa dibedakan dengan menjelaskan attribute _type_ pada input element ini. Attribute type yang tersedia antara lain : _text, password, number, tel, email, date, range, radio, checkbox_ dan lain-lain.

Inputan dengan tipe _radio_ digunakan ketika pengguna hanya bisa memilih satu dari pilihan yang disediakan, jika pengguna bisa memilih lebih dari satu maka gunakan tipe _checkbox_.

Anda bisa menggunakan _select_ dan _option_ jika pilihan yang disediakan terlalu banyak untuk ditampilkan.

Inputan dengan tipe _submit_ akan mengirimkan semua data yang ada dalam form ketika ditekan.
   
**
   
** 

**Latihan**

Percuma membaca seharian bila belum mencoba sendiri, ayo mulai buat layout sederhana kalian sendiri.

Saya sendiri akan membuat satu tampilan CRUD dari sebuah Contact yang berisi nama, email, gender dan alamat. Selamat berkreasi&#8230; &#x1f4aa;&#x1f4aa;&#x1f4aa;
   
**
   
** 

**Bahan Bacaan**

Baca lebih lengkap disini :&nbsp;<https://www.w3schools.com/html/>

**
   
** 

**Catatan tambahan**

Materi ini juga pernah saya bawakan di beberapa forum, berikut sumber materi nya :

Slide presentasi :&nbsp;<https://www.slideshare.net/IrfanMaulana21/journey-to-the-front-end-world-part1-the-skeleton>

Contoh kode :&nbsp;<https://github.com/mazipan/journey-to-the-frontend-world/tree/master/part-1>

Halaman demo :&nbsp;<https://mazipan.github.io/journey-to-the-frontend-world/part-1/index.html>

Download Ebook Programming&nbsp;[disini](https://mazipanneh.com/blog/download-ebook-programming/)

Jangan lupa nantikan seri selanjutnya ya &#x1f609;&#x1f609;&#x1f609;
   
Ditulis di malam hari setelah menonton bola kala itu.

Terima Kasih,

Salam.