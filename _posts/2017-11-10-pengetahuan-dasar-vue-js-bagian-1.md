---
id: 446
title: Pengetahuan Dasar Vue.js — Bagian 1
date: 2017-11-10T13:39:05+00:00
author: Irfan Maulana
layout: post
guid: https://mazipanneh.com/blog/?p=446
permalink: /2017/11/pengetahuan-dasar-vue-js-bagian-1/
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
  - "6274503762"
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
    <p id="049c" class="graf graf--p graf-after--figure">
      <strong>Pengetahuan Dasar Vue.js (<a href="https://mazipanneh.com/blog/">mazipanneh.com</a>)</strong> &#8211; Artikel ini merupakan seri lanjutan dari artikel yang sebelumnya sudah di publikasikan, baca semua seri Pengetahuan Dasar Vue.js :
    </p>
    
    <ol class="postList">
      <li id="7d0b" class="graf graf--li graf-after--p">
        <a class="markup--anchor markup--li-anchor" href="https://mazipanneh.com/blog/2017/11/pengetahuan-dasar-vue-js-bagian-1/" target="_blank" rel="noopener" data-href="https://medium.com/vuejs-id/pengetahuan-dasar-vue-js-bagian-1-88d02d57f859"><strong class="markup--strong markup--li-strong">Pengetahuan Dasar Vue.js — Bagian 1</strong></a><strong class="markup--strong markup--li-strong">(Anda disini)</strong>
      </li>
      <li id="2e00" class="graf graf--li graf-after--li">
        <a class="markup--anchor markup--li-anchor" href="https://mazipanneh.com/blog/2017/11/pengetahuan-dasar-vue-js-bagian-2/" target="_blank" rel="noopener" data-href="https://medium.com/vuejs-id/pengetahuan-dasar-vue-js-bagian-2-3616af1461d8">Pengetahuan Dasar Vue.js — Bagian 2</a>
      </li>
      <li id="09b6" class="graf graf--li graf-after--li graf--trailing">
        <a class="markup--anchor markup--li-anchor" href="https://mazipanneh.com/blog/2017/11/pengetahuan-dasar-vue-js-bagian-3/" target="_blank" rel="noopener" data-href="https://medium.com/vuejs-id/pengetahuan-dasar-vue-js-bagian-3-cc5de5213eb2">Pengetahuan Dasar Vue.js — Bagian 3</a><br /> <figure id="53c3" class="graf graf--figure graf-after--p"> <div class="aspectRatioPlaceholder is-locked">
          <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*w8B5xZW-IST7Agn2g7kSdA.jpeg" data-width="720" data-height="365" data-is-featured="true" data-action="zoom" data-action-value="1*w8B5xZW-IST7Agn2g7kSdA.jpeg" data-scroll="native">
            <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="36"></canvas></p> <figure style="width: 720px" class="wp-caption aligncenter"><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*w8B5xZW-IST7Agn2g7kSdA.jpeg" alt="" width="720" height="365" data-src="https://cdn-images-1.medium.com/max/720/1*w8B5xZW-IST7Agn2g7kSdA.jpeg" /><figcaption class="wp-caption-text">Vue.js Illustrasi (sumber : https://fullstackfeed.com)</figcaption></figure>
          </div>
        </div><figcaption class="imageCaption"></figcaption></figure>
      </li>
    </ol>
  </div>
</div></section> <section class="section section--body"> 

<div class="section-divider">
</div>

