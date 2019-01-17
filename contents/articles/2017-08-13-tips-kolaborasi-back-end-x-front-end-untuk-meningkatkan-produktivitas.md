---
id: 417
title: Tips kolaborasi Back-end x Front-end untuk Meningkatkan Produktivitas
date: 2017-08-13T14:20:54+00:00
author: Irfan Maulana
layout: post
guid: https://mazipanneh.com/blog/?p=417
permalink: /2017/08/tips-kolaborasi-back-end-x-front-end-untuk-meningkatkan-produktivitas/
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
ampforwp-redirection-on-off:
  - enable
dsq_thread_id:
  - "6062128951"
categories:
  - Non Teknikal
  - Programming
tags:
  - backend
  - frontend
  - programming
  - story-telling
---
**Tips kolaborasi Back-end x Front-end untuk Meningkatkan Produktivitas** &#8211; _Back-end programmer_ adalah sebutan bagi para _programmer_ yang bergelut dengan berbagai logika penyajian data dari basis data maupun third party vendor sampai menghasilkan format data yang diinginkan yang biasanya dalam bentuk akhir xml ataupun json data. _Front-end programmer_ sendiri merupakan sebutan bagi para _programmer_ yang memiliki peranan untuk menyajikan visualisasi dari data yang diberikan oleh _Back-end programmer_.

