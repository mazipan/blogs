---
title: Belajar Angular - Bagian 3 - Membuat Service
date: 2017-05-29T13:41:32+00:00
author: Irfan Maulana
categories: Frontend, Javascript, Programming
tags: angular, angularid, frontend, javascript, programming
template: article.pug
---
<figure style="width: 750px" class="wp-caption aligncenter"><img src="https://mazipan.github.io/wp-contents/images/belajar-angular-bagian-3-mazipanneh.jpg" alt="Belajar Angular - Bagian 3 - Membuat Service" width="750" height="422" /><figcaption class="wp-caption-text">Belajar Angular - Bagian 3 - Membuat Service</figcaption></figure> 

**Belajar Angular - Bagian 3 - Membuat Service** - Service atau Provider dalam Angular sendiri sudah diperkenalkan sejak AngularJS v.1.x, dimana service menjadi bagian yang `Injectable` dari kode Angular sehingga pada prakteknya sering digunakan sebagai pembungkusan (Encapsulation) dari suatu logic. Angular sendiri sudah menggunakan depedency injection (DI) sejak AngularJS versi 1.x sehingga lebih mudah untuk meng-inject atau memasukkan service kedalam komponen yang ingin menggunakannya. 

<span class="more"></span>

Tulisan ini merupakan serial pembahasan mengenai framework **Angular**, Anda mungkin ingin membaca tulisan lainnya berikut :

  1. <a href="https://mazipanneh.com/blog/2017/05/belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project">Bagian 1 - Pengenalan dan Inisialisasi Project</a> 
  2. <a href="http://mazipanneh.com/blog/2017/05/belajar-angular-bagian-2-membuat-komponen/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-2-membuat-komponen">Bagian 2 - Membuat Komponen</a> 
  3. <a href="https://mazipanneh.com/blog/2017/05/belajar-angular-bagian-3-membuat-service/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-3-membuat-service">Bagian 3 - Membuat Service</a> 
  4. <a href="http://mazipanneh.com/blog/2017/06/belajar-angular-bagian-4-membuat-route/" title="belajar-angular-bagian-4-membuat-route" target="_blank" rel="noopener noreferrer">Bagian 4 - Membuat Route</a> 
  5. <a href="http://mazipanneh.com/blog/2017/06/belajar-angular-bagian-5-membuat-custom-pipe-atau-filter/" title="belajar-angular-bagian-5-membuat-custom-pipe-atau-filter" target="_blank" rel="noopener noreferrer">Bagian 5 - Membuat Custom Pipe atau Filter</a> 
  6. <a href="http://mazipanneh.com/blog/2017/07/belajar-angular-bagian-6-persiapan-file-production/" title="belajar-angular-bagian-6-persiapan-file-production" target="_blank" rel="noopener noreferrer">Bagian 6 - Persiapan File Production</a> 

Bila kita sudah belajar Angular v.1.x kita biasa melakukan injection service dengan cara kurang lebih seperti ini :

<pre class="EnlighterJSRAW" data-enlighter-language="js">var irfanCtrl = angular.module('irfan.basic.controller',[]);

irfanCtrl.controller('irfan.ctrl', ['$scope', 'irfanShareObject', irfanCtrlFunc]);

function irfanCtrlFunc($scope, irfanShareObject){
  // no data
}
</pre>

Bisa dilihat kode diatas adalah bagaimana AngularJS 1.x melakukan depedency injection service `irfanShareObject` ke dalam controller, tidak perlu ada instance baru untuk tiap kali penggunaan service dalam controller, cukup mendefinisikan service yang akan digunakan dalam pembuatan controllernya. 
   
Untuk isi service nya pun, bisa mulai dari wrap logic sederhana sampai logic yang dirasa terlalu berat untuk langsung dibuat di controller sehingga developer memilih untuk membungkusnya dalam suatu service. Berikut contoh kode service dalam AngularJS 1.x :

<pre class="EnlighterJSRAW" data-enlighter-language="js">var irfanServices = angular.module('irfan.basic.service', []);
irfanServices.factory('irfanShareObject', [irfanServicesFunction]);

function irfanServicesFunction() {

    var fullName= "";

    return {
        setFullName: function(firtname, lastname) {
            if(typeof firtname !== 'undefined' && firtname !== '') {
	           
               fullName = firtname;
            }
            if(typeof lastname !== 'undefined' && lastname !== '') {
               
               fullName += lastname;
            }

            return fullName;
        },
        getFullName: function() {
            return fullName;
        }
    };
}
</pre>

Isinya logic sederhana untuk mencari fullname dari sebuah firstname dan lastname.

