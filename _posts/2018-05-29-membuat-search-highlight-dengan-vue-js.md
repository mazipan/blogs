---
ID: 486
post_title: Membuat Search Highlight dengan Vue.js
author: Irfan Maulana
post_excerpt: ""
layout: post
permalink: >
  https://mazipanneh.com/blog/2018/05/membuat-search-highlight-dengan-vue-js/
published: true
post_date: 2018-05-29 14:02:29
---
[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*V1BI2Mg_MY2vPJixw7a1MQ.jpeg" alt="" width="800" height="400" /> <em>Membuat Search Highlight dengan Vue.js</em>[/caption]

Salah satu fitur yang biasanya kita inginkan ketika membuat suatu kotak pencarian maupun autocomplete adalah highlight berdasarkan kata kunci yang digunakan untuk melakukan pencarian. Sebegitu mainstreamnya seperti sudah menjadi keharusan bagi setiap kotak pencarian untuk memiliki fitur ini. Untuk memudahkan Anda memahami apa yang saya maksudkan mungkin akan lebih mudah jika kita melihat gambar berikut:

[caption id="" align="aligncenter" width="300"]<img src="https://cdn-images-1.medium.com/max/800/1*EMOU4v7bVeWZ52Q3BZnnxA.png" alt="" width="300" height="400" /> <em>Contoh search highlight di aplikasi FireJak</em>[/caption]

Seperti terlihat pada gambar diatas, item yang dicari akan melakukan highlight berdasarkan kata kunci yang diketik oleh pengguna. Untungnya untuk membuat fitur seperti ini bisa dilakukan dengan mudah di Vue.js. Silahkan disimak beberapa langkah untuk membuat fitur search highlight ini :


<strong>1. Membuat Search Box</strong>


Pertama kita akan membuat search box dengan menggunakan input type text dan memberikan model pada input tersebut. Tentu saja tujuannya agar kita bisa menggunakan fitur two way data binding pada Vue.js dimana object searchText seperti yang terlihat pada gambar dibawah ini akan secara otomatis saling terkait antara view yang ditampilkan dengan object yang berada di data Vue.js.

<img src="https://cdn-images-1.medium.com/max/800/1*ALkkKJ64XmPP3RwL2CmJgw.png">


<strong>2. Menyiapkan Array Data</strong>


Karena kita akan melakukan searching atau pun filter maka salah satu bagian penting yang tidak lepas adalah array data, di dalam project FireJak sendiri saya menggunakan Vuex untuk mengambil data sehingga bisa dengan mudah diambil dengan menggunakan fitur getters yang sudah disediakan.

<img src="https://cdn-images-1.medium.com/max/800/1*EGiaPPgat0GtW15jpwQRtw.png">

Sebagai contoh anggaplah saya punya array data seperti pada link berikut : 
https://github.com/mazipan/FireJak/blob/master/static/json/pospemadam.json

<img src="https://cdn-images-1.medium.com/max/800/1*nh_8zByhYooIZbWs5Sgaxw.png">

Maka bagian yang penting adalah meletakkan array data kedalam object data di dalam component Vue.js agar bisa diakses dengan mudah bahkan oleh object internal component. Pada contoh kali ini saya meletakkan pada object array posPemadam seperti yang terlihat pada gambar sebelumnya.


<strong>3. Menampilkan semua array data</strong>


Menampilkan array data kedalam view dengan Vue.js bisa dengan mudah dilakukan menggunakan v-for seperti berikut:

<img src="https://cdn-images-1.medium.com/max/800/1*yqGGY8YJWVAM3ytq4tdK_g.png">


<strong>4. Mem-filter array berdasarkan kata kunci</strong>


Yang akan kita lakukan adalah memantau variabel v-model input text kita kemudian melakukan filter pada array data ketika terjadi perubahan pada variabel tersebut. Untuk melakukan hal ini kita bisa memanfaatkan fitur computed maupun watch dari Vue.js, pada artikel <em><a href="https://mazipanneh.com/blog/2017/11/pengetahuan-dasar-vue-js-bagian-3/" rel="noopener" target="_blank">Pengetahuan Dasar Vue.js — Bagian 3</a></em> kita sudah belajar mengenai computed dan watch, jika masih bingung atau belum bisa membedakan perbedaan dari keduanya bisa kembali membaca artikel tersebut.

<img src="https://cdn-images-1.medium.com/max/800/1*dHn4PbGZW7p3N0jGFGKvDA.png">

Pada gambar diatas, saya menggunakan computed untuk menghasilkan array baru dengan nama filteredList yang akan selalu dieksekusi tiap kali terjadi perubahan variabel searchText. Karena data yang akan saya filter merupakan array of object, jadi saya harus mendefinisikan field apa saja yang ingin saya bandingkan dengan kata kunci.


<strong>5. Mengganti view dengan array filter</strong>


Setelah membuat array baru hasil filter, maka kita akan mengganti view yang tadinya menampilkan semua data menjadi menampilkan hanya array hasil dari filter yang dijalankan. Berikut contoh kodenya:

<img src="https://cdn-images-1.medium.com/max/800/1*GNdnrZ9KDE4xFUyzaFBgDw.png">


<strong>6. Membuat fungsi highlight</strong>


Fungsi yang akan kita buat pada dasarnya akan melakukan replacement berdasarkan kata kunci yang ditemukan dari sebuah text yang dilemparkan. Fungsi ini akan mengembalikan sebuah string html dari kata awal yang telah disisipkan dengan class untuk highlight text. Berikut contoh kodenya:

<img src="https://cdn-images-1.medium.com/max/800/1*PrWB7E6wn4GhHp_XCN-Sqg.png">


<strong>7. Memanggil fungsi highlight</strong>


Karena fungsi highlight ini akan mengembalikan sebuah html dengan class highlight didalamnya, maka kita tidak bisa menggunakan data-binding biasa menggunakan {{ data }} tapi kita harus menggunakan v-html agar html yang menjadi balikan dari fungsi ini bisa ditampilkan dengan baik dan di-render sebagai html bukan sebagai string. Untuk memanggil fungsi highlight ini kita perlu melemparkan dua parameter yakni kata yang akan di highlight dan kata kunci yang dijadikan highlight keyword. Berikut contoh kodenya:

<img src="https://cdn-images-1.medium.com/max/800/1*WbaqTGs3UUobC1tnlSm4Qg.png">
Dan taraaaa &#x1f603;&#x1f603;&#x1f603; Berhasil, berhasil &#x1f606;&#x1f606;&#x1f606;


Tentu saja ini bukanlah satu-satunya cara untuk menerapkan fitur highlight pada search. Tapi ini bisa menjadi panduan bagi Anda yang ingin belajar dasar menerapkan fitur ini. Semua kode yang dibagikan pada artikel kali ini bisa dilihat dan dipelajari dari repository <a href="https://github.com/mazipan/FireJak" rel="noopener" target="_blank">FireJak</a>.

Demikian tulisan singkat dari saya, semoga bermanfaat.

Tulisan ini juga telah dipublikasikan di Medium: <a href="https://medium.com/vuejs-id/membuat-search-highlight-dengan-vue-js-d47684d5999b" rel="noopener" target="_blank">https://medium.com/vuejs-id/membuat-search-highlight-dengan-vue-js-d47684d5999b</a>