---
ID: 479
post_title: >
  Langkah-langkah memasang i18n di Vue.js
  project
author: Irfan Maulana
post_excerpt: ""
layout: post
permalink: >
  https://mazipanneh.com/blog/2018/05/langkah-langkah-memasang-i18n-di-vue-js-project/
published: true
post_date: 2018-05-27 11:48:16
---
[caption id="" align="aligncenter" width="500"]<img src="https://cdn-images-1.medium.com/max/800/1*CfsCXJtHf9hhwE65VATiOQ.png" alt="" width="500" height="412" /> i18n visualisasi (sumber : https://make.wordpress.org)[/caption]

Internationalization (i18n) dalam sebuah software berarti ketika software tersebut mendukung beberapa bahasa. Fitur ini tentu akan sangat membantu terutama bila software Anda memang ditargetkan pada lebih dari satu negara sehingga mengharuskan mendukung beberapa variasi bahasa.

Di dalam project yang dibuat menggunakan Vue.js hal ini bisa dilakukan dengan mudah bahkan dalam hitungan menit kita sudah bisa menyelesaikan contoh sebuah aplikasi yang mendukung multi bahasa.

Berikut beberapa langkah untuk setup i18n di dalam Vue.js :

<strong>1. Install dependency</strong>

Kita akan menggunakan bantuan sebuah plugin yakni vue-i18n.
Bila menggunakan npm:
<pre><code>npm install vue-i18n — save</code></pre>
atau bisa juga menggunakan yarn dengan perintah:
<pre><code>yarn add vue-i18n</code></pre>
<strong>2. Setup file locale</strong>

File locale ini berupa Json file yang berisi terjemahan dari berbagai kata yang akan digunakan dalam aplikasi kita. Misalnya saja kita ingin mendukung bahasa Indonesia dan bahasa Inggris dalam aplikasi kita, maka kita akan membuat dua file locale yakni id.json dan en.json.

Contoh file ini bisa dilihat di :
<ol>
 	<li><a href="https://github.com/mazipan/chucknorris/blob/master/src/i18n/id.json" target="_blank" rel="noopener">id.json</a></li>
 	<li><a href="https://github.com/mazipan/chucknorris/blob/master/src/i18n/en.json" target="_blank" rel="noopener">en.json</a></li>
</ol>
<strong>3. Setup plugin</strong>

Untuk menggunakan plugin tersebut kita bisa dengan mudah mendefinisikan bahasa yang akan kita pakai beserta file locale yang telah kita buat sebelumnya. Berikut adalah contoh setup plugin tersebut :

<img class="aligncenter" src="https://cdn-images-1.medium.com/max/800/1*ISmEFYkGcPsyTeF22XCwRg.png" />

Seperti terlihat, kita meng-import dua file json locale kita kemudian mendefinisikan default EN di dalam object VueI18n di dalam property locale, dan mendefinisikan bahasa lain yang tersedia dalam property messages.

<strong>4. Menyisipkan kedalam Vue Instance</strong>

Setelah membuat file diatas, kita kan menyisipkan setup file tadi ke dalam Vue Instance kita yang biasanya terdapat dalam file main.js. Berikut contoh kodenya :

<img class="aligncenter" src="https://cdn-images-1.medium.com/max/800/1*6ACofjVF00WuvWO2bPCVjw.png" />

Bisa dilihat ketika kita membuat <i>new Vue({})</i>, kita menyisipkan file setup i18n yang kita buat sebelumnya.

<strong>5. Menggunakan di HTML Template</strong>

Setelah langkah diatas dilakukan, maka kita bisa dengan mudah digunakan di html template kita dengan sintaks {{ $t(‘key’) }} dimana key adalah key yang terdapat pada file Json locale kita. Berikut adalah potongan kode penggunaan plugin vue-i18n di dalam HTML template :

<img class="aligncenter" src="https://cdn-images-1.medium.com/max/800/1*SvD85sxkikZdv_PYT_n-8g.png" />

Terlihat di gambar diatas kita membuat beberapa terjemahan dengan cara menggunakan sintaks : {{$t(‘tab.search’)}} dan juga {{$t(‘sidebar.about’)}}. Dengan kode ini berarti kita telah mendefinisikan sebuah key-value di dalam file json kita seperti contoh berikut :

<img class="aligncenter" src="https://cdn-images-1.medium.com/max/800/1*h9BI7UxMHnI64EHZM6H5Zw.png" />

<strong>6. Mengganti bahasa</strong>

Untuk mengganti bahsa kita hanya cukup mengganti locale dari instace plugin vue-i18n yang bisa diakses dengan this.$i18n di dalam masing-masing komponen kita. Berikut contoh kodenya :

<img class="aligncenter" src="https://cdn-images-1.medium.com/max/800/1*RH3GGyD9rZeNG7Li2xd9DA.png" />

Semua kode yang saya bagikan adalah potongan kode dalam project ChuckNorris yang bisa dilihat di : <a href="https://github.com/mazipan/chucknorris/" target="_blank" rel="noopener">https://github.com/mazipan/chucknorris/</a>

<img class="aligncenter" src="https://cdn-images-1.medium.com/max/800/1*mbx2wtZZ3UdD4X8bessyyQ.png" />
<img class="aligncenter" src="https://cdn-images-1.medium.com/max/800/1*VgS8pLwGSeu4lgj5jTzNnQ.png" />

Bila ingin belajar lebih lanjut mengenai berbagai penggunaan vue-i18n ini Anda bisa langsung cek dokumentasinya di : <a href="https://kazupon.github.io/vue-i18n/en/" target="_blank" rel="noopener">https://kazupon.github.io/vue-i18n/en/</a>.

&nbsp;

Tulisan ini juga telah dipublikasikan di Medium: <a href="https://medium.com/vuejs-id/mudahnya-setup-internationalisasi-bahasa-di-vue-js-2b7d00ef3c1" target="_blank" rel="noopener">https://medium.com/vuejs-id/mudahnya-setup-internationalisasi-bahasa-di-vue-js-2b7d00ef3c1</a>