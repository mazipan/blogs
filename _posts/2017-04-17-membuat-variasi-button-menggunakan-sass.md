---
id: 145
title: Membuat Variasi Button Menggunakan SASS
date: 2017-04-17T12:52:05+00:00
author: Irfan Maulana
layout: post
guid: http://mazipanneh.com/blog/?p=145
permalink: /2017/04/membuat-variasi-button-menggunakan-sass/
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
dsq_thread_id:
  - "5735846505"
categories:
  - CSS
  - Frontend
  - Programming
tags:
  - css
  - frontend
  - sass
---
<figure style="width: 655px" class="wp-caption aligncenter"><img src="https://i.stack.imgur.com/TdX9B.jpg" alt="Variasi Button Menggunakan SASS" width="655" height="222" /><figcaption class="wp-caption-text"><span style="color: #999999; font-size: 10pt;"><em>Contoh Variasi Button dalam Bootstrap (source : https://i.stack.imgur.com/TdX9B.jpg)</em></span></figcaption></figure> 

**Membuat Button dengan SASS** &#8211; Button merupakan salah satu kompoenen web yang sering digunakan karena fungsinya yang menunjukkan sebuah aksi yang bisa dieksekusi setelah di klik. Button diluar sana terdapat banyak sekali variasinya tergantung dari faktor kebutuhan, estetika, maupun kesenangan pengguna maupun pengembang web.

Dalam sebuah framework CSS sendiri biasanya mereka akan membawa satu gaya yang konsisten untuk masing-masing variasi button yang disediakan, seperti yang ditampilkan pada gambar diatas adalah variasi button yang dibawa oleh framework bootstrap sebelum dimodifikasi lewat custom-theme. Ada pula yang membawa gaya flat, material, emboss dan lain-lain.

Kita sendiri setelah belajar <a href="https://mazipanneh.com/blog/2017/04/mengenal-dan-belajar-sass-sebagai-css-pre-processor/" target="_blank">SASS sebagai CSS Pre-processor</a>, kita menjadi tahu bahwa kita bisa melakukan banyak hal dengan keunggulan pre-processor ini, termasuk juga dengan hal-hal yang tadinya susah untuk dibuat menggunakan CSS biasa.Salah satunya seperti yang akan kita buat dimana kita akan membuat beberapa variasi button dengan satu gaya yang konsisten yang tentu saja jika dibuat menggunakan CSS biasa maka akan menyusahkan kita karena harus berulang-ulang membuat hal yang sama karenanya SASS adalah tools wajib kita buat mengerjakan contoh yang akan kita kerjakan berikut.

Adapun kurang lebih langkah-langkahnya adalah :

Pertama kita akan definisikan beberapa variasi warna dari button yang kita buat, variasi warna ini juga termasuk ketika di hover dan juga warna dari font button tersebut. Katakanlah kita akan buat 6 variasi warna button maka kurang lebih seperti ini :

    
    $white 		: #fff !default;
    $black 		: #000 !default;
    $grey           : #999 !default;
    $greenLight	: lighten($green,10%) !default;
    $red		: #F8011E !default;
    $redLight 	: lighten($red,10%) !default;
    $green		: #00B35E !default;
    $greenLight	: lighten($green,10%) !default;
    $blue 		: #0096D9 !default;
    $blueLight	: lighten($blue,10%) !default;
    $orange		: #F7931E !default;
    $orangeLight    : lighten($orange,10%) !default;
    
    $buttonVariansName  : green, red, blue, orange, gray, white;
    $buttonVariansHex   : $green, $red, $blue, $orange, $grey, $white;
    $buttonVariansHover : $greenLight, $redLight, $blueLight, $orangeLight, $greyLight, $white;
    $buttonVariansFont  : $white, $white, $white, $white, $black, $black;
    

Berikutnya, kita akan membuat style sederhana untuk button kita sebelum diberikan warna seperti yang sudah kita definisikan di awal, berikut kodenya :

    
    .button
    {
        
        display: inline-block;
        padding: 13px 20px;
        outline: none;
        border: none;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
    
        @include appearance(none);
    
        &:hover, &:focus, &:active
        {
            text-decoration: none;
        }
    }
    

Kalau ada yang bingung kode `@include appearance(none);` ada dimana, itu adalah mixin yang bisa kalian lihat kodenya di <a href="https://github.com/mazipan/bem-kit/blob/master/src/_scss/mixins/_appearance.scss" target="_blank">repository bem-kit.</a> Saya juga menambahkan `:hover, :focus, :active` agar ketika digunakan oleh link tag seperti `` tidak membawa garis bawah yang biasanya menjadi bawaan sebuah link.

Setelah kita membuat style standar-nya kini saatnya memberikan warna pada button tersebut sesuai dengan variasi yang kita buat diawal. Dan tentu saja kita memanfaatkan looping dari <a href="https://mazipanneh.com/blog/2017/04/mengenal-dan-belajar-sass-sebagai-css-pre-processor/" target="_blank">SASS</a> agar lebih mudah, berikut contoh kodenya :

    
     @for $i from 1 through length($buttonVariansName) {  
        &--#{nth($buttonVariansName, $i)} {
            background: nth($buttonVariansHex, $i);
            color: nth($buttonVariansFont, $i);
    
            &:hover
            {
                background: nth($buttonVariansHover, $i);
                color: nth($buttonVariansFont, $i);
            }
        }
    }
    

