# BETTERFLYUU — Static Website

Website ini sengaja dibuat dengan HTML + CSS + JavaScript biasa supaya gampang dikelola dari HP dan langsung bisa deploy ke Vercel.

## Struktur
- index.html
- style.css
- script.js
- assets/

## Cara memasukkan 12 foto produk

Masukkan 12 foto ke folder `assets` dengan nama:

product-01-front.png
product-01-back.png
product-02-front.png
product-02-back.png
product-03-front.png
product-03-back.png
product-04-front.png
product-04-back.png
product-05-front.png
product-05-back.png
product-06-front.png
product-06-back.png

Format PNG/JPG boleh, tetapi jika JPG gunakan nama `.jpg` dan ubah path di `script.js`.

## Cara mengganti harga/link Roblox

Buka `script.js`.

Setiap produk punya:
- name = nama outfit
- category = kategori
- price = harga Robux
- front = foto depan
- back = foto belakang
- buy = link Roblox

Contoh:

buy: "https://www.roblox.com/..."

Tidak ada outfit code yang ditampilkan di website.

## Deploy ke Vercel

1. Upload folder ini ke repository GitHub.
2. Buka Vercel.
3. Import repository GitHub tersebut.
4. Framework: Other / Static.
5. Deploy.

Tidak perlu database, login, atau backend untuk versi ini.
