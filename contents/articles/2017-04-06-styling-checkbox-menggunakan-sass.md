---
id: 112
title: Styling checkbox menggunakan SASS
date: 2017-04-06T13:22:40+00:00
author: Irfan Maulana
layout: post
guid: http://mazipanneh.com/blog/?p=112
permalink: /2017/04/styling-checkbox-menggunakan-sass/
ampforwp_custom_content_editor_checkbox:
  - 'yes'
ampforwp_custom_content_editor:
  - |
    <img width="469" height="313" alt="Styling checkbox menggunakan SASS" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcs_u4zI7tpBeJLyLIfBG2UhP8sHH4smLUepxcR8Q9QgNV69FFWU3e23a_" title="" class="aligncenter size-custom">
    
    <strong>Membuat Checkbox dengan SASS</strong> - Bila pada tulisan sebelumnya&nbsp;<a href="https://mazipanneh.com/blog/2017/03/memberi-style-css-sederhana-pada-radio-button/">disini</a>&nbsp;kita sudah&nbsp;bahas mengenai sedikit eksperimen kita dalam memberikan Style pada komponen input radio, maka kali ini kita akan coba ber-eksperimen lagi dengan komponen lainnya dan saya memilih komponen input dengan type checbox atau kita sebut saja sebagai checkbox.&nbsp;
    
    Bosan ? semestinya sih kalau lagi dalam tahap belajar tidak boleh bosan ya, karena learning by doing masih jadi cara yang paling baik buat belajar koding. Jadi ya, sabar ya dan silahkan disimak langkah-langkahnya sebagai berikut :
    
    Pertama, kita akan siapkan seperti biasa HTML dasar yang nantinya akan kita beri style. Sederhana saja cuma definisikan input dengan <i>type=”checkbox”</i>, kita buat saja 3 varian seperti sebelumnya dengan 1 kita buat sebagai input yang <i>disable</i> atau tidak dapat dipilih oleh pengguna. Berikut kurang lebih kode HTML yang kita buat :
    
    <a href="https://gist.github.com/mazipan/bb27779c9ec0774359a94312d8afc806" target="_blank">https://gist.github.com/mazipan/bb27779c9ec0774359a94312d8afc806</a>
    
    Bila Anda merasa kurang bisa memahami kode HTML tersebut, maka silahkan baca artikel&nbsp;<a href="https://mazipanneh.com/blog/2017/03/perjalanan-menjadi-frontend-developer-bagi-pemula-seri-1-mengenal-html/">Perjalanan menjadi Frontend Developer bagi pemula Seri-1 Mengenal HTML</a>&nbsp;terlebih dahulu ya&nbsp;:-).
    
    Sebelum saya teruskan, pastikan sudah baca artikel ini&nbsp;<a href="https://mazipanneh.com/blog/2017/03/perjalanan-menjadi-frontend-developer-bagi-pemula-seri-2-mengenal-css/">Perjalanan Menjadi Frontend Developer Bagi Pemula – Seri 2 – Mengenal CSS</a>&nbsp;karena kita akan bahas beberapa istilah dalam CSS yang &nbsp;akan terdengar asing bagi yang belum paham.
    
    Setelah membuat HTML, kita akan membuat class<b> .checkbox</b> yang akan kita beri style menggunakan SASS, kita akan memberi style pada label kemudian <i>:before</i> dan <i>:after</i> dari label tersebut. <i>:before</i> akan kita gunakan sebagai kotak sebelum checkbox tersebut dipilih, dan <i>:after</i> akan kita gunakan sebagai tanda bahwa checkbox tersebut dalam keadaan terpilih oleh pengguna. Karena kita akan inisialisasi dalam keadaan state yang belum di definisikan maka kita buat saja <i>:after</i> dalam keadaan tidak terlebih dahulu, dalam hal ini kita set <i>width:0 </i>dan <i>height:0</i>, berikut kurang lebih kode yang telah kita buat untuk membuat checbox yang berada dalam keadaaan tidak terpilih sama sekali :
    
    <a href="https://gist.github.com/mazipan/e849ef381c0ade0244c3c93a80a794df" target="_blank">https://gist.github.com/mazipan/e849ef381c0ade0244c3c93a80a794df</a>
    
    Setelahnya kita akan mendefinisikan saat checkbox yang kita buat dalam keadaan terpilih yang artinya kita mesti membuat<i> :after</i> dari label kita memiliki warna background seperti variable <i>$theme</i> yang sudah kita buat dan juga memiliki tanda <i>tick-mark</i> atau <i>contreng</i> yang menunjukkan bahwa sedang terpilih. Kita bisa saja menggunakan image sebaga <i>background-image</i> untuk membuat <i>tick-mark</i> tersebut, tapi saya lebih memilih membuat manual menggunakan SASS dengan memodifikasi <i>border</i> dan <i>rotate</i>, berikut kurang lebih kode yang kita buat untuk membuat checkbox dalam keadaan terpilih :
    
    <a href="https://gist.github.com/mazipan/90d1aa07bda87ac435108820644b2209" target="_blank">https://gist.github.com/mazipan/90d1aa07bda87ac435108820644b2209</a>
    
    Terakhir kita akan buat satu <i>state</i> lagi yakni ketika checkbox tersebut dalam keadaan <i>disable</i> atau tidak dapat dipilih oleh pengguna, karena secara UI pengguna juga mesti sadar bahwa satu input memang dalam keadaan yang tidak dapat dia pilih. Untuk ini kita akan memberi background-color abu-abu agar terkesan <i>greyscale</i> dan memberikan <i>border</i> abu-abu dengan <i>pallete</i> 1 tingkat lebih gelap diatasnya. berikut kurang lebih kode yang kita buat :
    
    <a href="https://gist.github.com/mazipan/7e5d072ab3112461de40b0ebd0db00ad" target="_blank">https://gist.github.com/mazipan/7e5d072ab3112461de40b0ebd0db00ad</a>
    
    Pada akhirnya checkbox kita ini akan menghasilkan tampilan seperti gambar berikut :
    
    <img src="https://cdn-images-1.medium.com/max/2000/1*jnGnWowxbghHD_DZSOuVaQ.png">
    
    Berikut adalah kode SASS yang telah kita gabungkan kedalam satu file, kurang lebih seperti berikut ini :
    
    <a href="https://gist.github.com/mazipan/7d62010ec91a4d443e04da85aaaa46a8" target="_blank">https://gist.github.com/mazipan/7d62010ec91a4d443e04da85aaaa46a8</a>
    
    Demikian panduan sederhana dalam memberikan style pada checkbox yang dipadukan dengan kekuatan SASS, bila Anda ingin kesulitan memahami syntax SASS diatas mungkin Anda perlu membaca artikel&nbsp;<a href="https://mazipanneh.com/blog/2017/04/mengenal-dan-belajar-sass-sebagai-css-pre-processor/">Mengenal dan Belajar SASS Sebagai CSS Pre-Processor</a>&nbsp;terlebih dahulu. Anda&nbsp;juga bisa melihat Live preview dari kode diatas&nbsp;<a href="http://codepen.io/mazipan/pen/yMrpXK">disini</a>. Artikel ini juga telah di publikasikan di medium&nbsp;<a href="https://medium.com/@mazipanneh/styling-checkbox-dengan-sass-f111a09ca321">disini</a>.
    
    Semoga bermanfaat bagi mereka yang masih belajar ya :-).
    
    Salam.
    
    Ditulis oleh Irfan Maulana di siang hari jam makan siang saat itu.
