# ⚽ The Gooners Portal — Phase 2

> **The premier Arsenal FC fan hub, rebuilt as a modern React application.**
> An unofficial, fan-made website dedicated to Gooners worldwide.

---

## 🖼️ Preview

| Home | Squad | Match Centre | Contact |
|------|-------|--------------|---------|
| Hero banner · News · Features | Full roster with position filter | Results & Fixtures | Contact form · Community info |

---

## 🛠️ Tech Stack

| Layer      | Technology                           |
|------------|--------------------------------------|
| Framework  | [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) |
| Styling    | [Tailwind CSS 3](https://tailwindcss.com/) |
| Routing    | [React Router v6](https://reactrouter.com/) |
| Language   | JavaScript (ES2022 Modules)          |
| Build Tool | Vite (Lightning-fast HMR)            |

---

## 📁 Project Structure

```
gooners-portal/
├── public/
│   ├── favicon.svg
│   └── images/                  ← All player & article images
│
├── src/
│   ├── assets/
│   │   └── data/
│   │       ├── players.js       ← Full squad roster data
│   │       ├── news.js          ← Articles & upcoming features
│   │       └── matches.js       ← Results & fixture lists
│   │
│   ├── components/
│   │   ├── Navbar.jsx           ← Responsive nav with hamburger menu
│   │   ├── Footer.jsx           ← Three-column branded footer
│   │   ├── SectionHeader.jsx    ← Reusable heading + divider
│   │   ├── PlayerCard.jsx       ← Player headshot card
│   │   └── NewsCard.jsx         ← Article preview card
│   │
│   ├── pages/
│   │   ├── Home.jsx             ← Hero · News · Features · CTA
│   │   ├── Squad.jsx            ← Filterable full roster
│   │   ├── Matches.jsx          ← Results / Fixtures tabs
│   │   ├── Contact.jsx          ← Form · Community Hub · CTA
│   │   └── NotFound.jsx         ← 404 fallback
│   │
│   ├── App.jsx                  ← Route definitions
│   ├── main.jsx                 ← React root + BrowserRouter
│   └── index.css                ← Tailwind directives + global styles
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### Installation & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/HassanOs/gooners-portal.git
cd gooners-portal

# 2. Install all dependencies
npm install

# 3. Start the local development server
npm run dev
```

Open **http://localhost:5173** in your browser. The page hot-reloads on every save.

### Build for Production

```bash
npm run build        # Outputs to /dist
npm run preview      # Preview the production build locally
```

---

## 🌐 Deployment

| Platform   | Steps |
|------------|-------|
| **Vercel** | Connect GitHub repo → Framework: Vite → Deploy |
| **Netlify**| Drag-and-drop `/dist` folder **or** connect repo + set build command `npm run build` |
| **GitHub Pages** | Use `gh-pages` package: `npm run build && npx gh-pages -d dist` |

> **Live Demo:** _[https://gooners-portal.vercel.app](https://gooners-portal.vercel.app)_
---

## 📄 Pages

| Route       | Page          | Description                                       |
|-------------|---------------|---------------------------------------------------|
| `/`         | Home          | Hero, club stats, latest news, upcoming features  |
| `/squad`    | Squad         | Full roster with position filter tabs             |
| `/matches`  | Match Centre  | Results & upcoming fixture list with season stats |
| `/contact`  | Contact       | Validated contact form + community information    |
| `*`         | 404 Not Found | Branded fallback for unknown routes               |

---

## 🎨 Design Tokens

| Token              | Value       | Usage                         |
|--------------------|-------------|-------------------------------|
| `gunner-red`       | `#e30713`   | Primary brand colour          |
| `gunner-red-dark`  | `#b50510`   | Hover state                   |
| `gunner-gold`      | `#F5D76E`   | Accent / highlights           |
| `gunner-dark`      | `#0f0f0f`   | Dark section backgrounds      |
| `gunner-gray-light`| `#f3f4f6`   | Alternating light sections    |

---

## 👨‍💻 Authors

- **Hassan Osman** — [GitHub](https://github.com/HassanOs)
- **Ayman Saddik** — [GitHub](https://github.com/ayman671-lang)

*CSCI390 Web Programming — Phase 2 Project · Spring 2025/2026*

---

## ⚖️ Disclaimer

This is an **unofficial fan website** and is not affiliated with, endorsed by, or
connected to Arsenal Football Club plc in any way.
All player images are property of Arsenal FC / Premier League.