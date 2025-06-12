# 🎧 PlaylistRadar

**PlaylistRadar** is a lightweight React + Vite application that helps you find and analyze Spotify playlists for music promotion.  
It’s designed to be fast, modern, and easy to deploy via GitHub Pages — perfect for artists, indie labels, and developers.

---

## 🚀 Features

- Built with [Vite](https://vitejs.dev/) + React
- Fast development server and build process
- Responsive, minimal design
- Deploys easily to GitHub Pages
- Ideal starting point for integrating Spotify Web API

---

## 🛠️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/LaionFromNight/PlaylistRadar.git
cd PlaylistRadar
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Then open:
👉 http://localhost:5173


🌐 Deploy to GitHub Pages
### 1. Verify your package.json
Make sure you have this:
```json
"homepage": "https://LaionFromNight.github.io/PlaylistRadar",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

### 2. Build the project
```bash
npm run build
```
### 3. Deploy using gh-pages
```bash
npm run deploy
```

After deployment, enable GitHub Pages in your repo settings under
Settings → Pages → Source: gh-pages branch.

Your site will be live at:
👉 https://LaionFromNight.github.io/PlaylistRadar/


📁 Folder Structure
```csharp
📁 PlaylistRadar
├── public/              # Static files (favicon, etc.)
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Component styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

To clean remote branches
```bash
git fetch --all --prune
```

---
## 📜 License
This project is licensed under the **Creative Commons BY-NC-ND 4.0 License**  
with additional restrictions. See the [LICENSE](./LICENSE) file for details.
