---
title: Pengetahuan Dasar Vue.js — Bagian 3
date: 2017-11-10T13:41:23+00:00
author: Irfan Maulana
categories: Vue
tags: vue
template: article.pug
---
<section class="section section--body section--first"> 

<div class="section-content">
  <div class="section-inner sectionLayout--insetColumn">
    <p id="326e" class="graf graf--p graf-after--figure">
      <strong>Pengetahuan Dasar Vue.js (<a href="https://mazipanneh.com/blog/">mazipanneh.com</a>)</strong> - Artikel ini merupakan seri lanjutan dari artikel yang sebelumnya sudah di publikasikan, baca semua seri Pengetahuan Dasar Vue.js :
    </p>
    
    <ul>
      <li id="7d0b" class="graf graf--li graf-after--p">
        <a class="markup--anchor markup--li-anchor" href="https://mazipanneh.com/blog/2017/11/pengetahuan-dasar-vue-js-bagian-1/" target="_blank" rel="noopener" data-href="https://medium.com/vuejs-id/pengetahuan-dasar-vue-js-bagian-1-88d02d57f859">Pengetahuan Dasar Vue.js — Bagian 1</a>
      </li>
      <li id="2e00" class="graf graf--li graf-after--li">
        <a class="markup--anchor markup--li-anchor" href="https://mazipanneh.com/blog/2017/11/pengetahuan-dasar-vue-js-bagian-2/" target="_blank" rel="noopener" data-href="https://medium.com/vuejs-id/pengetahuan-dasar-vue-js-bagian-2-3616af1461d8">Pengetahuan Dasar Vue.js — Bagian 2</a>
      </li>
      <li id="09b6" class="graf graf--li graf-after--li graf--trailing">
        Pengetahuan Dasar Vue.js — Bagian 3 <strong class="markup--strong markup--li-strong">(Anda disini)</strong>
      </li>
    </ul>
  </div>
</div></section> <section class="section section--body"> 

<span class="more"></span>

<div class="section-divider">
  <figure style="width: 720px" class="wp-caption aligncenter"><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*w8B5xZW-IST7Agn2g7kSdA.jpeg" alt="" width="720" height="365" data-src="https://cdn-images-1.medium.com/max/720/1*w8B5xZW-IST7Agn2g7kSdA.jpeg" /><figcaption class="wp-caption-text">Vue.js Illustrasi (sumber : https://fullstackfeed.com)</figcaption></figure>
</div>

<div>
</div>

