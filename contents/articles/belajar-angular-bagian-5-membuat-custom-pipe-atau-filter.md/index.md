---
title: 'Belajar Angular - Bagian 5 - Membuat Custom Pipe atau Filter'
date: 2017-06-10T09:00:34+00:00
author: Irfan Maulana
categories: Frontend, Javascript, Programming
tags: angular, angularid, frontend, javascript, programming
template: article.pug
---
<figure style="width: 825px" class="wp-caption aligncenter"><img src="https://mazipan.github.io/wp-contents/images/belajar-angular-bagian-5-mazipanneh.jpg" alt="Belajar Angular - Bagian 5 - Membuat Custom Pipe atau Filter" width="825" height="35" /><figcaption class="wp-caption-text">Belajar Angular - Bagian 5 - Membuat Custom Pipe atau Filter</figcaption></figure> 

**Belajar Angular - Bagian 5 - Membuat Custom Pipe atau Filter** - Angular dari semasa masih versi satu sudah menyediakan fitur keren ini, di AngularJS kita kenal dengan nama **Filter** sedangkan di Angular kini dikenal dengan sebutan **Pipe**. pipe/Filter ini sendiri merupakan fitur yang memungkinkan kita untuk men-transform atau mengubah maupun mem-format suatu data secara real-time. Pipe/Filter ini tidak berubah dari versi sebelumnya dari sisi sintax penggunaannya tetap ditandai dengan adanya pipe symbol (|) diikuti nama filter/pipe nya, contoh `{{ dateNow | date }}`.

<span class="more"></span>

Tulisan ini merupakan serial pembahasan mengenai framework **Angular**, Anda mungkin ingin membaca tulisan lainnya berikut :

  1. <a href="https://mazipanneh.com/blog/2017/05/belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project">Bagian 1 - Pengenalan dan Inisialisasi Project</a> 
  2. <a href="http://mazipanneh.com/blog/2017/05/belajar-angular-bagian-2-membuat-komponen/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-2-membuat-komponen">Bagian 2 - Membuat Komponen</a> 
  3. <a href="https://mazipanneh.com/blog/2017/05/belajar-angular-bagian-3-membuat-service/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-3-membuat-service">Bagian 3 - Membuat Service</a> 
  4. <a href="http://mazipanneh.com/blog/2017/06/belajar-angular-bagian-4-membuat-route/" title="belajar-angular-bagian-4-membuat-route" target="_blank" rel="noopener noreferrer">Bagian 4 - Membuat Route</a> 
  5. <a href="http://mazipanneh.com/blog/2017/06/belajar-angular-bagian-5-membuat-custom-pipe-atau-filter/" title="belajar-angular-bagian-5-membuat-custom-pipe-atau-filter" target="_blank" rel="noopener noreferrer">Bagian 5 - Membuat Custom Pipe atau Filter</a> 
  6. <a href="http://mazipanneh.com/blog/2017/07/belajar-angular-bagian-6-persiapan-file-production/" title="belajar-angular-bagian-6-persiapan-file-production" target="_blank" rel="noopener noreferrer">Bagian 6 - Persiapan File Production</a> 

Seperti juga pada versi sebelumnya, Angular juga menyediakan beberapa built-in Pipe yang bisa kita gunakan langsung seperti `DatePipe`, `UpperCasePipe`, `LowerCasePipe`, `CurrencyPipe` dan `PercentPipe`. Namun dari beberapa Pipe yang disediakan ada kalanya kita butuh sesuatu yang belum disediakan oleh Angular dan membuat sendiri Pipe/Filter sesuai dengan kebutuhan kita. Pada tulisan kali ini kita akan belajar bagaimana membuat custom Pipe di Angular, silahkan disimak langkah-langkahnya berikut ini :

Sebelumnya kita akan sedikit bernostalgia bagaimana membuat Filter di AngularJS v.1.x, kodenya kurang lebih akan seperti ini :

<pre>var commonFilter = angular.module('irfan.custom.filters', []);

