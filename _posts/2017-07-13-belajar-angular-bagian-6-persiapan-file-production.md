---
id: 395
title: 'Belajar Angular &#8211; Bagian 6 &#8211; Persiapan File Production'
date: 2017-07-13T07:00:29+00:00
author: Irfan Maulana
layout: post
guid: https://mazipanneh.com/blog/?p=395
permalink: /2017/07/belajar-angular-bagian-6-persiapan-file-production/
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
ampforwp-redirection-on-off:
  - enable
dsq_thread_id:
  - "5984599006"
categories:
  - Javascript
  - Programming
tags:
  - angular
  - angularid
  - frontend
  - javascript
  - programming
---
<figure style="width: 825px" class="wp-caption aligncenter"><img src="https://mazipan.github.io/wp-contents/images/belajar-angular-bagian-6-mazipanneh.jpg" alt="Belajar Angular - Bagian 6 - Persiapan File Production" width="825" height="35" /><figcaption class="wp-caption-text">Belajar Angular &#8211; Bagian 6 &#8211; Persiapan File Production</figcaption></figure> 

**Belajar Angular &#8211; Bagian 6 &#8211; Persiapan File Production** &#8211; Development Angular dengan bantuan Angular-CLI memang sangat dimudahkan baik dari mulai pembuatan project awal, penambahan berbagai komponen sampai pada pembuatan file production yang nantinya akan kita deploy atau host.

Tulisan ini merupakan serial pembahasan mengenai framework **Angular**, Anda mungkin ingin membaca tulisan lainnya berikut :

  1. <a title="belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project" href="https://mazipanneh.com/blog/2017/05/belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project/" target="_blank" rel="noopener noreferrer">Bagian 1 &#8211; Pengenalan dan Inisialisasi Project</a>
  2. <a title="belajar-angular-bagian-2-membuat-komponen" href="http://mazipanneh.com/blog/2017/05/belajar-angular-bagian-2-membuat-komponen/" target="_blank" rel="noopener noreferrer">Bagian 2 &#8211; Membuat Komponen</a>
  3. <a title="belajar-angular-bagian-3-membuat-service" href="https://mazipanneh.com/blog/2017/05/belajar-angular-bagian-3-membuat-service/" target="_blank" rel="noopener noreferrer">Bagian 3 &#8211; Membuat Service</a>
  4. <a title="belajar-angular-bagian-4-membuat-route" href="http://mazipanneh.com/blog/2017/06/belajar-angular-bagian-4-membuat-route/" target="_blank" rel="noopener noreferrer">Bagian 4 &#8211; Membuat Route</a>
  5. <a title="belajar-angular-bagian-5-membuat-custom-pipe-atau-filter" href="http://mazipanneh.com/blog/2017/06/belajar-angular-bagian-5-membuat-custom-pipe-atau-filter/" target="_blank" rel="noopener noreferrer">Bagian 5 &#8211; Membuat Custom Pipe atau Filter</a>
  6. <a title="belajar-angular-bagian-6-persiapan-file-production" href="http://mazipanneh.com/blog/2017/07/belajar-angular-bagian-6-persiapan-file-production/" target="_blank" rel="noopener noreferrer">Bagian 6 &#8211; Persiapan File Production</a>

Dengan Angular-CLI kita bisa dengan mudah menyiapkan file untuk production dengan beberapa perintah bawaan yang telah disediakan.

Berikut ini kita akan belajar bagaimana untuk menyiapkan file yang layak di deploy ke production serta beberapa catatan yang mungkin perlu diperhatikan :

### Build file dengan Angular-CLI

Angular-CLI bisa men-generate file build yang bisa kita deploy ke production dengan cara

<pre>ng build
</pre>

Dengan perintah ini kita akan mendapatkan folder `/dist` yang berisi file `index.html` dan beberapa file .js hasil generate. File-file ini dalam folder ini adalah file yang nantinya bisa kita deploy ke production.

Mudah bukan ?

