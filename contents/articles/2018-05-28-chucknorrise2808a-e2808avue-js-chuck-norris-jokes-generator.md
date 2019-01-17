---
ID: 454
post_title: >
  ChuckNorris — Vue.js Chuck Norris
  Jokes Generator
author: Irfan Maulana
post_excerpt: ""
layout: post
permalink: 'https://mazipanneh.com/blog/2018/05/chucknorris%e2%80%8a-%e2%80%8avue-js-chuck-norris-jokes-generator/'
published: true
post_date: 2018-05-28 13:50:51
---
[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*ZsB-bLjXU-356wZGkxVYlg.jpeg" alt="" width="800" height="498" /> <em>Chuck Norris (sumber : http://www.healthfitnessrevolution.com)</em>[/caption]

Kali ini kita akan bereksperimen dengan Vue.js untuk membuat hal-hal yang lucu agar tidak bosan dengan kode yang setiap hari kita tulis. Melihat dari daftar public API yang dibuat om @toddmotto di <a href="https://github.com/toddmotto/public-apis" target="_blank" rel="noopener">github</a>, maka terbersit untuk membuat satu interface dari API yang disediakan disana. Pilihan akhirnya jatuh pada API dari https://api.chucknorris.io/.

Jangan bilang Anda tidak kenal Chuck Norris, baca dulu <a href="https://en.m.wikipedia.org/wiki/Chuck_Norris" target="_blank" rel="noopener">disini</a> ya mengenai Chuck Norris ini.

Sebelum membuat web client nya kita akan analisa terlebih dahulu mengenai ketersediaan dan spesifikasi yang ada di dokumentasi API yang bersangkutan. Dari dokumentasi yang ada, setidaknya ada 4 jenis API yang mereka sediakan yakni :
<ol>
 	<li>Random Jokes : https://api.chucknorris.io/jokes/random</li>
 	<li>Category : https://api.chucknorris.io/jokes/categories</li>
 	<li>Random By Category : https://api.chucknorris.io/jokes/random?category={category}</li>
 	<li>Search : https://api.chucknorris.io/jokes/search?query={query}</li>
</ol>
Setelah mengetahui ketersediaan API, maka kita akan sedikit berkelakar mengenai halaman apa saja yang ingin kita buat. Berdasarkan API yang ada maka saya kira-kira kita akan membuat beberapa halaman berikut :
<ol>
 	<li>Homepage</li>
 	<li>Daftar kategori</li>
 	<li>Random jokes di masing-masing kategori</li>
 	<li>Search</li>
</ol>
Menggunakan Vue.js tentu yang paling mudah adalah karena telah tersedia Vue-CLI yang bisa dengan mudah untuk membuat skeleton project awal, tentu kita akan pilih untuk menggunakan tools keren ini. Selain itu kita akan menggunakan template webpack dari Vue-CLI agar mudah di modifikasi bila dibutuhkan. Anda bisa membaca mengenai cara menggunakan Vue-CLI ini di halaman resminya <a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener">disini</a> atau bisa juga di blog saya <a href="https://mazipanneh.com/blog/2017/07/memulai-vue-js-dengan-vue-cli-dan-webpack/" target="_blank" rel="noopener">disini</a>.

Setelah selesai generate skeleton, berikutnya adalah membuat kerangka tampilan. Seperti kita tahu di Vue.js kita bisa menggunakan Vue-Router untuk melakukan frontend routing sehingga tidak perlu semua layout kita refresh melainkan hanya bagian konten saja yang perlu diubah ketika melakukan perubahan routing. Untuk ini kita akan memecah layout utama menjadi beberapa bagian berikut :
<ul>
 	<li>Header</li>
 	<li>Sidebar</li>
 	<li>Tab Navigasi</li>
 	<li>Konten</li>
</ul>
Tentu selain konten, akan kita letakkan saja di App.vue, yang bisa dilihat kodenya <a href="https://github.com/mazipan/chucknorris/blob/master/src/App.vue" target="_blank" rel="noopener">disini</a>.

Setelah membuat layout utama di App.vue, kita akan membuat beberapa halaman yang sudah kita sepekati diawal. Masing-masing page akan direfleksikan dengan satu file .vue yang berisi konten masing-masing dan akan kita letakkan semuanya di folder pages agar mudah tracking nya. Semua file di halaman pages bisa dilihat <a href="https://github.com/mazipan/chucknorris/tree/master/src/pages" target="_blank" rel="noopener">disini</a>. Karena beberapa pages yang kita buat masih sederhana dan tidak terlalu kompleks maka saya memutuskan untuk tidak memisah bagian di dalamnya menjadi komponen yang lebih kecil.

Beberapa komponen yang kita pisahkan akan kita letakkan di folder <a href="https://github.com/mazipan/chucknorris/tree/master/src/components" target="_blank" rel="noopener">components</a>, seperti file App.vue yang merupakan layout utama akan menjadi terlalu besar bila tidak kita pecah ke dalam komponen-komponen yang lebih kecil. Beberapa yang kita pecah adalah seperti <a href="https://github.com/mazipan/chucknorris/blob/master/src/components/Sidebar.vue" target="_blank" rel="nofollow noopener" data-href="https://github.com/mazipan/chucknorris/blob/master/src/components/Sidebar.vue">Sidebar</a>, <a href="https://github.com/mazipan/chucknorris/blob/master/src/components/HeaderSection.vue" target="_blank" rel="nofollow noopener" data-href="https://github.com/mazipan/chucknorris/blob/master/src/components/HeaderSection.vue">Header</a>, <a href="https://github.com/mazipan/chucknorris/blob/master/src/components/TabSection.vue" target="_blank" rel="nofollow noopener" data-href="https://github.com/mazipan/chucknorris/blob/master/src/components/TabSection.vue">Tab Navigasi</a>, dan <a href="https://github.com/mazipan/chucknorris/blob/master/src/components/SocialSharingSection.vue" target="_blank" rel="nofollow noopener" data-href="https://github.com/mazipan/chucknorris/blob/master/src/components/SocialSharingSection.vue">Sosial Sharing</a>.

Untuk melakukan routing kita akan menggunakan Vue-Router yang merupakan library resmi dari Vue.js. Kita akan mengarahkan url yang kita inginkan untuk memuat file .vue yang telah kita buat di folder pages tadi. Semua konfigurasi dari routing yang kita lakukan bisa dilihat di folder router, dimana ada file index.js yang merupakan file routing kita.

Menggunakan API berarti kita membutuhkan http-client library untuk melakukan pemanggilan endpoint yang tersedia. Disini kita akan menggunakan Vue-Resource sebagai library pembantu kita. Mengenai cara penggunaan Vue-Resource bisa dilihat langsung di halaman resmi mereka, namun secara prinsip dan syntax tidak jauh berbeda dengan beberapa http-client library lain yang tersedia di pasaran. Kita akan menjadikan satu file untuk melakukan pemanggilan API endpoint ini dan akan kita letakkan di folder api. Semua kode megenai pemanggilan API ini bisa dilihat di file index.js.

Membuat satu aplikasi utuh terkadang akan banyak menggunakan state yang makin banyak tentunya akan makin susah di manage, maka dari itu kita kan menambahkan Vuex sebagai pengatur state-state kita. Mengenai cara menggunakan dan berbagai hal dasar mengenai Vuex silahkan dibaca di halam resmi mereka. Kita menyiapkan satu file store.js yang kita letakkan di folder store sebagai pengatur state yang memanfaatkan Vuex.

Berikut sedikit screenshot hasil dari project yang telah kita buat :

<img class="aligncenter" src="https://cdn-images-1.medium.com/max/800/1*r93ReTs2PEhnf16fKuPtKw.png" />
<img class="aligncenter" src="https://cdn-images-1.medium.com/max/800/1*MAuMb-UCB4gK2Wz4uprIHA.png" />
<img class="aligncenter" src="https://cdn-images-1.medium.com/max/800/1*QaNZswhBbs0qJUoyuTTp1A.png" />

Kode project ini telah diunggah ke Github dan bisa dipelajari untuk kepentingan pembelajaran bersama, silahkan di cek di tautan berikut : <a href="https://github.com/mazipan/chucknorris" target="_blank" rel="noopener">https://github.com/mazipan/chucknorris</a>

Demikian sharing project sederhana yang saya buat, semoga bermanfaat.

Tulisan ini telah dipublikasikan juga di Medium: <a href="https://medium.com/vuejs-id/chucknorris-vue-js-chuck-norris-jokes-generator-30eff39b6862" target="_blank" rel="noopener">https://medium.com/vuejs-id/chucknorris-vue-js-chuck-norris-jokes-generator-30eff39b6862</a>