<div class="section-content">
  <div class="section-inner sectionLayout--insetColumn" style="text-align: left;">
    <p id="12c3" class="graf graf--p graf--leading">
      Kali ini kita akan melanjutkan dengan membahas hal dasar lainnya dalam Vue.js, silahkan siapkan kopi dan simak artikel berikut :
    </p>
    
    <h4 id="138b" class="graf graf--h4 graf-after--p">
      1. Filter, Computed dan Watch
    </h4>
    
    <p id="d959" class="graf graf--p graf-after--h4">
      <strong class="markup--strong markup--p-strong">&#x1f449; Filter</strong>
    </p>
    
    <p id="b7da" class="graf graf--p graf--hasDropCapModel graf--hasDropCap graf-after--p">
      <span class="graf-dropCap">F</span><em class="markup--em markup--p-em">ilter </em>merupakan fitur yang juga diadopsi dari AngularJS dan memiliki fungsi yang hampir sama. <em class="markup--em markup--p-em">Filter </em>di dalam Vue.js digunakan untuk melakukan transformasi atau pun formatting data secara <em class="markup--em markup--p-em">real-time</em>berdasarkan rule yang telah ditetapkan di dalam kode kita.
    </p>
    
    <p id="70be" class="graf graf--p graf-after--p">
      Keuntungan menggunakan <em class="markup--em markup--p-em">filter </em>adalah kita tidak perlu melakukan <em class="markup--em markup--p-em">formatting </em>secara manual dari setiap data yang ingin kita ubah, namun cukup membuat satu <em class="markup--em markup--p-em">filter </em>dan bisa digunakan berulang-ulang dengan cara yang sangat simple dan mudah.
    </p>
    
    <p id="61ef" class="graf graf--p graf-after--p">
      <em class="markup--em markup--p-em">Filter </em>dapat digunakan di dalam template html dengan menambahkan pipe (|) pada data yang ingin kita lakukan transformasi, seperti terlihat pada gambar dibawah ini :
    </p><figure id="3b03" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*D4-aOneUq6C4hrBOCnM84Q.png" data-width="603" data-height="142" data-scroll="native">
        <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="16"></canvas></p> <figure style="width: 603px" class="wp-caption aligncenter"><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*D4-aOneUq6C4hrBOCnM84Q.png" alt="" width="603" height="142" data-src="https://cdn-images-1.medium.com/max/720/1*D4-aOneUq6C4hrBOCnM84Q.png" /><figcaption class="wp-caption-text">Menggunakan Filter dalam Vue.js. sumber (https://vuejs.org/)</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <p id="bf51" class="graf graf--p graf-after--figure">
      <em class="markup--em markup--p-em">Filter </em>harus mengembalikan nilai yang merupakan hasil dari data yang telah di transformasi ke bentuk yang diinginkan, contohnya bisa dilihat di gambar berikut :
    </p><figure id="98d0" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*BvnnbKYEQP6Wd92I63Zy9w.png" data-width="598" data-height="225" data-scroll="native">
        <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="27"></canvas></p> <figure style="width: 598px" class="wp-caption aligncenter"><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*BvnnbKYEQP6Wd92I63Zy9w.png" alt="" width="598" height="225" data-src="https://cdn-images-1.medium.com/max/720/1*BvnnbKYEQP6Wd92I63Zy9w.png" /><figcaption class="wp-caption-text">Membuat Filter dalam Vue.js. sumber (https://vuejs.org/)</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <p id="676f" class="graf graf--p graf-after--figure">
      &#x1f449; <strong class="markup--strong markup--p-strong">Computed</strong>
    </p>
    
    <p id="9869" class="graf graf--p graf--hasDropCapModel graf--hasDropCap graf-after--p">
      <span class="graf-dropCap">C</span><em class="markup--em markup--p-em">omputed</em> merupakan satu method yang akan dijalankan secara otomatis setiap kali variable/object yang ada dibawah function didalamnya mengalami perubahan. <em class="markup--em markup--p-em">Computed</em> sendiri akan/harus mengembalikan suatu nilai yang bisa kita panggil lagi baik di html template maupun javascript.
    </p>
    
    <p id="3f6b" class="graf graf--p graf-after--p">
      Balikan nilai dari <em class="markup--em markup--p-em">computed</em> ini bersifat mirip dengan variabel di dalam <em class="markup--em markup--p-em">data </em>yang telah dijelaskan pada Bagian 2 sebelumnya. Sehingga bila dilihat di contoh potongan kode pada gambar dibawah ini maka bisa dijelaskan bahwa kita punya variabel di dalam <em class="markup--em markup--p-em">data </em>dengan nama “message” dan setiap perubahan yang terjadi pada nilainya maka otomatis akan men-<em class="markup--em markup--p-em">trigger</em> suatu <em class="markup--em markup--p-em">computed</em> dan akan menghasilkan <em class="markup--em markup--p-em">data virtual</em> dengan nama “reversedMessage&#8221;.
    </p><figure id="a096" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*LLXLOPoAq-2rbjflVtcNCQ.png" data-width="603" data-height="277" data-scroll="native">
        <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="33"></canvas></p> <figure style="width: 603px" class="wp-caption aligncenter"><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*LLXLOPoAq-2rbjflVtcNCQ.png" alt="" width="603" height="277" data-src="https://cdn-images-1.medium.com/max/720/1*LLXLOPoAq-2rbjflVtcNCQ.png" /><figcaption class="wp-caption-text">Computed dalam Vue.js. sumber (https://vuejs.org/)</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <p id="fbf2" class="graf graf--p graf-after--figure">
      &#x1f449; <strong class="markup--strong markup--p-strong">Watch</strong>
    </p>
    
    <p id="4c2f" class="graf graf--p graf-after--p">
      Watch memiliki fungsi yang hampir mirip dengan <em class="markup--em markup--p-em">computed</em> namun memiliki persepsi yang berbeda. Jika menggunakan <em class="markup--em markup--p-em">computed</em> maka kita ingin menghasilkan suatu data baru menggunakan <em class="markup--em markup--p-em">function </em>yang jika di dalamnya terjadi perubahan pada variabel nya maka akan dilakukan kalkulasi ulang untuk menghasilkan data baru tersebut, maka dengan menggunakan <em class="markup--em markup--p-em">watch</em>kita berarti ingin memantau perubahan dari suatu variabel yang terdapat didalam <em class="markup--em markup--p-em">Data</em> dan setiap kali terjadi perubahan pada variabel yang kita pantau maka akan otomatis menjalankan <em class="markup--em markup--p-em">function </em>yang ada di dalam <em class="markup--em markup--p-em">watch</em>bersangkutan. <em class="markup--em markup--p-em">Watch</em> juga tidak mengembalikan nilai seperti yang diharuskan pada <em class="markup--em markup--p-em">computed</em>.
    </p>
    
    <p id="b6d6" class="graf graf--p graf-after--p">
      Contoh membuat watch bisa dilihat pada gambar berikut :
    </p><figure id="e3fa" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*Ka7d-PCJai4k3lbvcliSzw.png" data-width="606" data-height="237" data-scroll="native">
        <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="27"></canvas></p> <figure style="width: 606px" class="wp-caption aligncenter"><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*Ka7d-PCJai4k3lbvcliSzw.png" alt="" width="606" height="237" data-src="https://cdn-images-1.medium.com/max/720/1*Ka7d-PCJai4k3lbvcliSzw.png" /><figcaption class="wp-caption-text">Watch dalam Vue.js. sumber (https://vuejs.org/)</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <h4 id="48ff" class="graf graf--h4 graf-after--figure">
      2. Mengenal Vue.js Plugins
    </h4>
    
    <p id="cf8e" class="graf graf--p graf-after--h4">
      <em class="markup--em markup--p-em">Vue.js Plugin</em> pada dasarnya memiliki tujuan untuk menambahkan suatu fungsi yang bersifat global dan mudah untuk digunakan ulang. Contoh paling mudah adalah ketika kita di Vue.js sering kali menggunakan sintaks <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">Vue.use(MyPlugin)</em></strong>, ini sebenarnya kita sedang ingin menggunakan suatu <em class="markup--em markup--p-em">plugin </em>lewat sintaks ini. Semua logika dari <em class="markup--em markup--p-em">plugin </em>sudah dibungkus di dalamnya sehingga kita bisa menggunakan dengan mudah dan tidak perlu susah-susah untuk inisialisasi ulang disetiap tempat yang membutuhkan melainkan cukup diinisialisasi di <em class="markup--em markup--p-em">root </em>dari aplikasi kita.
    </p>
    
    <p id="ecc6" class="graf graf--p graf-after--p">
      Sintaks dasar untuk membuat <em class="markup--em markup--p-em">plugin </em>di dalam Vue.js bisa dilihat pada gambar dibawah ini :
    </p><figure id="2e1d" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*R46xLi5QU-S5urIHiaxSGg.png" data-width="598" data-height="535" data-scroll="native">
        <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="66"></canvas></p> <figure style="width: 598px" class="wp-caption aligncenter"><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*R46xLi5QU-S5urIHiaxSGg.png" alt="" width="598" height="535" data-src="https://cdn-images-1.medium.com/max/720/1*R46xLi5QU-S5urIHiaxSGg.png" /><figcaption class="wp-caption-text">Plugins dalam Vue.js. sumber (https://vuejs.org/)</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <p id="a49b" class="graf graf--p graf-after--figure graf--trailing">
      Pengetahuan membuat <em class="markup--em markup--p-em">plugin </em>di Vue.js ini akan sangat membantu apalagi bila membangun aplikasi yang lumayan kompleks dengan banyak komponen dan saling berkomunikasi antar mereka. Dengan <em class="markup--em markup--p-em">plugin </em>kita bisa membuat satu logika untuk semua tempat, seperti contoh kita membuat beberapa <em class="markup--em markup--p-em">filter </em>yang bisa digunakan di semua komponen dalam aplikasi kita menggunakan <em class="markup--em markup--p-em">plugin</em>. Hal seperti ini tentu menghemat banyak waktu kita karena menghindarkan kita dari membuat duplikasi kode di banyak tempat.
    </p>
  </div>
</div></section> <section class="section section--body section--last"> 

<div class="section-divider">
  <hr class="section-divider" />
</div>

<div class="section-content">
  <div class="section-inner sectionLayout--insetColumn">
    <p id="2000" class="graf graf--p graf--leading">
      Demikian sedikit sharing mengenai beberapa pengetahuan dasar di Vue.js kali ini.
    </p>
    
    <p id="6b1f" class="graf graf--p graf-after--p">
      Terima kasih dan semoga bermanfaat penjelasan singkatnya.
    </p>
  </div>
</div></section>