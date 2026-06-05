# 💍 Deepti & Nilesh — Wedding Website

A premium Royal Rajasthani Indian wedding invitation website.

## ✨ Features

- 🌹 Royal Rajasthani theme: maroon, gold, cream palette
- 💍 Hero section with animated couple names (Devanagari + English)
- ⏳ Live countdown timer to wedding day
- 👫 Bride & Groom introduction section
- 🎊 5 event cards: Haldi, Mehendi, Sangeet, Wedding, Reception
- 📸 Photo gallery with lightbox
- 📍 Venue section with Google Maps button
- 💌 RSVP form (frontend-only, no backend needed)
- 📲 WhatsApp share button
- 🎵 Background music play/pause button
- 🌸 Falling petals animation
- 📱 Fully mobile responsive

## 🚀 Deploy to Vercel (Free)

### Option 1: Vercel CLI
```bash
npm install -g vercel
cd wedding-site
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**
5. Done! Your site is live 🎉

## 🛠 Local Development
```bash
npm install
npm run dev
```

## 📝 Customisation Checklist

- [ ] Update wedding date in `src/components/Countdown.jsx` (line 4)
- [ ] Update venue names/addresses in `src/components/Events.jsx` and `Venue.jsx`
- [ ] Add real photos to the gallery (replace placeholder cards in `Gallery.jsx`)
- [ ] Add a background music file (`public/music.mp3`) and update the URL in `App.jsx`
- [ ] Update family names in `CoupleSection.jsx`
- [ ] Connect RSVP to a Google Form by posting to its URL in `RSVP.jsx`

## 🎵 Adding Background Music
1. Add your `.mp3` file to the `public/` folder
2. In `App.jsx`, change `MUSIC_URL` to `/your-music-file.mp3`

## 📧 RSVP to Google Form
1. Create a Google Form with matching fields
2. Get the form's POST URL from "Pre-filled link"  
3. Submit the form data via `fetch()` in `RSVP.jsx`'s `handleSubmit`
