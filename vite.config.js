import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function adminSyncPlugin() {
  return {
    name: 'admin-sync-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Enable CORS so the admin dashboard on :5174 can communicate with :5173
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);

              // 1. Sync Gallery Photos
              if (req.url === '/api/sync/gallery') {
                const filePath = path.resolve(__dirname, 'src/data/galleryData.js');
                const fileContent = `// Hawcoder Gallery Photos Data\n// Automatically synced from Hawcoder Admin\n\nexport const initialPhotos = ${JSON.stringify(data, null, 2)};\n\nexport const getActivePhotos = () => {\n  return initialPhotos.filter(p => p.active);\n};\n`;
                fs.writeFileSync(filePath, fileContent, 'utf-8');
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true }));
                return;
              }

              // 2. Sync Announcements
              if (req.url === '/api/sync/announcements') {
                const filePath = path.resolve(__dirname, 'src/data/announcementsData.js');
                const fileContent = `// Hawcoder Announcements Data\n// Automatically synced from Hawcoder Admin\n\nexport const initialAnnouncements = ${JSON.stringify(data, null, 2)};\n\nexport const getActiveAnnouncements = () => {\n  return initialAnnouncements.filter(a => a.active);\n};\n`;
                fs.writeFileSync(filePath, fileContent, 'utf-8');
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true }));
                return;
              }

              // 3. Sync Links & Socials
              if (req.url === '/api/sync/links') {
                const filePath = path.resolve(__dirname, 'src/data/config.js');
                const fileContent = `// Hawcoder Site Configuration\n// Automatically synced from Hawcoder Admin\n\nexport const appConfig = {\n  googleFormApplicationUrl: "${data.googleFormApplicationUrl || 'https://docs.google.com/forms'}",\n  googleFormInfoSessionUrl: "${data.googleFormInfoSessionUrl || 'https://docs.google.com/forms'}",\n  addisCoderUrl: "https://www.addiscoder.com",\n  socialLinks: {\n    telegram: "${data.socialTelegram || ''}",\n    instagram: "${data.socialInstagram || ''}",\n    youtube: "${data.socialYoutube || ''}",\n    linkedin: "${data.socialLinkedin || ''}",\n    github: "${data.socialGithub || ''}"\n  }\n};\n\nexport const getSocialLinks = () => {\n  return appConfig.socialLinks;\n};\n`;
                fs.writeFileSync(filePath, fileContent, 'utf-8');
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true }));
                return;
              }
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
              return;
            }
            next();
          });
          return;
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), adminSyncPlugin()],
})
