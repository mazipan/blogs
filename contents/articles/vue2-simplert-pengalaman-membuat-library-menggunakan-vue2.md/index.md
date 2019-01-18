---
title: Vue2-Simplert - Pengalaman Membuat Library Menggunakan Vue2
date: 2017-06-11T09:00:19+00:00
author: Irfan Maulana
categories: Vue
tags: vue
template: article.pug
---
<figure style="width: 344px" class="wp-caption aligncenter"><img title="Vue2-Simplert Logo" src="https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo+icon.png" alt="Vue2-Simplert Logo" width="344" height="337" /><figcaption class="wp-caption-text">Vue2-Simplert Logo</figcaption></figure> 

**Vue2-Simplert** adalah sebuah component yang dibuat untuk framework Vue versi 2 untuk memenuhi kebutuhan saya dan kantor tempat saya bekerja akan sebuah komponen yang mirip seperti SweatAlert yang telah kita kenal sebelumnya. Sebenarnya sudah ada beberapa alternatif diluar sana, namun setelah menimbang dari beberapa hal kita memutuskan untuk membuatnya sendiri saja dengan harapan nantinya akan mudah untuk di maintain dan di custom sesuai dengan kemauan kita.

<span class="more"></span>

**Vue2-Simplert** sendiri saya coba inisialisasi pembuatannya sebagai project open-source dengan harapan bisa digunakan oleh mereka yang mempunyai problem yang sama serta bisa mendapatkan bantuan sehingga bisa lebih cepat dalam pengembangannya.

**Vue2-Simplert** tentu saja tidak datang langsung seperti sekarang yang kalian lihat. Ada perjalanan seperti juga perjalanan saya yang masih sangat baru belajar Vue versi 2 serta belajar membuat project open-source yang baik dan layak digunakan orang lain.

Menengok ke belakang pada versi awal saya tidak begitu banyak membutuhkan setup yang aneh karena saya memang ingin fokus pada inisialisai pembuatan komponen nya, jadi saya putuskan untuk mencari-cari beberapa repository Vue2 dengan setup yang minimalis. Setelah mencari-cari akhirnya saya temukan repository yang saya pikir cocok untuk dijadikan skeleton project dan kebetulan repo tersebut punya orang Indonesia. Anda mungkin bisa melihat repositorinya [disini](https://github.com/BosNaufal/vue2-loading-bar "vue2-loading-bar").

Dengan menggunakan skeleton ini pada masa-masa awal pembuatan **Vue2-Simplert** saya memulai untuk membuat komponen sederhana yang bisa memunculkan popup dan bisa di set predefine config layaknya SweatAlert. 
   
Saat ini sendiri **Vue2-Simplert** telah banyak berkembang sejak dari masa awal release termasuk migrasi skeleton dari yang sederhana menjadi menggunakan Vue-CLI skeleton agar mudah setup unit test dan lain-lain. 
   
Menyiapkan project open-source Saya juga belajar untuk meyiapkan dokumentasi agar orang lain bisa mudah menggunakan dan membantu mengembangkan, dan sampai saat ini **Vue2-Simplert** sudah memiliki dokumentasi yang lumayan lengkap yang bisa Anda lihat di [halaman wiki Vue2-Simplert](https://github.com/mazipan/vue2-simplert/wiki "Vue2-Simplert wiki").

Setelah berbagai perubahan pada design dan kodenya berikut adalah cara menggunakan **Vue2-Simplert** mulai dari versi 0.2.1 :

  1. **Instalasi** 
    <pre>npm install vue2-simplert — save-dev
				// atau
				yarn add vue2-simplert
			</pre>

  2. **Komponen Referer** 
    <pre>import Simplert from 'vue2-simplert'
				export default {
				   components: {Simplert}
				};
			</pre>

  3. **Template View** 
    <pre>&lt;simplert useRadius=true useIcon=true ref="simplert"&gt;
			&lt;/simplert&gt;
			</pre>

  4. **Membuka Popup** 
    <pre>let obj = {
			   title: 'Title',
			   message: 'Message',
			   type: 'success'
			}
			this.$refs.simplert.openSimplert(obj)
			</pre>

  5. **Konfigurasi Object** 
    <pre>{
			  title: 'test', //string -- title alert
			  message: 'message', //string -- message alert
			  type: 'success', //string -- type : info (default), success, warning, error
			  customClass: '', //string -- custom class in simplert div
			  customIconUrl: '', //string -- custom url custom image icon
			  customCloseBtnText: '', //string -- close button text
			  customCloseBtnClass: '', //string -- custom class for close button
			  onClose: this.onClose, //function -- when close triggered
			  useConfirmBtn: false, //boolean -- using confirm button
			  customConfirmBtnText: '', //string -- confirm button text
			  customConfirmBtnClass: '', //string -- custom class for confirm button
			  onConfirm: this.onConfirm, //function -- when confirm button triggered
			  disableOverlayClick: false //boolean -- set to true if you want disable overlay click function
			}
			</pre><figure style="width: 344px" class="wp-caption aligncenter">

<img title="Vue2-Simplert Logo Typography" src="https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png" alt="Vue2-Simplert Logo Typography" width="344" height="71" /><figcaption class="wp-caption-text">Vue2-Simplert Logo Typography</figcaption></figure> 

Anda bisa melihat semua dokumentasi dari mulai cara memasang, cara menggunakan, contoh penggunaan sampai config yang tersedia di halaman wiki **Vue2-Simplert** [disini](https://github.com/mazipan/vue2-simplert/wiki "Vue2-Simplert wiki").

Pada akhirnya, project ini bukanlah project wah yang bisa begitu berguna buat Anda mungkin, tapi semoga apa yang saya bagikan bisa berguna bagi mereka yang sedang mengalami dan membutuhkan solusi yang sama dengan kami. 
   
Anda bisa membuka issue di [Github Repository **Vue2-Simplert**](https://github.com/mazipan/vue2-simplert "Vue2-Simplert Github") bila ada request feature atau menemukan bug dalam **Vue2-Simplert** [disini](https://github.com/mazipan/vue2-simplert/issues "Vue2-Simplert issues").

Ditulis oleh Irfan Maulana. 
   
Salam.