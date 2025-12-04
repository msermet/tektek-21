# 🎓 Jour 3 — Capsule Formateur | applications de fonctions

---

## 🎯 Exercices d'application de fonctions 

À la fin de cette journée, les apprenants sauront :

- ✔ Gérer l’état local avec `useState`  
- ✔ Manipuler les événements : clics, inputs, formulaires  
- ✔ Utiliser `useEffect` pour les effets de bord et les appels API  
- ✔ Effectuer une première intégration API (mock JSON local)  
- ✔ Construire un mini-dashboard interactif  
- ✔ Créer un formulaire contrôlé avec validation  
- ✔ Comprendre le flux : *événement → state → interface*

---

# 🧱 1 — Rappel fondamental : UI = f(state)

La logique de React repose sur un principe simple :
L’interface est une fonction du state.
Quand le **state change**, l’interface se met à jour automatiquement.  
Aucun accès manuel au DOM n’est nécessaire.

---

# 🌟 2 — useState : gérer l’état local

### Exemple didactique : compteur

```jsx
import { useState } from "react";

export default function Compteur() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```
👉 React re-render automatiquement le composant quand count change.


## 🖱️ 3 — Les événements : clics, inputs, formulaires
# 3.1 — Clic

```jsx
<button onClick={() => console.log("Clic !")}>Clique ici</button>
```

# 3.2 — Input contrôlé
```jsx
const [nom, setNom] = useState("");

<input
  value={nom}
  onChange={(e) => setNom(e.target.value)}
/>
```

📌 Message formateur :
Un input contrôlé = sa valeur dépend du state, pas du DOM.

## 3.3 — Formulaire

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  alert("Formulaire envoyé !");
};
```
## ⚡ 4 — useEffect : effets de bord + API
# 4.1 — Base

```jsx
useEffect(() => {
  console.log("Montage du composant");
}, []);
```
➡️ S’exécute une seule fois, au montage.

# 4.2 — useEffect dépendant d’une variable

```jsx
useEffect(() => {
  console.log("Nom changé :", nom);
}, [nom]);
```
➡️ S’exécute à chaque modification de nom.

## 🌐 4.3 — Charger un mock JSON (première API)

Créer un fichier :
src/data/participants.json

```js
[
  { "id": 1, "nom": "Alice", "role": "Étudiante" },
  { "id": 2, "nom": "Bob", "role": "Étudiant" }
]
```
Utilisation :

```js
import { useState, useEffect } from "react";
import data from "../data/participants.json";

export default function Participants() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    setParticipants(data);
  }, []);

  return (
    <ul>
      {participants.map(p => (
        <li key={p.id}>{p.nom} — {p.role}</li>
      ))}
    </ul>
  );
}
```
## 📊 5 — Mini Dashboard interactif

### 🎯 Objectif pédagogique  
Créer un dashboard dynamique qui réagit aux données et aux actions utilisateur.

---

### 📁 Fichier mock

**Chemin :** `src/data/dashboard.json`

```json
{
  "visiteurs": 128,
  "tauxConversion": 12.4,
  "messages": [
    "Bienvenue sur le dashboard !",
    "Nouvel utilisateur ajouté."
  ]
}
```
### 💻 Code du Dashboard

```jsx
import { useState, useEffect } from "react";
import data from "../data/dashboard.json";

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    setStats(data);
  }, []);

  const addMessage = (e) => {
    e.preventDefault();
    setStats(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
    setMessage("");
  };

  return (
    <div>
      <h2>Visiteurs : {stats.visiteurs}</h2>
      <h2>Taux de conversion : {stats.tauxConversion}%</h2>

      <hr />

      <h3>Ajouter un message</h3>
      <form onSubmit={addMessage}>
        <input 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
        <button>Ajouter</button>
      </form>

      <ul>
        {stats.messages?.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

```
### 📝 6 — Exercices pratiques
# 🔹 Exercice 1 — useState + événements

Créer un composant contenant :
un compteur
un champ texte
un bouton "reset"

# 🔹 Exercice 2 — Formulaire contrôlé

Créer un formulaire complet avec :
Nom
Email
Message
Afficher les résultats via :
alert()
ou
une <div> sous le formulaire




### 🧠 Résumé formateur

Les apprenants maîtrisent maintenant :
useState → gestion de l’état local
Événements → clic, input, formulaire
useEffect → effets de bord, appels API, écoute de dépendances
JSON mock → première intégration API
Gestion dynamique de données → dashboard interactif
Formulaire contrôlé → logique professionnelle de React

🔥 C’est la base indispensable pour créer des applications interactives modernes en React.

