---
id: 448
title: Pengetahuan Dasar Vue.js — Bagian 2
date: 2017-11-10T13:40:10+00:00
author: Irfan Maulana
layout: post
guid: https://mazipanneh.com/blog/?p=448
permalink: /2017/11/pengetahuan-dasar-vue-js-bagian-2/
ampforwp_page_builder_enable:
  - ""
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
ampforwp-redirection-on-off:
  - enable
dsq_thread_id:
  - "6274500713"
categories:
  - Frontend
  - Javascript
  - Programming
tags:
  - frontend
  - javascript
  - vuejs
---
<section class="section section--body section--first"> 

<div class="section-content">
  <div class="section-inner sectionLayout--insetColumn">
    <p id="73d9" class="graf graf--p graf-after--figure">
      <strong>Pengetahuan Dasar Vue.js (<a href="https://mazipanneh.com/blog/">mazipanneh.com</a>)</strong> &#8211; Artikel ini merupakan seri lanjutan dari artikel yang sebelumnya sudah di publikasikan, baca semua seri Pengetahuan Dasar Vue.js :
    </p>
    
    <ol class="postList">
      <li id="7d0b" class="graf graf--li graf-after--p">
        <a class="markup--anchor markup--li-anchor" href="https://mazipanneh.com/blog/2017/11/pengetahuan-dasar-vue-js-bagian-1/" target="_blank" rel="noopener" data-href="https://medium.com/vuejs-id/pengetahuan-dasar-vue-js-bagian-1-88d02d57f859">Pengetahuan Dasar Vue.js — Bagian 1</a>
      </li>
      <li id="2e00" class="graf graf--li graf-after--li">
        <strong>Pengetahuan Dasar Vue.js — Bagian 2(Anda disini)</strong>
      </li>
      <li id="09b6" class="graf graf--li graf-after--li graf--trailing">
        <a class="markup--anchor markup--li-anchor" href="https://mazipanneh.com/blog/2017/11/pengetahuan-dasar-vue-js-bagian-3/" target="_blank" rel="noopener" data-href="https://medium.com/vuejs-id/pengetahuan-dasar-vue-js-bagian-3-cc5de5213eb2">Pengetahuan Dasar Vue.js — Bagian 3</a>
      </li>
    </ol><figure style="width: 720px" class="wp-caption alignnone">
    
    <img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*w8B5xZW-IST7Agn2g7kSdA.jpeg" alt="" width="720" height="365" data-src="https://cdn-images-1.medium.com/max/720/1*w8B5xZW-IST7Agn2g7kSdA.jpeg" /><figcaption class="wp-caption-text">Vue.js Illustrasi (sumber : https://fullstackfeed.com)</figcaption></figure> 
    
    <p>
      &nbsp;
    </p>
  </div>
</div></section> <section class="section section--body"> 

