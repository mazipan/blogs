---
id: 265
title: Sisi Gelap Bootstrap CSS
date: 2017-05-14T01:13:25+00:00
author: Irfan Maulana
layout: post
guid: http://mazipanneh.com/blog/?p=265
permalink: /2017/05/sisi-gelap-bootstrap-css/
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
dsq_thread_id:
  - "5814527626"
categories:
  - CSS
  - Frontend
  - Programming
tags:
  - css
  - frontend
  - programming
---
![Bootstrap](https://site2img-api.herokuapp.com/parse/files/MqX4RIjBpnVgUg9lRrxmWRsDVmqR5SCOaYmnSpnx/2ba43291aa42c2e1e11e268e780a5e96_img.png)

**Sisi Gelap Bootstrap CSS** &#8211; Bootstrap CSS adalah salah satu Framework CSS terpopuler, terbaik dan terlengkap sampai saat ini. Ada banyak sekali hal yang dipermudah dengan menggunakan Bootstrap dibandingkan kita membuatnya manual menggunakan CSS native. Namun seperti setiap hal di dunia ini yang jika digunakan berlebihan pasti akan berdampak tidak baik, maka Bootstrap dengan segala kepopuleran serta kelebihan yang dimilikinya pun terkadang menjadi hal yang tidak baik untuk digunakan. 
   
Apa sebabnya ? 
   
Mari kita bicarakan lebih lanjut.

Sebelum saya lanjutkan tulisan ini perlu saya sampaikan terlebih dahulu bahwa yang saya tulis adalah persepsi atau sudut pandang saya, bisa jadi benar bisa juga salah. Jika Anda tidak setuju atau merasa pandapat saya tidak benar itupun hak Anda, silahkan Anda tetap dengan pendapat Anda atau bisa meninggalkan komentar di bagian bawah siapa tau saya bisa tercerahkan 🙂 dan mau mengikuti pendapat Anda. 🙂

Cerita berawal ketika saya meng-interview beberapa kandidat yang melamar sebagai Front End Developer di tempat saya bekerja, dan seperti kebiasaan kita orang teknikal yang belum puas kalau belum melihat bagaimana kode seseorang untuk tau bagaimana caranya solve problem, begitupun saya. 
   
Dan untuk masalah yang berkaitan dengan CSS saya terbiasa menanyakan dan meminta membuat hal sederhana seperti misal saya ingin dibuatkan block kotak-kotak yang berjejer ke samping, dll. Hal-hal yang saya pikir (*seharusnya) bisa di pecahkan secara mudah dengan pengetahuan-pengetahuan dasar yang dimiliki. 
   
Sayangnya ada beberapa kasus dimana saya menemukan mereka kesulitan untuk menjawab atau membuat kode mereka. 
   
Kecewa dengan hal semacam ini, saya coba tanyakan kepada kandidat ini apa sebenarnya kesulitan yang dihadapi dan apa pula yang membuat susah mengerjakan soal semacam ini. Dan ada jawaban yang membuat saya **tercengang**, yakni menurut kandidat ini hal tersebut biasa dia kerjakan menggunakan Bootstrap.

Ya, Bootstrap yang dimaksud tentu Framework terkenal yang kita sebut diawal. 
   
Sebagai seseorang yang sama sekali bukan fans berat framework yang satu ini, tentu saya kaget bahwa sebegitu hebatnya framework ini sampai-sampai membuat para developer kita (*terutama fresh graduate) terlalu bergantung padanya. Sebenarnya apa yang terjadi sehingga bisa seperti ini ? Apakah salah dari framework ini ? ataukah para developer kita yang salah ?

Kesalahan menurut saya jelas tidak pada framework tersebut, karena jelas juga Bootstrap telah sukses membantu jutaan orang diluar sana dalam menyelesaikan project mereka. 
   
Maka kesalahan saya pindahkan ke **oknum** tersebut yang mungkin juga menjadi kesalahan beberapa developer kita yang lain. Untuk mengetahui apakah Anda termasuk salah satu dari **oknum** tersebut mudah saja, coba tanyakan pada diri Anda sendiri apakah Anda bisa menyelesaikan masalah sederhana seperti pada contoh saya diatas tanpa bantuan si framework ? Kalau jawaban Anda tidak bisa, berarti ya. Anda salah satu yang saya sebut oknum pada tulisan kali ini.

Para oknum ini seenak jidat mereka belajar framework Bootstrap bahkan sebelum mereka belajar dan membaca dasar-dasar CSS di w3school. Ya, oknum ini belajar menggunakan Bootstrap namun lupa belajar mengetahui apa yang sebenarnya Bootstrap lakukan. 
   
Anda tentu saja berhak menggunakan class `row` atau `col-md-3` ketika menggunakan Bootstrap karena memang sudah seharusnya begitu, tapi please **tolong** donk ya paling tidak Anda tau kenapa Anda menggunakan class ini, kapan Anda bisa menggunakan class ini, apa yang dilakukan Bootstrap dengan class ini. Stop jadi oknum yang main copy-copy kode orang tanpa tau apa yang dikerjakan sebenarnya. Stop jadi oknum yang make Bootstrap dengan tidak bertanggung jawab. Stop bikin saya ketawa dengan hal semacam ini. 
   
Dengan Bootstrap kita bisa membuat hal semacam ini :

      <div class="row">
        <div class="col-md-3">column-3</div>
        <div class="col-md-3">column-3</div>
        <div class="col-md-3">column-3</div>
      </div>
    

Tapi masa kalian gak bisa buat pake `float` kaya gini :

      <div class="row">
        <div class="box">column-3</div>
        <div class="box">column-3</div>
        <div class="box">column-3</div>
      </div>
    

    .box{
      float: left;
      width: 33%;
    }
    

Atau bisa juga kan pake `inline-block` seperti ini :

      <div class="row">
        <div class="inline-box">column-3</div>
        <div class="inline-box">column-3</div>
        <div class="inline-box">column-3</div>
      </div>
    

    .inline-box{
      display: inline-block;
      width: 33%;
    }
    

Mungkin saya mesti kasih tau (*lagi) kalau semua framework CSS sebenarnya cuma kumpulan class dkk yang dibuat dari CSS native juga yang diharapkan bisa mempermudah kalian dalam membuat sesuatu. 
   
Kebayang gak kalau disuruh membuat media query sendiri untuk tiap column yang bisa responsive di berbagai ukuran layar ? Atau kita disuruh membuat button yang bisa dipakai berulang-ulang di banyak page ? Untuk hal-hal seperti inilah kita sangat butuh bantuan framework CSS. Karena mereka sudah menyediakan satu set hal-hal common dan akan sering kita gunakan. 
   
Jadi biarpun kebutuhan akan framework ini begitu tinggi namun jangan lupakan bahwa kehebatan framework inipun dibangun diatas hal-hal dasar yang seharusnya dipelajari oleh kita. Sudah seharusnya bagi kita untuk belajar hal mendasarnya terlebih dahulu sebelum mempelajari framework nya, jadi akan lebih mudah juga bagi kita untuk mempelajari cara kerja framework tersebut.

Sisi gelap sebenarnya lebih pantas disematkan pada kita sebagai developer dibandingkan menyematkan pada sebuah teknologi nya. Karena Bootstrap dalam hal inipun tidak salah, kita saja yang salah belajar. Dengan segala kemudahan yang diberikan jangan lantas membuat kita jadi malas buat belajar hal dasarnya. Yang sudah terlanjur basah terlalu bergantung pada framework ini, belum terlambat juga bagi Anda untuk kembali membaca-baca lagi tutorial di w3school untuk mengingatkan bagaimana hal-hal dasar bekerja.

Setelah tulisan ini di publish maka saya tidak akan tertawa geli lagi bila masih menemui hal yang sama terjadi lagi ketika melakukan interview, bukan hal yang lucu lagi ketika menemukan kesalahan terjadi berulang dan berantai. 
   
Sudah waktunya kita sebagai yang sudah lebih dulu tau untuk memberi tau kepada mereka yang baru belajar agar tidak salah jalan dan tidak mengulangi kesalahan yang kita sudah buat sebelumnya. 
   
Dan ayo perbaiki cara kita belajar.

Semoga tulisan ini bermanfaat terutama bagi para oknum yang saat ini masih berjalan di jalan yang sesat. 
   
Ditulis pada malam hari dan gelap-gelapan kala itu. 
   
Salam.