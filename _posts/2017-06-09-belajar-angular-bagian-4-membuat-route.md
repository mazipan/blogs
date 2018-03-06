---
id: 311
title: 'Belajar Angular &#8211; Bagian 4 &#8211; Membuat Route'
date: 2017-06-09T09:15:26+00:00
author: Irfan Maulana
layout: post
guid: http://mazipanneh.com/blog/?p=311
permalink: /2017/06/belajar-angular-bagian-4-membuat-route/
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
dsq_thread_id:
  - "5893293966"
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
<figure style="width: 825px" class="wp-caption aligncenter"><img src="https://mazipan.github.io/wp-contents/images/belajar-angular-bagian-4-mazipanneh.jpg" alt="Belajar Angular - Bagian 4 - Membuat Route" width="825" height="35" /><figcaption class="wp-caption-text">Belajar Angular &#8211; Bagian 4 &#8211; Membuat Route</figcaption></figure> 

**Belajar Angular &#8211; Bagian 4 &#8211; Membuat Route** &#8211; Kita akan membahas mengenai cara membuat Routing menggunakan framework **Angular**. Routing di frontend javascript framework memang seperti sudah menjadi feature yang diwajibkan ada jaman sekarang, **Angular** dalam hal ini seperti biasa yang tidak mengikuti cara framework modern lain dalam menghadirkan Routing nya yang memilih dipisah dari framework utamanya, **Angular** justru selalu hadir dengan paket lengkap termasuk dengan built-in Routing didalamnya. Pada versi 2.x sendiri **Angular** memisahkan repository untuk Routing sehingga Anda akan melihat depedency `@angular/router` pada `package.json`, namun bedanya bahwa Router pada Angular di maintain secara official oleh team mereka dan selalu release sebaga satu kesatuan framework bersamaan dengan core nya.

Tulisan ini merupakan serial pembahasan mengenai framework **Angular**, Anda mungkin ingin membaca tulisan lainnya berikut :

  1. <a href="https://mazipanneh.com/blog/2017/05/belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-1-pengenalan-dan-inisialisasi-project">Bagian 1 &#8211; Pengenalan dan Inisialisasi Project</a> 
  2. <a href="http://mazipanneh.com/blog/2017/05/belajar-angular-bagian-2-membuat-komponen/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-2-membuat-komponen">Bagian 2 &#8211; Membuat Komponen</a> 
  3. <a href="https://mazipanneh.com/blog/2017/05/belajar-angular-bagian-3-membuat-service/" target="_blank" rel="noopener noreferrer" title="belajar-angular-bagian-3-membuat-service">Bagian 3 &#8211; Membuat Service</a> 
  4. <a href="http://mazipanneh.com/blog/2017/06/belajar-angular-bagian-4-membuat-route/" title="belajar-angular-bagian-4-membuat-route" target="_blank" rel="noopener noreferrer">Bagian 4 &#8211; Membuat Route</a> 
  5. <a href="http://mazipanneh.com/blog/2017/06/belajar-angular-bagian-5-membuat-custom-pipe-atau-filter/" title="belajar-angular-bagian-5-membuat-custom-pipe-atau-filter" target="_blank" rel="noopener noreferrer">Bagian 5 &#8211; Membuat Custom Pipe atau Filter</a> 
  6. <a href="http://mazipanneh.com/blog/2017/07/belajar-angular-bagian-6-persiapan-file-production/" title="belajar-angular-bagian-6-persiapan-file-production" target="_blank" rel="noopener noreferrer">Bagian 6 &#8211; Persiapan File Production</a> 

Baik silahkan disimak, berikut adalah cara sederhana membuat Routing menggunakan Angular :

Pertama, kita buat file baru `app.routing.module.ts`. File ini berisi routing kita serta komponen apa yang akan ditampilkan pada routing tersebut. Berikut kodenya :

    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    
    import { FilmListComponent } from './Film/film-list.component';
    import { PeopleListComponent } from './People/people-list.component';
    import { PlanetListComponent } from './Planet/planet-list.component';
    import { SpeciesListComponent } from './Species/species-list.component';
    import { StarshipListComponent } from './Starship/starship-list.component';
    import { VehicleListComponent } from './Vehicle/vehicle-list.component';
    
    const appRoutes: Routes = [
      { path: '', redirectTo: 'film', pathMatch: 'full' },
      { path: 'film',  component: FilmListComponent},
      { path: 'planet', component: PlanetListComponent },
      { path: 'people', component: PeopleListComponent },
      { path: 'species', component: SpeciesListComponent },
      { path: 'starship', component: StarshipListComponent },
      { path: 'vehicle', component: VehicleListComponent }
    ];
    
    @NgModule({
      imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
      ],
      exports: [
        RouterModule
      ]
    })
    export class AppRoutingModule { }
    

