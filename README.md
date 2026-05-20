# Klariva | Fact & Investigation

Website statis premium untuk layanan confidential investigation dan fact verification.

## Folder Structure

```text
C:\Projects\Klariva-v2-client
|
+-- index.html
+-- services.html
+-- about.html
+-- process.html
+-- contact.html
+-- robots.txt
+-- sitemap.xml
+-- vercel.json
+-- README.md
|
+-- assets
    +-- css
    |   +-- style.css
    +-- js
    |   +-- main.js
    +-- icons
        +-- brand-mark.svg
        +-- favicon.svg
```

## Local Development

Jalankan website secara lokal dari folder project:

```bash
cd C:\Projects\Klariva-v2-client
python -m http.server 3000
```

Lalu buka:

- `http://localhost:3000/`
- `http://localhost:3000/services.html`
- `http://localhost:3000/about.html`
- `http://localhost:3000/process.html`
- `http://localhost:3000/contact.html`

## Pages

- Home: `index.html`
- Services: `services.html`
- About: `about.html`
- Process: `process.html`
- Contact: `contact.html`

## Deployment to Vercel

1. Push project ke GitHub.
2. Import repository ke Vercel.
3. Pilih framework preset `Other` atau `Static Site`.
4. Kosongkan `Build Command` karena project ini tidak memakai build tool.
5. Kosongkan `Output Directory` karena file statis dilayani langsung dari root project.
6. Deploy.

Project ini menggunakan HTML, CSS, dan JavaScript statis, jadi tidak memerlukan build step tambahan untuk deployment awal.

## Custom Domain via Hostinger

1. Beli domain di Hostinger.
2. Tambahkan domain tersebut ke project Vercel.
3. Ambil DNS record yang diberikan oleh Vercel.
4. Masukkan DNS record itu ke DNS Zone Hostinger.
5. Tunggu propagasi DNS selesai.
6. Setelah domain final aktif, isi kembali `sitemap.xml` dengan URL absolut domain tersebut dan tambahkan kembali baris `Sitemap:` di `robots.txt`.

## Notes

- Halaman `about.html`, `process.html`, dan `contact.html` masih placeholder / on going.
- Form di `contact.html` belum terhubung ke backend.
- Canonical URL saat ini memakai path relatif agar aman untuk preview deploy Vercel maupun domain final.
- `sitemap.xml` sengaja dikosongkan sementara sampai domain final benar-benar dipastikan.
