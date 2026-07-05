# 🏠 Veb aplikacija za iznajmljivanje nekretnina

Ovaj projekat predstavlja seminarski rad izrade moderne Single Page Aplikacije (SPA) za pretragu i iznajmljivanje nekretnina. Aplikacija je razvijena korišćenjem **React** biblioteke u kombinaciji sa **TypeScript**-om, uz implementaciju klijentskog rutiranja i upravljanja stanjem.

## 🛠 Tehnologije

* **React (v18)** - Biblioteka za izgradnju korisničkog interfejsa.
* **TypeScript** - Statička tipizacija za sigurniji i robusniji kod.
* **React Router DOM** - Implementacija navigacije i zaštićenih ruta.
* **CSS3** - Responzivni dizajn korišćenjem Flexbox-a i Grid-a.
* **LocalStorage** - Simulacija baze podataka i čuvanje sesije korisnika (Autentifikacija).

## ✨ Ključne funkcionalnosti

1. **Sistem autentifikacije:**
   * Registracija novih korisnika i čuvanje kredencijala.
   * Prijava (Login) sa proverom podataka i uspostavljanje sesije korisnika.
   * Zaštićena ruta za korisnički profil (ako korisnik nije prijavljen, automatski se preusmerava na Login).

2. **Pretraga i filtriranje nekretnina:**
   * Globalna pretraga po gradovima sa početne stranice.
   * Dinamičko filtriranje oglasa po gradu i tipu nekretnine (Stan/Kuća).
   * Kalkulator cene zakupa (množenje osnovne cene sa brojem meseci).
   * Paginacija rezultata pretrage (3 oglasa po stranici).

3. **Detalji i interakcija:**
   * Mogućnost dodavanja nekretnina u "Sačuvane oglase" (Like funkcionalnost).
   * Stranica sa detaljima pojedinačne nekretnine koja se dobija dinamičkim rutiranjem (`/nekretnina/:id`).
   * Dinamička galerija slika za svaku nekretninu.

4. **Korisnički profil:**
   * Prikaz i mogućnost izmene ličnih podataka korisnika.
   * Dinamički prikaz isključivo onih nekretnina koje je korisnik sačuvao.
   * Opcija za bezbednu odjavu iz sistema (Logout).

## 🚀 Pokretanje projekta

Za pokretanje ovog projekta na lokalnoj mašini, potrebno je da imate instaliran [Node.js](https://nodejs.org/).

1. Klonirajte repozitorijum:
   ```bash
   git clone https://github.com/elab-development/klijentske-veb-tehnologije-i-skriptni-jezici-2025-26-veb-aplikacija-za-iznajm-nekretnina.git

2. Instalirajte zavisnosti:
Bash
npm install

3. Pokrenite aplikaciju:
Bash
npm start

Aplikacija će se pokrenuti na http://localhost:3000.