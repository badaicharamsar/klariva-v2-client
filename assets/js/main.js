document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = "klariva-language";
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const panel = document.querySelector(".nav-panel");
  const menuLinks = document.querySelectorAll(".nav-menu a");
  const languageButtons = document.querySelectorAll("[data-lang-switch]");
  let currentLanguage = localStorage.getItem(STORAGE_KEY) || "id";

  const languagePacks = {
    id: {
      common: {
        attr: {
          "a.brand": { "aria-label": "Beranda Klariva" },
          ".brand-logo": { alt: "Klariva Fakta & Investigasi" },
          ".nav-toggle": { "aria-label": "Buka navigasi" },
          ".lang-switch": { "aria-label": "Pilihan bahasa" }
        },
        text: {
          ".nav-menu a": ["Beranda", "Layanan", "Tentang", "Proses", "Kontak"],
          ".nav-cta span": "Konsultasi",
          ".footer-tagline": "Layanan investigasi dan verifikasi fakta yang rahasia.",
          ".footer .footer-col:nth-child(2) h4": "Navigasi",
          ".footer .footer-col:nth-child(2) a": ["Beranda", "Layanan", "Tentang", "Proses", "Kontak"],
          ".footer .footer-col:nth-child(3) h4": "Akses Cepat",
          ".footer .footer-col:nth-child(3) a": ["Investigasi Rahasia", "Verifikasi Fakta", "Batas Legal & Etika", "Kontak"],
          ".footer .footer-col:nth-child(4) h4": "Kontak",
          ".footer .footer-col:nth-child(4) p": [
            "Konsultasi awal hanya melalui janji terlebih dahulu.",
            "Kanal komunikasi aman tersedia berdasarkan permintaan."
          ],
          ".footer-contact-name": ["WhatsApp", "Instagram", "Threads", "TikTok", "X (Twitter)", "Email"],
          ".footer-bottom p:first-child": "\u00a9 2026 Klariva. Seluruh hak cipta dilindungi."
        }
      },
      pages: {
        "index.html": {
          meta: {
            title: "Klariva - Fakta & Investigasi",
            description:
              "Klariva adalah website premium untuk layanan investigasi rahasia dan verifikasi fakta yang legal, objektif, profesional, dan rahasia.",
            ogTitle: "Klariva - Fakta & Investigasi",
            ogDescription: "Layanan investigasi dan verifikasi fakta yang legal, rahasia, objektif, dan profesional."
          },
          attr: {
            ".hero-home-image": { alt: "Visual investigatif mata dengan elemen biometrik statis" },
            ".insight-image": { alt: "Visual metodologi investigasi dengan dokumen dan parameter analisis" },
            ".personal-service-image": { alt: "Visual investigasi personal dengan fokus observasi dan dokumen" },
            ".corporate-service-image": { alt: "Visual investigasi korporat dengan struktur bisnis dan titik analisis" },
            ".digital-service-image": { alt: "Visual verifikasi fakta digital dengan dokumen dan fokus analisis" },
            ".legal-boundary-image": { alt: "Visual batas operasional dengan simbol larangan dan perimeter pengawasan" }
          },
          text: {
            ".hero-actions .btn span": "Konsultasi",
            ".hero-actions .btn-ghost span": "Lihat Layanan",
            ".hero-stat-label": ["Rahasia", "Lini Layanan", "Tahap Verifikasi"],
            ".hero-visual-home .coord.tr": "PENGAMATAN",
            ".hero-visual-home .coord.bl": "ARSIP LAPANGAN",
            ".hero-visual-home .coord.br": "FRAME STATIS",
            ".values .section-label": "Prinsip Operasional",
            ".values .section-copy": "Setiap penugasan Klariva, sebesar atau sekecil apa pun lingkupnya, dijalankan di atas fondasi yang sama. Tidak dapat dinegosiasikan, tidak ditukar dengan kecepatan, dan tidak dikurangi demi kenyamanan.",
            ".value-card .value-num": ["01 / Rahasia", "02 / Objektif", "03 / Legal", "04 / Terverifikasi"],
            ".value-card .value-title": ["Kerahasiaan", "Objektivitas", "Legalitas", "Berbasis Fakta"],
            ".value-card .value-desc": [
              "Identitas, data, dan temuan klien dilindungi melalui protokol komunikasi terbatas dan kebijakan non-disclosure yang ketat.",
              "Analisis dilakukan tanpa asumsi dan tanpa bias kepentingan. Setiap temuan dapat dipertanggungjawabkan secara metodologis.",
              "Seluruh metode dan sumber informasi mematuhi hukum yang berlaku tanpa pengecualian dan tanpa kompromi pada batas legal.",
              "Klaim divalidasi silang dari berbagai sumber terverifikasi sebelum dimasukkan ke dalam laporan akhir kepada klien."
            ],
            ".insight-copy .section-label": "Metodologi",
            ".insight-copy p": [
              "Setiap kasus dimulai dengan pertanyaan, bukan asumsi. Kami menyusun hipotesis kerja, memetakan sumber informasi yang sah, lalu memverifikasi setiap temuan melalui pemeriksaan silang.",
              "Laporan akhir dibangun dari fakta yang dapat dipertanggungjawabkan, bukan opini dan bukan dugaan."
            ],
            ".insight-points li": [
              "Validasi silang lintas sumber independen",
              "Dokumentasi kronologi yang dapat ditelusuri",
              "Pemisahan tegas antara temuan dan interpretasi",
              "Penyerahan laporan melalui kanal yang aman"
            ],
            "section[style*='border-top'] .section-label": "Layanan Utama",
            "section[style*='border-top'] .section-copy": "Setiap layanan dirancang untuk skenario kebutuhan klien yang berbeda, namun dijalankan dengan pendekatan, etika, dan ketelitian yang sama.",
            ".art-block-label": ["01 · Personal", "02 · Korporat", "03 · Digital"],
            ".service-preview-desc": [
              "Verifikasi latar belakang individu, kejelasan informasi personal, dan klarifikasi situasi sensitif dalam kerangka legal dan etis.",
              "Uji tuntas (Due Diligence), pemeriksaan integritas mitra, verifikasi entitas bisnis, dan penelusuran indikasi pelanggaran internal organisasi.",
              "Validasi informasi digital, penelusuran jejak publik daring, dan verifikasi keaslian konten dari sumber terbuka yang sah."
            ],
            ".service-link": "Pelajari lebih lanjut",
            ".process-section .section-label": "Alur Kerja",
            ".process-title": ["Konsultasi Awal", "Analisis Kasus", "Investigasi & Verifikasi", "Laporan Temuan"],
            ".process-desc": [
              "Identifikasi kebutuhan klien, ruang lingkup kasus, dan kesepakatan kerahasiaan dilakukan pada sesi tertutup.",
              "Tim menyusun pemetaan informasi, hipotesis kerja, dan strategi investigasi yang spesifik untuk konteks kasus.",
              "Pengumpulan data, validasi silang lintas sumber, dan pemeriksaan integritas temuan dijalankan secara metodis.",
              "Hasil disusun dalam laporan tertulis yang ringkas, objektif, dapat dipertanggungjawabkan, dan diserahkan secara aman."
            ],
            ".disclaimer-tag": "Disclaimer",
            ".cta-section .cta-meta": "Konsultasi",
            ".cta-section .cta-sub": "Diskusi awal bersifat rahasia. Tidak ada komitmen sebelum lingkup penugasan disepakati bersama.",
            ".cta-section .btn span": "Ajukan Kasus",
            ".footer-bottom .code": "KLV-001 / RAHASIA SECARA DESAIN"
          },
          html: {
            ".hero-meta": "KEJELASAN &middot; KERAHASIAAN &middot; INTEGRITAS",
            ".display-title": "Membantu Anda<br>Melihat <em>Fakta</em><br>dengan Lebih Jelas",
            ".hero-sub": "Klariva adalah layanan investigasi dan verifikasi informasi yang membantu individu dan organisasi memperoleh kejelasan fakta secara <strong>legal, rahasia, objektif, dan profesional</strong>.",
            ".values .section-title": "Empat prinsip yang <em>tidak pernah kami kompromikan</em>.",
            ".insight-title": "Cara kami melihat <em>fakta</em> dengan disiplin yang dapat ditelusuri.",
            "section[style*='border-top'] .section-title": "Tiga lini layanan, satu <em>standar kerja</em>.",
            ".service-preview-title": [
              "Investigasi Personal<br><em>(Personal Investigation)</em>",
              "Investigasi Korporat &amp; Bisnis<br><em>(Corporate &amp; Business Investigation)</em>",
              "Verifikasi Fakta Digital<br><em>(Digital Fact Verification)</em>"
            ],
            ".process-section .section-title": "Empat tahap terstruktur dari permintaan menuju <em>kejelasan</em>.",
            ".disclaimer-text": "<strong>Klariva tidak menyediakan</strong> layanan penyadapan, peretasan, pelacakan ilegal, atau tindakan apa pun yang melanggar hukum yang berlaku. Setiap penugasan dijalankan dalam koridor legal, etis, dan profesional tanpa pengecualian.",
            ".cta-section .cta-title": "Butuh Kejelasan atas Sebuah <em>Situasi?</em>"
          }
        },
        "services.html": {
          meta: {
            title: "Klariva - Layanan",
            description:
              "Direktori layanan Klariva untuk kebutuhan investigasi personal, investigasi korporat, dan verifikasi fakta digital.",
            ogTitle: "Klariva - Layanan",
            ogDescription: "Tiga lini layanan investigasi dan verifikasi informasi dengan standar kerja yang legal, rahasia, dan objektif."
          },
          text: {
            ".page-hero .eyebrow": "Direktori Layanan / KLV-SRV-03",
            ".services-pillars .pillar-value": ["03", "17", "100%", "ID"],
            ".services-pillars .pillar-label": ["Lini Layanan", "Domain Operasional", "Keterlibatan Rahasia", "Operasi Indonesia"],
            ".service-visual-label": ["01 · Personal", "02 · Korporat", "03 · Digital"],
            ".service-meta span:first-child": "Lini Layanan",
            ".service-meta .tag": ["Personal", "Korporat", "Digital"],
            ".service-line-desc": [
              "Untuk kebutuhan klarifikasi situasi personal, relasi, keluarga, dan kasus sensitif lainnya yang harus ditangani dengan kerahasiaan penuh.",
              "Untuk kebutuhan verifikasi mitra, kandidat, vendor, aktivitas internal, pengawasan terbatas, dan dukungan pengambilan keputusan bisnis yang berisiko.",
              "Untuk kebutuhan pemeriksaan informasi publik, jejak digital terbuka, dan reputasi online yang bersumber pada data legal dan terverifikasi."
            ],
            ".service-foot": ["Rahasia · Diskret", "Rahasia · Patuh Kepatuhan", "OSINT · Domain Publik Saja"],
            ".sub-label": "Lingkup Layanan",
            ".sub-hint": "Pilih layanan yang relevan untuk dilanjutkan",
            ".sub-list .sub-text": [
              "Investigasi relasi dan indikasi perselingkuhan",
              "Verifikasi pasangan atau calon pasangan",
              "Konsultasi kasus personal dan pendampingan",
              "Penyusunan kronologi dan bukti awal",
              "Observasi lapangan dalam batas legal",
              "Pengawasan (Surveillance) terbatas dalam batas legal",
              "Background check kandidat atau mitra",
              "Verifikasi vendor dan supplier",
              "Investigasi internal terbatas",
              "Kunjungan terselubung dan pemeriksaan kepatuhan",
              "Uji tuntas (Due Diligence) awal pra-keputusan",
              "Pengawasan (Surveillance) operasional terbatas dalam batas legal",
              "Verifikasi informasi publik",
              "Analisis jejak digital terbuka",
              "Monitoring reputasi online",
              "OSINT legal dan lawful research",
              "Laporan temuan digital terstruktur"
            ],
            ".legal-section .section-label": "Batas Operasional",
            ".legal-prohibited li": [
              "Penyadapan komunikasi pribadi",
              "Peretasan sistem atau akun",
              "Pelacakan ilegal dan surveillance tanpa dasar hukum",
              "Pengambilan data pribadi tanpa izin",
              "Intimidasi atau pemaksaan terhadap subjek",
              "Manipulasi, fabrikasi, atau perusakan bukti"
            ],
            ".cta-section .cta-meta": "Konsultasi",
            ".cta-section .cta-sub": "Diskusi awal bersifat rahasia. Tidak ada komitmen sebelum lingkup penugasan disepakati bersama.",
            ".cta-section .btn span": "Ajukan Konsultasi",
            ".footer-bottom .code": ""
          },
          html: {
            ".page-hero-title": "Layanan<br><em>Klariva</em>",
            ".page-hero-sub": "Investigasi dan verifikasi informasi yang dirancang untuk membantu klien memahami situasi secara lebih <strong>jelas, legal, rahasia,</strong> dan <strong>objektif</strong> dalam koridor etika dan hukum yang berlaku.",
            ".service-line-title": [
              "Investigasi Personal<br><em>(Personal Investigation)</em>",
              "Investigasi Korporat &amp; Bisnis<br><em>(Corporate &amp; Business Investigation)</em>",
              "Verifikasi Fakta Digital<br><em>(Digital Fact Verification)</em>"
            ],
            ".legal-title": "Garis yang <em>tidak akan kami lintasi.</em>",
            ".legal-statement > p": "<strong>Klariva tidak menyediakan</strong> layanan dalam bentuk apa pun yang melibatkan tindakan ilegal, pelanggaran privasi tanpa dasar hukum, atau manipulasi proses penegakan kebenaran.",
            ".cta-section .cta-title": "Butuh Kejelasan atas Sebuah <em>Situasi?</em>"
          }
        },
        "about.html": {
          meta: {
            title: "Klariva - Tentang",
            description:
              "Tentang Klariva, layanan investigasi dan verifikasi fakta yang dibangun di atas kejelasan, kerahasiaan, legalitas, dan integritas kerja.",
            ogTitle: "Klariva - Tentang",
            ogDescription: "Tentang Klariva, layanan investigasi dan verifikasi fakta yang dibangun di atas kejelasan, kerahasiaan, legalitas, dan integritas kerja."
          },
          text: {
            ".page-hero .eyebrow": "Profil Institusional / KLV-ABOUT-01",
            ".corner-label": ["ABOUT / DOSSIER", "TRUST", "LEGAL FRAME", "KLV / PROFILE"],
            ".hero-meta-line span": ["Kejelasan Posisi", "Batas Legal", "Standar Etika", "Kepercayaan Klien"],
            ".main-content > .section-pad .section-head .section-label": "Arsitektur Kepercayaan",
            ".main-content > .section-pad .section-copy": "Kami tidak memosisikan diri sebagai penyedia sensasi, melainkan sebagai layanan investigasi dan verifikasi yang membantu klien memahami situasi dengan lebih terang, lebih tertib, dan lebih aman secara hukum.",
            ".placeholder-card .card-index": [
              "01 / Siapa Klariva",
              "02 / Prinsip Dasar",
              "03 / Batas Operasional",
              "04 / Untuk Siapa"
            ],
            ".placeholder-card h3": ["Posisi Layanan", "Empat Fondasi", "Koridor Kerja", "Klien yang Dilayani"],
            ".placeholder-card p": [
              "Klariva berfokus pada investigasi, verifikasi informasi, dan analisis temuan yang membantu klien mengambil keputusan berdasarkan fakta, bukan asumsi.",
              "Setiap penugasan dijalankan di atas empat fondasi yang sama: kejelasan, kerahasiaan, legalitas, dan integritas kerja yang konsisten.",
              "Klariva bekerja dalam batas hukum dan etika yang jelas. Metode yang melanggar privasi, memanipulasi bukti, atau menyalahi hukum tidak menjadi bagian dari layanan kami.",
              "Layanan kami relevan bagi individu, keluarga, profesional, pemilik bisnis, dan organisasi yang membutuhkan klarifikasi situasi secara diskret dan bertanggung jawab."
            ],
            ".info-panel h3": ["Cara Pandang Klariva", "Komitmen Penugasan"],
            ".info-panel > p": [
              "Kami memandang investigasi bukan sebagai alat tekanan, tetapi sebagai proses disiplin untuk menemukan gambaran yang lebih utuh, lebih sah, dan lebih bisa dipertanggungjawabkan kepada klien.",
              "Setiap penugasan diterima secara selektif, dipetakan secara hati-hati, dan dijalankan hanya ketika ruang lingkupnya jelas serta dapat dilakukan tanpa melanggar hukum. Kami memilih ketepatan, kehati-hatian, dan integritas di atas klaim berlebihan."
            ],
            ".contact-points li": [
              "Kerahasiaan klien menjadi prioritas sejak kontak pertama",
              "Setiap temuan dipisahkan tegas dari opini dan interpretasi",
              "Seluruh proses tunduk pada batas legal dan etika kerja"
            ],
            ".dev-note": "KLV-ABOUT / trust built through clarity, confidentiality, and lawful method.",
            ".footer-bottom .code": "KLV-ABOUT-01 / CLARITY, CONFIDENTIALITY, LAWFUL METHOD"
          },
          html: {
            ".page-hero-title": "Tentang<br><em>Klariva</em>",
            ".page-hero-sub": "Klariva adalah layanan investigasi dan verifikasi fakta yang dirancang untuk membantu individu dan organisasi memperoleh kejelasan situasi melalui proses yang <strong>legal, rahasia, objektif,</strong> dan <strong>dapat dipertanggungjawabkan</strong>.",
            ".main-content > .section-pad .section-title": "Klariva dibangun untuk memberi <em>kejelasan yang dapat dipercaya</em>."
          }
        },
        "process.html": {
          meta: {
            title: "Klariva - Proses",
            description: "Proses kerja Klariva dari konsultasi awal, pemetaan kasus, verifikasi, hingga laporan akhir yang aman dan dapat dipertanggungjawabkan.",
            ogTitle: "Klariva - Proses",
            ogDescription: "Alur kerja Klariva dari konsultasi awal hingga laporan akhir yang aman, tertib, dan berbasis fakta."
          },
          attr: {
            ".process-hero-image": { alt: "Visual alur proses dengan tahapan terstruktur dan jalur review" }
          },
          text: {
            ".page-hero .eyebrow": "Alur Operasional / KLV-PRC-01",
            ".corner-label": ["PROCESS / FLOW", "CONTROLLED", "CHAIN OF REVIEW", "KLV / DELIVERY"],
            ".hero-meta-line span": ["Intake Rahasia", "Pemetaan Kasus", "Verifikasi Temuan", "Penyampaian Aman"],
            ".section-head .section-label": "Perjalanan Klien",
            ".section-head .section-copy": "Kami menjaga agar proses tetap mudah dipahami klien tanpa membuka detail operasional yang sensitif. Yang terpenting, setiap tahap memiliki tujuan yang jelas, batas yang tegas, dan keluaran yang dapat dipertanggungjawabkan.",
            ".timeline-item h3": ["Konsultasi Awal", "Pemetaan Kasus", "Verifikasi & Investigasi", "Analisis Temuan", "Laporan & Penyampaian", "Tindak Lanjut"],
            ".timeline-item p": [
              "Kontak pertama digunakan untuk memahami konteks, sensitivitas, dan tujuan klien, sekaligus menilai apakah kebutuhan tersebut dapat diproses dalam batas legal dan etis.",
              "Setelah lingkup awal dipahami, kami menyusun gambaran masalah, kronologi, pihak terkait, sumber informasi potensial, serta risiko yang perlu diperhatikan sebelum pekerjaan berjalan lebih jauh.",
              "Pengumpulan data, observasi, dan validasi silang dilakukan melalui metode yang sah, proporsional, dan sesuai dengan ruang lingkup yang telah disepakati.",
              "Setiap temuan ditelaah ulang untuk memastikan konsistensi, relevansi, dan pemisahan yang jelas antara fakta, indikasi, dan interpretasi agar kesimpulan tidak melampaui data yang tersedia.",
              "Hasil akhir dirangkum dalam format yang ringkas, aman, dan mudah ditelaah, lalu disampaikan melalui kanal yang sesuai dengan tingkat sensitivitas kasus.",
              "Bila diperlukan, klien akan menerima arahan langkah berikutnya, batas penggunaan laporan, dan opsi konsultasi lanjutan tanpa tekanan untuk melanjutkan penugasan baru."
            ],
            ".dev-note": "KLV-PROCESS / structured client journey, lawful method, secure delivery.",
            ".info-panel h3": ["Apa yang Selalu Konsisten", "Apa yang Dapat Diharapkan Klien"],
            ".info-panel p": [
              "Apa pun jenis kasusnya, kami menjaga empat hal yang sama sejak awal: kerahasiaan klien, kepatuhan pada hukum, objektivitas dalam membaca temuan, dan dokumentasi yang tertib.",
              "Klien tidak dihadapkan pada istilah teknis yang membingungkan. Yang kami jaga adalah kejelasan alur, ruang lingkup yang realistis, komunikasi yang aman, dan hasil yang bisa dipakai untuk penelaahan lebih lanjut."
            ],
            ".footer-bottom .code": "KLV-PRC-01 / STRUCTURED CLIENT JOURNEY"
          },
          html: {
            ".page-hero-title": "Proses<br><em>Kami</em>",
            ".page-hero-sub": "Proses kerja Klariva dirancang untuk memberi ketenangan sekaligus kejelasan: setiap langkah dilakukan secara tertib, rahasia, dan berbasis fakta agar klien memahami apa yang dikerjakan, mengapa dilakukan, dan bagaimana hasilnya disampaikan.",
            ".section-head .section-title": "Enam tahap dari kebutuhan awal menuju <em>kejelasan yang dapat ditindaklanjuti</em>."
          }
        },
        "contact.html": {
          meta: {
            title: "Klariva - Kontak",
            description: "Hubungi Klariva untuk konsultasi awal yang rahasia. Pilih kanal komunikasi yang paling nyaman — WhatsApp, Email, Instagram, Threads, atau TikTok.",
            ogTitle: "Klariva - Kontak",
            ogDescription: "Hubungi Klariva untuk konsultasi awal yang rahasia melalui kanal pilihan Anda."
          },
          attr: {
            ".contact-hero-image": { alt: "Visual konsultasi awal rahasia dengan fokus intake dan komunikasi aman" }
          },
          text: {
            ".page-hero .eyebrow": "Intake Aman / KLV-CNT-01",
            ".corner-label": ["CONTACT / INTAKE", "PRIVATE", "INITIAL SCREENING", "KLV / SECURE"],
            ".contact-card h3": "Konsultasi Awal",
            ".contact-card > p": "Pilih kanal komunikasi yang paling nyaman untuk Anda. Diskusi awal bersifat rahasia — tidak ada komitmen sebelum lingkup penugasan disepakati bersama.",
            ".contact-points li": [
              "Intake respons awal yang rahasia",
              "Penyaringan awal kebutuhan kasus",
              "Konfirmasi lingkup operasional",
              "Komunikasi aman berdasarkan pengaturan"
            ],
            ".channel-section-label": "Pilih Kanal",
            ".channel-card-desc": [
              "Pesan langsung terkirim otomatis",
              "Salin pesan, compose via Gmail",
              "Salin pesan, buka profil Instagram",
              "Salin pesan, buka profil",
              "Salin pesan, buka profil",
              "Salin pesan, buka profil X"
            ],
            ".channel-card-badge": ["Auto", "Salin", "Salin", "Salin", "Salin", "Salin"],
            ".ssb-label": "Layanan Dipilih",
            ".cta-section .cta-meta": "Intake Rahasia",
            ".cta-section .cta-sub": "Konsultasi awal tidak memerlukan komitmen. Lingkup penugasan baru disepakati setelah penilaian awal selesai.",
            ".cta-section .btn span": "Pilih Kanal",
            ".footer-bottom .code": "KLV-CNT-01 / KANAL KONSULTASI AKTIF"
          },
          html: {
            ".page-hero-title": "Hubungi<br><em>Klariva</em>",
            ".page-hero-sub": "Konsultasi awal dilakukan secara rahasia untuk memahami kebutuhan dan menentukan apakah kasus dapat ditangani dalam batas legal serta etis.",
            ".channel-heading": "Hubungi melalui kanal yang <em>paling nyaman</em>",
            ".cta-section .cta-title": "Semua kanal direspons dengan <em>kerahasiaan penuh.</em>"
          }
        }
      }
    },
    en: {
      common: {
        attr: {
          "a.brand": { "aria-label": "Klariva Home" },
          ".brand-logo": { alt: "Klariva Fact & Investigation" },
          ".nav-toggle": { "aria-label": "Open navigation" },
          ".lang-switch": { "aria-label": "Language switch" }
        },
        text: {
          ".nav-menu a": ["Home", "Services", "About", "Process", "Contact"],
          ".nav-cta span": "Consultation",
          ".footer-tagline": "Confidential fact verification and investigation service.",
          ".footer .footer-col:nth-child(2) h4": "Navigation",
          ".footer .footer-col:nth-child(2) a": ["Home", "Services", "About", "Process", "Contact"],
          ".footer .footer-col:nth-child(3) h4": "Quick Access",
          ".footer .footer-col:nth-child(3) a": ["Confidential Investigation", "Fact Verification", "Legal & Ethical Boundary", "Contact"],
          ".footer .footer-col:nth-child(4) h4": "Contact",
          ".footer .footer-col:nth-child(4) p": [
            "Initial consultation by appointment only.",
            "Secure communication available on request."
          ],
          ".footer-contact-name": ["WhatsApp", "Instagram", "Threads", "TikTok", "X (Twitter)", "Email"],
          ".footer-bottom p:first-child": "\u00a9 2026 Klariva. All rights reserved."
        }
      },
      pages: {
        "index.html": {
          meta: {
            title: "Klariva - Fact & Investigation",
            description:
              "Klariva is a premium website for confidential investigation and fact verification services that are lawful, objective, professional, and discreet.",
            ogTitle: "Klariva - Fact & Investigation",
            ogDescription: "Investigation and fact verification services that are lawful, confidential, objective, and professional."
          },
          attr: {
            ".hero-home-image": { alt: "Investigative eye visual with static biometric elements" },
            ".insight-image": { alt: "Investigation methodology visual with documents and analysis parameters" },
            ".personal-service-image": { alt: "Personal investigation visual focused on observation and document review" },
            ".corporate-service-image": { alt: "Corporate investigation visual with business structures and analysis focal points" },
            ".digital-service-image": { alt: "Digital fact verification visual with documents and analytical focus" },
            ".legal-boundary-image": { alt: "Operational boundary visual with a prohibition symbol and monitoring perimeter" }
          },
          text: {
            ".hero-actions .btn span": "Consultation",
            ".hero-actions .btn-ghost span": "View Services",
            ".hero-stat-label": ["Confidential", "Service Lines", "Verification Steps"],
            ".hero-visual-home .coord.tr": "OBSERVATION",
            ".hero-visual-home .coord.bl": "FIELD ARCHIVE",
            ".hero-visual-home .coord.br": "STATIC FRAME",
            ".values .section-label": "Operational Principles",
            ".values .section-copy": "Every Klariva assignment, regardless of scale, runs on the same foundation. It is non-negotiable, never traded for speed, and never diluted for convenience.",
            ".value-card .value-num": ["01 / Confidential", "02 / Objective", "03 / Lawful", "04 / Verified"],
            ".value-card .value-title": ["Confidentiality", "Objectivity", "Lawfulness", "Fact-Based Review"],
            ".value-card .value-desc": [
              "Client identity, data, and findings are protected through limited communication protocols and strict non-disclosure policies.",
              "Analysis is conducted without assumptions and without bias. Every finding is methodologically defensible.",
              "All methods and information sources comply with applicable law without exception and without compromise on legal boundaries.",
              "Claims are cross-validated through verified sources before they are included in the final report."
            ],
            ".insight-copy .section-label": "Methodology",
            ".insight-copy p": [
              "Every case begins with a question, not an assumption. We build a working hypothesis, map lawful information sources, and verify every finding through cross-checking.",
              "The final report is built from accountable facts, not opinion and not speculation."
            ],
            ".insight-points li": [
              "Cross-validation across independent sources",
              "Traceable chronology documentation",
              "Clear separation between findings and interpretation",
              "Secure report delivery channels"
            ],
            "section[style*='border-top'] .section-label": "Core Services",
            "section[style*='border-top'] .section-copy": "Each service is designed for different client scenarios, while maintaining the same method, ethics, and rigor.",
            ".art-block-label": ["01 · Personal", "02 · Corporate", "03 · Digital"],
            ".service-preview-desc": [
              "Background verification for individuals, clarification of personal information, and review of sensitive situations within a lawful and ethical framework.",
              "Due diligence, partner integrity review, business entity verification, and tracing indications of internal organizational violations.",
              "Validation of digital information, review of public online traces, and verification of content authenticity from lawful open sources."
            ],
            ".service-link": "Learn more",
            ".process-section .section-label": "Workflow",
            ".process-title": ["Initial Consultation", "Case Analysis", "Investigation & Verification", "Findings Report"],
            ".process-desc": [
              "Client requirements, case scope, and confidentiality alignment are defined in a closed consultation session.",
              "The team develops an information map, working hypotheses, and a strategy tailored to the case context.",
              "Data collection, cross-validation, and integrity review of findings are carried out methodically.",
              "The output is delivered as a concise, objective, accountable written report through secure channels."
            ],
            ".disclaimer-tag": "Disclaimer",
            ".cta-section .cta-meta": "Engage",
            ".cta-section .cta-sub": "Initial discussion remains confidential. No commitment is required before the assignment scope is mutually agreed.",
            ".cta-section .btn span": "Start Case",
            ".footer-bottom .code": "KLV-001 / CONFIDENTIAL BY DESIGN"
          },
          html: {
            ".hero-meta": "CLARITY &middot; CONFIDENTIALITY &middot; INTEGRITY",
            ".display-title": "Helping You<br>See <em>Facts</em><br>With Greater Clarity",
            ".hero-sub": "Klariva is an investigation and information verification service that helps individuals and organizations gain clarity through a <strong>lawful, confidential, objective, and professional</strong> process.",
            ".values .section-title": "Four principles we <em>never compromise</em>.",
            ".insight-title": "How we examine <em>facts</em> with disciplined, traceable rigor.",
            "section[style*='border-top'] .section-title": "Three service lines, one <em>working standard</em>.",
            ".service-preview-title": [
              "Personal Investigation",
              "Corporate &amp; Business Investigation",
              "Digital Fact Verification"
            ],
            ".process-section .section-title": "Four structured stages from request to <em>clarity</em>.",
            ".disclaimer-text": "<strong>Klariva does not provide</strong> wiretapping, hacking, illegal tracking, or any activity that violates applicable law. Every assignment is carried out within lawful, ethical, and professional boundaries without exception.",
            ".cta-section .cta-title": "Need clarity on a <em>situation?</em>"
          }
        },
        "services.html": {
          meta: {
            title: "Klariva - Services",
            description:
              "Klariva service directory for personal investigation, corporate investigation, and digital fact verification needs.",
            ogTitle: "Klariva - Services",
            ogDescription: "Three investigation and information verification service lines with lawful, confidential, and objective working standards."
          },
          text: {
            ".page-hero .eyebrow": "Services Directory / KLV-SRV-03",
            ".services-pillars .pillar-value": ["03", "17", "100%", "ID"],
            ".services-pillars .pillar-label": ["Service Lines", "Operational Domains", "Confidential Engagement", "Indonesia Operations"],
            ".service-visual-label": ["01 · Personal", "02 · Corporate", "03 · Digital"],
            ".service-meta span:first-child": "Service Line",
            ".service-meta .tag": ["Personal", "Corporate", "Digital"],
            ".service-line-desc": [
              "For clarifying personal situations, relationships, family matters, and other sensitive cases that require full confidentiality.",
              "For partner, candidate, vendor, internal activity, limited surveillance, and risk-sensitive business decision support verification needs.",
              "For reviewing public information, open digital traces, and online reputation using lawful and verified data."
            ],
            ".service-foot": ["Confidential · Discreet", "Confidential · Compliance-Aware", "OSINT · Public Domain Only"],
            ".sub-label": "Service Scope",
            ".sub-hint": "Select relevant services to proceed",
            ".sub-list .sub-text": [
              "Relationship investigation and indication of infidelity",
              "Verification of a partner or prospective partner",
              "Personal case consultation and support",
              "Chronology building and preliminary evidence review",
              "Field observation within lawful boundaries",
              "Limited surveillance within lawful boundaries",
              "Background check of candidates or partners",
              "Vendor and supplier verification",
              "Limited internal investigation",
              "Mystery visit and compliance check",
              "Pre-decision due diligence",
              "Limited operational surveillance within lawful boundaries",
              "Public information verification",
              "Open digital footprint analysis",
              "Online reputation monitoring",
              "Lawful OSINT research",
              "Structured digital findings report"
            ],
            ".legal-section .section-label": "Operational Boundaries",
            ".legal-prohibited li": [
              "Private communication interception",
              "System or account hacking",
              "Illegal tracking and surveillance without lawful basis",
              "Personal data collection without consent",
              "Intimidation or coercion of any subject",
              "Manipulation, fabrication, or destruction of evidence"
            ],
            ".cta-section .cta-meta": "Engage",
            ".cta-section .cta-sub": "Initial discussion remains confidential. No commitment is required before the assignment scope is mutually agreed.",
            ".cta-section .btn span": "Request Consultation",
            ".footer-bottom .code": ""
          },
          html: {
            ".page-hero-title": "Services<br><em>Klariva</em>",
            ".page-hero-sub": "Investigation and information verification services designed to help clients understand situations with greater <strong>clarity, lawfulness, confidentiality,</strong> and <strong>objectivity</strong> within ethical and legal boundaries.",
            ".service-line-title": [
              "Personal Investigation",
              "Corporate &amp; Business Investigation",
              "Digital Fact Verification"
            ],
            ".legal-title": "Lines we <em>will not cross.</em>",
            ".legal-statement > p": "<strong>Klariva does not provide</strong> any service that involves unlawful actions, privacy violations without legal basis, or manipulation of the truth-seeking process.",
            ".cta-section .cta-title": "Need clarity on a <em>situation?</em>"
          }
        },
        "about.html": {
          meta: {
            title: "Klariva - About",
            description:
              "About Klariva, an investigation and fact verification service built on clarity, confidentiality, lawful practice, and working integrity.",
            ogTitle: "Klariva - About",
            ogDescription: "About Klariva, an investigation and fact verification service built on clarity, confidentiality, lawful practice, and working integrity."
          },
          text: {
            ".page-hero .eyebrow": "Institutional Profile / KLV-ABOUT-01",
            ".corner-label": ["ABOUT / DOSSIER", "TRUST", "LEGAL FRAME", "KLV / PROFILE"],
            ".hero-meta-line span": ["Service Positioning", "Legal Boundary", "Ethical Standard", "Client Trust"],
            ".main-content > .section-pad .section-head .section-label": "Trust Architecture",
            ".main-content > .section-pad .section-copy": "We do not position Klariva as a provider of spectacle, but as an investigation and verification service that helps clients understand situations more clearly, more safely, and with better legal discipline.",
            ".placeholder-card .card-index": [
              "01 / Who Klariva Is",
              "02 / Core Principles",
              "03 / Operating Boundary",
              "04 / Who We Serve"
            ],
            ".placeholder-card h3": ["Service Positioning", "Four Foundations", "Working Corridor", "Client Profile"],
            ".placeholder-card p": [
              "Klariva focuses on investigation, information verification, and findings analysis that help clients make decisions based on facts rather than assumptions.",
              "Every assignment is carried out on the same four foundations: clarity, confidentiality, lawfulness, and consistent working integrity.",
              "Klariva operates within clear legal and ethical limits. Methods that violate privacy, manipulate evidence, or break the law are not part of our service.",
              "Our service is relevant for individuals, families, professionals, business owners, and organizations that need discreet, accountable clarification of a situation."
            ],
            ".info-panel h3": ["How Klariva Thinks", "Assignment Commitment"],
            ".info-panel > p": [
              "We see investigation not as a tool of pressure, but as a disciplined process for finding a more complete, more lawful, and more defensible picture for the client.",
              "Every assignment is accepted selectively, mapped carefully, and carried out only when the scope is clear and can be handled without violating the law. We choose accuracy, caution, and integrity over exaggerated claims."
            ],
            ".contact-points li": [
              "Client confidentiality begins from the first contact",
              "Every finding is kept distinct from opinion and interpretation",
              "The whole process stays within lawful and ethical boundaries"
            ],
            ".dev-note": "KLV-ABOUT / trust built through clarity, confidentiality, and lawful method.",
            ".footer-bottom .code": "KLV-ABOUT-01 / CLARITY, CONFIDENTIALITY, LAWFUL METHOD"
          },
          html: {
            ".page-hero-title": "About<br><em>Klariva</em>",
            ".page-hero-sub": "Klariva is an investigation and fact verification service designed to help individuals and organizations gain situational clarity through a <strong>lawful, confidential, objective,</strong> and <strong>accountable</strong> process.",
            ".main-content > .section-pad .section-title": "Klariva is built to deliver <em>clarity that can be trusted</em>."
          }
        },
        "process.html": {
          meta: {
            title: "Klariva - Process",
            description: "Klariva's working process from initial consultation, case mapping, and verification to secure final reporting.",
            ogTitle: "Klariva - Process",
            ogDescription: "Klariva's working process from initial consultation to secure final reporting."
          },
          attr: {
            ".process-hero-image": { alt: "Process flow visual with structured stages and a review path" }
          },
          text: {
            ".page-hero .eyebrow": "Operational Flow / KLV-PRC-01",
            ".corner-label": ["PROCESS / FLOW", "CONTROLLED", "CHAIN OF REVIEW", "KLV / DELIVERY"],
            ".hero-meta-line span": ["Confidential Intake", "Case Mapping", "Findings Verification", "Secure Delivery"],
            ".section-head .section-label": "Client Journey",
            ".section-head .section-copy": "We keep the process understandable for clients without exposing sensitive operational details. What matters is that every stage has a clear purpose, a defined boundary, and an accountable output.",
            ".timeline-item h3": ["Initial Consultation", "Case Mapping", "Verification & Investigation", "Findings Analysis", "Reporting & Delivery", "Next Step Guidance"],
            ".timeline-item p": [
              "The first contact is used to understand the client's context, sensitivity, and objective, while assessing whether the need can be handled within lawful and ethical limits.",
              "Once the initial scope is understood, we map the problem, chronology, related parties, potential information sources, and the risks that should be considered before work proceeds further.",
              "Data collection, observation, and cross-verification are carried out through lawful, proportionate methods aligned with the agreed scope.",
              "Each finding is reviewed to ensure consistency, relevance, and a clear separation between fact, indication, and interpretation so that conclusions never exceed the available data.",
              "The final outcome is summarized in a format that is concise, secure, and easy to review, then delivered through a channel appropriate to the case's sensitivity level.",
              "Where needed, the client receives guidance on possible next steps, report-use boundaries, and follow-up consultation options without pressure to open a new assignment."
            ],
            ".dev-note": "KLV-PROCESS / structured client journey, lawful method, secure delivery.",
            ".info-panel h3": ["What Always Stays Consistent", "What Clients Can Expect"],
            ".info-panel p": [
              "Whatever the case type, four things stay constant from the start: client confidentiality, legal compliance, objectivity in reading findings, and orderly documentation.",
              "Clients are not forced through confusing technical language. What we protect is clarity of flow, realistic scope, secure communication, and outputs that can actually be used for further review."
            ],
            ".footer-bottom .code": "KLV-PRC-01 / STRUCTURED CLIENT JOURNEY"
          },
          html: {
            ".page-hero-title": "Our<br><em>Process</em>",
            ".page-hero-sub": "Klariva's working process is designed to create both calm and clarity: every step is carried out in an orderly, confidential, fact-based way so clients understand what is being done, why it matters, and how the result will be delivered.",
            ".section-head .section-title": "Six stages from an initial need to <em>actionable clarity</em>."
          }
        },
        "contact.html": {
          meta: {
            title: "Klariva - Contact",
            description: "Contact Klariva for a confidential initial consultation. Choose your preferred communication channel — WhatsApp, Email, Instagram, Threads, or TikTok.",
            ogTitle: "Klariva - Contact",
            ogDescription: "Contact Klariva for a confidential initial consultation through your preferred channel."
          },
          attr: {
            ".contact-hero-image": { alt: "Confidential initial consultation visual focused on intake and secure communication" }
          },
          text: {
            ".page-hero .eyebrow": "Secure Intake / KLV-CNT-01",
            ".corner-label": ["CONTACT / INTAKE", "PRIVATE", "INITIAL SCREENING", "KLV / SECURE"],
            ".contact-card h3": "Initial Consultation",
            ".contact-card > p": "Choose the communication channel most comfortable for you. The initial discussion is confidential — no commitment is required before the assignment scope is mutually agreed.",
            ".contact-points li": [
              "Confidential first-response intake",
              "Preliminary case screening",
              "Operational scope confirmation",
              "Secure communication by arrangement"
            ],
            ".channel-section-label": "Choose Channel",
            ".channel-card-desc": [
              "Message sent automatically",
              "Copy message, compose via Gmail",
              "Copy message, open Instagram profile",
              "Copy message, open profile",
              "Copy message, open profile",
              "Copy message, open X profile"
            ],
            ".channel-card-badge": ["Auto", "Copy", "Copy", "Copy", "Copy", "Copy"],
            ".ssb-label": "Selected Service",
            ".cta-section .cta-meta": "Confidential Intake",
            ".cta-section .cta-sub": "The initial consultation requires no commitment. The assignment scope is only agreed upon after the initial assessment.",
            ".cta-section .btn span": "Choose Channel",
            ".footer-bottom .code": "KLV-CNT-01 / CONSULTATION CHANNELS ACTIVE"
          },
          html: {
            ".page-hero-title": "Contact<br><em>Klariva</em>",
            ".page-hero-sub": "The initial consultation is handled confidentially to understand the need and determine whether the case can be handled within lawful and ethical boundaries.",
            ".channel-heading": "Contact us through your <em>most comfortable channel</em>",
            ".cta-section .cta-title": "All channels handled with <em>full confidentiality.</em>"
          }
        }
      }
    }
  };

  const applyEntries = (entries, kind) => {
    if (!entries) {
      return;
    }

    Object.entries(entries).forEach(([selector, value]) => {
      const nodes = Array.from(document.querySelectorAll(selector));
      if (!nodes.length) {
        return;
      }

      const values = Array.isArray(value) ? value : null;

      nodes.forEach((node, index) => {
        const nextValue = values ? values[index] : value;
        if (typeof nextValue === "undefined") {
          return;
        }

        if (kind === "html") {
          node.innerHTML = nextValue;
        } else if (kind === "placeholder") {
          node.setAttribute("placeholder", nextValue);
        } else {
          node.textContent = nextValue;
        }
      });
    });
  };

  const applyAttrEntries = (entries) => {
    if (!entries) {
      return;
    }

    Object.entries(entries).forEach(([selector, attrs]) => {
      const nodes = document.querySelectorAll(selector);
      if (!nodes.length) {
        return;
      }

      nodes.forEach((node) => {
        Object.entries(attrs).forEach(([name, value]) => {
          node.setAttribute(name, value);
        });
      });
    });
  };

  const applyMeta = (meta) => {
    if (!meta) {
      return;
    }

    if (meta.title) {
      document.title = meta.title;
    }

    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (description && meta.description) {
      description.setAttribute("content", meta.description);
    }

    if (ogTitle && meta.ogTitle) {
      ogTitle.setAttribute("content", meta.ogTitle);
    }

    if (ogDescription && meta.ogDescription) {
      ogDescription.setAttribute("content", meta.ogDescription);
    }
  };

  const applyLanguage = (language) => {
    const pack = languagePacks[language] || languagePacks.id;
    const pagePack = pack.pages[currentPage] || {};

    document.documentElement.lang = language === "en" ? "en" : "id";

    applyMeta(pagePack.meta);
    applyAttrEntries(pack.common.attr);
    applyAttrEntries(pagePack.attr);
    applyEntries(pack.common.text, "text");
    applyEntries(pagePack.text, "text");
    applyEntries(pack.common.html, "html");
    applyEntries(pagePack.html, "html");
    applyEntries(pagePack.placeholder, "placeholder");

    languageButtons.forEach((button) => {
      const isActive = button.dataset.langSwitch === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  menuLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const normalized = href === "./" ? "index.html" : href;
    if (normalized === currentPage || (currentPage === "" && normalized === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }

    link.addEventListener("click", () => {
      if (nav?.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
      }
    });
  });

  if (toggle && nav && panel) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target)) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.langSwitch;
      if (!nextLanguage || nextLanguage === currentLanguage) {
        return;
      }

      currentLanguage = nextLanguage;
      localStorage.setItem(STORAGE_KEY, currentLanguage);
      applyLanguage(currentLanguage);

      if (nav?.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
      }
    });
  });

  applyLanguage(currentLanguage);

  // ===== SERVICE SELECTION (services.html) =====
  function initServiceSelection() {
    const subItems = document.querySelectorAll(".sub-list li[data-service-code]");
    if (!subItems.length) return;

    const selectionBar = document.getElementById("selectionBar");
    if (!selectionBar) return;

    const countBadge = document.getElementById("selectionCount");
    const labelEl = document.getElementById("selectionLabel");
    const chipsEl = document.getElementById("selectionChips");
    const clearBtn = document.getElementById("selectionClear");
    const ctaBtn = document.getElementById("selectionCta");

    const selected = new Map(); // code → service object

    function updateBar() {
      if (selected.size === 0) {
        selectionBar.hidden = true;
        return;
      }
      selectionBar.hidden = false;
      countBadge.textContent = selected.size;

      if (labelEl) {
        labelEl.textContent = currentLanguage === "en"
          ? (selected.size === 1 ? "service selected" : "services selected")
          : "layanan dipilih";
      }

      chipsEl.innerHTML = "";
      selected.forEach((service, code) => {
        const chip = document.createElement("span");
        chip.className = "selection-chip";
        chip.textContent = code;
        chip.title = currentLanguage === "en" ? service.nameEn : service.nameId;
        chipsEl.appendChild(chip);
      });
    }

    subItems.forEach((item) => {
      item.classList.add("service-selectable");
      item.setAttribute("role", "checkbox");
      item.setAttribute("aria-checked", "false");
      item.setAttribute("tabindex", "0");

      item.addEventListener("click", () => {
        const code = item.dataset.serviceCode;
        const service = typeof KLARIVA_CONFIG !== "undefined" && KLARIVA_CONFIG.services[code];
        if (!service) return;

        if (selected.has(code)) {
          selected.delete(code);
          item.classList.remove("is-selected");
          item.setAttribute("aria-checked", "false");
        } else {
          selected.set(code, service);
          item.classList.add("is-selected");
          item.setAttribute("aria-checked", "true");
        }
        updateBar();
      });

      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          item.click();
        }
      });
    });

    clearBtn?.addEventListener("click", () => {
      selected.clear();
      subItems.forEach((item) => {
        item.classList.remove("is-selected");
        item.setAttribute("aria-checked", "false");
      });
      updateBar();
    });

    ctaBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      if (selected.size === 0) return;
      const services = Array.from(selected.entries()).map(([code, service]) => ({ code, ...service }));
      try {
        sessionStorage.setItem("klariva-services", JSON.stringify(services));
        sessionStorage.removeItem("klariva-service");
      } catch (_) {}
      window.location.href = "contact.html";
    });
  }

  // ===== CONTACT CHANNELS (contact.html) =====
  function initContactChannels() {
    if (!document.querySelector(".channel-shell")) return;
    if (typeof KLARIVA_CONFIG === "undefined") return;

    const cfg = KLARIVA_CONFIG.contact;
    let selectedServices = null;

    try {
      const saved = sessionStorage.getItem("klariva-services");
      if (saved) selectedServices = JSON.parse(saved);
      else {
        const legacy = sessionStorage.getItem("klariva-service");
        if (legacy) selectedServices = [JSON.parse(legacy)];
      }
    } catch (_) {}

    const banner = document.getElementById("selectedServiceBanner");
    const badgeList = document.getElementById("serviceBadgeList");

    function renderBanner(services) {
      if (!badgeList) return;
      badgeList.innerHTML = "";
      services.forEach((service, index) => {
        const item = document.createElement("div");
        item.className = "ssb-service-item";
        const name = currentLanguage === "en" ? service.nameEn : service.nameId;
        item.innerHTML = `
          <span class="ssb-code">${service.code}</span>
          <span class="ssb-sep">—</span>
          <span class="ssb-name">${name}</span>
          <button type="button" class="ssb-item-remove" data-index="${index}" aria-label="Hapus ${service.code}">
            <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
              <path d="M10 2L2 10M2 2l8 8"/>
            </svg>
          </button>`;
        badgeList.appendChild(item);
      });

      badgeList.querySelectorAll(".ssb-item-remove").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.dataset.index, 10);
          selectedServices.splice(idx, 1);
          if (selectedServices.length === 0) {
            try {
              sessionStorage.removeItem("klariva-services");
              sessionStorage.removeItem("klariva-service");
            } catch (_) {}
            selectedServices = null;
            if (banner) banner.hidden = true;
            hidePanel();
          } else {
            try { sessionStorage.setItem("klariva-services", JSON.stringify(selectedServices)); } catch (_) {}
            renderBanner(selectedServices);
            const panel = document.getElementById("messagePanel");
            const activeCard = document.querySelector(".channel-card.is-active");
            if (panel && !panel.hidden && activeCard) showPanel(activeCard.dataset.channel);
          }
        });
      });
    }

    if (banner && selectedServices && selectedServices.length > 0) {
      renderBanner(selectedServices);
      banner.hidden = false;
      setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }

    document.getElementById("serviceBadgeClear")?.addEventListener("click", () => {
      try {
        sessionStorage.removeItem("klariva-services");
        sessionStorage.removeItem("klariva-service");
      } catch (_) {}
      selectedServices = null;
      if (banner) banner.hidden = true;
      hidePanel();
    });

    function hidePanel() {
      const panel = document.getElementById("messagePanel");
      if (panel) panel.hidden = true;
      document.querySelectorAll(".channel-card").forEach((c) => c.classList.remove("is-active"));
    }

    function generateMsg(services, lang) {
      const isId = lang !== "en";
      if (!services || services.length === 0) {
        return isId
          ? "Halo Klariva, saya ingin berkonsultasi mengenai layanan yang Anda tawarkan."
          : "Hello Klariva, I would like to consult regarding your services.";
      }
      if (services.length === 1) {
        const s = services[0];
        const lineLabel = isId ? `Layanan ${s.line}` : `${s.lineEn || s.line} Service`;
        const name = isId ? s.nameId : s.nameEn;
        return isId
          ? `Halo Klariva, saya ingin berkonsultasi mengenai ${lineLabel} — ${s.code}: ${name}.`
          : `Hello Klariva, I would like to consult regarding ${lineLabel} — ${s.code}: ${name}.`;
      }
      const list = services.map((s) => `${s.code}: ${isId ? s.nameId : s.nameEn}`).join(", ");
      return isId
        ? `Halo Klariva, saya ingin berkonsultasi mengenai beberapa layanan: ${list}.`
        : `Hello Klariva, I would like to consult regarding multiple services: ${list}.`;
    }

    function showPanel(channel) {
      const panel = document.getElementById("messagePanel");
      if (!panel) return;

      const isId = currentLanguage !== "en";
      const msg = generateMsg(selectedServices, currentLanguage);

      document.getElementById("messageText").textContent = msg;

      const channelNames = {
        whatsapp: "WhatsApp", email: "Email",
        instagram: "Instagram", threads: "Threads", tiktok: "TikTok", twitter: "X (Twitter)"
      };
      document.getElementById("channelNameDisplay").textContent = channelNames[channel] || channel;

      const copyBtn = document.getElementById("copyMessageBtn");
      if (copyBtn) copyBtn.hidden = channel === "whatsapp";

      let href = "#";
      let btnText = "";

      if (channel === "whatsapp") {
        href = `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(msg)}`;
        btnText = isId ? "Buka WhatsApp" : "Open WhatsApp";
      } else if (channel === "email") {
        const serviceLabel = selectedServices && selectedServices.length > 0
          ? (selectedServices.length === 1 ? selectedServices[0].code : `${selectedServices.length} ${isId ? "Layanan" : "Services"}`)
          : "";
        const subj = isId
          ? `Konsultasi Klariva${serviceLabel ? " — " + serviceLabel : ""}`
          : `Klariva Consultation${serviceLabel ? " — " + serviceLabel : ""}`;
        const isMobile = navigator.maxTouchPoints > 0;
        if (isMobile) {
          href = `mailto:${cfg.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(msg)}`;
          btnText = isId ? "Buka Aplikasi Email" : "Open Email App";
        } else {
          href = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(cfg.email)}&su=${encodeURIComponent(subj)}&body=${encodeURIComponent(msg)}`;
          btnText = isId ? "Buka Gmail" : "Open Gmail";
        }
      } else if (channel === "instagram") {
        href = `https://www.instagram.com/${cfg.instagram}`;
        btnText = isId ? "Buka Profil Instagram" : "Open Instagram Profile";
      } else if (channel === "threads") {
        href = `https://www.threads.net/@${cfg.threads}`;
        btnText = isId ? "Buka Threads" : "Open Threads";
      } else if (channel === "tiktok") {
        href = `https://www.tiktok.com/@${cfg.tiktok}`;
        btnText = isId ? "Buka Profil TikTok" : "Open TikTok Profile";
      } else if (channel === "twitter") {
        href = `https://x.com/${cfg.twitter}`;
        btnText = isId ? "Buka Profil X" : "Open X Profile";
      }

      const actionBtn = document.getElementById("channelActionBtn");
      const actionText = document.getElementById("channelActionText");
      if (actionBtn) actionBtn.href = href;
      if (actionText) actionText.textContent = btnText;

      if (copyBtn) {
        copyBtn.onclick = () => {
          const span = copyBtn.querySelector("span");
          const orig = span.textContent;
          const success = () => {
            span.textContent = isId ? "Tersalin!" : "Copied!";
            setTimeout(() => { span.textContent = orig; }, 2000);
          };
          if (navigator.clipboard) {
            navigator.clipboard.writeText(msg).then(success).catch(() => { fallbackCopy(msg); success(); });
          } else {
            fallbackCopy(msg); success();
          }
        };
      }

      panel.hidden = false;
      setTimeout(() => panel.scrollIntoView({ behavior: "smooth", block: "nearest" }), 50);
    }

    function fallbackCopy(text) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;opacity:0;pointer-events:none";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (_) {}
      document.body.removeChild(ta);
    }

    document.querySelectorAll(".channel-card").forEach((card) => {
      card.addEventListener("click", () => {
        document.querySelectorAll(".channel-card").forEach((c) => c.classList.remove("is-active"));
        card.classList.add("is-active");
        showPanel(card.dataset.channel);
      });
    });
  }

  // ===== FOOTER SOCIAL LINKS =====
  function initFooterLinks() {
    if (typeof KLARIVA_CONFIG === "undefined") return;
    const cfg = KLARIVA_CONFIG.contact;
    const hrefMap = {
      whatsapp: `https://wa.me/${cfg.whatsapp}`,
      instagram: `https://www.instagram.com/${cfg.instagram}`,
      threads: `https://www.threads.net/@${cfg.threads}`,
      tiktok: `https://www.tiktok.com/@${cfg.tiktok}`,
      twitter: `https://x.com/${cfg.twitter}`,
      email: `mailto:${cfg.email}`
    };
    const wa = cfg.whatsapp.slice(2);
    const handleMap = {
      whatsapp: `+62 ${wa.slice(0,3)}-${wa.slice(3,7)}-${wa.slice(7)}`,
      instagram: `@${cfg.instagram}`,
      threads: `@${cfg.threads}`,
      tiktok: `@${cfg.tiktok}`,
      twitter: `@${cfg.twitter}`,
      email: cfg.email
    };
    document.querySelectorAll("[data-contact-link]").forEach((el) => {
      const ch = el.dataset.contactLink;
      if (hrefMap[ch]) el.href = hrefMap[ch];
    });
    document.querySelectorAll("[data-contact-handle]").forEach((el) => {
      const ch = el.dataset.contactHandle;
      if (handleMap[ch]) el.textContent = handleMap[ch];
    });

    // Deep link Instagram on mobile — bypass browser redirect
    if (navigator.maxTouchPoints > 0) {
      document.querySelectorAll("[data-contact-link='instagram']").forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          const appUrl = `instagram://user?username=${cfg.instagram}`;
          const webUrl = `https://www.instagram.com/${cfg.instagram}`;
          let appOpened = false;
          document.addEventListener("visibilitychange", function onHide() {
            if (document.hidden) {
              appOpened = true;
              document.removeEventListener("visibilitychange", onHide);
            }
          });
          setTimeout(() => { if (!appOpened) window.location.href = webUrl; }, 1500);
          window.location.href = appUrl;
        });
      });
    }
  }

  initServiceSelection();
  initContactChannels();
  initFooterLinks();
});
