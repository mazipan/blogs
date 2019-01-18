---
title: Membuat Popup Modal Sederhana
date: 2017-05-20T09:47:37+00:00
author: Irfan Maulana
categories: CSS, Frontend, Programming
tags: css, frontend, programming, sass
template: article.pug
---
![Membuat Popup Modal Sederhana](https://cdn.tutsplus.com/webdesign/uploads/legacy/tuts/316_modal/final.png)

**Membuat Popup Modal Sederhana** - Popup Modal adalah jendela sembul yang muncul di sebuah aplikasi baik dengan disengaja ataupun sekarang ini banyak pula yang tanpa dilakukan perintah oleh User namun tiba-tiba muncul Popup Modal tersebut. Dalam sebuah aplikasi ataupun halaman website Popup Modal seringkali digunakan ketika kita ingin memberikan informasi ataupun meminta User melakukan sesuatu namun kita tidak ingin User kita meninggalkan halaman yang sedang dikunjunginya sekarang. Salah satu praktek yang seringkali digunakan adalah untuk membuat form Log-in Register, dimana biasanya menggunakan Popup Modal Sebagai penampung nya.

<span class="more"></span>

Tentu ada banyak alternatif diluar sana untuk membuat sebuah Popup Modal, dari yang sederhana, yang mainstream, sampai yang kompleks secara fungsi maupun tampilan. Salah satu yang sering kalian gunakan mungkin Bootstrap Modal, ya karena memang framework ini salah satu yang paling mainstream di kalangan web developer. Namun kali ini kita akan coba belajar bagaimana membuat sebuah Popup Modal Sederhana dengan cara yang semoga juga masih mudah untuk kalian ikuti dan pelajari. Bukan berarti <a href="https://mazipanneh.com/blog/2017/05/sisi-gelap-bootstrap-css/?nonamp=1" target="_blank">Saya tidak suka Bootstrap</a>, saya hanya suka untuk membuat sesuatu lebih sederhana, Kita semua tau lah Bootstrap keren dan mudah digunakan. 

Oke, kita mulai saja Membuat Popup Modal Sederhana nya, silahkan ikuti ya&#8230;



Pertama kita coba buat `block` untuk modal nya, kode ini saya coba ikuti dari bagaimana Bootstrap membuat modal nya namun coba disederhanakan dan pastinya dibuat lebih BEM biar lebih nyaman di hati, berikut contoh kodenya :

    <div id="modalPlain" class="modal" role="modal">
      <div class="modal__content">
        <div class="modal__header">
          <span class="modal__close">&times;</span>
          <h2>Modal Header</h2>
        </div>
        <div class="modal__body">
          <p>Some text in the Modal Body</p>
        </div>
        <div class="modal__footer">
          <h3>Modal Footer</h3>
        </div>
      </div>
    </div>
    

Masih terlihat mudah kan ? kita belum beri CSS pada `block` tersebut, tapi mudahnya saya coba jelaskan kita membuat `div` dengan id yang didefinisikan tambah class `modal` sebagai parent nya, lantas dibawahnya ada class `modal__content` yang merupakan penampung dari konten modal kita, dibawahnya ada 3 bagian yakni header, body dan footer yang biasanya ada di setiap Popup Modal terutama Bootstrap. 

Setelah membuat block `modal` diatas, waktunya memberikan sentuhan style pada block tersebut agar lebih cantik. Seperti biasa saya prefer menggunakan SCSS syntax, bagi yang masih bingung bisa baca <a href="https://mazipanneh.com/blog/2017/04/mengenal-dan-belajar-sass-sebagai-css-pre-processor/?nonamp=1" target="_blank">Pengenalan SASS</a> terlebih dahulu. Berikut contoh potongan kodenya : 

    
    .modal
    {
        display: none; 
        position: fixed; 
        z-index: 999; 
        left: 0;
        top: 0;
        width: 100%;
        height: 100%; 
        overflow: auto; 
        background-color: rgb(0,0,0); 
        background-color: rgba(0,0,0,0.4);   
    
        &__header{        
            padding: 2px 16px;      
        }
    
        &__content {
            position: relative;
            background-color: $white;
            margin: 15% auto;
            padding: 0;
            width: 80%;
    
            box-shadow : 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19); 
             
            -webkit-animation-name: animatetop;
            -webkit-animation-duration: 0.4s;
            animation-name: animatetop;
            animation-duration: 0.4s;
            
        } 
    
        &__body {
            padding: 2px 16px;
        }
    
        &__footer {
            padding: 2px 16px;
        }
    
        &__close {
            float: right;
            font-size: 28px;
            font-weight: bold;
            color: $grey;
            cursor: pointer;
            text-decoration: none;
    
            &:hover, &:focus {
                text-decoration: none;
            }
        }
    }
    
    @-webkit-keyframes animatetop {
        from {top: -300px; opacity: 0} 
        to {top: 0; opacity: 1}
    }
    
    @keyframes animatetop {
        from {top: -300px; opacity: 0}
        to {top: 0; opacity: 1}
    }
    

