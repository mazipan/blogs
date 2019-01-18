---
title: 'Belajar mengenai &#x26a1;AMP'
date: 2018-06-04 12:55:06
author: Irfan Maulana
categories: Amp, Web Performance, Programming
tags: amp, web performance, programming
template: article.pug

---
[caption id="" align="aligncenter" width="678"]<img src="https://cdn-images-1.medium.com/max/800/1*r2D-2y3hpUUpoe_ZeL-fFA.png" alt="Flash Illustration" width="678" height="381" /> <em>The Flash. Image source: https://nerdhaunt.com</em>[/caption]
<h2>Apa itu &#x26a1;AMP?</h2>
&#x26a1;AMP (Accelerated Mobile Pages) merupakan library open source yang memberikan cara untuk menyajikan website dengan menarik, mulus dan yang pasti bisa dimuat dalam waktu mendekati instan kepada penggunanya. AMP merupakan project inisiatif dari Google melalui <a href="https://www.ampproject.org/" target="_blank" rel="noopener">ampproject.org</a>.
<h2>Bagaimana mengenali &#x26a1;AMP?</h2>
Pernahkah kamu perhatikan ketika sedang melakukan pencarian di Google Search melalui perangkat smartphone kalian? Sesekali akan kamu temui logo petir &#x26a1; di sebelah kiri dari hasil pencarian kamu.

<span class="more"></span>

[caption id="" align="aligncenter" width="360"]<img src="https://cdn-images-1.medium.com/max/800/1*22oqtj5TmOfde3cSdGJUkQ.png" alt="" width="360" height="641" /> <em>Contoh hasil pencarian dengan Google</em>[/caption]

Ya, ini merupakan tanda yang sengaja disematkan oleh Google di dalam hasil pencarian kita ketika diakses melalui mobile device, tanda yang menunjukkan bahwa konten dari website tersebut telah mendukung teknologi AMP dan kita bisa optimis bahwa kalau kita klik hasil pencarian tersebut maka akan dimuat secara cepat mendekati instans.
<h2>Mengapa harus &#x26a1;AMP?</h2>
Kamu mungkin bertanya-tanya kenapa harus ada AMP kalau semua kebutuhan kita untuk membuat sebuah website modern saat ini sudah terpenuhi, apa juga untungnya bagi kita untuk mengadopsi teknologi ini.

AMP bagi saya pribadi (baca: opini) merupakan sebuah temuan yang revolusioner, AMP hadir justru karena pengetahuan yang sebenarnya sudah diketahui kita semua. Kita bersama-sama telah setuju dan mengerti bahwa dalam mengembangkan website semakin banyak hal yang kita kirim ke pengguna maka berakibat semakin lamban website tersebut dimuat. Sayangnya dengan derasnya perkembangan teknologi membuat hal ini juga dieksploitasi oleh para pengembang, mereka seolah ingin menyematkan berbagai hal keren ke dalam website mereka.