commonFilter.filter('truncate', function() {
  return function(text, length) {
    if (text) {
      var ellipsis = text.length &gt; length ? "..." : "";
      return text.slice(0, length) + ellipsis;
    }
    return text;
  };
});
</pre>

Mudah bukan ? Angular pun sebenarnya mudah juga, mari kita belajar untuk membuatnya di Angular :

Pada contoh kali ini saya tidak sempat membuat Pipe yang bermanfaat namun hanya menunjukkan bagaimana untuk membuatnya saja, Anda bisa sesuaikan dengan kebutuhan Anda masing-masing. Saya akan menambahkan String didepan String yang menjadi value awalnya.
  
Pertama, saya akan buat file custom Pipe dengan nama `film-title.pipe.ts` yang isinya :

<pre>import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filmTitle'
})
export class FilmTitlePipe implements PipeTransform {
  transform(value: string): string {
    let res = 'Film '+ value
    return res;
  }
}
</pre>

Bisa dilihat dari kode diatas, bahwa untuk membuat Pipe custom kita membutuhkan dua depedency dari `@angular/core` yakni `Pipe` dan `PipeTransform`.
  
`Pipe` akan kita gunakan sebagai decorator seperti kode diatas dimana decorator ini mendefinisikan nama Pipe yang nanti bisa kita pakai di view template kita.
  
`PipeTransform` sendiri merupakan interface yang akan kita implement dan menggunakan fungsi `transform` yang ada didalamnya untuk meletakan kode custom Pipe kita. fungsi transform ini default nya akan menerima satu parameter `value` yang bisa kita define tipenya, kita juga bisa menambahkan parameter tambahan bila memang dibutuhkan. Fungsi transform ini harus me-return suatu data dimana saya me-return data dengan tipe string dan menambahakan string tambahan sebelum di return.

Selesai membuat file tersebut, kita perlu menambahkan file Pipe tersebut kedalam `app.module.ts` seperti contoh berikut :

<pre>... // other code
import { FilmTitlePipe } from './Pipe/film-title/film-title.pipe';


@NgModule({

  imports: [
    ... // other code
  ],

  declarations: [
    ... // other code
    FilmTitlePipe
  ],

  providers: [
    ... // other code
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
</pre>

Seperti Anda bisa lihat kita menambahkan depedency Pipe yang kita buat kedalam Array `declarations` agar bisa digunakan di view template kita.

Untuk menggunakan Pipe yang sudah kita buat sangat mudah bisa dengan cara seperti ini :

<pre>&lt;tr *ngFor="let film of films; let i = index; trackBy:trackByEpisodId;"&gt;
  &lt;td&gt;{{ i+1 }}&lt;/td&gt;
  &lt;td&gt;{{ film.title | filmTitle }}&lt;/td&gt;
  &lt;td&gt;{{ film.episode_id }}&lt;/td&gt;
  &lt;td&gt;{{ film.release_date }}&lt;/td&gt;
&lt;/tr&gt;
</pre>

Bagaimana ? mudah bukan ? cara diatas adalah cara manual untuk membuat Pipe, sebenarnya `Angular-CLI` telah menyediakan fitur untuk men-generate custom pipe kita tadi dengan cara :

<pre>ng generate pipe pipe_name
</pre>

Dengan begitu Angular-CLI akan menyiapkan file custom Pipe dan akan otomatis menambahkan depedency nya ke dalam `app.module.ts` kita.

Sekian tulisan dari saya, semoga bermafaat.

Kode yang digunakan dalam tutorial ini diambil dari repository <a href="https://github.com/mazipan/ng2-starwars" target="_blank" rel="noopener noreferrer">https://github.com/mazipan/ng2-starwars</a> dan bisa dilihat demo nya di : <a href="http://mazipan.github.io/ng2-starwars/" target="_blank" rel="noopener noreferrer">http://mazipan.github.io/ng2-starwars/</a>.
  
Silahkan dipelajari source code nya.

Ditulis oleh Irfan Maulana.
  
Salam.