ampforwp-amp-on-off:
  - default
dsq_thread_id:
  - "5735941664"
categories:
  - CSS
  - Frontend
  - Programming
tags:
  - css
  - frontend
  - sass
---
<img width="469" height="313" alt="Styling checkbox menggunakan SASS" src="http://www.telerik.com/clientsfiles/a4289618-7f81-403e-977c-60d07326b9a5_checkbox.png?sfvrsn=0" title="" class="aligncenter size-custom" />

**Membuat Checkbox dengan SASS** &#8211; Bila pada tulisan sebelumnya&nbsp;[disini](https://mazipanneh.com/blog/2017/03/memberi-style-css-sederhana-pada-radio-button/)&nbsp;kita sudah&nbsp;bahas mengenai sedikit eksperimen kita dalam memberikan Style pada komponen input radio, maka kali ini kita akan coba ber-eksperimen lagi dengan komponen lainnya dan saya memilih komponen input dengan type checbox atau kita sebut saja sebagai checkbox.&nbsp;

Bosan ? semestinya sih kalau lagi dalam tahap belajar tidak boleh bosan ya, karena learning by doing masih jadi cara yang paling baik buat belajar koding. Jadi ya, sabar ya dan silahkan disimak langkah-langkahnya sebagai berikut :
  
Pertama, kita akan siapkan seperti biasa HTML dasar yang nantinya akan kita beri style. Sederhana saja cuma definisikan input dengan _type=”checkbox”_, kita buat saja 3 varian seperti sebelumnya dengan 1 kita buat sebagai input yang _disable_ atau tidak dapat dipilih oleh pengguna. Berikut kurang lebih kode HTML yang kita buat :

<div class="gist-oembed" data-gist="mazipan/bb27779c9ec0774359a94312d8afc806.json">
</div>

