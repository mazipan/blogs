---
ID: 452
post_title: >
  Cara Berkomunikasi Antar Component di
  Vue.js
author: Irfan Maulana
post_excerpt: ""
layout: post
permalink: >
  https://mazipanneh.com/blog/2018/05/cara-berkomunikasi-antar-component-di-vue-js/
published: true
post_date: 2018-05-25 11:16:49
---
<section class="section section--body section--first">
<div class="section-content">
<div class="section-inner sectionLayout--insetColumn">
<p id="b6b4" class="graf graf--p graf-after--figure graf--trailing">Seperti sebelumnya sudah dijelaskan bahwa komponen dalam Vue.js bersifat independen dan saling terisolasi satu sama lain, sehingga memang dibutuhkan beberapa workaround untuk saling berkomunikasi antar komponen tersebut baik ketika ingin saling melempar data, melempar sebuah event dan lainnya.</p>


[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*QI3qnLMvreIbjNHuNJL7Kw.png" alt="" width="800" height="399" /> <em>Komunikasi antar komponen di Vue.js (Sumber : https://alligator.io)</em>[/caption]

</div>
</div>
</section><section class="section section--body">
<div class="section-divider"></div>
<div class="section-content">
<div class="section-inner sectionLayout--insetColumn">
<h3 id="7b3e" class="graf graf--h3 graf--leading">Props</h3>
<p id="ec61" class="graf graf--p graf-after--h3">Props merupakan pendekatan paling mudah dan paling diajurkan ketika ingin melempar data dari satu komponen ke komponen lainnya. Pendekatan paling pas menggunakan Props adalah ketika kita ingin melempar data hanya kepada satu komponen lain. Props merupakan one-way data flow sehingga hanya akan berjalan searah yakni dari parent ke child yang menerima Props tersebut, sementara child tidak bisa mengubah nilai Props yang dia terima dan tidak berhak pula melempar data ke parent nya.</p>
<p id="a85a" class="graf graf--p graf-after--p">Berikut contoh melemparkan data dengan Props kepada komponen lain :</p>

<figure id="6750" class="graf graf--figure graf-after--p graf--trailing">
<div class="aspectRatioPlaceholder is-locked">
<div class="aspectRatioPlaceholder-fill"></div>
<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*qNA1dleY_kvNtpC0ptqCPA.png" data-width="874" data-height="160" data-action="zoom" data-action-value="1*qNA1dleY_kvNtpC0ptqCPA.png" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="11"></canvas>

[caption id="" align="aligncenter" width="720"]<img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*qNA1dleY_kvNtpC0ptqCPA.png" alt="" width="720" height="131" data-src="https://cdn-images-1.medium.com/max/720/1*qNA1dleY_kvNtpC0ptqCPA.png" /> <em>Contoh Props di https://alligator.io</em>[/caption]

</div>
</div>
<figcaption class="imageCaption"></figcaption></figure>
</div>
</div>
</section><section class="section section--body">
<div class="section-divider"></div>
<div class="section-content">
<div class="section-inner sectionLayout--insetColumn">
<h3 id="55d0" class="graf graf--h3 graf--leading">Events</h3>
<p id="2ba6" class="graf graf--p graf-after--h3">Kadangkala selain melemparkan data, kita diharuskan pula melempar Event kepada komponen lain. Maka untuk mengatasi kebutuhan ini, kita bisa menggunakan Events yang dilemparkan ke komponen lain. Sama seperti Props maka penggunaan Events sangat baik bila dilakukan antar 2 komponen. Events juga merupakan one-way flow sehingga child hanya menerima apa yang sudah diberikan oleh parentnya.</p>
<p id="35ab" class="graf graf--p graf-after--p">Berikut contoh melemparkan Events ke komponen lain :</p>

<figure id="eba5" class="graf graf--figure graf-after--p">
<div class="aspectRatioPlaceholder is-locked">
<div class="aspectRatioPlaceholder-fill"></div>
<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*3Tth3UmhaHMGm9s2nwcxZQ.png" data-width="873" data-height="160" data-action="zoom" data-action-value="1*3Tth3UmhaHMGm9s2nwcxZQ.png" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="11"></canvas>

[caption id="" align="alignnone" width="720"]<img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*3Tth3UmhaHMGm9s2nwcxZQ.png" alt="" width="720" height="131" data-src="https://cdn-images-1.medium.com/max/720/1*3Tth3UmhaHMGm9s2nwcxZQ.png" /> Contoh Events di https://alligator.io[/caption]

</div>
</div>
<figcaption class="imageCaption"></figcaption></figure>
<p id="2cc5" class="graf graf--p graf-after--figure">Dan untuk menjalankan Events yang dilemparkan parent maka di komponen child kita bisa menggunakan <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">$emit </em></strong>untuk mengeksekusi Events tersebut. Kita juga bisa menyelipkan parameter ketika melakukan Emit terhadap Events.</p>
<p id="465e" class="graf graf--p graf-after--p">Berikut contoh melakukan Emit terhadap sebuah events :</p>

<figure id="8e36" class="graf graf--figure graf-after--p graf--trailing">
<div class="aspectRatioPlaceholder is-locked">
<div class="aspectRatioPlaceholder-fill"></div>
<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*AWA5m3-72v8qBw1b092ftQ.png" data-width="882" data-height="321" data-action="zoom" data-action-value="1*AWA5m3-72v8qBw1b092ftQ.png" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="25"></canvas>

[caption id="" align="aligncenter" width="720"]<img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*AWA5m3-72v8qBw1b092ftQ.png" alt="" width="720" height="262" data-src="https://cdn-images-1.medium.com/max/720/1*AWA5m3-72v8qBw1b092ftQ.png" /> Contoh $emit di https://alligator.io[/caption]

</div>
</div>
<figcaption class="imageCaption"></figcaption></figure>
</div>
</div>
</section><section class="section section--body">
<div class="section-divider"></div>
<div class="section-content">
<div class="section-inner sectionLayout--insetColumn">
<h3 id="a6d0" class="graf graf--h3 graf--leading">Refs</h3>
<p id="0d68" class="graf graf--p graf-after--h3">Refs ($refs) memberikan kita akses terhadap methods dari sebuah komponen lain. Hal ini bukan suatu best practice namun terkadang kita membutuhkan akses langsung ke method di dalam suatu komponen child dan disinilah peran Refs dibutuhkan.</p>
<p id="064b" class="graf graf--p graf-after--p">Berikut contoh yang diberikan oleh Vue.js dalam menggunakan Refs ini :</p>

<figure id="e9f1" class="graf graf--figure graf-after--p graf--trailing">
<div class="aspectRatioPlaceholder is-locked">
<div class="aspectRatioPlaceholder-fill"></div>
<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*-yqStP8GSvRhA-Z5UQh-Og.png" data-width="608" data-height="231" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="27"></canvas>

[caption id="" align="aligncenter" width="608"]<img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*-yqStP8GSvRhA-Z5UQh-Og.png" alt="" width="608" height="231" data-src="https://cdn-images-1.medium.com/max/720/1*-yqStP8GSvRhA-Z5UQh-Og.png" /> Contoh menggunakan $refs di https://vuejs.org[/caption]

</div>
</div>
<figcaption class="imageCaption"></figcaption></figure>
</div>
</div>
</section><section class="section section--body">
<div class="section-divider"></div>
<div class="section-content">
<div class="section-inner sectionLayout--insetColumn">
<h3 id="537e" class="graf graf--h3 graf--leading">Direct Access</h3>
<p id="7f03" class="graf graf--p graf-after--h3">Kita bisa juga melakukan direct akses ke parent maupun child menggunakan <strong class="markup--strong markup--p-strong">this.$parent</strong> maupun <strong class="markup--strong markup--p-strong">this.$child</strong>, namun sama dengan $refs yang penggunaanya sebaiknya kita batasi pada hal-hal yang sudah tidak bisa diakali menggunakan cara sehat.</p>

<figure id="1703" class="graf graf--figure graf-after--p graf--trailing">
<div class="aspectRatioPlaceholder is-locked">
<div class="aspectRatioPlaceholder-fill"></div>

[caption id="" align="aligncenter" width="605"]<img class="graf-image" src="https://cdn-images-1.medium.com/max/720/1*L3Di5tH1nT1KU-Mwe05y5g.png" alt="" width="605" height="93" data-image-id="1*L3Di5tH1nT1KU-Mwe05y5g.png" data-width="605" data-height="93" /> Peringatan dari Vue.js mengenai direct access (Sumber : https://vuejs.org/v2/api/#parent)[/caption]

</div>
<figcaption class="imageCaption"></figcaption></figure>
</div>
</div>
</section><section class="section section--body">
<div class="section-divider"></div>
<div class="section-content">
<div class="section-inner sectionLayout--insetColumn">
<h3 id="f6de" class="graf graf--h3 graf--leading">Event Bus</h3>
<p id="c69b" class="graf graf--p graf-after--h3">Bila Events yang kita jelaskan diatas hanya bisa digunakan untuk komponen yang parent-child maka Event Bus adalah salah satu cara untuk berkomunikasi antar komponen yang tidak terikat dengan parent-child. Event Bus memanfaatkan instance baru dari Vue.js sebagai penampung dan kita akan membuat suatu hook baru ke dalam instance ini, kemudian komponen lain bisa mengeksekusi hook ini dengan melakukan $emit terhadap hook tersebut.</p>
<p id="cb7a" class="graf graf--p graf-after--p">Berikut contoh komunikasi yang bukan parent-child di website <a class="markup--anchor markup--p-anchor" href="https://vuejs.org/" target="_blank" rel="nofollow noopener" data-href="https://vuejs.org">https://vuejs.org</a> :</p>

<figure id="3695" class="graf graf--figure graf-after--p graf--trailing">
<div class="aspectRatioPlaceholder is-locked">
<div class="aspectRatioPlaceholder-fill"></div>
<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*BlM5TqbJmo4DMQjfY9BZnA.png" data-width="607" data-height="317" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="38"></canvas>

[caption id="" align="aligncenter" width="607"]<img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*BlM5TqbJmo4DMQjfY9BZnA.png" alt="" width="607" height="317" data-src="https://cdn-images-1.medium.com/max/720/1*BlM5TqbJmo4DMQjfY9BZnA.png" /> Contoh Event Bus (Sumber: https://vuejs.org)[/caption]

</div>
</div>
<figcaption class="imageCaption"></figcaption></figure>
</div>
</div>
</section><section class="section section--body">
<div class="section-divider"></div>
<div class="section-content">
<div class="section-inner sectionLayout--insetColumn">
<h3 id="10f9" class="graf graf--h3 graf--leading">State Management</h3>
<p id="7f76" class="graf graf--p graf-after--h3">State management memiliki fitur yakni menempatkan berbagai state dari berbagai komponen kedalam satu tempat sehingga mudah untuk digunakan ulang oleh komponen lain. Penggunaan state management atau menempatkan suatu state ke dalam state management paling pas adalah ketika suatu state akan diakses oleh lebih dari 2 komponen dalam satu aplikasi, karena menggunakan Props pasti akan sulit di-<em class="markup--em markup--p-em">maintain</em>kedepannya. Namun menggunakan state management kadangkala juga menjadi terlalu bloated kalau hanya untuk menangani data yang hanya diakses oleh 2 komponen, pada kondisi ini menggunakan Props akan lebih bijak menurut saya.</p>
<p id="0a95" class="graf graf--p graf-after--p">State management yang bisa digunakan oleh Vue.js sendiri ada banyak, bisa dilihat di <a class="markup--anchor markup--p-anchor" href="https://github.com/vuejs/awesome-vue#state-management" target="_blank" rel="nofollow noopener" data-href="https://github.com/vuejs/awesome-vue#state-management"><em class="markup--em markup--p-em">awesome-vue</em></a><em class="markup--em markup--p-em">. </em>Namun kalau rekomendasi dari Vue.js adalah menggunakan <a class="markup--anchor markup--p-anchor" href="https://github.com/vuejs/vuex" target="_blank" rel="nofollow noopener" data-href="https://github.com/vuejs/vuex"><strong class="markup--strong markup--p-strong">Vuex</strong></a>.</p>

<figure id="f170" class="graf graf--figure graf-after--p graf--trailing">
<div class="aspectRatioPlaceholder is-locked">
<div class="aspectRatioPlaceholder-fill"></div>
<div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*-Dryjb1LkVIgEEsIWM-bxA.png" data-width="1280" data-height="866" data-action="zoom" data-action-value="1*-Dryjb1LkVIgEEsIWM-bxA.png" data-scroll="native"><canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="50"></canvas>

[caption id="" align="alignnone" width="720"]<img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/720/1*-Dryjb1LkVIgEEsIWM-bxA.png" alt="" width="720" height="487" data-src="https://cdn-images-1.medium.com/max/720/1*-Dryjb1LkVIgEEsIWM-bxA.png" /> Vuex Data Flow (Sumber : https://vuex.vuejs.org/en/intro.html)[/caption]

</div>
</div>
<figcaption class="imageCaption"></figcaption></figure>
</div>
</div>
</section><section class="section section--body section--last">
<div class="section-divider"></div>
<div class="section-content">
<div class="section-inner sectionLayout--insetColumn">

&nbsp;
<p id="3067" class="graf graf--p graf--leading">Demikian artikel pendek ini, semoga bisa membantu kalian yang masih bingung bagaimana caranya berkomunikasi antar komponen Vue.js.</p>
<p id="683e" class="graf graf--p graf-after--p"><strong class="markup--strong markup--p-strong">Semoga bermanfaat</strong></p>
Artikel ini telah dipublikasikan juga di medium: <a href="https://medium.com/vuejs-id/cara-berkomunikasi-antar-component-di-vue-js-9544d5059c12">https://medium.com/vuejs-id/cara-berkomunikasi-antar-component-di-vue-js-9544d5059c12</a>

&nbsp;
<p id="c198" class="graf graf--p graf-after--p">Sumber referensi dan bacaan :</p>

<div id="dbda" class="graf graf--mixtapeEmbed graf-after--p"><a class="markup--anchor markup--mixtapeEmbed-anchor" title="https://alligator.io/vuejs/component-communication/" href="https://alligator.io/vuejs/component-communication/" rel="nofollow" data-href="https://alligator.io/vuejs/component-communication/"><strong class="markup--strong markup--mixtapeEmbed-strong">Vue.js Component Communication Patterns</strong></a></div>
</div>
</div>
</section>