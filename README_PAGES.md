# Frontend for GitHub Pages
1) Create a GitHub repo named: sree-sastha-site (or any name).
2) Upload these three files: index.html, styles.css, script.js to the root of the repo.
3) In GitHub: Settings → Pages → Branch: main, Folder: /root → Save.
4) Edit script.js and set BACKEND_URL to your Render URL (e.g., https://sree-sastha-backend.onrender.com).
5) In Render backend, set FRONTEND_ORIGIN to your Pages URL (e.g., https://<username>.github.io).
   This enables CORS so the form can call the backend.