Bila Anda merasa kurang bisa memahami kode HTML tersebut, maka silahkan baca artikel&nbsp;[Perjalanan menjadi Frontend Developer bagi pemula Seri-1 Mengenal HTML](https://mazipanneh.com/blog/2017/03/perjalanan-menjadi-frontend-developer-bagi-pemula-seri-1-mengenal-html/)&nbsp;terlebih dahulu ya&nbsp;:-).
  
Sebelum saya teruskan, pastikan sudah baca artikel ini&nbsp;[Perjalanan Menjadi Frontend Developer Bagi Pemula – Seri 2 – Mengenal CSS](https://mazipanneh.com/blog/2017/03/perjalanan-menjadi-frontend-developer-bagi-pemula-seri-2-mengenal-css/)&nbsp;karena kita akan bahas beberapa istilah dalam CSS yang &nbsp;akan terdengar asing bagi yang belum paham.

Setelah membuat HTML, kita akan membuat class **.checkbox** yang akan kita beri style menggunakan SASS, kita akan memberi style pada label kemudian _:before_ dan _:after_ dari label tersebut. _:before_ akan kita gunakan sebagai kotak sebelum checkbox tersebut dipilih, dan _:after_ akan kita gunakan sebagai tanda bahwa checkbox tersebut dalam keadaan terpilih oleh pengguna. Karena kita akan inisialisasi dalam keadaan state yang belum di definisikan maka kita buat saja _:after_ dalam keadaan tidak terlebih dahulu, dalam hal ini kita set _width:0_ dan _height:0_, berikut kurang lebih kode yang telah kita buat untuk membuat checbox yang berada dalam keadaaan tidak terpilih sama sekali :

<div class="gist-oembed" data-gist="mazipan/e849ef381c0ade0244c3c93a80a794df.json">
</div>

Setelahnya kita akan mendefinisikan saat checkbox yang kita buat dalam keadaan terpilih yang artinya kita mesti membuat _:after_ dari label kita memiliki warna background seperti variable _$theme_ yang sudah kita buat dan juga memiliki tanda _tick-mark_ atau _contreng_ yang menunjukkan bahwa sedang terpilih. Kita bisa saja menggunakan image sebaga _background-image_ untuk membuat _tick-mark_ tersebut, tapi saya lebih memilih membuat manual menggunakan SASS dengan memodifikasi _border_ dan _rotate_, berikut kurang lebih kode yang kita buat untuk membuat checkbox dalam keadaan terpilih :

<div class="gist-oembed" data-gist="mazipan/90d1aa07bda87ac435108820644b2209.json">
</div>

Terakhir kita akan buat satu _state_ lagi yakni ketika checkbox tersebut dalam keadaan _disable_ atau tidak dapat dipilih oleh pengguna, karena secara UI pengguna juga mesti sadar bahwa satu input memang dalam keadaan yang tidak dapat dia pilih. Untuk ini kita akan memberi background-color abu-abu agar terkesan _greyscale_ dan memberikan _border_ abu-abu dengan _pallete_ 1 tingkat lebih gelap diatasnya. berikut kurang lebih kode yang kita buat :

<div class="gist-oembed" data-gist="mazipan/7e5d072ab3112461de40b0ebd0db00ad.json">
</div>

Pada akhirnya checkbox kita ini akan menghasilkan tampilan seperti gambar berikut :

![](https://cdn-images-1.medium.com/max/2000/1*jnGnWowxbghHD_DZSOuVaQ.png)

Berikut adalah kode SASS yang telah kita gabungkan kedalam satu file, kurang lebih seperti berikut ini :

<div class="gist-oembed" data-gist="mazipan/7d62010ec91a4d443e04da85aaaa46a8.json">
</div>

Demikian panduan sederhana dalam memberikan style pada checkbox yang dipadukan dengan kekuatan SASS, bila Anda ingin kesulitan memahami syntax SASS diatas mungkin Anda perlu membaca artikel&nbsp;[Mengenal dan Belajar SASS Sebagai CSS Pre-Processor](https://mazipanneh.com/blog/2017/04/mengenal-dan-belajar-sass-sebagai-css-pre-processor/)&nbsp;terlebih dahulu. Anda&nbsp;juga bisa melihat Live preview dari kode diatas&nbsp;[disini](http://codepen.io/mazipan/pen/yMrpXK). Artikel ini juga telah di publikasikan di medium&nbsp;[disini](https://medium.com/@mazipanneh/styling-checkbox-dengan-sass-f111a09ca321).

Download Ebook Programming&nbsp;[disini](https://mazipanneh.com/blog/download-ebook-programming/)

Semoga bermanfaat bagi mereka yang masih belajar ya :-).

Salam.

Ditulis oleh Irfan Maulana di siang hari jam makan siang saat itu.