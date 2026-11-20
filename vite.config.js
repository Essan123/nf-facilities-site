import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// base "./" : le site fonctionne sous GitHub Pages (adresse avec nom de dépôt), Cloudflare, Netlify ou un domaine perso
export default defineConfig({ base: "./", plugins: [react()] });