<div class="section-content">
  <div class="section-inner sectionLayout--insetColumn">
    <p id="36ca" class="graf graf--p graf--leading">
      Kali ini kita akan melanjutkan dengan membahas hal dasar lainnya dalam Vue.js, silahkan siapkan kopi dan simak artikel berikut :
    </p>
    
    <h4 id="0ae1" class="graf graf--h4 graf-after--p">
      1. Mengenal File .vue
    </h4>
    
    <p id="d66b" class="graf graf--p graf-after--h4">
      Vue.js mengenalkan <em class="markup--em markup--p-em">single file component </em>dimana kita bisa membuat satu file berekstensi .vue yang berisi html template, javascript function dan style layout. Sistem seperti ini terinspirasi dari JSX yang diadopsi di lingkungan React. File ini sangat memudahkan kita dalam mengatur struktur folder dalam suatu proyek karena tidak perlu lagi <em class="markup--em markup--p-em">foldering </em>untuk memisahkan antar komponen.
    </p><figure id="df23" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*kXUoUokfkaSv0n2VuwCyLQ.png" data-width="1246" data-height="1370" data-action="zoom" data-action-value="1*kXUoUokfkaSv0n2VuwCyLQ.png" data-scroll="native">
        <p>
          &nbsp;
        </p><figure style="width: 720px" class="wp-caption aligncenter">
        
        <img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*kXUoUokfkaSv0n2VuwCyLQ.png" alt="" width="720" height="791" data-src="https://cdn-images-1.medium.com/max/720/1*kXUoUokfkaSv0n2VuwCyLQ.png" /><figcaption class="wp-caption-text">Gambaran .vue file. Sumber (https://vuejs.org)</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <p id="adcc" class="graf graf--p graf-after--figure">
      Menggunakan file .vue juga sangat-sangat mudah. Seperti terlihat pada gambar di atas dimana kita bisa mendeklarasikan tiga tag untuk memisahkan masing-masing bagian yakni <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">template </em></strong>untuk html template, <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">script </em></strong>untuk menyisipkan kode javascript, dan <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">style </em></strong>untuk menyisipkan kode css maupun pre-processor nya.
    </p>
    
    <p id="b83d" class="graf graf--p graf-after--p">
      Di dalam tag <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">template </em></strong>kita bisa menyisipkan kode layaknya html biasa tanpa ada sedikitpun yang berbeda begitu pula di dalam tag <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">script </em></strong>maupun <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">style</em></strong>. Sedikit fitur dalam tag <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">style </em></strong>kita bisa menambahkan <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">scoped </em></strong>bila ingin menggunakan style yang di-isolasi dalam suatu komponen. kita juga bisa dengan mudah menambahkan <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">lang=scss </em></strong>bila ingin menggunakan SASS misalnya. File .vue ini tentu saja tidak bisa dibaca oleh browser, oleh karenanya jangan lupa untuk menambahkan Loader di webpack bila ingin menggunakan file .vue ini yang hebatnya lagi sudah di generate oleh Vue-CLI bila kita menggunakan scaffolding official Vue.js ini.
    </p>
    
    <h4 id="5bb6" class="graf graf--h4 graf-after--p">
      2. Life Cycle Vue.js Component
    </h4>
    
    <p id="6af1" class="graf graf--p graf-after--h4">
      Vue.js memiliki berbagai hook yang bisa kita gunakan sesuai dengan state di dalam life cycle nya, misalkan created adalah hook yang akan di eksekusi ketika sebuah komponen berhasil diinisialisasi. Masalahnya adalah kita tidak boleh sembarangan mengunakan hook ini, mesti paling tidak harus tahu hook yang tersedia dan posisinya dalam. Karena bila salah menggunakan hook maka sangat mungkin kode yang kita buat tidak menghasilkan hal yang seharusnya. Untuk lebih memahami masing-masing hook ini mari sama-sama kita lihat gambar dibawah ini :
    </p><figure id="363f" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*HT2uZUmdWYRt-_qqfarpYw.png" data-width="1200" data-height="3039" data-action="zoom" data-action-value="1*HT2uZUmdWYRt-_qqfarpYw.png" data-scroll="native">
        <p>
          &nbsp;
        </p><figure style="width: 720px" class="wp-caption aligncenter">
        
        <img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*HT2uZUmdWYRt-_qqfarpYw.png" alt="" width="720" height="1823" data-src="https://cdn-images-1.medium.com/max/720/1*HT2uZUmdWYRt-_qqfarpYw.png" /><figcaption class="wp-caption-text">Vue.js 2 Life Cycle Diagram. sumber (https://vuejs.org/)</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <h4 id="e6c2" class="graf graf--h4 graf-after--figure">
      3. Data, Methods dan Props
    </h4>
    
    <p id="8d72" class="graf graf--p graf-after--h4">
      Ketika belajar Vue.js kita akan sering bergelut dengan data, methods dan juga props. Ketiganya merupakan hal dasar yang perlu kita ketahui kegunaannya masing-masing.
    </p>
    
    <p id="5b14" class="graf graf--p graf-after--p">
      &#x1f449; <strong class="markup--strong markup--p-strong">Data</strong>
    </p>
    
    <p id="8051" class="graf graf--p graf-after--p">
      Data di dalam Vue.js merupakan sekumpulan variabel yang digunakan oleh html template dan dapat dimanipulasi dan dimanfaatkan oleh internal komponen masing-masing dan tidak dapat diakses oleh komponen lainnya. Jadi sebuah variabel di dalam suatu komponen Vue.js hanya akan berpengaruh terhadap komponen itu sendiri.
    </p>
    
    <p id="e6df" class="graf graf--p graf-after--p">
      Data sendiri bisa didefinisikan menggunakan syntax seperti yang terlihat pada gambar berikut :
    </p><figure id="761f" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*uETZUVp3OXr-bTujzBzn7Q.png" data-width="583" data-height="320" data-scroll="native">
        <p>
          &nbsp;
        </p><figure style="width: 583px" class="wp-caption aligncenter">
        
        <img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*uETZUVp3OXr-bTujzBzn7Q.png" alt="" width="583" height="320" data-src="https://cdn-images-1.medium.com/max/720/1*uETZUVp3OXr-bTujzBzn7Q.png" /><figcaption class="wp-caption-text">Data dalam Vue.js. sumber (https://vuejs.org/)</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <p id="6a65" class="graf graf--p graf-after--figure">
      &#x1f449; <strong class="markup--strong markup--p-strong">Methods</strong>
    </p>
    
    <p id="3a10" class="graf graf--p graf-after--p">
      Methods merupakan opsi dalam Vue.js yang berupa object berisi function-function. Function ini sendiri akan memiliki berbagai tujuan yang berbeda-beda dan bervariasi baik memanipulasi data ataupun melakukan sebuah logika bisnis sebuah aplikasi. Function di dalam methods juga bisa jadi sebuah Event yang bisa dipanggil dengan mudah di bagian html template dari komponen yang bersangkutan. Function bisa merupakan sebuah pure function yang me-return suatu nilai maupun berupa void function yang tidak mengembalikan nilai apapun.
    </p>
    
    <p id="2f3e" class="graf graf--p graf-after--p">
      Pembuatan methods bisa dilihat dalam gambar berikut :
    </p><figure id="b7e2" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*lljpQonCxoURO1bXgl99fg.png" data-width="584" data-height="230" data-scroll="native">
        <p>
          &nbsp;
        </p><figure style="width: 584px" class="wp-caption alignnone">
        
        <img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*lljpQonCxoURO1bXgl99fg.png" alt="" width="584" height="230" data-src="https://cdn-images-1.medium.com/max/720/1*lljpQonCxoURO1bXgl99fg.png" /><figcaption class="wp-caption-text">Methods dalam Vue.js. sumber (https://vuejs.org/)</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <p id="5f03" class="graf graf--p graf-after--figure">
      &#x1f449; <strong class="markup--strong markup--p-strong">Props</strong>
    </p>
    
    <p id="d0d2" class="graf graf--p graf-after--p">
      Props merupakan parameter yang bisa dilempar oleh sebuah komponen kepada komponen lainnya. Props merupakan satu dari beberapa jalan untuk mendistribusikan data dari satu komponen ke komponen lainnya. Jadi Props di suatu komponen akan memiliki nilai yang sama dengan nilai dari data yang dilemparkan oleh komponen parent nya.
    </p>
    
    <p id="198b" class="graf graf--p graf-after--p">
      Gambar dibawah merupakan contoh pembuatan Props dengan beberapa variasinya, sebagai berikut :
    </p><figure id="5a67" class="graf graf--figure graf-after--p graf--trailing"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*FQp8RmMGnDlxbw16gSp-rA.png" data-width="586" data-height="424" data-scroll="native">
        <p>
          &nbsp;
        </p><figure style="width: 586px" class="wp-caption aligncenter">
        
        <img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*FQp8RmMGnDlxbw16gSp-rA.png" alt="" width="586" height="424" data-src="https://cdn-images-1.medium.com/max/720/1*FQp8RmMGnDlxbw16gSp-rA.png" /><figcaption class="wp-caption-text">Props dalam Vue.js. sumber (https://vuejs.org/)</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure>
  </div>
</div></section> <section class="section section--body section--last"> 

<div class="section-divider">
  <hr class="section-divider" />
</div>

<div class="section-content">
  <div class="section-inner sectionLayout--insetColumn">
    <p id="3ee0" class="graf graf--p graf--leading">
      Demikian sedikit penjelasan tentang beberapa hal dasar di Vue.js.
    </p>
    
    <h4 id="22a3" class="graf graf--h4 graf-after--p">
      Lanjut di Bagian 3 ya !!! Stay tuned dan follow blog ini &#x1f605;
    </h4>
    
    <p id="ed57" class="graf graf--p graf-after--h4">
      Terima kasih dan semoga bermanfaat penjelasan singkatnya.
    </p>
  </div>
</div></section>