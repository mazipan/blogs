---
title: Yang sering terlewat oleh developer ketika mengembangkan PWA
author: Irfan Maulana
published: true
date: 2018-10-10 18:57:20
categories: Web Performance
tags: web performance
template: article.pug
---
PWA (Progressive Web Apps) memang sepertinya menjadi satu hal yang sering terjadi simpang siur antar satu developer dengan developer lain pun antar satu perusahaan dengan perusahaan lain baik dalam hal implementasi maupun dalam hal pemahamannya sendiri.

[caption id="" align="aligncenter" width="640"]<img src="https://cdn-images-1.medium.com/max/1600/1*8Qe_2KV7gLQ6_ZU0cJulAw.jpeg" alt="" width="640" height="425" /> Yang sering terlewat oleh developer ketika mengembangkan PWA[/caption]

Untuk mem-break down lebih dalam, mari kita sama-sama mundur ke belakang dengan memahami kenapa PWA itu ada atau dibutuhkan.

Pada mulanya kita mesti tau bahwa pengguna internet semakin kesini memang semakin mobile, ini ditunjukkan dengan data bahwa pengguna yang menggunakan mobile device semakin mendominasi diantara keseluruhan pengguna. Sayangnya pertumbuhan pengguna ini tidak dibarengi dengan baiknya kualitas yang harus pengguna dapatkan ketika mengakses internet lewat mobile, hal ini tentu berbanding lurus dengan device yang digunakan dimana menjadi salah satu penentu baik tidaknya juga pengalaman yang akan mereka rasakan ketika mengakses internet. Keberagaman dan keterbatasan mobile device diperparah dengan kondisi jaringan yang memang belum merata di beberapa negara termasuk di Indonesia. Sebagian pengguna mobile device terutama di negara berkembang seperti Indonesia masih berkutat di jaringan slow 3G yang tentunya masih terbatas soal kecepatan akses data.

<span class="more"></span>

[caption id="" align="aligncenter" width="1422"]<img src="https://cdn-images-1.medium.com/max/1600/1*LSQwXf9OufLwIStbNKC3Aw.png" alt="" width="1422" height="1306" /> Statistik dari https://www.statista.com/statistics/241462/global-mobile-phone-website-traffic-share/[/caption]

Teknologi web dibandingkan apps dalam hal menangani pengguna mobile ini tentu berbeda jauh, bila pengguna tidak membutuhkan internet hanya untuk membuka apps maka untuk membuka web pengguna diharuskan mendownload setiap kepingan byte dari file yang dibutuhkan oleh web tersebut. Apps jelas lebih engage terhadap pengguna mobile dibandingkan web apalagi dengan kemampuannya mengakses sistem dan hardware dari device pengguna itu sendiri. Sayangnya untuk meng-install suatu apps didalam device masih dibutuhkan effort yang lumayan karena mereka harus menyiapkan storage yang mana jumlahnya juga seringkali terbatas.

Maka PWA hadir mencoba menjembatani dan mengurangi gap antara teknologi web dengan teknologi apps. Tujuannya jelas memberikan pengalaman yang lebih baik terhadap pengguna mobile device ketika mengakses web.

Setelah memahami kenapa harus ada PWA, maka berikutnya akan saya rangkumkan beberapa hal yang seringkali terjadi salah persepsi dan adopsi mengenai PWA:

<h3>Tidak melihat kebutuhan dan kondisi pengguna</h3>
<p>
Ya, PWA dibuat dengan fokus utama untuk menyajikan pengalaman yang progressive kepada pengguna ketika mengakses sebuah website. Masalahnya ada banyak developer (termasuk saya) yang seringkali mencoba mengimplementasikan sesuatu tanpa melihat pada kebutuhan pengguna serta data yang kita miliki mengenai pengguna kita. Sebetulnya sebelum memutuskan untuk menggunakan PWA, terlebih dahulu sebaiknya kita memahami berbagai hal mengenai pengguna kita seperti menjawab beberapa pertanyaan seperti siapa mereka? device apa yang mereka gunakan? bagaimana persebaran wilayah mereka? jaringan apa yang mereka gunakan? seberapa penting menghemat penggunaan bandwidth data buat mereka? berapa besar persentase bounce rate dari keseluruhan pengguna? konten apa yang benar-benar dibutuhkan oleh pengguna kita? serta banyak lagi pertanyaan yang akan membuat kita lebih paham dengan kondisi pengguna kita.

