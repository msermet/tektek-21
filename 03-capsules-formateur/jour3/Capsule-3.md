# 🎓 Jour 3 — Capsule Formateur React  
### 🧭 Routing | Navbar | Pages Home & Contact | Formulaire contrôlé

---

## 🎯 Objectifs pédagogiques

À la fin de cette séance, les apprenants sauront :

- Installer et configurer **React Router v6**
- Structurer un projet avec un **router dédié** (`src/router/index.jsx`)
- Créer et utiliser une **Navbar** pour naviguer entre les pages
- Construire deux pages didactiques : **Home** et **Contact**
- Gérer un **formulaire contrôlé** via `useState`
- Comprendre le fonctionnement d’un **Layout global** dans `App.jsx`

---

# 🧱 1 — Préparation du projet

Vérifiez que vous avez un projet Vite :

```bash
npm create vite@latest
npm install
```

# ✔ Installer React Router

```bash
npm install react-router-dom
```
## 📁 Structure recommandée

src/
 ├─ components/
 │     └─ Navbar.jsx
 ├─ page/
 │     ├─ Home.jsx
 │     ├─ Contact.jsx
 │     └─ AteliersPratique.jsx
 ├─ router/
 │     └─ index.jsx
 ├─ App.jsx
 └─ main.jsx

### 🌐 2 — Configuration du Router dans main.jsx
main.jsx doit encapsuler l’application dans BrowserRouter.

```jsx 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```
📌 Message formateur :

BrowserRouter doit entourer toute l’application pour que toutes les pages puissent accéder au routing.

### 🧩 3 — Création de la Navbar

Créer src/components/Navbar.jsx :

```jsx 
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/ateliers-pratique">Ateliers</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```
📌 Message formateur :

On utilise <Link> au lieu de <a> car React Router évite de recharger la page : navigation instantanée.

### 🧱 4 — Création des pages didactiques
# 🟦 Home.jsx (exemple minimal)

```jsx 
export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Page Home</h1>
      <p>Ceci est la page d'accueil de votre application React Router.</p>
    </div>
  );
}

```
# 🟧 AteliersPratique.jsx (placeholder)
```jsx 
export default function AteliersPratique() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Ateliers Pratiques</h1>
      <p>Liste d'ateliers ou contenu à venir.</p>
    </div>
  );
}

```
# 🟩 Contact.jsx — Formulaire contrôlé
```jsx 
import { useState } from "react";

export default function Contact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom : ${nom}\nEmail : ${email}\nMessage : ${message}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Page Contact</h1>

      <form 
        onSubmit={handleSubmit} 
        style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}
      >
        <label>
          Nom :
          <input value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>

        <label>
          Email :
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Message :
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

```
📌 Message formateur :

C’est un input contrôlé : la valeur vient du state, pas de l’HTML.

### 🗺 5 — Router dédié : src/router/index.jsx

```jsx
import { Routes, Route } from "react-router-dom";

import Home from "../page/Home";
import AteliersPratique from "../page/AteliersPratique";
import Contact from "../page/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/ateliers-pratique" element={<AteliersPratique />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
```

📌 Message formateur :
Le router est centralisé, propre, lisible, idéal pour une application professionnelle.

### 🏗 6 — App.jsx devient le Layout global

```jsx
import Navbar from "./components/Navbar";
import AppRouter from "./router";

export default function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}
```
📌 Message formateur :

Tous les écrans partagent la même Navbar.
Le router décide quelle page afficher en dessous.


### 📝 EXERCICES
# 🎯 Exercice 1 — Router + Pages

⏱ 15 min

Créer une nouvelle page :
Participants.jsx
Ajouter la route /participants
Ajouter un lien dans la Navbar

🎁 Bonus : afficher une liste de noms avec .map().


# 🎯 Exercice 2 — Formulaire

⏱ 20 min

Créer un formulaire avec :
Nom
Email
Message
Bouton Envoyer

Afficher les données en console.
🎁 Bonus : validation des champs.

### 🎯 Exercice final — Router + Formulaire + Redirection

⏱ 20 min
Créer une page Confirmation.jsx
Après envoi du formulaire Contact → rediriger vers /confirmation
Afficher :
Votre message a bien été envoyé

### 🧠 Résumé pédagogique

React Router permet une navigation sans rechargement
Un router dédié = un code propre, organisé et scalable
Une Navbar globale se place dans App.jsx
Un formulaire React est toujours contrôlé via useState
Les pages sont rendues dans <Routes> via <Route>

👉 Cette séance pose les fondations de toutes les applications React professionnelles.