Setelah sekilas kita #throwback ke AngularJS 1.x maka kita coba membuat service di Anglular versi 2 keatas, untuk studi kasus sendiri saya akan coba contohkan membuat service yang mem-wrap logic untuk GET data dari suatu public API untuk kemudian memformat sesuai dengan kebutuhan client. Berikut langkah-langkahnya :

Kita akan menggunakan API dari Starwars API (<a href="https://swapi.co" target="_blank" rel="noopener noreferrer">https://swapi.co</a>), dimana saya akan mencontohkan GET data Film dari API tersebut. Url API dari list Film sendiri ada di <a href="https://swapi.co/api/films/" target="_blank" rel="noopener noreferrer">https://swapi.co/api/films/</a>. 
   
Langkah pertama sebelum memulai semua nya, saya akan menyiapkan beberapa class `Film` yang akan digunakan sebagai Object untuk menampung data hasil response dari API tersebut. Karena datanya terlalu banyak, dan saya capek untuk menulis semuanya maka saya hanya akan ambil beberapa data saja. Berikut contoh kode class `Film` :

<pre class="EnlighterJSRAW" data-enlighter-language="js">export class Film {
  constructor(
    public title: string,
    public episode_id: number,
    public opening_crawl: string,
    public director: string,
    public producer: string,
    public release_date: string,
  ) { }
}
</pre>

Ya, seperti itulah penampakannya. Dengan typescript kita bisa mendefinisikan tipe data dari masing-masing properti `Film` yang akan kita ambil.

Setelahnya saya akan membuat beberapa helper class yang akan saya butuhkan nanti (*ini tidak harus dipisah, tapi saya lebih senang menggunakan helper dibandingkan langsung menulis logic ditempat yang sama). 
   
Saya akan membuat helper `UrlCollection` yang isinya :

<pre class="EnlighterJSRAW" data-enlighter-language="js">export class UrlCollection {
  public static readonly FILM = "https://swapi.co/api/films/"
  public static readonly PEOPLE = "https://swapi.co/api/people/"
  public static readonly PLANET = "https://swapi.co/api/planets/"
  public static readonly SPECIES = "https://swapi.co/api/species/"
  public static readonly STARSHIP = "https://swapi.co/api/starships/"
  public static readonly VEHICLE = "https://swapi.co/api/vehicles/"
}
</pre>

Ini merupakan list url dari API yang akan di hit nanti, sebenarnya akan lebih baik jika menggunakan `enum / enumeration` untuk membuat class semacam ini. Namun karena pada saat menulis artikel ini saya belum pernah menggunakan `enum` di Angular maka saya cari yang cepat di kerjakan saja. 🙂 
   
Berikutnya saya akan membuat helper class `ObjectConverter` yang isinya :

<pre class="EnlighterJSRAW" data-enlighter-language="js">import { Film }  from '../Film/Film'

export class ObjectConverter {

  public convertResponseToFilm(r:any): Film{

    let film = ({
      title: r.title,
      episode_id: r.episode_id,
      opening_crawl: r.opening_crawl,
      director: r.director,
      producer: r.producer,
      release_date: r.release_date,
    });

    return film
  };

}
</pre>

Class ini saya gunakan untuk mem-casting data dari tipe `any` ke tipe `Film`, namun setelah saya baca-baca lagi ternyata Typescript mempunyai syntax yang lebih sederhana dibandingkan cara manual yang saya lakukan. Silahkan baca : <a href="http://acdcjunior.github.io/typescript-cast-object-to-other-type-or-instanceof.html" target="_blank" rel="noopener noreferrer">http://acdcjunior.github.io/typescript-cast-object-to-other-type-or-instanceof.html</a>. Karena pada saat saya membuat artikel ini saya belum sempat baca artiel diatas jadi sudahlah biarkan saja saya membodohi diri sendiri dengan kode diatas ya.

Berikutnya kita akan membuat Service untuk meng-GET data, berikut kodenya :

<pre class="EnlighterJSRAW" data-enlighter-language="js">import { Injectable } from '@angular/core'
import { Http, Response} from '@angular/http'
import { Film } from './Film'
import {Observable} from 'rxjs/Rx'

// Import RxJs required methods
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { UrlCollection } from '../Helpers/UrlCollection'
import { ObjectConverter } from '../Helpers/ObjectConverter'

@Injectable()
export class FilmService {
  // Resolve HTTP using the constructor
  constructor (
    private http: Http,
  ) {}

  getFilms() : Observable&lt;Film[]&gt; {
    let objectConverter = new ObjectConverter()

    function mapFilmResponse(response:Response): Film[]{

      return response.json().results.map(objectConverter.convertResponseToFilm)
    }

    return this.http.get(UrlCollection.FILM)
      .map(mapFilmResponse)
      .catch((error:any) =&gt; Observable.throw(error.json().error || 'Server error'))

  }

}
</pre>

Bisa dilihat kode diatas, pertama kita membutuhkan depedency `import { Injectable } from '@angular/core'`, ini merupakan salah satu syarat agar service kita bisa digunakan di component nantinya. Dengan menggunakan depedency ini kita bisa menambahkan decorator `@Injectable()` pada saat pembuatan class service ini. 
   
Kita juga menambahkan depedency `import { Http, Response} from '@angular/http'` untuk melakukan getting data dan mendapatkan balikan dalam bentuk Object Response. Oh iya, `http` ini mesti di definisikan sebagai `constructor` ya. 
   
Terakhir kita butuh bantuan dari RxJS yakni `import {Observable} from 'rxjs/Rx'`, `import 'rxjs/add/operator/map'` dan `import 'rxjs/add/operator/catch'`. Tapi tenang saja karena by default semuanya sudah menjadi depedency wajib bagi Angular, jadi kita tidak perlu lagi menambahkan di list depedency di package.json kita. 
   
Untuk sisanya bisa coba dipahami kode diatas.

Setelah membuat service ini kita perlu menambahkan file ini sebagai provider di file `app.module.ts`, berikut kurang lebih kodenya :

<pre class="EnlighterJSRAW" data-enlighter-language="js">import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { FilmListComponent } from './Film/film-list.component';


import { FilmService } from './Film/film-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmListComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
</pre>

Setelah ini kita akan buat contoh bagaimana memanggil file service ini di sebuah component. Kita membuat component `/Film/film-list.component` dengan kode kurang lebih seperti ini :

<pre class="EnlighterJSRAW" data-enlighter-language="js">import { Component, OnInit } from '@angular/core'

import { FilmService } from './film-list.service'
import { Film } from './Film'

@Component({
  moduleId: module.id,
  selector: 'film-list',
  templateUrl: './film-list.component.html'
})
export class FilmListComponent implements OnInit {

  films: Film[]

  constructor (
    private filmService: FilmService
  ){}

  ngOnInit () {
    this.loadDataFilms()
  }

  loadDataFilms () {
    let self = this
    self.filmService.getFilms()
      .subscribe(
        films =&gt; self.films = films, //Bind to view
        err =&gt; {
          console.log(err)
        })
  }

  trackByEpisodId (index:number, film:Film) {
    return film.episode_id
  }
}
</pre>

Kita hanya perlu menambahkan `FilmService` sebagai constructor di component kita maka dengan begitu kita bisa menggunakan fungsi di dalam service tersebut. Seperti pada kode diatas kita bisa memanggil `filmService.getFilms()` dengan mudahnya. 
   
Saya juga menambahkan fungsi `trackByEpisodId(index:number, film:Film)` untuk digunakan di view template karena pada saat saya membuat contoh kode ini saya belum menemukan built-in `trackBy` seperti pada AngularJS v.1.x.

Sedangkan isi html view template dari component ini sebagai berikut :

<pre class="EnlighterJSRAW" data-enlighter-language="html">&lt;h2&gt;Films&lt;/h2&gt;
&lt;table class="table"&gt;
    &lt;thead class="table__head"&gt;
        &lt;tr&gt;
            &lt;th&gt;#&lt;/th&gt;
            &lt;th&gt;Title&lt;/th&gt;
            &lt;th&gt;Episode&lt;/th&gt;
            &lt;th&gt;Release Date&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody class="table__body"&gt;
        &lt;tr *ngFor="let film of films; let i = index; trackBy:trackByEpisodId;"&gt;
            &lt;td&gt;{{ i+1 }}&lt;/td&gt;
            &lt;td&gt;{{ film.title }}&lt;/td&gt;
            &lt;td&gt;{{ film.episode_id }}&lt;/td&gt;
            &lt;td&gt;{{ film.release_date }}&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
</pre>

Kode yang digunakan dalam tutorial ini diambil dari repository <a href="https://github.com/mazipan/ng2-starwars" target="_blank" rel="noopener noreferrer">https://github.com/mazipan/ng2-starwars</a> dan bisa dilihat demo nya di : <a href="http://mazipan.github.io/ng2-starwars/" target="_blank" rel="noopener noreferrer">http://mazipan.github.io/ng2-starwars/</a>. 
   
Silahkan dipelajari source code nya.

Demikian sekilas pembahasan awal mengenai framework Angular, semoga bermanfaat tulisan yang tidak seberapa ini. 
   
Ditulis oleh Irfan Maulana. 
   
Salam.