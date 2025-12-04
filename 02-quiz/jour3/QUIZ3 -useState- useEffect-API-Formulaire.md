# 🎯 QUIZ – Jour 3 : useState, Événements, useEffect, API et Formulaire

## 📝 Instructions
- Durée : 5 minutes  
- Certaines questions ont plusieurs bonnes réponses  
- Corrigé disponible en bas du document  

---

# 🔵 Question 1 — useState

Quel est l’objectif principal du hook `useState` ?

- A. Modifier directement un élément du DOM  
- B. Stocker des données qui influencent l’affichage du composant  
- C. Créer un effet de bord  
- D. Importer un fichier JSON  

**Réponses attendues :** 
---

# 🔵 Question 2 — Événements

Quelle syntaxe est correcte pour écouter un clic en React ?

- A. `<button onclick="maFonction()">OK</button>`  
- B. `<button onclick={maFonction}>OK</button>`  
- C. `<button onClick={maFonction}>OK</button>`  
- D. `<button OnClick={() => maFonction()}>OK</button>`  

**Réponses attendues :** 
---

# 🔵 Question 3 — Input contrôlé

Quel extrait représente un input contrôlé ?

- A. `<input />`  
- B. `<input onChange={(e) => console.log(e.target.value)} />`  
- C.  
```jsx
const [nom, setNom] = useState("");
<input value={nom} onChange={(e) => setNom(e.target.value)} />
```
D. <input defaultValue="Test" />

**Réponses attendues :** 

## 🔵 Question 4 — Formulaire

Pourquoi écrit-on `e.preventDefault()` dans un `onSubmit` ?

A. Pour empêcher l’application de planter  
B. Pour empêcher le rechargement automatique de la page  
C. Pour bloquer le bouton  
D. Pour supprimer un state 

**Réponses attendues :** 

## 🔵 Question 5 — useEffect (montage)
```jsx
useEffect(() => {
  console.log("Effet déclenché");
}, []);
```
A. S’exécute à chaque rendu
B. S’exécute une seule fois au premier rendu
C. Ne s’exécute jamais
D. S’exécute toutes les 2 secondes

**Réponses attendues :** 

## 🔵 Question 6 — useEffect avec dépendances

```jsx
useEffect(() => {
  console.log("Nom modifié :", nom);
}, [nom]);
```
A. S’exécute uniquement au premier rendu
B. S’exécute à chaque changement de nom
C. Ne s’exécute jamais
D. Modifie le state automatiquement

**Réponses attendues :** 

## 🔵 Question 7 — API Mock

Peut-on importer un fichier JSON local dans React ?

A. Non
B. Oui, mais seulement depuis public/
C. Oui, avec import data from "./data.json"
D. Oui, mais seulement en JavaScript vanilla

**Réponses attendues :** 

## 🔵 Question 8 — Charger un JSON dans useEffect

```jsx
const [users, setUsers] = useState([]);

useEffect(() => {
  setUsers(data);
}, []);

```
Ce code :

A. Est correct
B. Est incorrect : il manque un fetch
C. Est incorrect : il faut mettre data dans les dépendances
D. Crée une boucle infinie

**Réponses attendues :** 


## 🔵 Question 9 — Dashboard

Qu’est-ce qui provoque la mise à jour automatique de l’interface ?

A. Modifier le DOM
B. Modifier une variable classique
C. Modifier le state
D. Rafraîchir manuellement la page

**Réponses attendues :** 

## 🔵 Question 10 — Logique fondamentale de React

Compléter :

En React, l’interface se met à jour lorsque __________ change.

A. Le HTML
B. Le DOM
C. Le state
D. Le nom du fichier

**Réponses attendues :** 