[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*wVK29UImtgZ3ChOtdK3lZw.png" alt="The web = Endless possibilities" width="800" height="435" /> <em>The web = Endless possibilities</em>[/caption]

AMP pada posisi ini menawarkan teknologi yang diharapkan bisa mengembalikan website seperti sedia kala, cepat dengan tanpa mengorbankan pengalaman pengguna.

[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*wJcz2k6DdqY6dCQEdacoLA.png" alt="Reason for AMP’s existence" width="800" height="374" /> <em>Reason for AMP’s existence</em>[/caption]
<h2>Bagian inti dari &#x26a1;AMP</h2>
AMP bukanlah sebuah sihir yang bisa membuat website kamu tiba-tiba menjadi cepat bahkan mendekati instan, AMP memiliki tiga bagian inti yang membuatnya menjadi cepat, seperti dijelaskan berikut:

<strong>AMP HTML</strong>
AMP HTML merupakan HTML biasa dengan berbagai restriksi agar bisa tetap dikirimkan dengan performa yang memuaskan.

<strong>AMP JS</strong>
AMP JS merupakan library yang memastikan halaman AMP selalu cepat ketika melakukan rendering.

<strong>AMP Cache</strong>
Google AMP Cache adalah cache yang disediakan untuk menyimpan halaman-halaman AMP agar lebih cepat ketika diakses.

[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*zyP7t3wUBEv0d3je4E6p2w.png" alt="" width="800" height="417" /> <em>Screenshot from: https://www.ampproject.org/learn/overview/</em>[/caption]
<h2>Bagaimana membuat &#x26a1;AMP?</h2>
AMP seperti dijelaskan sebelumnya bukanlah sihir, ada beberapa langkah yang harus dikerjakan untuk mengadopsinya. Namun juga AMP tidak akan membabi buta menerapkan berbagai teknologi canggih sehingga kita tidak perlu belajar banyak hal untuk bisa bereksperimen dengan teknologi ini. Cukup terbiasa dengan HTML dan CSS serta sedikit pengetahuan JavaScript, kita sudah bisa membuat halaman AMP.

[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*K4xf9itEcwkGmd6vhMto2w.png" alt="&#x26a1;&#xfe0f;AMP rules" width="800" height="255" /> <em>&#x26a1;AMP memiliki beberapa aturan strict</em>[/caption]

Namun ada sedikit yang perlu diketahui sebelumnya, membangun AMP tidaklah sama persis dengan membangun website biasanya. Ada beberapa strictness yang diberlakukan oleh AMP agar tetap mempertahankan performa yang luar biasa cepat, diantaranya kita tidak boleh menambahkan javascript selain dari yang sudah divalidasi dan dijadikan standar komponen AMP, HTML di AMP juga memiliki aturan yang diperketat agar tidak terjadi bloated code pada website nantinya, dalam urusan CSS pun AMP pada dasarnya menginginkan kita membuat stylesheet yang tepat guna.

Tapi tidak usah khawatir, AMP bukanlah hal yang menyeramkan. Untuk membuat AMP bahkan kita cukup membuat skeleton dasar seperti berikut:

[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*yxpkvdWV8gRYc_Mr5jhPKw.png" alt="" width="800" height="490" /> <em>Screenshot from: https://www.ampproject.org/docs/getting_started/create/basic_markup</em>[/caption]

[caption id="" align="aligncenter" width="679"]<img src="https://cdn-images-1.medium.com/max/800/1*NBTmmchDZTmr7jsB01tPIg.png" alt="" width="679" height="724" /> <em>Kebutuhan dasar sebuah halaman AMP. Source: https://www.ampproject.org</em>[/caption]

Selengkapnya langkah-langkah membuat halaman &#x26a1;AMP bisa disimak di tautan berikut: <a href="https://www.ampproject.org/docs/getting_started/create" target="_blank" rel="noopener">https://www.ampproject.org/docs/getting_started/create</a>
<h2>&#x1f36c; Kisah manis</h2>
AMP akan memberikan kita berbagai pengalaman menyenangkan, seperti diantaranya:

Dalam fase pengembangan, sebuah halaman AMP bisa dengan mudah diselesaikan, tidak dibutuhkan keahlian yang super untuk mengerjakannya. Seorang junior programmer pun bisa menyelesaikan dalam jangka waktu yang tidak terlalu lama.

Untuk mengerjakan halaman AMP dibutuhkan server side rendering karena kita tidak diperkenankan menyisipkan javascript selain dari AMP, sehingga mungkin dibutuhkan programmer yang familiar dengan server render templating yang disesuaikan dengan bahasa pemrograman masing-masing.

Pengerjaan ini semakin mudah karena dari team AMP sendiri sudah membuatkan website yang berisikan berbagai macam dokumentasi dan koleksi berbagai komponen AMP yang bisa kita gunakan dengan mudah karena sudah disertai contoh kode serta playground untuk mencoba kode tersebut. Kamu bisa melihat koleksi komponen dari AMP di tautan berikut <a href="https://www.ampproject.org/docs/reference/components" target="_blank" rel="noopener">https://www.ampproject.org/docs/reference/components</a>, sedangkan untuk playground bisa dicoba di tautan <a href="https://ampbyexample.com/playground/" target="_blank" rel="noopener">https://ampbyexample.com/playground/</a>.
<h2>&#x2615; Kenyataan pahit</h2>
Kenyataanya hidup tak selamanya manis, pun dengan AMP. Setelah fase pengembangan yang terasa begitu mulus dan tanpa hambatan, lambat laun masalah mulai muncul dan tidak ada habisnya. Ya, AMP perlu selalu kamu monitoring untuk memastikan tetap valid dan tidak melanggar aturan yang telah dibuat.

Kamu bisa memonitoring validitas dari halaman AMP yang ada melalui <a href="https://www.google.com/webmasters/tools/accelerated-mobile-pages" target="_blank" rel="noopener">webmaster tools</a> dari Google. Tools ini akan memberikan grafik berapa jumlah AMP yang berhasil di index dan berapa jumlah AMP yang rusak (baca: error) atau tidak valid. Setiap kerusakan yang terjadi akan dikelompokkan berdasarkan jenis kerusakannya. Kabar baiknya adalah tools ini memberikan penjelasan yang gamblang kesalahan yang terjadi karena apa serta bagian mana yang menyebabkan tidak valid.

[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*A7I4V9HvFm4vhsN6eklaCw.png" alt="" width="800" height="276" /> <em>Contoh grafik hasil analisa https://mazipanneh.com/blog/ di webmaster tools</em>[/caption]

Bila tools ini kurang memuaskan, kita bisa juga melakukan test secara live terhadap halaman AMP kita lewat tautan <a href="https://search.google.com/test/amp" target="_blank" rel="noopener">https://search.google.com/test/amp</a>.

Dari pengalaman saya memonitoring halaman AMP ini, banyak kesalahan terjadi datang dari konten yang dinamis dan bisa semena-mena diisi atau ubah oleh tools semacam CMS atau tools <a href="https://en.wikipedia.org/wiki/WYSIWYG" target="_blank" rel="noopener">WYSIWYG</a>. Tools ini seringkali membawa hal-hal yang memang melanggar aturan dari AMP seperti inline stylesheet, tag-tag atau attribute yang tidak penting dalam html, bahkan sampai inject script. Hal ini juga yang membuat beberapa Wordpress Plugin seperti <a href="https://wordpress.org/plugins/accelerated-mobile-pages/" target="_blank" rel="noopener">AMP for WP</a> memutuskan untuk membuat text editor yang berbeda antara konten asli dengan konten yang akan disajikan untuk AMP.

Kabar baiknya lagi adalah Google Search dengan baik hati akan sangat cepat tanggap dengan terjadinya kesalahan di halaman AMP kalian, dengan cepat tanda petir &#x26a1; di hasil pencarian akan menghilang ketika terdeteksi kesalahan. Beda lagi jika kalian menambahakan halaman AMP baru, bisa butuh waktu berhari-hari untuk memunculkan tanda petir &#x26a1; ini.
<h2>&#x1f57a; Bonus: Tips</h2>
<ol>
 	<li>Secepatnya buatlah halaman AMP untuk website kalian, AMP merupakan jalan tercepat membuat website kalian bisa diakses dengan cepat tanpa harus menunggu migrasi teknologi.</li>
 	<li>Pengembangan halaman AMP tidak terlalu susah, tapi sebaiknya pelajari terlebih dahulu beberapa rule dasar yang ada di AMP termasuk hal-hal dasar yang membuat AMP itu dianggap tidak valid.</li>
 	<li>Lebih baik menggunakan komponen yang sudah dibuatkan oleh AMP meskipun beberapa hal sebenarnya kalian bisa membuat sendiri, seperti tab, carousel, lightbox dan berbagai komponen lainnya.</li>
 	<li>Konten pada halaman AMP harus dipantau secara periodik dan teratur agar berbagai kesalahan bisa cepat teridentifikasi, sediakan waktu untuk memantau Webmaster Tools.</li>
 	<li>Kesalahan membuat halaman AMP tidak akan dianggap oleh hasil pencarian Google, oleh karenanya segera hotfix bila terdeteksi kesalahan pada halaman AMP.</li>
</ol>
Tulisan ini telah dipublikasikan di Medium: <a href="https://medium.com/bliblidotcom-techblog/amp-sebuah-cerita-manis-dan-pahit-53b484896e96" target="_blank" rel="noopener">https://medium.com/bliblidotcom-techblog/amp-sebuah-cerita-manis-dan-pahit-53b484896e96</a>