Dengan kode SASS diatas mungkin kita tidak bisa melihat hasilnya, karena sudah ada rule `display: none;` di class `.modal`, maka untuk mengetesnya tinggal coba dihapus terlebih dahulu rule tersebut. Pastikan tampilan Popup Modal sudah sesuai dengan yang kalian harapkan. 



Oh iya kode SASS tersebut sudah menggunakan variabel colors punya saya jadi mungkin akan error di tempat Anda, jadi silahkan ganti variabel $white dan $grey dengan hex yang sebenarnya atau gampangnya ganti dengan warna solid white dan grey saja. 

Sampai langkah kedua, kita sebenarnya udah berhasil membuat Popup Modal kita dengan cepat. Langkah selanjutnya yang perlu dipikirkan adalah switch rule di dalam class `.modal` yang tadinya `display: none;` menjadi `display: block;`. Perlu dipikirkan juga bagaimana cara trigger agar membuka modal ini.



Belajar dari Bootstrap, biasanya untuk mentrigger Modal di Bootstrap Kita bisa menggunakan kode :

    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
      Launch demo modal
    </button>
    

Bila dilihat, mereka menambahkan attribute `data-toggle="modal"` serta `data-target="modal_id_target"`, kita bisa buat mirip seperti ini, namun dengan cara yang berbeda. Berikut contoh kode nya :

    <button class="button button--blue" data-show="modal" data-target="modalPlain">
      Open Modal 
    </button>
    </p> 

Dan terakhir yang akan kita buat adalah Javascript function yang akan men-switch class modal agar bisa hide/show dengan lancar serta mencari modal mana yang seharusnya ditampilkan ketika di trigger dari suatu element.

Berikut contoh kode sederhana nya :

    var triggerBtn = $('[data-show=modal]').click(function(event){
            var modalId = $(this).attr('data-target');        
            $('#' + modalId).show();
        });
    
        $('.modal__close').click(function(event){        
            $(this).parents('.modal').hide();
        });
    
        $(window).click(function(event){
            if (event.target.className === 'modal') {
                $(event.target).hide();
            }
        });
    

Setelahnya kita juga perlu menambahkan fungsi sederhana untuk hide/show lewat Javascript, karena siapa tau ada yang ingin trigger tanpa lewat definisi di elemen tersebut kan. Berikut kode sederhananya :

    function modalShow(modalId){
        $('#' + modalId).show();
    }
    
    function modalHide(modalId){
        $('#' + modalId).hide();
    }
    

Sayangnya fungsi yang kita buat masih jQuery dependent, tapi bila ada masukan mungkin bisa dicoba cara yang lebih sederhana menggunakan VanillaJS saja. Ini saya buat menggunakan jQuery karena saya terlalu malas. &#x1f647;&#x1f647;&#x1f647; 

Semua kode dalam artikel kali ini saya ambil dari framework kesayangan saya <a href="https://github.com/mazipan/bem-kit" target="_blank">BEM-Kit</a>. Anda bisa melihat cheatsheet mengenai modal pada <a href="https://github.com/mazipan/bem-kit/wiki/Cheatsheets#modal" target="_blank">halaman ini</a>, kalau penasaran dengan hasilnya bisa juga dilihat dari halaman demo <a href="https://mazipan.github.io/bem-kit/demo/#modal" target="_blank">disini</a>.

Demikian sharing Sederhana mengenai membuat Popup Modal Sederhana. Semoga bermanfaat ya. 

Ditulis oleh Irfan Maulana sambil nemenin anak tidur.



Salam.