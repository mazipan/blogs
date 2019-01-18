---
title: Memasang iklan Google Adsense di project Vue.js
author: Irfan Maulana
categories: Vue
tags: vue
date: 2018-06-03 17:28:21
template: article.pug
---
[caption id="" align="aligncenter" width="599"]<img src="https://cdn-images-1.medium.com/max/800/1*LyZ8OH3GLGhVa77vu573pg.jpeg" alt="" width="599" height="400" /> Google AdSense logo, image from: maxmanroe.com[/caption]

Google AdSense merupakan salah satu layanan dari Google untuk para publisher agar bisa menempatkan iklan dari berbagai source yang telah berafiliasi dengan Google. Menurut Google sendiri, AdSense adalah cara sederhana yang gratis untuk memperoleh penghasilan dengan menempatkan iklan di situs web Anda.

Untuk memasang script Google Adsense ini sejatinya sudah di jelaskan oleh Google sendiri, salah satunya bisa dibaca di tautan ini. Namun sayangnya memang script tersebut memiliki ekspektasi bahwa kita tidak menggunakan framework dalam membangun website (dalam hal ini tentu kita akan fokus ke Vue.js).

<span class="more"></span>

Faktanya untuk mengimplementasikan apa yang sudah dijelaskan oleh Google adalah hal yang lumayan tricky ketika kita menggunakan Vue.js di project kita. Hal ini berkaitan dengan Vue Single Component dimana kita jadi susah untuk menyisipkan tag script di tengah-tengah kode. Namun ini juga tergantung dari tipe unit iklan yang kita pilih juga, karena untuk salah satu tipe iklan, kita bisa saja langsung menempatkan script ini di dalam tag head dimana ini biasanya ada diluar kontrol Vue.js sehingga tidak diperlukan workaround lebih lanjut untuk menempatkan script ini.

Setidaknya ada 3 tipe unit iklan yang disediakan Google AdSense yang masing-masing berbeda penempatan dan fungsinya. Gambar berikut bisa menjelaskan sekilas tentang tipe-tipe unit iklan tersebut.

[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*SYPGXNyURCiGytaiXM-qTg.png" alt="" width="800" height="370" /> Ads unit types, image from: https://www.google.com/adsense[/caption]

Untuk tipe unit iklan yang pertama text &amp; display ads, ini kode iklan yang bisa ditempatkan di tag head dan otomatis Google akan mendeteksi bagian mana dari website kita yang menjadi tempat strategis untuk dipasang iklan tersebut. Tipe unit ini paling mudah, tapi juga tidak bisa dikontrol penempatannya. Bisa jadi iklan yang dihasilkan akan menutupi beberapa elemen penting yang tidak seharusnya tertutupi.

Untuk tipe yang kedua In-Feed Ads dan ketiga In-Article Ads ini merupakan tipe unit yang bisa kita kontrol penempatanya, sayangnya script iklan ini harus ditempatkan di tag spesifik yang kita inginkan. Tentu seperti yang saya jelaskan diatas, ini menjadi masalah ketika kita menggunakan Vue.js sebagai framework dari website kita. Untungnya ada orang baik yang membuat library <a href="https://github.com/taoeffect/vue-script2" target="_blank" rel="noopener">Vue-Script2</a> untuk memudahkan kita menambahkan tag script di dalam kode Vue.js.

Kita bisa saja membuat workaround ini di setiap project yang ingin kita pasangi iklan dari Google AdSense, tapi buat saya sendiri ini merupakan hal yang melelahkan. Untuk menyelesaikan masalah ini saya memutuskan membuat Plugin yang bisa dipasang dan diimplementasikan dengan mudah ketika harus memasang iklan di website kita.
<h2><a href="https://github.com/mazipan/vue-google-adsense" target="_blank" rel="noopener">Vue-Google-Adsense</a></h2>
Berikut beberapa langkah menggunakan vue-google-adsense di project Vue.js kalian :

&nbsp;

<strong>Installing</strong>
<pre><code>npm install vue-script2 vue-google-adsense --save</code></pre>
&nbsp;

<strong>Memasang di main.js</strong>
<pre><code>
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)
</code></pre>
&nbsp;

<strong>Untuk pengguna Nuxt.js</strong>

Buat file <code>plugins/vue-google-adsense.js</code>, dengan kode berikut :
<pre><code>
import Vue from 'vue'
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)
</code></pre>
Kemudian tambahkan kode berikut di <code>nuxt.config.js</code>:
<pre><code>
module.exports = {
  plugins: [
    { src: '~/plugins/vue-google-adsense', ssr: false }
  ]
}
</code></pre>
&nbsp;

<strong>Memasang di Component</strong>
<pre class="lang:xhtml decode:true ">&lt;!-- Default Ads --&gt;
&lt;Adsense
    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
    data-ad-slot="1234567890"&gt;
&lt;/Adsense&gt;
&lt;!-- In-Article Ads --&gt;
&lt;InArticleAdsense
    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
    data-ad-slot="1234567890"&gt;
&lt;/InArticleAdsense&gt;
&lt;!-- In-Feed Ads --&gt;
&lt;InFeedAdsense
    data-ad-layout-key="-fg+5n+6t-e7+r"
    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
    data-ad-slot="1234567890"&gt;
&lt;/InFeedAdsense&gt;</pre>
&nbsp;

<strong>Props yang bisa kalian gunakan</strong>

<img src="https://cdn-images-1.medium.com/max/800/1*YkpBCNrqAMDIfFNBVSIArQ.png" />

<strong>Contoh Implementasi</strong>

Saya sendiri sudah menggunakan library ini di berbagai project yang saya buat, kalian bisa melihat berbagai contoh bagaimana saya menggunakan library ini, antara lain di project:
<ul>
 	<li><a href="https://mazipan.github.io/explore-github" target="_blank" rel="nofollow noopener" data-href="https://mazipan.github.io/explore-github">Explore-Github</a></li>
 	<li><a href="https://mazipan.github.io/FireJak" target="_blank" rel="nofollow noopener" data-href="https://mazipan.github.io/FireJak">Fire Jak</a></li>
 	<li><a href="https://mazipan.github.io/RumahSakitJakarta" target="_blank" rel="nofollow noopener" data-href="https://mazipan.github.io/RumahSakitJakarta">Rumah Sakit Jakarta</a></li>
 	<li><a href="https://mazipan.github.io/chucknorris" target="_blank" rel="nofollow noopener" data-href="https://mazipan.github.io/chucknorris">ChuckNorris</a></li>
</ul>
Semua project diatas open-source sehingga kalian bisa cek ke Github saya untuk melihat kode implementasinya.

&nbsp;

Demikian tulisan singkat ini, semoga bermanfaat buat teman-teman.

Tulisan ini telah dipublikasikan juga di Medium: <a href="https://medium.com/vuejs-id/memasang-google-adsense-di-project-vue-js-ad22cb799841" target="_blank" rel="noopener">https://medium.com/vuejs-id/memasang-google-adsense-di-project-vue-js-ad22cb799841</a>