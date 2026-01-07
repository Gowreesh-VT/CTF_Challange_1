# Cookie Shop - CTF Challenge

A simple Next.js shopping website created for educational CTF purposes.

## 🎯 Challenge Description

This is a dummy shopping website that contains an intentionally insecure implementation. The website sets a JWT token in a browser cookie that can be inspected to find a hidden flag.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🔍 CTF Solution Hint

The flag can be found by:
1. Opening the website in a browser
2. Opening Developer Tools (F12)
3. Navigating to Application → Cookies
4. Finding the `token` cookie
5. Decoding the JWT token (it's just base64-encoded JSON)

## 📁 Project Structure

```
├── pages/
│   ├── _app.tsx          # App component with cookie setting logic
│   └── index.tsx         # Home page with product listings
├── components/
│   └── ProductCard.tsx   # Product card component
├── styles/
│   └── globals.css       # Global styles
├── package.json
└── README.md
```

## ⚠️ Security Notice

**This application is intentionally insecure and is designed for educational purposes only.**

DO NOT use this code in production or for any real-world application. This is a Capture The Flag (CTF) challenge demonstrating:
- Insecure JWT storage
- Client-side secret exposure
- Lack of token validation

## 🎓 Educational Purpose

This project demonstrates why:
- JWTs should not contain sensitive information
- Client-side tokens can be easily inspected
- Proper authentication requires server-side validation
- Cookies can be read using browser DevTools

## 📝 License

This is a demonstration project for educational purposes only.
