# 🚀 Aveto Consulting Frontend (React + Vite)

This project is a modern React-based frontend for **Aveto Consulting**, built with **Vite** for lightning-fast performance and a clean component-driven architecture. It includes modular pages, reusable UI components, global context management, and responsive design powered by TailwindCSS.

---

## 📂 Project Structure

```
src/
│
├── assets/             # Static images, icons, and SVGs
│   ├── hero.jpg
│   ├── avetologo.png
│   ├── dots.svg
│   └── clientLogos/
│
├── components/         # Reusable UI components
│   ├── BannerSection.jsx
│   ├── caseCard.jsx
│   ├── card3d.jsx
│   ├── hoverCard.jsx
│   └── BackToTop.jsx
│
├── context/            # Global state management
│   └── BannerContext.jsx
│
├── pages/              # Page-level components
│   ├── about/
│   ├── casestudies/
│   ├── landing/
│   ├── partners/
│   └── servicespage/
│
├── App.jsx             # Root component
├── main.jsx            # Entry point
├── App.css
└── index.css
```

---

## ⚙️ Tech Stack

- **Frontend Framework:** React 18 + Vite  
- **Styling:** TailwindCSS  
- **Routing:** React Router  
- **State Management:** React Context API  
- **Icons & Assets:** SVG and PNG-based responsive images  
- **Build Tool:** Vite  

---

## 🧩 Features

- ⚡️ Fast and optimized build setup using Vite  
- 🎨 Modular component design for easy scalability  
- 🧠 Context-driven global data flow  
- 📱 Responsive design for all screen sizes  
- 🔄 Smooth transitions and interactive cards  
- 🧱 Organized folder hierarchy for maintainability  

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Raghottamvkalkeri/CodeForWebsite.git
cd CodeForWebsite
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the development server
```bash
npm run dev
```
Then open your browser and visit:
```
http://localhost:5173
```

---

## 🏗️ Build Commands

### 🔹 Build for Dev / Staging
```bash
npm run build:dev
```
- Base path: `/dev/`
- Output folder: `dist-dev`

### 🔹 Build for Production
```bash
npm run build:prod
```
- Base path: `/website/`
- Output folder: `dist-website`

---

## 🧰 Scripts (package.json)

```json
{
  "scripts": {
    "dev": "vite",
    "build:dev": "vite build --mode dev",
    "build:prod": "vite build --mode prod",
    "preview": "vite preview"
  }
}
```

---

## 🧱 Folder Output Summary

| Mode | Base Path | Output Folder | Command |
|------|------------|----------------|----------|
| Dev | `/dev/` | `dist-dev` | `npm run build:dev` |
| Prod | `/website/` | `dist-website` | `npm run build:prod` |

---

## 🧰 Recommended Setup

- **Node.js:** v18+  
- **NPM:** v9+  
- **IDE:** VS Code (with Prettier + ESLint)  
- **Browser:** Chrome / Edge (latest versions)

---

## 📈 Future Enhancements

- 🌐 Add multilingual support (i18n)  
- 🧩 Integrate animations using Framer Motion  
- 🔐 Add authentication for client dashboards  
- 🧠 Implement API-based dynamic data loading  
- 🚢 CI/CD deployment with GitHub Actions or Netlify  

---

## 👨‍💻 Author

**Aveto Consulting Frontend Team**  
🕸️ [avetoconsulting.com](https://avetoconsulting.com)

---

## 📝 License

This project is licensed under the **MIT License** — feel free to modify and distribute it.
