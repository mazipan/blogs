---
id: 273
title: 'Belajar Angular &#8211; Bagian 1 &#8211; Pengenalan dan Inisialisasi Project'
date: 2017-05-17T09:19:47+00:00
author: Irfan Maulana
layout: post
guid: http://mazipanneh.com/blog/?p=273
permalink: /2017/05/belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project/
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
dsq_thread_id:
  - "5824236551"
ampforwp-redirection-on-off:
  - enable
categories:
  - Frontend
  - Javascript
  - Programming
tags:
  - angular
  - angularid
  - frontend
  - javascript
  - programming
---
<figure style="width: 750px" class="wp-caption aligncenter"><img src="https://mazipan.github.io/wp-contents/images/belajar-angular-bagian-1-mazipanneh.jpg" alt="Belajar Angular - Bagian 1 - Pengenalan dan Inisialisasi Project" width="750" height="422" /><figcaption class="wp-caption-text">Belajar Angular &#8211; Bagian 1 &#8211; Pengenalan dan Inisialisasi Project</figcaption></figure> 

**Belajar Angular &#8211; Bagian 1 &#8211; Pengenalan dan Inisialisasi Project** &#8211; Angular merupakan versi upgrade dari AngularJS yang sebelumnya kita kenal. Ya, jika sebelumnya kita menggunakan AngularJS v.1.x maka di versi 2 keatas kita akan menyebut framework yang didukung Google ini dengan nama Angular (*tanpa embel-embel JS dibelakangnya). Jadi jelas juga kalau artikel kali ini kita akan membahas mengenai Angular versi 2 keatas. Pada saat artikel ini ditulis, Angular sendiri sudah mencapai versi 4.2.0.beta dan bisa Anda lihat di <a href="https://github.com/angular/angular/releases" target="_blank" rel="noopener noreferrer">release page</a> mereka. Kenapa saya sebut versi 2 ke atas ? Karena memang versi 2 adalah versi awal dimana Angular meluncurkan framework ini dengan mengusung perubahan total dari yang sebelumnya versi satu, mengenai versi Angular sendiri memang akan selalu bertambah secara rutin karena memang code nya yang open-source sehingga perbaikan dan penambahan fitur bisa lebih cepat. Bahkan meskipun sekarang sudah mencapai versi 4, Anda tidak perlu khawatir karena pada dasarnya masih sama dengan versi 2 dengan berbagai optimisasi dan perbaikan.

Tulisan ini merupakan serial pembahasan mengenai framework **Angular**, Anda mungkin ingin membaca tulisan lainnya berikut :

  1. <a href="https://mazipanneh.com/blog/2017/05/belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project">Bagian 1 &#8211; Pengenalan dan Inisialisasi Project</a> 
  2. <a href="http://mazipanneh.com/blog/2017/05/belajar-angular-bagian-2-membuat-komponen/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-2-membuat-komponen">Bagian 2 &#8211; Membuat Komponen</a> 
  3. <a href="https://mazipanneh.com/blog/2017/05/belajar-angular-bagian-3-membuat-service/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-3-membuat-service">Bagian 3 &#8211; Membuat Service</a> 
  4. <a href="http://mazipanneh.com/blog/2017/06/belajar-angular-bagian-4-membuat-route/" title="belajar-angular-bagian-4-membuat-route" target="_blank" rel="noopener noreferrer">Bagian 4 &#8211; Membuat Route</a> 
  5. <a href="http://mazipanneh.com/blog/2017/06/belajar-angular-bagian-5-membuat-custom-pipe-atau-filter/" title="belajar-angular-bagian-5-membuat-custom-pipe-atau-filter" target="_blank" rel="noopener noreferrer">Bagian 5 &#8211; Membuat Custom Pipe atau Filter</a> 
  6. <a href="http://mazipanneh.com/blog/2017/07/belajar-angular-bagian-6-persiapan-file-production/" title="belajar-angular-bagian-6-persiapan-file-production" target="_blank" rel="noopener noreferrer">Bagian 6 &#8211; Persiapan File Production</a> 