Setelah memahami kebutuhan dan kondisi pengguna, barulah kita bisa memutuskan PWA yang seperti apa yang ingin dan harus kita buat untuk membantu menyelesaikan masalah yang dihadapi pengguna. Cerita mengenai memahami kebutuhan pengguna sebelum membuat PWA bisa dibaca di artikel “<a href="https://medium.com/wwwid/bagaimana-kulina-bisa-mendapatkan-41-000-lebih-pelanggan-melalui-web-d00af6165880" rel="noopener" target="_blank">Bagaimana Kulina Bisa Mendapatkan 41.000 Lebih Pelanggan Melalui Web</a>” oleh Yohan Totting.
</p>


<h3>Terlalu fokus pada fitur</h3>
<p>
PWA punya segudang fitur dan kemampuan, sayangnya banyak kita (developer) yang sering terkecoh dengan fitur-fitur ini. Seolah ingin agar semua fitur yang dimiliki PWA diadopsi kedalam website kita padahal sebenarnya sama sekali tidak dibutuhkan oleh pengguna. Masing-masing fitur memiliki fungsi dan konteks yang berbeda-beda. Lebih baik bagi kita jika mengadopsi sedikit fitur namun sesuai dengan kebutuhan daripada berusaha menumpuk semua fitur namun tidak tepat guna, tidak tepat konteks dan tidak pernah digunakan oleh pengguna.

Contoh dari beberapa kesalahan ini bisa ditemui dari tulisan Satya Kresna Adi Pratama di “<a href="https://medium.com/wwwid/berbagi-pengalaman-menggunakan-web-yang-progresif-3d8682001343" rel="noopener" target="_blank">Berbagi Pengalaman menggunakan Web yang Progresif</a>”, dimana banyak website yang mencoba mengimplementasi push notification dengan cara yang liar tanpa melihat konteks kapan waktu yang tepat bagi pengguna mendapatkan tawaran untuk berlangganan push notification, kapan waktu yang pas untuk mengirimkan pesan notifikasi tersebut kepada pengguna, serta konten seperti apa yang cocok untuk pengguna dapatkan di push notification itu.
</p>



<h3>Berpikir bahwa PWA hanya soal Service Worker</h3>
<p>
Salah satu core PWA memang service worker, tapi bila ingin memberikan pengalaman yang progressive untuk pengguna kita maka saya jamin service worker saja tidak akan cukup untuk memberikan perbedaan yang signifikan dari sebelumnya. PWA akan lebih optimal bila didukung dengan berbagai hal seperti diantaranya UX/UI yang mudah dan bersahabat, performa website yang baik (baca: “<a href="https://medium.com/wwwid/berbagai-best-practice-dalam-memuat-halaman-website-20def6652adf" rel="noopener" target="_blank">Berbagai best practice dalam memuat halaman website</a>”), mendukung accessibility yang baik, kemampuan diakses offline, caching yang tepat, beradaptasi sesuai kondisi jaringan (baca: “<a href="https://medium.com/wwwid/web-pintar-yang-beradaptasi-sesuai-perangkat-dan-jaringan-78f4496915a4" rel="noopener" target="_blank">Web Pintar Yang Beradaptasi Sesuai Perangkat dan Jaringan</a>”) dan banyak hal lainnya yang mendukung.
</p>


<h3>Berpikir bahwa PWA merupakan one hit and run task</h3>
<p>
PWA seringkali dikerjakan oleh para developer (termasuk saya) dengan one-hit and run task, yang artinya dikerjakan dalam satu waktu kemudian di ship ke production dan pekerjaan selesai, tanpa pernah dilihat lagi dan dikaji ulang setelahnya.

PWA sebenarnya membutuhkan perhatian lebih, setelah mengirimkan PWA ke production sebaiknya kita juga memantau data yang bisa kita dapatkan seperti seberapa banyak pengguna yang terbantu dengan fitur PWA kita, berapa pengguna yang melakukan A2HS di device mereka, seberapa besar cache yang dilakukan service worker memakan memori pengguna, seberapa membantu cache yang dilakukan service worker dan hal lainnya.

Setelah memantau berbagai data kita bisa memperbaiki PWA kita agar lebih sesuai dengan kondisi pengguna kita. Intinya membangun PWA adalah proses yang harus dilakukan secara berulang dari analyze, build, ship, measure, fix, ship again, and repeat again.
</p>



<blockquote>Kita sebagai developer seringkali terjebak dengan banyak hal teknis dan lupa bahwa ada banyak hal yang mesti diperhatikan ketika membuat sebuah fitur untuk pengguna. Mari sama-sama belajar memahami pengguna kita dan let’s be a better developer!!!</blockquote>

Tulisan ini sebelumnya saya publikasikan di Medium: <a href="https://medium.com/wwwid/yang-sering-developer-lupakan-soal-pwa-d26d3ee6a7ba">https://medium.com/wwwid/yang-sering-developer-lupakan-soal-pwa-d26d3ee6a7ba</a>