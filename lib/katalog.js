/* ============================================================================
   Katalog konsep "Amber" — Cahaya Lilin.
   Ciri khas varian ini: setiap produk punya angka intensitas 1–10 dan
   diletakkan pada satu pita dari yang paling lembut ke yang paling kuat.
   Pembeli memilih seberapa terang "nyalanya", bukan memilih bentuk.
   Nama, harga, dan spesifikasi adalah contoh untuk purwarupa desain kontes.
   ========================================================================== */

export const TINGKAT = [
  {
    id: 1,
    romawi: 'I',
    nama: 'Lembut',
    rentang: [1, 3],
    untuk: 'Baru pertama mencoba',
    catatan: 'Dipakai berdua, tanpa atau dengan alat yang sangat sederhana. Cara paling aman untuk memulai percakapan.',
  },
  {
    id: 2,
    romawi: 'II',
    nama: 'Sedang',
    rentang: [4, 6],
    untuk: 'Sudah pernah, ingin menambah',
    catatan: 'Getaran rendah dengan beberapa pilihan pola. Ukurannya masih ringkas dan mudah dipahami.',
  },
  {
    id: 3,
    romawi: 'III',
    nama: 'Kuat',
    rentang: [7, 10],
    untuk: 'Tahu persis yang dicari',
    catatan: 'Daya lebih besar dan pilihan pola lebih banyak. Sebaiknya bukan yang pertama dibeli.',
  },
]