<div class="section-content">
  <div class="section-inner sectionLayout--insetColumn">
    <p id="9abc" class="graf graf--p graf--leading">
      Vue.js (<a class="markup--anchor markup--p-anchor" href="https://vuejs.org/" target="_blank" rel="nofollow noopener" data-href="https://vuejs.org/">https://vuejs.org/</a>) seperti di websitenya yang membawa tagline <em class="markup--em markup--p-em">“The Progressive JavaScript Framework” </em>merupakan javascript framework yang membantu kita dalam membuat sebuah website/aplikasi yang membutuhkan banyak interaksi di dalamnya, biasanya berupa <em class="markup--em markup--p-em">Single Page Application. </em>Vue.js belakangan memiliki gaung yang lumayan kencang di kalangan web developer maupun Javascript developer karena kemudahan dalam mempelajari dan mengimplementasikan di dalam website/aplikasi kita.
    </p>
    
    <p id="db8f" class="graf graf--p graf-after--p">
      Pada tulisan kali ini kita akan membahas beberapa pengetahuan dasar dan beberapa istilah yang akan sering kita temui jika belajar Vue.js, semoga pembahasan ini akan membantu saya dan kita yang sedang belajar framework ini.<br /> Langsung saja, silahkan disimak beberapa poin pembahasan berikut :
    </p>
    
    <h4 id="e24a" class="graf graf--h4 graf-after--p">
      1. Mengenai Vue Component
    </h4>
    
    <p id="6997" class="graf graf--p graf--hasDropCapModel graf--hasDropCap graf-after--h4">
      <span class="graf-dropCap">V</span>ue.js seperti framework Javascript modern lainnya juga mengusung konsep <em class="markup--em markup--p-em">component based </em>dimana setiap blok layout dianggap sebagai komponen yang independen dan memiliki style serta fungsi sendiri yang terisolir sehingga mudah untuk digunakan ulang oleh setiap halaman website kita. Setiap komponen tersebut nantinya akan kita susun menjadi blok-blok yang saling terkait dan membangun sebuah tampilan utuh sebuah halaman website.
    </p>
    
    <p id="ab9a" class="graf graf--p graf-after--p">
      Menggunakan komponen berarti kita akan membuat custom tag di HTML template kita, secara mudah komponen di Vue.js bisa dibuat sesederhana kode berikut :
    </p><figure id="455f" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*UrS8uYY_ud6HnUKVbgPaFg.png" data-width="602" data-height="116" data-scroll="native">
        <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="13"></canvas></p> <figure style="width: 602px" class="wp-caption aligncenter"><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*UrS8uYY_ud6HnUKVbgPaFg.png" alt="" width="602" height="116" data-src="https://cdn-images-1.medium.com/max/720/1*UrS8uYY_ud6HnUKVbgPaFg.png" /><figcaption class="wp-caption-text">Mendefinisikan Vue.js Component</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <p id="d704" class="graf graf--p graf-after--figure">
      Dari pendefinisian diatas kita bisa menggunakan komponen tersebut dalam HTML template dengan cara yang tak kalah mudah, yakni seperti berikut :
    </p><figure id="321f" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*VE7izWNyCw8OwS4ECyxGGA.png" data-width="594" data-height="123" data-scroll="native">
        <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="13"></canvas></p> <figure style="width: 594px" class="wp-caption alignnone"><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*VE7izWNyCw8OwS4ECyxGGA.png" alt="" width="594" height="123" data-src="https://cdn-images-1.medium.com/max/720/1*VE7izWNyCw8OwS4ECyxGGA.png" /><figcaption class="wp-caption-text">Menggunakan Vue.js Component dalam HTML Template</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <h4 id="62ee" class="graf graf--h4 graf-after--figure">
      2. Data Binding dalam Vue.js
    </h4>
    
    <p id="3178" class="graf graf--p graf--hasDropCapModel graf--hasDropCap graf-after--h4">
      <span class="graf-dropCap">V</span>ue.js memang sangat terinspirasi dari <a class="markup--anchor markup--p-anchor" href="https://angularjs.org/" target="_blank" rel="noopener nofollow" data-href="https://angularjs.org/">AngularJS</a> dalam hal <em class="markup--em markup--p-em">data binding</em>ini, itu mengapa sangat mudah untuk belajar Vue.js bilamana kita pernah belajar AngularJS sebelumnya. Bila di AngularJS kita mengenal <em class="markup--em markup--p-em">ng-bind</em> maka di Vue.js kita mengenal <em class="markup--em markup--p-em">v:bind</em>, berikut beberapa data binding dalam Vue.js :
    </p>
    
    <p id="d358" class="graf graf--p graf-after--p">
      <strong class="markup--strong markup--p-strong">&#x1f449; 1. Binding data ke dalam view</strong>
    </p><figure id="a289" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*24isMnRrGBh8ZLkAnkxIeA.png" data-width="597" data-height="105" data-scroll="native">
        <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="11"></canvas><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*24isMnRrGBh8ZLkAnkxIeA.png" data-src="https://cdn-images-1.medium.com/max/720/1*24isMnRrGBh8ZLkAnkxIeA.png" />
      </div>
    </div></figure> 
    
    <p id="81f2" class="graf graf--p graf-after--figure">
      Vue.js menggunakan syntax <strong class="markup--strong markup--p-strong">{{ }}</strong> seperti terlihat pada gambar diatas, dengan syntax tersebut berarti kita ingin menampilkan sebuah data yang ada dalam Javascript kita ke dalam HTML template.
    </p>
    
    <p id="b2c4" class="graf graf--p graf-after--p">
      <strong class="markup--strong markup--p-strong">&#x1f449; </strong>2.<strong class="markup--strong markup--p-strong"> Attribute Binding</strong>
    </p><figure id="031c" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*mSVRJZ1aNZc4CAh3P697Og.png" data-width="596" data-height="155" data-scroll="native">
        <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="19"></canvas></p> <figure style="width: 596px" class="wp-caption aligncenter"><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*mSVRJZ1aNZc4CAh3P697Og.png" alt="" width="596" height="155" data-src="https://cdn-images-1.medium.com/max/720/1*mSVRJZ1aNZc4CAh3P697Og.png" /><figcaption class="wp-caption-text">Attribute Binding di dalam Vue.js</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <p id="14dc" class="graf graf--p graf-after--figure">
      Seperti disebut sebelumnya, di Vue.js kita menggunakan <strong class="markup--strong markup--p-strong">v-bind</strong> untuk melakukan binding ke dalam HTML. Maka jika kita melihat ke gambar diatas berarti kita ingin menambahkan attribute <em class="markup--em markup--p-em">title</em> ke dalam <em class="markup--em markup--p-em">span</em> dengan menggunakan data dinamis dari javascript. <em class="markup--em markup--p-em">v-bind</em> pada dasarnya bisa diterapkan pada berbagai attribute di HTML sehingga kita mungkin akan menemui banyak variasi <em class="markup--em markup--p-em">v-bind</em> ini seperti <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">v-bind:src, v-bind:class, v-bind:alt</em></strong>, dan lain sebagainya.<br /> Vue.js juga menyediakan shortcut untuk kita mendefinisikan<em class="markup--em markup--p-em"> v-bind</em> di dalam HTML yakni dengan menghilangkan bagian <em class="markup--em markup--p-em">v-bind </em>nya, jadi kita bisa menggunakan shortcut seperti <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">:title, :src, :class, :alt</em></strong> dan sebagainya.
    </p>
    
    <p id="dabc" class="graf graf--p graf-after--p">
      <strong class="markup--strong markup--p-strong">&#x1f449; 3. Two way data binding</strong>
    </p>
    
    <p id="fb0c" class="graf graf--p graf--hasDropCapModel graf--hasDropCap graf-after--p">
      <span class="graf-dropCap">S</span>eperti AngularJS, Vue.js juga menyediakan fitur two way data binding yang artinya setiap perubahan pada Javascript akan berpengaruh pada view HTML dan sebaliknya perubahan pada HTML view pun akan mempengaruhi atau mengubah nilai di Javascript nya.<br /> Di Vue.js kita menggunakan<strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em"> v-model</em></strong> untuk melakukan two way binding yang biasanya sering ditempelkan pada sebuah elemen input HTML, seperti gambar berikut :
    </p><figure id="35d4" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*gR8ZMoqTliJLwY7V-3prZA.png" data-width="601" data-height="122" data-scroll="native">
        <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="13"></canvas></p> <figure style="width: 601px" class="wp-caption aligncenter"><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*gR8ZMoqTliJLwY7V-3prZA.png" alt="" width="601" height="122" data-src="https://cdn-images-1.medium.com/max/720/1*gR8ZMoqTliJLwY7V-3prZA.png" /><figcaption class="wp-caption-text">Vue.js two-way data binding</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <p id="60f3" class="graf graf--p graf-after--figure">
      <strong class="markup--strong markup--p-strong">&#x1f449; 4. Event binding</strong>
    </p>
    
    <p id="9dc7" class="graf graf--p graf--hasDropCapModel graf--hasDropCap graf-after--p">
      <span class="graf-dropCap">U</span>ntuk memanggil suatu event yang telah kita buat di Javascript, Vue.js menggunakan <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">v-on</em></strong> di dalam HTML template diikuti hook event yang akan ditambahkan. Jadi kita bisa menggunakan berbagai variasi v-on seperti <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">v-on:click, v-on:blur, v-on:focus, v-on:keyup</em></strong> dan sebagainya.
    </p><figure id="68c4" class="graf graf--figure graf-after--p"> 
    
    <div class="aspectRatioPlaceholder is-locked">
      <div class="aspectRatioPlaceholder-fill">
      </div>
      
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*LhxPyR8mv0Cf5zjPf0XlRQ.png" data-width="602" data-height="336" data-scroll="native">
        <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="41"></canvas></p> <figure style="width: 602px" class="wp-caption aligncenter"><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*LhxPyR8mv0Cf5zjPf0XlRQ.png" alt="" width="602" height="336" data-src="https://cdn-images-1.medium.com/max/720/1*LhxPyR8mv0Cf5zjPf0XlRQ.png" /><figcaption class="wp-caption-text">Event binding di Vue.js</figcaption></figure>
      </div>
    </div><figcaption class="imageCaption"></figcaption></figure> 
    
    <p id="4b75" class="graf graf--p graf-after--figure graf--trailing">
      Vue.js menyediakan juga shortcut untuk melakukan event binding ini yakni menggunakan @, sehingga kita bisa menyingkat seperti : @click, @blur,@focus dan sebagainya.
    </p>
  </div>
</div></section> <section class="section section--body section--last"> 

<div class="section-divider">
  <hr class="section-divider" />
</div>

<div class="section-content">
  <div class="section-inner sectionLayout--insetColumn">
    <p id="a89b" class="graf graf--p graf--leading">
      Masih akan ada beberapa hal yang ingin saya bahas di judul ini, namun sepertinya akan saya pecah saja kedalam beberapa bagian agar lebih ringan saat membacanya.
    </p>
    
    <h4 id="22a3" class="graf graf--h4 graf-after--p">
      Lanjut di Bagian 2 ya !!! Stay tuned dan follow blog ini &#x1f605;
    </h4>
    
    <p id="ed57" class="graf graf--p graf-after--h4">
      Terima kasih dan semoga bermanfaat penjelasan singkatnya.
    </p>
  </div>
</div></section>