**Library Utama Angular**

Pada versi 2 ini, Angular tidak datang sendirian seperti sebelumnya dimana Angular selalu berusaha jadi framework yang super power, apa lo mau gw ada. Angular juga terbilang pintar memilih pendukungnya, karena beberapa yang akan saya sebutkan memang masih memiliki masa depan yang cerah secerah matahari di bukit tabies. Angular mengusung <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">Typescript</a> besutan Microsoft sebagai official language dibandingkan menggunakan javascript native, tentu saja dengan harapan bisa lebih scale dengan dukungan type safe dan berbagai kelebihan lain yang ditawarkan oleh Typescript ini. Selain itu Angular juga menggandeng <a href="http://reactivex.io/rxjs/" target="_blank" rel="noopener noreferrer">RxJS</a> besutan ReactiveX untuk mendukung reactive programming menggunakan Observable Dan juga berbagai kelebihan yang dimilikinya. Tentu performa yang lebih baik dan kemudahan penanganan asynchronous stack diharapkan bisa lebih bisa ditangani oleh RxJS ini.

**Angular-CLI**

Menggunakan Typescript serta kebutuhan lainnya tentu membuat kita kesulitan untuk memulai project Angular karena terlalu banyak yang mesti di setup terlebih dahulu seperti webpack dan plugin pendukungnya, melihat hal ini Angular membuat <a href="https://github.com/angular/angular-cli" target="_blank" rel="noopener noreferrer">Angular-CLI</a>, seperti halnya React yang punya create-react-app, Ember dengan Ember-CLI serta VueJs dengan Vue-CLI nya. Angular-CLI dibuat untuk memudahkan kita dalam membuat project Angular untuk pertama kali, dimana kebutuhan dasar seperti run developement, unit test, end to end test, sampai production bundling kesemuanya sudah disediakan sehingga kita tidak perlu repot-repot lagi setup webpack configuration dan bisa langsung fokus mulai belajar menggunakan framework satu ini. 
   
Untuk instalasi Angular-CLI sendiri bisa dengan :

    npm install -g @angular/cli

Bila pemasangan berhasil, Anda seharusnya bisa mengecek versi dari Angular-CLI tersebut dengan cara :

    ng --version

**Inisialisasi Project dengan Angular-CLI**

Seperti disebut sebelumnya bahwa kita bisa dengan mudah membuat project Angular dengan bantuan Angular-CLI ini, Anda bisa membuat inisialisasi project Angular dengan perintah :

    ng new project_name

Ya, cukup dengan perintah itu maka Angular CLI akan membuatkan kita folder project baru kita beserta semua setup basicnya. Proses generate ini mungkin akan berjalan lumayan lama karena setelah mengenerate folder, Angular-CLI akan menjalankan `npm install` di dalam folder tersebut yang berarti mendownload semua depedency yang dibutuhkan dan telah dijelaskan di dalam `package.json` nya. Karena saya lebih senang menggunakan perinta `yarn install` dibanding npm jadi saya biasanya men-skip ketika proses install via npm sedang berjalan dan manual install lewat yarn agar tidak terlalu lama. 
   
Selesai proses pemasangan serta download semua depedency, maka project Angular kita sudah bisa langsung dijalankan. Kita bisa masuk ke folder project dengan cara `cd project_name`, kemudian jalankan project menggunakan perintah : `ng serve` Dan bila semua lancar tanpa hambatan maka project secara default akan dijalankan di browser pada alamat 
   
`http://localhost:4200/`

Demikian sekilas pembahasan awal mengenai framework Angular, semoga bermanfaat tulisan yang tidak seberapa ini. 
   
Ditulis oleh Irfan Maulana sambil nungguin anaknya tidur. 
   
Salam.