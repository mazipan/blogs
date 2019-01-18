---
title: Memulai Vue.js dengan Vue-CLI dan Webpack
date: 2017-07-22T17:56:03+00:00
author: Irfan Maulana
categories: Vue
tags: vue
template: article.pug
---
![Vue.js](https://coligo.io/vuejs-the-basics/cover-850x416.jpg)

**Memulai Vue.js dengan Vue-CLI dan Webpack** - Vue.js merupakan salah satu pilihan framework javascript yang terdapat di pasar saat ini dan salah satu yang belakangan mendapatkan perhatian lumayan dari para javascript developer. Vue.js banyak dibilang sebagai framework yang berhasil mengadopsi kehebatan React dan Angular dalam satu wadah yang tepat. Memang jika kita belajar Vue.js terutama di versi 2 akan mendapatkan rasa seperti React yang bercampur dengan Angular. Vue.js datang belakangan, hal itu menjadi wajar kenapa Vue.js bisa dibilang sukses belajar dari para pendahulunya. Menggabungkan _strong point_ dari beberapa framework untuk bisa berdiri sendiri menggunakan paradigma yang diusungnya.

<span class="more"></span>

Untuk memulai project Vue.js sebenarnya sangat mudah, karena Vue.js bisa langsung jalan di browser seperti yang dilakukan sejak versi 1.x cukup dengan menambahkan tag `</script>` dan kode Vue.js sudah bisa dipakai di browser Anda seperti terlihat di dokumentasi nya disini : <a href="https://vuejs.org/v2/guide/#Getting-Started" target="_blank" rel="noopener">https://vuejs.org/v2/guide/#Getting-Started</a>. Namun dengan menggunakan cara ini, maka kita tidak dapat menggunakan banyak hal menarik dalam proses development kita seperti _css preprocessor_, file dengan ekstensi `.vue`, ES6 syntax serta banyak hal lain lagi yang membutuhkan kompilasi sebelum dijalankan.

Seperti halnya framework lain yang menghadirkan _generator skeleton_ bagi yang ingin memulai belajar tanpa harus pusing setup maka Vue.js juga hadir dengan hal tersebut. Mereka punya Vue-CLI sebagai _generator_ dari struktur project mereka. Vue-CLI menurut saya sendiri salah satu _generator_ yang palling fleksibel diantara para pesaingnya. Vue-CLI punya banyak pilihan _template_ yang bisa kita pilih untuk di _generate_, mulai dari webpack yang simple, webpack yang kompleks, browserify simple sampai yang kompleks, PWA, sampai yang sangat sederhana dengan hanya satu file html. Semua file hasil dari Vue-CLI pun sangat terlihat alami tanpa adanya campur tangan sebuah _generator_, jadi sangat mudah buat kita untuk memodifikasi berbagai konfigurasi yang ada didalamnya sesuai dengan kebutuhan kita.

Yang akan kita coba bahas disini adalah generate Vue-CLi untuk template webpack, kenapa webpack ? karena dependency ini salah satu yang paling populer dan paling baik dokumentasinya sehingga mudah untuk di modifikasi kedepannya. Ada dua pilihan yakni webpack simple dan webpack, kita akan mencoba menggunakan template webpack pada tutorial kali ini.

Pertama pastikan Anda meng-_install_ Vue-CLI dengan cara : `npm install -g vue-cli`
  
Dan perintah dasar untuk melakukan _generate_ dengan Vue-CLI adalah dengan : `vue init template_name project_name`
  
Dan spesifik untuk men-_generate_ sebuah webpack setup untuk Vue.js bisa dengan cara : `vue init webpack project_name`
  
Dalam kasus normal hal ini harusnya akan berjalan dengan baik, namun ada kalanya proses ini gagal dan biasanya penyebabnya ada di Proxy dalam jaringan yang tidak mengijinkan untuk mengunduh template yang ada di github.
  
Salah satu solusi mudahnya adalah dengan mengunduh template yang ada di github ke dalam lokal komputer Anda untuk dilakukan _generate_ secara lokal.
  
File template sendiri bisa ditemukan di :

  * [webpack](https://github.com/vuejs-templates/webpack)
  * [webpack-simple](https://github.com/vuejs-templates/webpack-simple)
  * [browserify](https://github.com/vuejs-templates/browserify)
  * [browserify-simple](https://github.com/vuejs-templates/browserify-simple)
  * [pwa](https://github.com/vuejs-templates/pwa)
  * [simple](https://github.com/vuejs-templates/simple)

Setelah mendownload file di lokal komputer Anda, bisa gunakan perintah berikut untuk melakukan _generate_ _skeleton_ :

<pre>vue init path_to_lokal_template project_name</pre>

Setelah menjalankan perintah ini akan ada beberapa pertanyaan seputar konfigurasi yang ingin di generate seperti akan menggunakan Vue-Router atau tidak, akan menggunakan ESLint atau tidak, ingin men-_generate_ _skeleton_ untuk _unit test_ dan _end-2-end test_ atau tidak.
  
Berikut adalah controh _screenshoot_ ketika melakukan _generate skeleton_ menggunakan Vue-CLI webpack template :

![Vue-CLI Lokal](https://mazipan.github.io/wp-contents/images/vue-cli-mazipanneh.PNG)

Vue-CLI juga akan melakukan generate shortcut script yang biasa kita jalankan dengan _npm run task_ seperti contoh berikut :

<pre class="">"dev": "node build/dev-server.js",
"build": "node build/build.js",
"unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
"e2e": "node test/e2e/runner.js",
"test": "npm run unit && npm run e2e",
"lint": "eslint --ext .js,.vue src test/unit/specs test/e2e/specs"
</pre>

Jadi setelah project kita berhasil ter-_generate_ dan telah meng-_install_ _dependency_ dengan `npm install` maupun `yarn install` maka kita bisa menjalankan project tersebut dengan perintah `npm run dev` dan bila ingin men-compile file untuk production kita bisa menjalankan `npm run build` sedangkan untuk test ada `npm run unit` dan lain-lain.

Demikian sedikit tutorial dasar mengenai penggunaan dasar Vue-CLI. Semua dokumentasi dan _issue_ telah ada di Github resminya di <a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener">https://github.com/vuejs/vue-cli</a>, silahkan dipelajari lebih lanjut jika ingin yang lebih kompleks lagi.

<p id="b6b7" class="graf graf--p graf--hasDropCapModel graf--hasDropCap graf-after--p">
  Bila ada pertanyaan ataupun diskusi langsung kepada penulis, Anda bisa menghubungi lewat beberapa sosial media berikut :
</p>

<ul class="postList">
  <li id="9738" class="graf graf--li graf-after--p">
    Facebook : <a class="markup--anchor markup--li-anchor" href="https://medium.com/r/?url=https%3A%2F%2Ffacebook.com%2Fmazipanneh" target="_blank" rel="nofollow noopener nofollow" data-href="https://medium.com/r/?url=https%3A%2F%2Ffacebook.com%2Fmazipanneh">https://facebook.com/mazipanneh</a>
  </li>
  <li id="9f16" class="graf graf--li graf-after--li">
    Twitter : <a class="markup--anchor markup--li-anchor" href="https://medium.com/r/?url=https%3A%2F%2Ftwitter.com%2FMaz_Ipan" target="_blank" rel="nofollow noopener" data-href="https://medium.com/r/?url=https%3A%2F%2Ftwitter.com%2FMaz_Ipan">https://twitter.com/Maz_Ipan</a>
  </li>
  <li id="50e1" class="graf graf--li graf-after--li">
    Slideshare : <a class="markup--anchor markup--li-anchor" href="https://medium.com/r/?url=https%3A%2F%2Fwww.slideshare.net%2FIrfanMaulana21" target="_blank" rel="nofollow noopener" data-href="https://medium.com/r/?url=https%3A%2F%2Fwww.slideshare.net%2FIrfanMaulana21">https://www.slideshare.net/IrfanMaulana21</a>
  </li>
  <li id="b1a8" class="graf graf--li graf-after--li">
    Github : <a class="markup--anchor markup--li-anchor" href="https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fmazipan" target="_blank" rel="nofollow noopener" data-href="https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fmazipan">https://github.com/mazipan</a>
  </li>
</ul>

&nbsp;

Terima kasih,

Irfan Maulana