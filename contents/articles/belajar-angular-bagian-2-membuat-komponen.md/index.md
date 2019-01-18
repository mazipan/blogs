---
title: Belajar Angular - Bagian 2 - Membuat Komponen
date: 2017-05-24T09:30:22+00:00
author: Irfan Maulana
categories: Frontend, Javascript, Programming
tags: angular, angularid, frontend, javascript, programming
template: article.pug
---
<figure style="width: 750px" class="wp-caption aligncenter"><img src="https://mazipan.github.io/wp-contents/images/belajar-angular-bagian-2-mazipanneh.jpg" alt="Belajar Angular - Bagian 2 - Membuat Komponen" width="750" height="422" /><figcaption class="wp-caption-text">Belajar Angular - Bagian 2 - Membuat Komponen</figcaption></figure> 

**Belajar Angular - Bagian 2 - Membuat Komponen** - Angular merupakan framework yang memiliki konsep **Component Based** seperti beberapa framework javascript modern lainnya, jadi salah satu yang perlu kita pelajari adalah bagaimana membuat komponen di Angular. 

<span class="more"></span>

Tulisan ini merupakan serial pembahasan mengenai framework **Angular**, Anda mungkin ingin membaca tulisan lainnya berikut :

  1. <a href="https://mazipanneh.com/blog/2017/05/belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project">Bagian 1 - Pengenalan dan Inisialisasi Project</a> 
  2. <a href="http://mazipanneh.com/blog/2017/05/belajar-angular-bagian-2-membuat-komponen/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-2-membuat-komponen">Bagian 2 - Membuat Komponen</a> 
  3. <a href="https://mazipanneh.com/blog/2017/05/belajar-angular-bagian-3-membuat-service/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-3-membuat-service">Bagian 3 - Membuat Service</a> 
  4. <a href="http://mazipanneh.com/blog/2017/06/belajar-angular-bagian-4-membuat-route/" title="belajar-angular-bagian-4-membuat-route" target="_blank" rel="noopener noreferrer">Bagian 4 - Membuat Route</a> 
  5. <a href="http://mazipanneh.com/blog/2017/06/belajar-angular-bagian-5-membuat-custom-pipe-atau-filter/" title="belajar-angular-bagian-5-membuat-custom-pipe-atau-filter" target="_blank" rel="noopener noreferrer">Bagian 5 - Membuat Custom Pipe atau Filter</a> 
  6. <a href="http://mazipanneh.com/blog/2017/07/belajar-angular-bagian-6-persiapan-file-production/" title="belajar-angular-bagian-6-persiapan-file-production" target="_blank" rel="noopener noreferrer">Bagian 6 - Persiapan File Production</a> 

Pertama yang mesti diperhatikan adalah bagaimana cara Angular-CLI membuatkan file Component pertama, seperti disebutkan sebelumnya bahwa Angula-CLI bisa men-generate kan kita skeleton untuk aplikasi Angular termasuk juga dengan component pertama atau component root dari aplikasi Angular. 
   
Angular-CLI akan men generate file `app.module.ts`, `app.component.ts`, `app.component.html`, `app.component.css` dan `app.component.spec.ts`. Kita abaikan file terakhir dulu karena ini merupakan file untuk melakukan testing pada component tersebut. kita perhatikan dulu file `app.module.ts`, file tersebut berisi kurang lebih :

<div class="gist-oembed" data-gist="mazipan/964bcce3e29253e8b38e7a2be1572c7d.json">
</div>

File ini merupakan pendefinisian atau peng-inisialan dari seluruh component, service provider, filter, dan berbagai depedency lainnya yang akan digunakan dalam aplikasi kita. Bisa kita lihat ada line yang meng-inisialisasi component kita yakni `import { AppComponent } from './app.component';` kemudian di lakukan Bootstrap-ing atau menempelkan kedalam aplikasi dengan `bootstrap: [AppComponent]`, Perlu diketahui bahwa cukupp component yang berperan sebagai root yang akan di bootstrap jadi component dibawahnya tidak perlu lagi kita bootstrap lagi. 
   
