# 🌍 Mini Capsule — Mettre en ligne son projet React

Pour pouvoir tester votre application avec des outils en ligne (Lighthouse, Wave, PageSpeed, Pa11y, Webhint, SonarCloud, GTMetrix…),  
➡️ votre projet doit avoir **une URL accessible publiquement**.

# 🚀 Objectif pédagogique

Vous devez choisir **UNE solution** et mettre votre projet en ligne afin d’obtenir :

- une **URL publique**  
- visible en classe  
- utilisable par les outils de test qualité  
  (Lighthouse, PageSpeed, SonarCloud, etc.)

---

# 📝 Livrable attendu

- 1 URL finale accessible  
- qui affiche votre projet React  
- que vous soumettrez pour les tests en ligne  



Il existe plusieurs solutions simples, rapides ou professionnelles pour mettre en ligne une application React.  
Voici les différentes options qui s’offrent à vous :

---

## 🟦 1. Vercel (le plus simple, recommandé)

### ✔ Avantages
- déploiement automatique depuis GitHub  
- URL publique instantanée  
- compatible React + Vite + Next.js  
- mises à jour automatiques à chaque push  
- preview par branches (parfait pour travailler en équipe)

### ✖ Inconvénients
- pas de backend Node hébergé directement  
- limites de quota (hors plan payant)

---

## 🟩 2. Netlify (alternative simple)

### ✔ Avantages
- très facile à déployer  
- drag & drop ou connexion GitHub  
- preview automatique  
- formulaires intégrés possibles

### ✖ Inconvénients
- pareils : pas de backend Node sans fonctions serverless

---

## 🟧 3. GitHub Pages (simple mais moins flexible)

### ✔ Avantages
- gratuit  
- idéal pour projets statiques et petits POC  
- versionning + CI/CD intégré à GitHub

### ✖ Inconvénients
- nécessite une configuration spécifique pour React Router  
- pas compatible si vous avez besoin d’un backend

---

## 🟨 4. CodeSandbox / StackBlitz (instantané pour démo)

### ✔ Avantages
- aucun déploiement  
- votre code = votre URL  
- super simple pour partager un prototype

### ✖ Inconvénients
- performances plus faibles  
- pas idéal pour un projet complet  
- dépendance à la plateforme

---

## 🟪 5. OVH / o2Switch (hébergement professionnel)

### ✔ Avantages
- plus complet  
- vous contrôlez tout (domaine, back, base de données)  
- compatible avec CI/CD (GitHub Actions)

### ✖ Inconvénients
- nécessite de configurer un **build React** et un **serveur web** (Nginx/Apache)  
- plus technique → pas idéal pour débutants

---

## 🟥 6. Render / Railway (déploiement front + back)

### ✔ Avantages
- parfait si votre projet nécessite un backend Node, Express, Prisma, PostgreSQL…  
- build auto  
- URL publique incluse

### ✖ Inconvénients
- lenteur au “cold start”  
- plan gratuit limité

---

## 🟫 7. Surge.sh (super rapide pour front statique)

### ✔ Avantages
- une commande et c’est en ligne  
- URL publique instantanée  
- parfait pour tester

### ✖ Inconvénients
- pas idéal pour de gros projets  
- pas de backend

---

# 🎯 Recommandation pour vos projets CODA

Pour vos projets front React :

1. **Vercel** → le plus simple et professionnel  
2. **Netlify** → alternative friendly  
3. **GitHub Pages** → pour les projets très simples  
4. **CodeSandbox** → excellent pour les tests rapides

Si vous avez un backend :  
➡️ Préférez **Railway**, **Render**, ou un hébergement OVH / o2Switch.

---