![Frontend x Backend](https://mazipan.github.io/wp-contents/images/frontend-x-backend-mazipanneh-1.png)

Perbedaan _skillset_ yang dibutuhkan untuk masing-masing spesialisasi posisi _programmer_ ini yang menyebabkan industri secara sadar maupun tidak sadar seringkali memisahkan kedua posisi tersebut sehingga dalam dunia programming hal ini seperti dua jurusan bagi para programmer untuk menentukan perminatan mereka. _Programmer_ yang memiliki minat dengan sisi _Back-end_ biasanya akan banyak fokus dengan hal-hal yang berkaitan dengan Back-end seperti _database_, _optimization response speed_, _caching_, _generate reporting_ dan banyak hal lainnya. _Programmer_ yang memiliki ketertarikan dengan _Front-end_ juga sebaliknya biasanya akan meninggalkan hal-hal yang berkaitan dengan _Back-end_ dan fokus dengan berbagai teknologi yang mendukung untuk visualisasi tampilan.

Pada dunia nyata, kedua posisi spesialisasi dalam programming ini akan sangat sering bekerja bersama untuk sama-sama menyelesaikan sebuah projek sampai selesai. Dan parahnya ada banyak _programmer_ yang mengeluh karena hal ini, mereka saling salah-menyalahkan ketika sebuah projek atau produk gagal mereka selesaikan tepat pada waktunya. Orang _Back-end_ akan menyalahkan bagian _Front-end_ karena mereka telah menyelesaikan bagian mereka dan orang _Front-end_ akan menyalahkan bagian Back-end karena terlalu lama menyelesaikan pekerjaan mereka sehingga membuat mundur starting point bagi mereka untuk memulai bekerja.

Pada tulisan kali ini saya akan coba berbagi tips bagaimana berkolaborasi antara _Back-end_ dengan _Front-end_ agar meningkatkan produktivitas dari keduanya bagi sebuah tim projek maupun produk berdasarkan pengalaman saya selama di Blibli.com, berikut beberapa diantaranya :

## 1. Back-end x Front-end sama-sama memahami bussiness flow

Memang logika _bussiness flow_ lebih banyak dikerjakan oleh orang _Back-end_ dengan berbagai data yang diolah, namun pendapat bahwa orang _Front-end_ bisa tiba-tiba datang di tengah-tengah projek yang sedang berjalan tanpa mengikuti berbagai _meeting_ di awal projek yang biasanya akan membahas berbagai _bussiness flow_ dan juga berbagai requirement adalah jelas-jelas salah.

Saya sendiri adalah salah satu _Front-end developer_ yang berperan seperti tentara bayaran di Blibli.com, sering berpindah-pindah dari satu team ke team lain, dari satu projek ke projek lainnya. Beberapa kesempatan saya bisa mengikuti sebuah projek dari awal _kick-off_, ini kondisi ideal dan tidak ada masalah. Namun di beberapa kesempatan saya juga harus terlambat bergabung dengan sebuah projek yang artinya melewatkan fase penting seperti yang disebutkan di awal tadi. Ini bukanlah kondisi ideal dan sangat besar kemungkinan bahwa produktivitas saya tidak bisa sebagus ketika berada di kondisi ideal.

Jadi tips pertama dari saya adalah pastikan semua anggota team baik itu _Back-end_ maupun _Front-end_ memiliki pemahaman yang sama dan cukup mengenai berbagai seluk-beluk sebuah projek yang dikerjakan, mulai dari latar belakang, tujuan yang ingin dicapai, _bussiness flow_, _requirement_ dan lain-lain. Dengan begini komunikasi akan lebih berjalan efektif dan tepat sasaran antara _Back-end_ x _Front-end_.

## 2. Pembuatan kontrak API sebelum memulai pekerjaan

![Frontend x Backend](https://mazipan.github.io/wp-contents/images/frontend-x-backend-mazipanneh-2.jpg)

_Back-end_ yang memproduksi API dan tidak memiliki dokumentasi mengenai apa yang dia kerjakan adalah awal dari segala malapetaka kekacauan. Dokumentasi API juga bukan sesuatu yang dibuat di akhir setelah API tersebut jadi. Dokumentasi yang saya maksud juga bukan dokumentasi yang memanfaatkan _tools_ untuk men-_generate_-nya seperti **swagger** dan teman-teman. Dokumentasi yang diinginkan disini adalah sebuah kontrak perjanjian yang disepakati oleh bagian _Back-end_ dan _Front-end_ di awal sebelum pekerjaan dimulai.

Pada fase ini orang Back-end dan Front-end harus duduk bersama untuk sama-sama merumuskan API apa saja yang tersedia, seperti apa bentuk request yang dibutuhkan, serta seperti apa bentuk _response_ yang akan dikembalikan. Kontrak ini akan dijadikan panduan bagi Back-end dan Front-end untuk mengerjakan pekerjaan mereka, setiap perubahan yang terjadi di tengah projek pun harus diinformasikan dan dengan memperbarui kontrak yang telah dibuat sebelumnya.

Jadi tips kedua, bila di tempat Anda sebuah API hanya dirumuskan oleh orang _Back-end_ tanpa ada kontrak dengan orang _Front-end_ maka sudah saatnya mencoba hal ini. _Back-end_ dan _Front-end_ harus sama-sama terlibat dalam merumuskan API dan membuat kesepakatan segala bentuk _request-response_ yang akan dibuat.

## 3. Front-end membuat API mocking

Pada tahap ini kontrak API sudah dibuat dan orang _Back-end_ akan bekerja untuk menghasilkan API seperti yang telah disepakati. Pada tahapan ini orang _Front-end_ juga perlu mengimplementasikan satu cara agar tidak perlu menunggu suatu API jadi dan melakukan pemanggilan API secara nyata ke sebuah _End-Point_ API yang dibuat oleh _Back-end_. Salah satu caranya adalah melakukan _mocking_ terhadap semua API yang terdapat pada kontrak di awal, dalam bahasa lainnya bahwa orang _Front-end_ perlu membuat suatu simulasi agar setiap _End-Point_ yang dipanggil pada saat _development_ tidak langsung mengarah ke _Back-end_ melainkan ke sebuah data tiruan yang menyerupai _Back-end_.

Tahap _mocking_ ini menjadi krusial apalagi dengan timeline projek yang singkat, karena bisa memangkas banyak waktu menunggu sebuah API jadi, _free bug_, dan siap digunakan. Dengan melakukan _mocking_ maka orang Front-end bisa berjalan beriringan dengan pekerjaan orang Back-end tanpa harus ada saling tunggu satu sama lain.

Jadi tips ketiga adalah meng-_improve_ metode pekerjaan orang _Front-end_ agar bisa melakukan _mocking_ terhadap API yang dibuat oleh Back-end.

## 4. Back-end ikut terlibat dalam Front-end finishing

Sebenarnya hal ini bisa dihindarkan jika saja pada proses pembuatan kontrak API semua hal nya sudah jelas terdeskripsikan dengan baik namun ada kalanya sebuah kontrak API tidak mampu menjelaskan fungsinya dan bagian-bagian di dalamnya secara detail sehingga yang terjadi adalah kesalahan implementasi dari _Front-end_ terhadap API yang sudah dibuat. Seperti contoh kasus sederhana saja, sebuah API akan memproduksi 3 _field_ yakni _price_, _discount_, dan _total_. Namun pada kontrak tidak pernah dijelaskan _field_ _price_ itu harga yang seperti apa, harga yang sebelum _discount_ atau setelah _discount_ begitu juga dengan _field_ _total_, _total_ yang dimaksud itu _total_ yang seperti apa.

Orang _Back-end_ adalah salah satu yang paling paham dengan fungsi dari masing-masing _field_ yang ada di dalam API karena mereka yang tau _field_ itu didapatkan dari mana. Maka dari itu keterlibatan _Back-end_ dalam _finishing_ suatu _Front-end_ kerapkali dibutuhkan baik sebagai orang yang menjelaskan berbagai kesimpangsiuran data ataupun bisa langsung terjun untuk menempelkan data pada tempat yang sudah disediakan oleh bagian Front-end.

Jadi tips ketiga adalah mengurangi ke-_haram_-an orang _Back-end_ untuk memegang sedikit bagian di tahap _finishing_ _Front-end_.

## 5. Komunikasi Back-end x Front-end

![Frontend x Backend](https://mazipan.github.io/wp-contents/images/frontend-x-backend-mazipanneh-3.jpeg)

Bagian terkahir namun bisa menjadi kunci dari semua hal di atas adalah komunikasi. Komunikasi yang baik antara Back-end dan Front-end adalah mutlak menjadi keharusan apalagi dalam projek dengan _timeline_ yang singkat. Segala issue yang melibatkan _cross responsibility_ harus secepatnya di komunikasikan untuk mencari solusi terbaik. Duduk dalam tempat yang berdekatan mungkin menjadi solusi bilamana _online communication_ belum bisa berjalan dengan baik di perusahaan Anda.

_Chemistry_ antara Back-end x Front-end di dalam satu team perlu dibangun setiap bagian memiliki kepemilikan terhadap terhadap sebuah projek, ketika sebuah projek _delay_ itu artinya keseluruhan team gagal dan bukan kesalahan satu bagian saja, setiap bagian memiliki peranan masing-masing dan tidak ada salahnya untuk _cross-function_ untuk saling membantu menyelesaikan berbagai masalah dalam satu projek.

Demikian sedikit hal yang bisa saya bagikan dalam artikel kali ini, silahkan ambil yang baik-baik dan tinggalkan hal-hal yang dirasa merugikan dalam artikel ini.

Semoga bermanfaat &#x1f44d;&#x1f44d;&#x1f44d;