Kode diatas diletakkan di dalam selector `.button` sehingga ketika kita menggunakan symbol `&--` dibawahnya berarti kita akan membawa nama parent-nya sebagai prefix.
   
Dari contoh kode looping tersebut akan menghasilkan kurang lebih seperti ini :

     
    .button--green { background: #00B35E; color: #fff; }
    .button--green:hover { background: #00e679; color: #fff; }
    .button--red { background: #F8011E; color: #fff; }
    .button--red:hover { background: #fe2e46; color: #fff; }
    .button--blue { background: #0096D9; color: #fff; }
    .button--blue:hover { background: #0db4ff; color: #fff; }
    .button--orange { background: #F7931E; color: #fff; }
    .button--orange:hover { background: #f9ab4f; color: #fff; }
    .button--gray { background: #999; color: #000; }
    .button--gray:hover { background: #CCC; color: #000; }
    .button--white { background: #fff; color: #000; }
    .button--white:hover { background: #fff; color: #000; }
    

Sampai disini sebenarnya kita telah berhasil membuat variasi button kita yang bisa kita gunakan kurang lebih seperti berikut :

     
    <button class="button button--green">button button--green</button>
    <button class="button button--red">button button--red</button>
    <button class="button button--blue">button button--blue</button>
    <button class="button button--orange">button button--orange</button>
    <button class="button button--gray">button button--gray</button>
    

Untuk lebih lanjutnya, dengan cara yang sama kita bisa membuat varian button dengan style yang berbeda, misalkan kita ingin membuat varian button&#8211;outline, material, emboss atau lainnya. Silahkan berkreasi dengan ide nya masing-masing ya karena saya hanya membahas dasar bagaimana cara membuat button memanfaatkan kelebihan SASS saja. 
   
Untuk hasil tampilan dari kode yang kita buat bisa dilihat <a href="https://mazipan.github.io/bem-kit/demo/#buttons" target="_blank">disini</a>, dan Anda bisa lihat kode lengkapnya di github saya <a href="https://github.com/mazipan/bem-kit" target="_blank">disini</a>.

Download juga <a href="https://mazipanneh.com/blog/download-ebook-programming/" target="_blank">Ebook Mengembangkan CSS Framework Sendiri</a>.
   
Semoga bermanfaat,
   
Ditulis oleh Irfan Maulana di jam istirahat kerja.

Salam.