Setelah itu kita coba lihat apa isi file `app.component.ts`, kurang lebih seperti berikut :

<div class="gist-oembed" data-gist="mazipan/d3f90dd5bf3a7050f46acc33f994acdd.json">
</div>

Yang perlu diperhatikan mungkin bagian `selector: 'app-root'` yakni id dari DOM yang akan di inject oleh component root ini, setelahnya ada bagian `templateUrl: './app.component.html'` yang merupakan template yang menjadi view dari component kita, dan bagian `styleUrls: ['./app.component.css']` merupakan array css yang diinclude sebagai style dari component.

Setelah mempelajari file yang digenerate oleh Angular-CLI, maka kita coba buat component kita sendiri berdasarkan contoh yang diberikan oleh Angular-CLI, berikut kurang lebih langkah-langkahnya : 
   
Pertama kita akan buat file component kita, katakanlah saya ingin membuat component `HeaderBlock` dan saya akan membuat file dengan nama `header.component.ts` di dalam folder `src/app/Header/` yang isinya kurang lebih seperti ini :

<div class="gist-oembed" data-gist="mazipan/86738b42e9cfbca16902f601d1a015fa.json">
</div>

Dengan file `header.component.html` yang isinya kurang lebih :

<div class="gist-oembed" data-gist="mazipan/0b5c3e1e89d007f060cca55964f53c88.json">
</div>

Karena saya tidak menggunakan CSS yang spesial di component ini, jadi bagian `styleUrls :<br />
 ['./app.component.css']` saya hilangkan saja. Hampir sama dengan code yang di generate oleh Angular-CLI kan ? nah ayo kita coba buat beda sedikit, kita buat template html nya inline di dalam file component saja karena isinya juga tidak terlalu banyak, jadi bisa kita hilangkan file `header.component.html` nantinya. Berikut kurang lebih isi file nya setelah diubah :

<div class="gist-oembed" data-gist="mazipan/a9cdd3aa653d953550e4bf94af7eeb84.json">
</div>

Kita mengganti `tempalateUrl` dengan `tempalate` dan mengisinya dengan block html yang diapit dengan backtick `` ` `` sebagai inline html.

Setelah membuat file `header.component.ts`, kita akan coba memanggil component tersebut di root component kita dengan mengganti isi template file `app.component.html` dengan kode :

    
    <HeaderBlock></HeaderBlock>
    

Dan sentuhan terakhir namun paling penting adalah mendaftarkan component ini di `app.module.ts` sehingga menjadi seperti berikut :

<div class="gist-oembed" data-gist="mazipan/11606b412d7330b1f478c62003703a55.json">
</div>

Dan selesai lah component yang kita buat. 
   
Oh iya saya menggunakan external CSS, jadi Anda perlu menambahkan line berikut ini di `src/index.html` :

<div class="gist-oembed" data-gist="mazipan/4d00ec5cbe179bc88e3429581f04b706.json">
</div>

Semua langkah diatas sebenarnya sudah di otomatisasi oleh Angular-CLI dengan perintah : 

    ng generate component my-new-component
    // atau
    ng g component my-new-component
    
    </p> 

Kode yang digunakan dalam tutorial ini diambil dari repository <a href="https://github.com/mazipan/ng2-starwars" target="_blank" rel="noopener noreferrer">https://github.com/mazipan/ng2-starwars</a> dan bisa dilihat demo nya di : <a href="http://mazipan.github.io/ng2-starwars/" target="_blank" rel="noopener noreferrer">http://mazipan.github.io/ng2-starwars/</a>. 
   
Silahkan dipelajari source code nya.

Demikian sekilas pembahasan awal mengenai framework Angular, semoga bermanfaat tulisan yang tidak seberapa ini. 
   
Ditulis oleh Irfan Maulana. 
   
Salam.