Tapi coba kita buka salah satu file .js hasil build nya, kita akan menemukan kode javascript yang belum di _minified_ dan tentunya ini bukan harapan kita untuk di deploy ke production, untung nya lagi Angular-CLi juga telah menyediakan perintah untuk build file dengan mode yang sudah ter-_minified_ yakni dengan perintah

<pre>ng build --prod
</pre>

### Set Base Href

Angular memiliki fitur untuk melakukan routing di frontend dan untuk bisa melakukan ini di production, kita mungkin akan perlu menyesuaikan base-href dari `index.html` kita terutama bila kita akan mendeploy aplikasi kita ke tempat yang bukan merupakan root dari domain Anda, misalkan `irfan.com/apps/` maka kita perlu pindahkan base-href nya dari / ke /apps. Cara manual adalah dengan mengubah kode berikut sesuai dengan path yang akan digunakan di production.

<pre>&lt;base href="/path-production/"&gt;
</pre>

Jika cara manual ini terlalu membuat Anda malas, maka kita bisa menambahkan option ketika akan build file menggunakan Angular-CLI seperti contoh

<pre>ng build --prod --base-href /apps/
</pre>

Setelah menjalankan ini, maka base-href yang ada di file `index.html` akan mengarah ke option tersebut.

Perintah diatas juga bisa disingkat seperti berikut

<pre>ng build --prod -bh /apps/
</pre>

### Set Deploy Url

Seperti pada kasus sebelumnya, jika kita ingin mendeploy ke tempat yang bukan merupakan root domain seringkali terjadi salah path termasuk dari file-file yang di generate oleh Angular-CLI.

Angular-CLI secara default akan membuatkan path yang mengarah ke file .js hasil build dengan tanpa path di depannya, contoh `main.bundle.js`. Secara teori harusnya tidak ada masalah dengan cara ini, karena dengan tidak menyebutkan path di depannya berarti akan diarahkan ke folder tempat `index.html` itu berada. Namun entah kenapa terkadang ada saja masalah dengan hal ini, dan salah satu caranya adalah dengan menambahkan relative path di depannya.

Cara manual yang bisa kita lakukan adalah dengan mengubah path `main.bundle.js` menjadi
  
`/apps/main.bundle.js` misalnya. Namun cara ini lumayan membuat capek dan rentan terjadi kelupaan, kabar baiknya lagi Angular-CLI juga telah menyiapkan option untuk hal ini jadi kita tidak perlu mengubah manual lagi namun menggunakan perintah seperti berikut

<pre>ng build --prod -bh /apps/ --deploy-url /apps/
</pre>

Atau bisa juga kita singkat seperti ini

<pre>ng build --prod -bh /apps/ -d /apps/
</pre>

Setelah menggunakan perintah ini maka path yang di generate oleh Angular-CLI akan disesuaikan ke path ini.

### Set ke npm script

Perintah-perintah diatas tentu akan membuat kita lupa kalau tidak kita buat shortcut untuk mempermudah pekerjaan kita, jadi kita bisa memindahkan perintah itu ke dalam `package.json` kita di bagian `script`, seperti contoh

<pre>"scripts": {
    "dist": "ng build --prod --base-href /apps/ -d /apps/"
  }
</pre>

Dengan begini kita bisa dengan mudah memanggil perintah ini kembali, cukup dengan perintah

<pre>npm run dist
</pre>

Dan taraaaa&#8230;

Sekian tulisan dari saya, semoga bermafaat.

Kode yang digunakan dalam tutorial ini diambil dari repository <a href="https://github.com/mazipan/ng2-starwars" target="_blank" rel="noopener noreferrer">https://github.com/mazipan/ng2-starwars</a> dan bisa dilihat demo nya di : <a href="http://mazipan.github.io/ng2-starwars/" target="_blank" rel="noopener noreferrer">http://mazipan.github.io/ng2-starwars/</a>.

Silahkan dipelajari source code nya.

Ditulis oleh Irfan Maulana.

Salam.