# Site NF FACILITIES (React + Vite)

## 1. Lancer en local
```
npm install
cp .env.example .env     # puis collez votre clé Web3Forms
npm run dev
```
Node.js 18 ou plus est nécessaire.

## 2. Activer les formulaires (gratuit)
1. Allez sur https://web3forms.com, saisissez l’e-mail qui doit recevoir les demandes (ex. dtnffacilities@gmail.com).
2. Vous recevez une « Access Key » par e-mail.
3. Collez-la dans `.env` : `VITE_WEB3FORMS_KEY=votre_cle`
4. Chez l’hébergeur, ajoutez la même variable d’environnement `VITE_WEB3FORMS_KEY` (voir ci-dessous).

Sans clé, le site reste utilisable : le client est invité à envoyer sa demande par WhatsApp ou e-mail.

## 3. Mettre en ligne (gratuit)
Envoyez le dossier sur GitHub, puis sur **Cloudflare Pages** (ou Netlify / Vercel) :
- Framework : Vite (ou « None »)
- Commande de build : `npm run build`
- Dossier de sortie : `dist`
- Variable d’environnement : `VITE_WEB3FORMS_KEY`

Chaque modification poussée sur GitHub redéploie le site automatiquement.
Un nom de domaine se branche ensuite depuis le tableau de bord de l’hébergeur.

## 4. Faire des mises à jour
- **Textes, téléphone, e-mails, métiers, avis, FAQ, villes** : `src/data.js`
- **Couleurs et mise en page** : `src/styles.css` (variables en haut du fichier)
- **Pages et formulaires** : `src/main.jsx`, `src/ContactForm.jsx`
- **Images du diaporama** : `src/Slides.jsx` (illustrations actuelles, à remplacer par de vraies photos placées dans `public/`)
- **Mentions légales** : complétez SIRET/RCCM et hébergeur dans `src/data.js`
