---
ID: 512
post_title: >
  Panduan memberikan versi pada
  aplikasi/library kita
author: Irfan Maulana
post_excerpt: ""
layout: post
permalink: >
  https://mazipanneh.com/blog/2018/06/panduan-memberikan-versi-pada-aplikasi-atau-library-kita/
published: true
post_date: 2018-06-06 09:00:26
---
[caption id="" align="aligncenter" width="630"]<img src="https://nhsconnect.github.io/gpconnect/images/design/semantic-versioning.png" alt="Illustrasi versioning" width="630" height="282" /> <em>Sumber gambar: nhsconnect.github.io</em>[/caption]

Saya yakin semua programmer sudah paham apa itu versionning? kenapa kita harus membuat versi untuk aplikasi atau library kita? Kita tidak akan membahas hal-hal tersebut lagi, namun pada tulisan kali ini saya akan membahas bagaimana cara memberikan versi yang baik pada aplikasi/library kita.

Jika kalian pernah perhatikan, versioning yang paling sering dan umum digunakan adalah menggunakan tiga digit angka dengan separator titik seperti 0.0.1 atau 0.0.2 yang masing-masing memiliki arti dan maksud yang berbeda-beda.

Kalau kita sudah mengetahui ciri dari versi yang akan kita gunakan, pertanyaan berikutnya adalah kapan kita menaikkan angka pertama, kedua dan ketiga pada versi tersebut? Hal ini yang akan kita bahas pada tulisan kali ini.
<h2>Versi Patch</h2>
Versi ini kita naikkan ketika kita melakukan patch atau perbaikan terhadap berbagai error atau bug pada aplikasi/library kita. Versi patch sendiri selalu ada di bagian paling akhir dari sebuah format versi. Jika kita menggunakan format tiga angka, maka kita akan menaikkan angka ketiga ketika melakukan patch/bug fix/perbaikan.
Bila versi sebelumnya adalah 0.0.1 maka kita akan release versi patch dengan versi 0.0.2.
<h2>Versi Minor</h2>
Versi ini akan kita naikkan bila kita akan menambahkan fitur, kemampuan, atau api baru pada aplikasi/library kita. Versi minor menggunakan angka kedua dari format tiga angka yang kita gunakan didepan. Bila sebelumnya kita memiliki versi 0.0.1 maka kita akan melakukan release dengan versi 0.1.0 bilamana ingin menambahkan fitur/api baru.
Kebingungan biasanya terjadi pada programmer bilamana dalam satu kali release terdapat penambahan fitur namun juga ada patch yang dilakukan, pada hal semacam ini maka seharusnya kita pilih untuk menaikkan versi Minor namun dengan tetap menyertakan release notes yang jelas mengenai fitur dan patch apa saja yang dikerjakan pada release tersebut.
<h2>Versi Major</h2>
Versi ini paling jarang dinaikkan biasanya. Versi major harus kita naikkan bilamana terjadi perubahan besar pada aplikasi/library kita. Misal kita mengubah total library kita yang menyebabkan perubahan pada cara instalasi, cara menggunakan, parameter yang dilempar dan lain-lain. Pada saat hal ini kita lakukan maka kita harus menaikkan versi major yang berarti menaikkan angka pertama dari tiga angka yang kita gunakan. Bila sebelumnya kita memiliki versi 0.0.1 maka ketika melakukan perubahan besar ini kita akan merelease 1.0.0. Versi major ini juga biasanya diikuti dengan tidak adanya backwards compatibility baik secara penggunaan ataupun pengetahuan.
<h2>Build Version</h2>
Beberapa aplikasi/library selain menggunakan format tiga angka pada versi, mereka biasanya juga menambahkan build version yakni versi yang menunjukkan kapan atau iterasi keberapa aplikasi/library itu dibuat. Jadi bila tanpa build version kita biasa membuat versi 0.0.1 maka dengan build version kita bisa membuat 0.0.1-1 bila memilih menggunakan iterasi atau bisa juga 0.0.1-123456789 dimana 123456789 merupakan build time dalam millisecond.

&nbsp;

Demikian artikel pendek mengenai panduan memberikan versi pada aplikasi/library kita, semoga kedepannya kita bisa lebih pandai memberikan versi pada aplikasi/library kita agar memberikan pengguna informasi yang tepat pula terhadap perubahan yang terjadi pada aplikasi/library kita.

Terima kasih &#x1f64f;.