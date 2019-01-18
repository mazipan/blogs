---
title: Pengetahuan Dasar Vue.js — Bagian 1
author: Irfan Maulana
categories: Vue
tags: vue
date: 2017-11-10 13:39:05
template: article.pug
---
[caption id="" align="aligncenter" width="800"]<img src="https://cdn-images-1.medium.com/max/800/1*TLIHVxC4s25LX9Fls8QZrA.png" alt="Vuejs" width="800" height="243" /> <em>Sumber : https://vuejs.id/</em>[/caption]

Artikel ini merupakan serial artikel, baca semua seri Pengetahuan Dasar Vue.js :

<ul>
    <li>Pengetahuan Dasar Vue.js — Bagian 1(Anda disini)</li>
    <li><a href="https://mazipanneh.com/blog/2017/11/pengetahuan-dasar-vue-js-bagian-2/" target="_blank" rel="noopener">Pengetahuan Dasar Vue.js — Bagian 2</a></li>
    <li><a href="https://mazipanneh.com/blog/2017/11/pengetahuan-dasar-vue-js-bagian-3/" target="_blank" rel="noopener">Pengetahuan Dasar Vue.js — Bagian 3</a></li>
</ul>

Vue.js (https://vuejs.org/) seperti di websitenya yang membawa tagline “The Progressive JavaScript Framework” merupakan javascript framework yang membantu kita dalam membuat sebuah website/aplikasi yang membutuhkan banyak interaksi di dalamnya, biasanya berupa Single Page Application. Vue.js belakangan memiliki gaung yang lumayan kencang di kalangan web developer maupun Javascript developer karena kemudahan dalam mempelajari dan mengimplementasikan di dalam website/aplikasi kita.

Pada tulisan kali ini kita akan membahas beberapa pengetahuan dasar dan beberapa istilah yang akan sering kita temui jika belajar Vue.js, semoga pembahasan ini akan membantu saya dan kita yang sedang belajar framework ini.
Langsung saja, silahkan disimak beberapa poin pembahasan berikut :

<span class="more"></span>

<strong>1. Mengenai Vue Component</strong>

Vue.js seperti framework Javascript modern lainnya juga mengusung konsep component based dimana setiap blok layout dianggap sebagai komponen yang independen dan memiliki style serta fungsi sendiri yang terisolir sehingga mudah untuk digunakan ulang oleh setiap halaman website kita. Setiap komponen tersebut nantinya akan kita susun menjadi blok-blok yang saling terkait dan membangun sebuah tampilan utuh sebuah halaman website.

Menggunakan komponen berarti kita akan membuat custom tag di HTML template kita, secara mudah komponen di Vue.js bisa dibuat sesederhana kode berikut :

[caption id="" align="aligncenter" width="602"]<img src="https://cdn-images-1.medium.com/max/800/1*UrS8uYY_ud6HnUKVbgPaFg.png" alt="Mendefinisikan Vue.js Component" width="602" height="116" /> <em>Mendefinisikan Vue.js Component</em>[/caption]

Dari pendefinisian diatas kita bisa menggunakan komponen tersebut dalam HTML template dengan cara yang tak kalah mudah, yakni seperti berikut :

[caption id="" align="aligncenter" width="602"]<img src="https://cdn-images-1.medium.com/max/800/1*VE7izWNyCw8OwS4ECyxGGA.png" alt="Menggunakan Vue.js Component dalam HTML Template" width="602" height="116" /> <em>Menggunakan Vue.js Component dalam HTML Template</em>[/caption]

<strong>2. Data Binding dalam Vue.js</strong>

Vue.js memang sangat terinspirasi dari AngularJS dalam hal data binding ini, itu mengapa sangat mudah untuk belajar Vue.js bilamana kita pernah belajar AngularJS sebelumnya. Bila di AngularJS kita mengenal ng-bind maka di Vue.js kita mengenal v:bind, berikut beberapa data binding dalam Vue.js :

<strong>&#x1f449; 1. Binding data ke dalam view</strong>

Vue.js menggunakan syntax {{ }} seperti terlihat pada gambar diatas, dengan syntax tersebut berarti kita ingin menampilkan sebuah data yang ada dalam Javascript kita ke dalam HTML template.

[caption id="" align="aligncenter" width="602"]<img src="https://cdn-images-1.medium.com/max/800/1*24isMnRrGBh8ZLkAnkxIeA.png" alt="Binding data ke View" width="602" height="116" /> <em>Binding data ke View</em>[/caption]

<strong>&#x1f449; 2. Attribute Binding</strong>

Seperti disebut sebelumnya, di Vue.js kita menggunakan v-bind untuk melakukan binding ke dalam HTML. Maka jika kita melihat ke gambar diatas berarti kita ingin menambahkan attribute title ke dalam span dengan menggunakan data dinamis dari javascript. v-bind pada dasarnya bisa diterapkan pada berbagai attribute di HTML sehingga kita mungkin akan menemui banyak variasi v-bind ini seperti v-bind:src, v-bind:class, v-bind:alt, dan lain sebagainya. 
Vue.js juga menyediakan shortcut untuk kita mendefinisikan v-bind di dalam HTML yakni dengan menghilangkan bagian v-bind nya, jadi kita bisa menggunakan shortcut seperti :title, :src, :class, :alt dan sebagainya.

[caption id="" align="aligncenter" width="602"]<img src="https://cdn-images-1.medium.com/max/800/1*mSVRJZ1aNZc4CAh3P697Og.png" alt="Attribute binding di Vuejs" width="602" height="116" /> <em>Attribute binding di Vuejs</em>[/caption]

<strong>&#x1f449; 3. Two way data binding</strong>

Seperti AngularJS, Vue.js juga menyediakan fitur two way data binding yang artinya setiap perubahan pada Javascript akan berpengaruh pada view HTML dan sebaliknya perubahan pada HTML view pun akan mempengaruhi atau mengubah nilai di Javascript nya.
Di Vue.js kita menggunakan v-model untuk melakukan two way binding yang biasanya sering ditempelkan pada sebuah elemen input HTML, seperti gambar berikut :

[caption id="" align="aligncenter" width="602"]<img src="https://cdn-images-1.medium.com/max/800/1*gR8ZMoqTliJLwY7V-3prZA.png" alt="Contoh two-way data binding di Vuejs" width="602" height="116" /> <em>Contoh two-way data binding di Vuejs</em>[/caption]

<strong>&#x1f449; 4. Event binding</strong>

Untuk memanggil suatu event yang telah kita buat di Javascript, Vue.js menggunakan v-on di dalam HTML template diikuti hook event yang akan ditambahkan. Jadi kita bisa menggunakan berbagai variasi v-on seperti v-on:click, v-on:blur, v-on:focus, v-on:keyup dan sebagainya.

[caption id="" align="aligncenter" width="602"]<img src="https://cdn-images-1.medium.com/max/800/1*LhxPyR8mv0Cf5zjPf0XlRQ.png" alt="Event binding di Vuejs" width="602" height="116" /> <em>Event binding di Vuejs</em>[/caption]

Vue.js menyediakan juga shortcut untuk melakukan event binding ini yakni menggunakan @, sehingga kita bisa menyingkat seperti : @click, @blur,@focus dan sebagainya.

....

Masih akan ada beberapa hal yang ingin saya bahas di judul ini, namun sepertinya akan saya pecah saja kedalam beberapa bagian agar lebih ringan saat membacanya.