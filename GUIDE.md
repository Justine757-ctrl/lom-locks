# Guide d'Utilisation et de Déploiement — LoméLocks 🌿

Bienvenue sur le guide officiel de gestion de votre site web **LoméLocks**, service de création et d'entretien de locks à domicile à Lomé (Togo), branche de **Mobile Braiding by Justine**.

Ce site a été conçu pour être **100 % statique, ultra-rapide sur mobile, gratuit à héberger** et surtout **facile à mettre à jour sans toucher au code des pages**.

---

## Sommaire

1. [Lancer le site sur votre ordinateur](#1-lancer-le-site-sur-votre-ordinateur)
2. [Héberger et déployer le site 100 % gratuitement](#2-héberger-et-déployer-le-site-100--gratuitement)
3. [Connecter votre nom de domaine (`lomelocks.com` ou `locksalome.com`)](#3-connecter-votre-nom-de-domaine)
4. [Modifier les numéros de paiement (TMoney, Flooz) et infos de contact](#4-modifier-les-moyens-de-paiement-et-contacts)
5. [Modifier un prix ou ajouter une prestation](#5-modifier-un-prix-ou-une-prestation)
6. [Ajouter vos photos et vidéos dans la galerie](#6-ajouter-vos-photos-et-vidéos-dans-la-galerie)
7. [Publier un nouvel article sur le blog](#7-publier-un-nouvel-article-sur-le-blog)
8. [Ajouter ou modifier un avis client](#8-ajouter-ou-modifier-un-avis-client)

---

## 1. Lancer le site sur votre ordinateur

Si vous souhaitez prévisualiser vos modifications sur votre machine avant de les publier :

1. Ouvrez un terminal (PowerShell ou Invite de commandes) dans le dossier du projet :
   ```bash
   cd "c:\Users\Mademoiselle FEDA\Documents\locks lomé"
   ```
2. Installez les dépendances (à faire une seule fois) :
   ```bash
   npm install
   ```
3. Lancez le serveur de développement local :
   ```bash
   npm run dev
   ```
4. Ouvrez votre navigateur sur l'adresse : **`http://localhost:4321`**

---

## 2. Héberger et déployer le site 100 % gratuitement

Ce site ne nécessite aucun serveur payant ni base de données. Vous pouvez le déployer sans débourser 1 seul centime (budget d'hébergement : **0 FCFA**).

### Option A : Déploiement automatique via Netlify (Recommandé)

1. Créez un compte gratuit sur [netlify.com](https://www.netlify.com).
2. Liez votre compte GitHub / GitLab / Bitbucket.
3. Cliquez sur **« Add new site »** > **« Import an existing project »**.
4. Sélectionnez votre dépôt Git `locks-lome`.
5. Netlify détecte automatiquement Astro :
   - **Build command :** `npm run build`
   - **Publish directory :** `dist`
6. Cliquez sur **« Deploy LoméLocks »**.
7. En 40 secondes, votre site est en ligne avec une adresse gratuite du type :  
   `https://lomelocks.netlify.app`

### Option B : Déploiement par glisser-déposer sans Git (Netlify Drop)

Si vous ne souhaitez pas utiliser Git :
1. Dans votre terminal, tapez :
   ```bash
   npm run build
   ```
   Cela génère le dossier `dist/` dans votre projet.
2. Allez sur [app.netlify.com/drop](https://app.netlify.com/drop).
3. Glissez-déposez le dossier `dist` directement sur la page. Votre site est immédiatement en ligne !

### Option C : Cloudflare Pages (Alternative gratuite très rapide)

1. Créez un compte gratuit sur [cloudflare.com](https://www.cloudflare.com).
2. Rendez-vous dans **Workers & Pages** > **Create application** > **Pages**.
3. Liez votre dépôt Git et configurez :
   - Framework preset : `Astro`
   - Build output directory : `dist`
4. Cliquez sur **Save and Deploy**.

---

## 3. Connecter votre nom de domaine

Quand vous aurez acheté votre nom de domaine (par exemple `lomelocks.com` ou `locksalome.com` sur un bureau d'enregistrement comme Namecheap, Porkbun, Hostinger ou OVH) :

### Si votre site est sur Netlify :
1. Dans votre tableau de bord Netlify, allez dans **Site configuration** > **Domain management**.
2. Cliquez sur **« Add a domain »** et tapez `lomelocks.com`.
3. Netlify vous indiquera les enregistrements DNS à renseigner chez votre vendeur de domaine :
   - Un enregistrement **CNAME** pour `www` pointant vers votre adresse Netlify (ex: `lomelocks.netlify.app`).
   - Un enregistrement **A** pour `@` pointant vers l'adresse IP de Netlify (`75.2.60.5`).
4. Netlify active automatiquement le certificat sécurisé **HTTPS (cadenas vert)** en quelques minutes, sans frais supplémentaires.

---

## 4. Modifier les moyens de paiement et contacts

Toutes les coordonnées, textes de réservation et numéros de paiement sont centralisés dans le fichier :  
📁 `src/data/config.json`

Pour modifier vos numéros **TMoney** ou **Flooz** :
1. Ouvrez `src/data/config.json`.
2. Repérez la section `"paymentMethods"` :
   ```json
   "paymentMethods": [
     {
       "name": "TMoney",
       "instruction": "Numéro TMoney : +228 91 29 59 50 [Nom du compte : Justine]"
     },
     {
       "name": "Flooz (Moov Money)",
       "instruction": "Numéro Flooz : +228 XX XX XX XX [Nom du compte : Justine]"
     },
     {
       "name": "Espèces",
       "instruction": "Acceptées pour le règlement du solde le jour de la prestation."
     }
   ]
   ```
3. Modifiez simplement les textes et enregistrez le fichier. La mise à jour est immédiate partout sur le site (page Contact, règles de réservation et pied de page).

---

## 5. Modifier un prix ou une prestation

Tous les tarifs et descriptifs des prestations sont stockés dans le fichier :  
📁 `src/data/services.json`

### Exemple : Modifier le prix du départ de locks
Ouvrez `src/data/services.json` et trouvez la prestation :
```json
{
  "id": "depart-locks",
  "name": "Départ de locks",
  "startingPrice": 5000,
  "priceDisplay": "5 000 FCFA",
  "duration": "3h - 5h",
  "shortDescription": "Création de vos premières locks soignées et durables..."
}
```
- Pour passer à 6 000 FCFA, modifiez `"startingPrice": 6000` et `"priceDisplay": "6 000 FCFA"`.

### Activer des suppléments dans l'estimateur de tarif :
Pour ajouter un supplément selon la longueur (par exemple +2 000 FCFA pour locks longues) :
```json
"lengthSupplements": {
  "courte": 0,
  "moyenne": 1000,
  "longue": 2000
}
```
L'estimateur interactif calculera automatiquement le nouveau total en direct !

---

## 6. Ajouter vos photos et vidéos dans la galerie

Pour enrichir la galerie avec de nouvelles photos de clientes :

1. **Déposez votre photo** (au format `.jpg`, `.png` ou `.webp`) dans le dossier :  
   📁 `public/media/`  
   *(Exemple : nommez votre photo `retwist-client-1.jpg`)*.

2. **Ajoutez une entrée** dans le fichier `src/data/galerie.json` :
   ```json
   {
     "id": "photo-retwist-1",
     "title": "Retwist et soin hydratant",
     "serviceCategory": "retwist-resserrage",
     "serviceName": "Retwist / Resserrage",
     "mediaType": "image",
     "src": "/media/retwist-client-1.jpg",
     "alt": "Retwist racines nettes LoméLocks à Lomé",
     "featured": true,
     "description": "Reprise de racines propres avec finition brillante au naturel."
   }
   ```
3. Enregistrez : la photo apparaît instantanément dans la galerie et peut être filtrée par catégorie !

---

## 7. Publier un nouvel article sur le blog

Pour publier un nouvel article de conseils pour attirer des clientes depuis Google :

1. Créez un nouveau fichier texte dans le dossier :  
   📁 `src/content/blog/`  
   *(Exemple : `choisir-entre-twists-et-locks.md`)*.

2. Insérez en tout début de fichier l'en-tête suivant :
   ```markdown
   ---
   title: "Faut-il commencer ses locks par des vanilles ou au peigne ?"
   date: "2024-10-15"
   category: "Conseils d'entretien"
   cover: "/media/blog-depart-erreurs.svg"
   excerpt: "Vanilles, tresses ou crochet : découvrez quelle méthode de départ est la plus adaptée à votre type de cheveu à Lomé."
   readingTime: "5 min"
   author: "Justine - LoméLocks"
   ---

   Écrivez votre article ici en français avec des paragraphes normaux.

   ## Titre de section

   Vos conseils détaillés...
   ```
3. Enregistrez : Astro crée automatiquement la page de l'article, met à jour la liste du blog, les catégories, le flux RSS et le sitemap Google !

---

## 8. Ajouter ou modifier un avis client

Ouvrez le fichier :  
📁 `src/data/temoignages.json`

Pour remplacer le témoignage temporaire :
```json
{
  "id": 1,
  "name": "Eunice A.",
  "location": "Lomé (Tokoin)",
  "service": "Locks métissés curly",
  "rating": 5,
  "date": "Octobre 2024",
  "comment": "Prestation soignée à domicile, Justine a été très douce avec mon cuir chevelu. Mes locks sont légères et superbes !",
  "featured": true,
  "avatar": "EA"
}
```

---

## 9. Récapitulatif technique

- **Framework :** Astro 4.16 + Tailwind CSS (vitesse maximale, JavaScript minime ~4 Ko)
- **Hébergement :** 100 % statique, gratuit (Netlify, Cloudflare Pages, GitHub Pages)
- **Formulaire de contact :** Fonctionne sans serveur, génère automatiquement un message structuré sur WhatsApp (+228 91 29 59 50)
- **SEO :** Données structurées `HairSalon` LocalBusiness (Lomé, Togo), sitemap XML et flux RSS inclus.