Bisa dilihat, bahwa untuk membuat Routing di Angular kita butuh `{ RouterModule, Routes }` sebagai library utama pengatur Routing. Setelahnya kita define Route tersebut seperti terlihat pada potongan kode dari kode diatas berikut :

    const appRoutes: Routes = [
      { path: '', redirectTo: 'film', pathMatch: 'full' },
      { path: 'film',  component: FilmListComponent},
      { path: 'planet', component: PlanetListComponent },
      { path: 'people', component: PeopleListComponent },
      { path: 'species', component: SpeciesListComponent },
      { path: 'starship', component: StarshipListComponent },
      { path: 'vehicle', component: VehicleListComponent }
    ];
    

Membuat object dengan tipe class `Routes` dan menjelaskan path dan komponen yang akan digunakan.

Setelah membuat file ini, kita akan meng-include-kan di `app.module.ts` kita sebagai berikut :

    import { NgModule }      from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { HttpModule, JsonpModule } from '@angular/http';
    // Routing Module
    import { AppRoutingModule }  from './app.routing.module';
    
    @NgModule({
    
      imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule
      ],
    
      declarations: [
        ... // other code
      ],
    
      providers: [
        ... // other code
      ],
    
      bootstrap: [ AppComponent ]
    })
    export class AppModule { }
    

Karena kita membuat file routing kita tersebut sebagai `module`, maka kita bisa menambahkan di bagian `imports` pada file `app.module.ts`

Berikutnya kita akan meletakan kode tambahan di `app.component.html` kita, dimana kita harus menambahkan `<router-outlet></router-outlet>`, sehingga file tersebut akan menjadi seperti berikut :

    <div>
      <HeaderBlock></HeaderBlock>
      <main role="main" class="site__main main">
        <nav class="main__nav nav">
          <NavigationListBlock></NavigationListBlock>
          <FooterBlock></FooterBlock>
        </nav>
        <article class="main__content content">
          <div class="content__wrapper">
            <router-outlet></router-outlet>
          </div>
        </article>
      </main>
    </div>
    

Terakhir, kita akan menambahkan component yang digunakan untuk pindah antar Routing ini atau navigasi antar route. Cara membuatnya sama saja dengan bagaimana kita membuat komponen sederhana, saya hanya akan membagikan sepotong kode view nya saja, berikut kode view dari file `navigation.component.html` :

    <ul class="nav__wrapper">
      <li class="nav__item" routerLink="/film" routerLinkActive="nav__item--active">
        <a routerLink="/film">
          <i class="nav__icon fa fa-film"></i> Film
        </a>
      </li>
      <li class="nav__item" routerLink="/planet" routerLinkActive="nav__item--active">
        <a routerLink="/planet">
          <i class="nav__icon fa fa-globe"></i> Planet
        </a>
      </li>
      <li class="nav__item" routerLink="/vehicle" routerLinkActive="nav__item--active">
        <a routerLink="/vehicle">
          <i class="nav__icon fa fa-car"></i> Vehicle
        </a>
      </li>
      <li class="nav__item" routerLink="/starship" routerLinkActive="nav__item--active">
        <a routerLink="/starship">
          <i class="nav__icon fa fa-space-shuttle"></i> Starship
        </a>
      </li>
      <li class="nav__item" routerLink="/species" routerLinkActive="nav__item--active">
        <a routerLink="/species">
          <i class="nav__icon fa fa-paw"></i> Species
        </a>
      </li>
      <li class="nav__item" routerLink="/people" routerLinkActive="nav__item--active">
        <a routerLink="/people">
          <i class="nav__icon fa fa-users"></i> People
        </a>
      </li>
    </ul>
    

Bagian penting dari file ini adalah mengganti `href` pada element `a` menggunakan `routerLink="/url"`, kita juga bisa men-set class active pada suatu router yang memang sedang aktif dengan menambahkan class di attribut `routerLinkActive`. Kode diatas agak aneh karena saya menempelkan class active pada `li` bukan pada `a`, jadi saya butuh dua `routerLink` bertumpuk, ini bisa diubah tergantung kondisi Anda.

Sekian tulisan dari saya, masih banyak lagi fitur Routing dari Angular yang belum sempat kita ulik bareng-bareng seperti melempar parameter pada router, membuat nested router, membuat router tanpa hash, dll. Router pada Angular versi 2.x kali ini bisa dibilang cukup memuaskan dan bisa bersaing dengan berbagai fremework modern lainnya.

Kode yang digunakan dalam tutorial ini diambil dari repository <a href="https://github.com/mazipan/ng2-starwars" target="_blank" rel="noopener noreferrer">https://github.com/mazipan/ng2-starwars</a> dan bisa dilihat demo nya di : <a href="http://mazipan.github.io/ng2-starwars/" target="_blank" rel="noopener noreferrer">http://mazipan.github.io/ng2-starwars/</a>.
  
Silahkan dipelajari source code nya.

Ditulis oleh Irfan Maulana.
  
Salam.