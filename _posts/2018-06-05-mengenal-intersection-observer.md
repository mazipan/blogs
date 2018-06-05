---
ID: 505
post_title: Mengenal Intersection Observer
author: Irfan Maulana
post_excerpt: ""
layout: post
permalink: >
  https://mazipanneh.com/blog/2018/06/mengenal-intersection-observer/
published: true
post_date: 2018-06-05 12:41:06
---
[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*l6gAMRWLX_rg6JV79fPVPw.jpeg" alt="" width="800" height="450" /> <em>An Intersection. Image Source: https://searchengineland.com/</em>[/caption]

Dari developer.google update bulan april 2016 <a href="https://developers.google.com/web/updates/2016/04/intersectionobserver" target="_blank" rel="noopener">disini</a>, Intersection Observer pertama kali di release ke user di chrome versi 51. Lalu sebenarnya apa sih Intersection Observer ini? Lantas apa juga hal yang membuatnya menjadi menarik untuk kamu coba? Berikut akan kita bahas berbagai hal mengenai Intersection Observer.
<h3><strong>&#x1f4d2; Apa itu Intersection Observer?</strong></h3>
Intersection Observer (IntersectionObserver) merupakan sebuah interface dari <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noopener">Intersection Observer API</a> yang menyediakan cara asynchronous untuk memantau (observe) perubahan intersection dari elemen target terhadap viewport maupun elemen ancestor.

[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*oVcjwADgDy4zQPHgnuajIw.png" alt="" width="800" height="568" /> <em>Image Source: https://hacks.mozilla.org/2017/08/intersection-observer-comes-to-firefox/</em>[/caption]
<h3><strong>&#x1f36d; Contoh kasus penggunaan Intersection Observer</strong></h3>
Berikut beberapa contoh kasus dimana kehadiran Intersection Observer menjadi penting dan menarik:

<strong>&#x1f304; Lazy Loading</strong>

Konsep lazy loading pada dasarnya adalah menampilkan konten hanya ketika konten tersebut benar-benar dibutuhkan dan dilihat oleh pengguna. Implementasi paling sering dari lazy loading ini adalah pada proses untuk memuat gambar pada sebuah website, namun sebenarnya bisa juga digunakan untuk memuat konten lain baik text paragraph maupun block div.

Seperti kita tahu bersama-sama, ukuran dan banyaknya file yang kita kirim ke pengguna merupakan hal yang penting dalam memuat sebuah website. Oleh karena itu lazy loading sangat membantu memastikan kita memuat konten yang tepat pada saat yang tepat pula. Jangan sampai kita memaksa pengguna untuk memuat atau mengunduh hal yang tidak pernah dia lihat sama sekali.

Sebelum ada Intersection Observer kita biasa membuat lazy loading dengan cara attach event ketika pengguna melakukan scroll dan memanggil getBoundingClientRect() untuk mengecek apakah elemen yang kita maksud sudah masuk ke dalam layar yang dilihat oleh pengguna.

Implementasi Intersection Observer untuk membuat lazy loading gambar maupun video telah dijelaskan secara rinci dengan berbagai contoh kode yang jelas pula di artikel <a href="https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/" target="_blank" rel="noopener">Lazy Loading Images and Video</a> dari developer.google.com.

<strong>&#x1f503; Infinite Scroll</strong>

<a href="https://www.google.co.id/search?q=infinite+scroll" target="_blank" rel="noopener">Infinite Scroll</a> paling cocok digunakan pada mobile web, dimana pengguna tidak perlu menekan tombol apapun untuk memuat halaman/konten berikutnya namun cukup dengan scroll dan nanti ditentukan apakah sudah waktunya memuat konten berikutnya atau belum. Bila kamu masih gamang dengan istilah infinite scroll, maka coba saja kunjungi halaman utama dari Instagram (http://www.instagram.com/). Kita bisa browsing unggahan terbaru dari teman-teman kita di Instagram dengan mudah tanpa sekalipun harus menekan halaman selanjutnya atau apapun itu, cukup scroll terus sampai bawah dan akan dimuat halaman berikutnya secara otomatis.

Tanpa Intersection Observer implemetasi infinite scroll kurang lebih akan sama dengan lazy loading namun biasanya akan lebih advance karena beberapa implementasinya memiliki logika yang lebih kompleks dimana dilakukan penambahan konten yang akan dilihat dan penghapusan terhadap konten yang sudah tidak dilihat lagi oleh pengguna.

<strong>&#x1f4ca; Reporting / Tracking</strong>

Pernahkah terpikir untuk men-track kebiasaan pengguna ketika mengunjungi website kamu? Misalnya pengguna melakukan scroll di halaman katalog produk kemudian berhenti ketika melihat sebuah produk pada titik ini bisa dimungkinkan pengguna memiliki ketertarikan lebih terhadap produk tersebut. Kalau kita bisa collect data dari kebiasaan pengguna dalam melakukan scroll di website kita maka bisa dibuatkan pula recommendation system dengan sumber data yang lebih banyak dan bisa menghasilkan personalisasi yang lebih baik.

Tracking ataupun reporting bisa membantu kita dalam membuat keputusan produk mana yang harusnya ada diatas, dan produk mana yang bisa diletakan di posisi yang lebih bawah dari katalog kita. Dan menggunakan Intersection Observer tentunya hal ini menjadi lebih mudah dilakukan dan lebih visible untuk di deliver.

<strong>&#x1f526; Others Task</strong>

Banyak hal dan pekerjaan lain yang menjadi lebih mudah dengan adanya Intersection Observer, seperti penentuan kapan suatu task akan dieksekusi dan kapan tidak perlu dieksekusi, penentuan kapan suatu animasi perlu ditampilkan dan kapan tidak perlu ditampilkan kepada pengguna dan banyak lagi.

Kekuatan utama pada Intersection Observer adalah bisa memberikan kita visibility yang lebih kapan waktu yang tepat untuk melakukan suatu hal dan ini tentu saja bisa diimplementasikan ke berbagai hal tergantung pada kebutuhan dan tujuan masing-masing.
<h3><strong>&#x1f30f; Browser Support</strong></h3>
Sampai pada artikel ini dipublikasikan, dukungan untuk Intersection Observer memang belum merata ke semua browser. Anda bisa mengecek dukungan browser terhadap Intersection Observer di website caniuse.com (<a href="https://caniuse.com/#feat=intersectionobserver" target="_blank" rel="noopener">https://caniuse.com/#feat=intersectionobserver</a>).

[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*-E84Qj-QgHhqL-WvAX4y7A.png" alt="" width="800" height="405" /> <em>https://caniuse.com/#feat=intersectionobserver (16 April 2018)</em>[/caption]

Meski begitu kamu tetap bisa menggunakan Intersection Observer dengan menambahkan <a href="https://github.com/w3c/IntersectionObserver/tree/master/polyfill" target="_blank" rel="noopener"><strong>polyfill</strong></a> untuk beberapa browser yang memang belum mendukung fitur ini secara native.

Tulisan ini juga telah dipublikasikan di Medium : <a href="https://medium.com/mazipan-mind/intersection-observer-sebuah-pengantar-f996cf8ab27b" target="_blank" rel="noopener">https://medium.com/mazipan-mind/intersection-observer-sebuah-pengantar-f996cf8ab27b</a>