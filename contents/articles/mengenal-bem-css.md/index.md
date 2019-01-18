---
title: Mengenal BEM CSS
date: 2017-04-17T13:46:26+00:00
author: Irfan Maulana
categories: CSS, Frontend, Programming
tags: bem-css, css, frontend
template: article.pug
---
<figure style="width: 397px" class="wp-caption aligncenter"><img src="https://mazipan.github.io/wp-contents/images/bem-css-mazipanneh.com.jpg" alt="Mengenal BEM CSS" width="397" height="180" /><figcaption class="wp-caption-text"><span style="font-size: 10pt;"><em><span style="color: #808080; text-align: center;">Bem CSS (Block &#8212; Element &#8212; Modifier) </span></em></span></figcaption></figure> 

**Mengenal BEM CSS** - Setelah beberapa kali menulis dan menjelaskan soal <a href="http://getbem.com/" target="_blank" rel="nofollow noopener noreferrer">BEM CSS</a>, kali ini saya coba kembali menuliskan di blog ini dan berusaha menjelaskan mengenai BEM CSS dalam bahasa Indonesia yang semoga bisa dan masih mudah dipahami.

Pada dasarnya sudah banyak artikel diluar sana yang juga menjelaskan hal yang sama mengenai BEM CSS, namun memang sumber yang berbahasa Indonesia memang masih minim atau bahkan sangat sulit untuk ditemukan. Berangkat dari hal tersebut juga saya berusaha konsisten menulis di blog ini dalam bahasa Indonesia.

<span class="more"></span>

BEM CSS sendiri mungkin terdengar asing bagi sebagian kita, bahkan bagi kalangan Frontend Developer pun BEM CSS bukanlah hal yang jamak didengar dan diperbincangkan apalagi diimplementasikan. Hal ini memang sejalan dengan tidak banyaknya juga developer yang mau mengimplementasikan BEM CSS kedalam kode mereka, tentunya bukan karena tidak mau namun lebih kepada karena mereka belum merasakan manfaatnya langsung setelah implementasi BEM CSS.

Sebelum​ membahas BEM CSS, saya akan coba membahas beberapa masalah yang menjadikan BEM CSS sebagai solusi yang lebih baik bagi kode CSS Anda. Sebagai Frontend Developer sering kali kita tidak bekerja sendiri atau dalam posisi saya sendiri saya harus bekerja dalam team dengan Frontend Developer yang berjumlah lebih dari 6 orang. Pada saat ini kejelasan  menjadi penting karena faktanya masing-masing Frontend Developer punya gaya masing-masing termasuk dalam penamaan _class_ dan penempatan suatu _class_ dalam suatu file. Masalah mulai terjadi ketika kita diharuskan mengubah, menambahkan, menghapus pekerjaan orang lain terutama kode CSS karena pertama kita tidak tau satu class ada di file mana, kedua kita tidak pernah tau juga class tersebut digunakan oleh halaman mana dan bagian mana saja. Pada akhirnya yang sering dilakukan adalah kita menambahkan _class_ baru tanpa mengubah atau menghilangkan _class_ yang lama, semakin menjadi ruwet lagi bila makin hari jumlah file, line of code, serta kompleksitas kode CSS kita semakin meningkat. Semua hal ini tentu saja bukan sebuah masalah ketika kita bekerja sendiri apalagi dengan level kompleksitas yang masih rendah, namun tidak ada salahnya belajar dari kesalahan arsitektur orang lain karena kita tidak pernah tau akan seberapa besar berkembang​nya kode kita nantinya.

Setelah membahas masalah yang ada, kita coba pelajari BEM CSS dan hal apa yang ditawarkan oleh BEM CSS. BEM CSS sendiri bukanlah suatu teknologi melainkan hanya sebuah pendekatan yang berusaha mengatur cara kita melihat, membangun dan menuliskan kode CSS yang berimbas juga pada kode HTML kita dengan tujuan memberikan optimisme dalam melakukan perubahan terhadap satu _Style_ di CSS. BEM CSS menawarkan independensi atau _scope_-ing, dimana satu block scope style hanya digunakan pada komponen dengan scope tertentu sehingga mudah untuk menebak satu class digunakan oleh siapa pun sebaliknya mudah menebak satu class berada di file mana. Dengan independensi block scope ini tentu saja menambahkan optimisme kepada Frontend Developer ketika diharuskan melakukan perubahan pada suatu Style CSS karena mudahnya memprediksi side effects dari perubahan yang dia lakukan.

BEM CSS merupakan kependekan dari Block-Element-Modifier yang merupakan susunan-susunan yang membentuk aturan dalam BEM CSS tersebut. BEM CSS membagi caranya memandang sebuah HTML element kedalam tiga hal tersebut yang nanti direfleksikan juga terhadap cara kita membuat kode CSS kita. Kita akan bahas satu persatu.

**Block**

Block merupakan satu scope HTML element yang berdiri secara independen dan tidak memiliki ketergantungan. Saya sendiri biasa mendefinisikan elemen HTML sebagai Block bila dia merupakan sekumpulan elemen dalam satu scope yang memiliki satu fungsi yang jelas dan bisa didefinisikan dengan mudah. Katakanlah saya punya Block `header`, `menu`, `footer`, dll. Dalam BEM CSS tidak ada aturan untuk penanaman dan penulisan Block cukup tulis seperti biasa kita menuliskan CSS class kita, usahakan saja nama Block tetap sederhana, bermakna, merefleksikan fungsinya ataupun posisinya didalam halaman web.

**Element**

Element merupakan anak dari Block, element adalah hal yang bergantung pada _parent_-nya, posisinya selalu ada di dalam sebuah Block dan tidak​ dapat berdiri sendiri tanpa ada Block _parent_-nya. Katakanlah saya punya Block `menu` yang punya elemen dibawahnya yakni `menu item` maka sudah seharusnya `menu item` itu ada didalam `menu` dan tidak seharusnya `menu item` berdiri sendiri tanpa adanya `menu` diatasnya. Di dalam BEM CSS Element memiliki aturan penulisan yakni dengan selalu menambahkan nama Block parent-nya sebagai _prefix_ dan diikuti **_double underscore_** (**__**) baru nama elemen tersebut. Jadi pada contoh kasus menu maka kita akan menulis Element menu item sebagai berikut :

    .menu{}
    .menu__item{}
    

Hal ini dikarenakan untuk memudahkan mendeteksi Element​ tersebut berada di Block mana dan membatasi penggunaan suatu elemen yang hanya boleh didalam Block parent-nya.

**Modifier**

Modifier dalam BEM CSS merupakan tanda yang menunjukkan suatu perubahan baik kelakuan, kondisi, maupun tampilan dari suatu Element ataupun Block, seperti contoh state `active`, `selected`, `disabled`, dsb atapun perubahan tampilan seperti `large`, `small`, `primary`, `warning`, `error`, dsb. Penulisan dalam BEM sendiri diatur dengan menambahkan nama Block ataupun Element yang akan diubah diikuti **_double dash_** (**&#8212;**) baru nama modifier yang kita buat. Jadi kalau dari contoh kasus menu diatas dan kita akan menambahkan satu state _selected_ kedalam salah satu menu item-nya, maka kita bisa menuliskan sebagai berikut :

    .menu{}
    .menu__item{}
    .menu__item--selected{}
    

Beberapa orang sering menanyakan pada saya kenapa memilih BEM CSS padahal syntax atau aturan yang ditawarkan jelas tidak biasa bagi kita yang terbiasa menggunakan framework yang ada sekarang ini. Dan buat saya kalau pertanyaannya soal _syntax_, entahlah sepertinya justru hal ini yang membuat saya langsung klik dengan aturan yang dibawa oleh BEM CSS. Buat saya _syntax_ BEM CSS justru _cantik_ dalam artian mudah dipahami apalagi saya selalu berpikir bahwa suatu kode itu mesti mudah di track ketika terjadi kesalahan, mudah diperbarui, mudah di refactor pada masa depan tanpa takut menimbulkan efek samping terhadap perubahan tersebut. Memahami BEM CSS beserta semua aturan di dalamnya akan lebih mudah bila kita juga paham tujuan dan apa yang ingin dicapai dengan penerapan BEM CSS terhadap kode kita, pada akhirnya BEM CSS bukanlah aturan yang mengikat dan kita bisa mengadopsinya dengan berbagai modifikasi lagi agar lebih sesuai dengan gaya penulisan masing-masing namun tetap dengan tujuan yang sama yakni independensi pada Block.

Demikianlah sedikit penjelasan mengenai BEM CSS,semoga bisa memberikan satu pengetahuan baru.

Bila Anda tertarik untuk belajar lebih lanjut mengenai BEM CSS silahkan baca di <a href="http://getbem.com/" target="_blank" rel="nofollow noopener noreferrer">http://getbem.com/</a> yang merupakan official website dari para pengguna BEM CSS, disana sudah ada banyak <a href="http://getbem.com/faq/" target="_blank" rel="nofollow noopener noreferrer">FAQ </a>juga yang bisa dibaca terlebih dahulu. Baca juga presentasi saya mengenai BEM CSS <a href="https://www.slideshare.net/IrfanMaulana21/bliblidotcom-reintroduction-bem-css" target="_blank" rel="noopener noreferrer">disini</a>. Saya juga telah membuat framework CSS sederhana yang dibangun menggunakan BEM CSS dengan nama <a href="https://mazipan.github.io/bem-kit/" target="_blank" rel="noopener noreferrer">BEM-Kit</a>, semua kodenya saya buat secara open-source karenanya silahkan dipelajari dan dikembangkan sendiri  sesuai kebutuhan. Kodenya bisa diambil di <a href="https://github.com/mazipan/bem-kit" target="_blank" rel="noopener noreferrer">github</a>.

Ditulis oleh Irfan Maulana ditengah insomnia nya.

Salam,