export const PRODUK = [
  {
    slug: 'minyak-pijat-hangat',
    nama: 'Minyak Pijat Hangat',
    intensitas: 1,
    harga: 165000,
    image: '/images/p15.jpeg',
    unggulan: true,
    ringkas: 'Terasa hangat saat digosokkan. Titik mulai paling pelan — tanpa alat sama sekali.',
    cerita: [
      'Banyak pasangan melewatkan tingkat ini karena merasa "terlalu sederhana". Padahal di sinilah kebiasaan baru paling mudah dibangun: lampu diredupkan, ponsel disingkirkan, dan dua puluh menit yang tidak terburu-buru.',
      'Minyaknya menghangat pelan ketika digosokkan di antara telapak tangan, beraroma kayu manis tipis, dan menyerap tanpa rasa lengket.',
    ],
    spek: [
      ['Bahan dasar', 'Minyak biji anggur, almon, ekstrak kayu manis'],
      ['Isi', '100 ml'],
      ['Aroma', 'Kayu manis & vanila, tipis'],
      ['Catatan', 'Hanya pemakaian luar, tidak untuk kondom lateks'],
    ],
    tips: 'Hangatkan botolnya di air suam-suam kuku lima menit sebelum dipakai.',
  },
  {
    slug: 'pelumas-satin',
    nama: 'Pelumas Satin',
    intensitas: 2,
    harga: 175000,
    image: '/images/p14.jpeg',
    unggulan: false,
    ringkas: 'Berbahan air, lembut seperti satin, aman dipakai bersama semua alat di katalog.',
    cerita: [
      'Kalau hanya membeli satu barang dari tingkat pertama, belilah ini. Hampir semua rasa tidak nyaman di awal berasal dari kurang licin, bukan dari alatnya.',
      'Tanpa pewangi dan tanpa gliserin, jadi aman untuk kulit sensitif. Mudah dibilas air dan tidak meninggalkan noda.',
    ],
    spek: [
      ['Bahan dasar', 'Air, tanpa gliserin & paraben'],
      ['Isi', '100 ml, tutup pompa'],
      ['Aman untuk', 'Alat silikon & kondom lateks'],
      ['Setelah dibuka', 'Pakai dalam 12 bulan'],
    ],
    tips: 'Mulai dari sedikit — setetes seukuran uang logam — lalu tambahkan bila perlu.',
  },
  {
    slug: 'paket-tingkat-satu',
    nama: 'Paket Tingkat I',
    intensitas: 3,
    harga: 420000,
    image: '/images/p4.jpg',
    unggulan: true,
    ringkas: 'Minyak pijat, pelumas, lilin pijat, dan kartu panduan. Semua yang dibutuhkan untuk malam pertama.',
    cerita: [
      'Kami menyusun paket ini untuk satu pertanyaan yang paling sering masuk: "Kalau mau mulai, beli apa dulu?" Jawabannya ada di satu kotak, dan semuanya di tingkat pertama.',
      'Termasuk kartu panduan tiga malam — satu kartu untuk tiap malam, dari pijat punggung sampai obrolan tentang apa yang ingin dicoba berikutnya.',
    ],
    spek: [
      ['Isi', 'Minyak pijat 50 ml, pelumas 50 ml, lilin pijat, 3 kartu panduan'],
      ['Hemat', 'Rp 95.000 dibanding membeli terpisah'],
      ['Lilin pijat', 'Kedelai, meleleh di 38°C — hangat, tidak panas'],
      ['Kemasan', 'Kotak polos, kartu tanpa logo'],
    ],
    tips: 'Buka kartu malam pertama berdua — jangan dibaca duluan.',
  },
  {
    slug: 'glow-mini',
    nama: 'Glow Mini',
    intensitas: 4,
    harga: 329000,
    image: '/images/p2.jpg',
    unggulan: false,
    ringkas: 'Getaran tunggal yang sangat halus. Jembatan dari tingkat pertama ke tingkat kedua.',
    cerita: [
      'Glow Mini sengaja dibuat terbatas: satu tombol, tiga kekuatan, tanpa pola. Justru karena sederhana, ia jadi alat pertama yang paling jarang membuat canggung.',
      'Ukurannya sebesar lipstik dan hampir tak bersuara, jadi cocok dipakai sambil tetap berpelukan.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, bebas BPA'],
      ['Kekuatan', '3 tingkat, tanpa pola'],
      ['Daya', 'Baterai AAA, ±3 jam'],
      ['Ketahanan air', 'Tahan air penuh (IPX7)'],
    ],
    tips: 'Pakai di tingkat terendah dulu selama beberapa kali sebelum menaikkannya.',
  },
  {
    slug: 'ember-wand',
    nama: 'Ember Wand',
    intensitas: 5,
    harga: 1150000,
    image: '/images/p7.jpg',
    unggulan: true,
    ringkas: 'Kepala lebar yang empuk dan pola yang naik perlahan — bukan langsung penuh.',
    cerita: [
      'Kebanyakan alat sejenis langsung menyala di kekuatan tengah. Ember Wand selalu mulai dari yang terendah dan naik bertahap setiap kali tombol ditekan, seperti nyala lilin yang membesar.',
      'Kepalanya lebar sehingga getarannya menyebar, bukan menusuk. Enak juga untuk pijat bahu setelah hari yang panjang.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, gagang ABS'],
      ['Pola', '8 pola, 5 kekuatan, selalu mulai dari terendah'],
      ['Daya', 'Isi ulang USB-C, ±2,5 jam'],
      ['Kebisingan', 'Di bawah 42 dB pada kekuatan terendah'],
    ],
    tips: 'Tahan tombol dua detik untuk kembali ke kekuatan terendah kapan saja.',
  },
  {
    slug: 'duo-hangat',
    nama: 'Duo Hangat',
    intensitas: 6,
    harga: 1290000,
    image: '/images/p3.jpg',
    unggulan: false,
    ringkas: 'Dirancang untuk dipakai berdua sekaligus. Batas atas tingkat kedua.',
    cerita: [
      'Duo Hangat melengkung mengikuti tubuh sehingga bisa dipakai bersamaan, bukan bergantian. Ini alat pertama di katalog yang benar-benar membutuhkan obrolan sebelum dipakai.',
      'Kendalinya lewat satu tombol besar yang mudah ditemukan dalam cahaya redup.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, bebas BPA'],
      ['Pola', '10 pola, 2 motor'],
      ['Daya', 'Isi ulang USB-C, ±2 jam'],
      ['Ketahanan air', 'Tahan percik'],
    ],
    tips: 'Coba dulu di tingkat terendah sambil mengobrol — bukan sambil diam.',
  },
  {
    slug: 'flare-remote',
    nama: 'Flare Remote',
    intensitas: 8,
    harga: 1390000,
    image: '/images/p8.jpg',
    unggulan: false,
    ringkas: 'Dikendalikan pasangan lewat remote kecil. Untuk yang sudah nyaman menyerahkan kendali.',
    cerita: [
      'Tingkat ketiga bukan soal daya saja, tapi soal kepercayaan. Dengan Flare Remote, kendali ada di tangan pasangan — dan itu yang membuatnya intens.',
      'Remote-nya bekerja sampai delapan meter dan punya tombol "padam" yang langsung mematikan semuanya.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, bebas BPA'],
      ['Kendali', 'Remote nirkabel, jangkauan 8 m'],
      ['Daya', 'Isi ulang magnetik, ±90 menit'],
      ['Pengaman', 'Tombol padam di remote & alat'],
    ],
    tips: 'Sepakati satu kata berhenti sebelum mulai — dan hormati tanpa bertanya.',
  },
  {
    slug: 'set-nyala-penuh',
    nama: 'Set Nyala Penuh',
    intensitas: 9,
    harga: 1650000,
    image: '/images/p5.jpg',
    unggulan: false,
    ringkas: 'Empat bentuk dengan daya paling besar di katalog. Puncak skala, bukan titik mulai.',
    cerita: [
      'Kami menaruh set ini di ujung skala dengan sengaja. Kalau Anda sampai di sini, Anda sudah tahu persis apa yang disukai — dan tidak butuh kami untuk menjelaskannya.',
      'Empat bentuk disimpan di kotak kaku bersekat dengan tutup magnet, tanpa cetakan di luar.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, bebas BPA'],
      ['Isi', '4 bentuk, 2 di antaranya bermotor'],
      ['Daya', 'Isi ulang USB-C, ±2 jam per alat'],
      ['Ketahanan air', 'Tahan air penuh (IPX7)'],
    ],
    tips: 'Tidak ada tips — Anda sudah tahu. Tapi pelumas berbahan air tetap wajib.',
  },
]

export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID')
export const produkBySlug = (slug) => PRODUK.find((p) => p.slug === slug)
export const tingkatDari = (n) => TINGKAT.find((t) => n >= t.rentang[0] && n <= t.rentang[1])
