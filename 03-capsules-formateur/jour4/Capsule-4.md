# 📘 Capsule Formateur – Jour 4

## 🟦 Introduction : Le monde moderne & la nécessité d’aller vite

Aujourd’hui, nous travaillons dans un monde où **ce n’est plus le plus gros qui gagne, mais le plus rapide**.

Les entreprises les plus performantes ne prennent plus 6 mois pour livrer une version :  
elles déploient **plusieurs fois par jour**.

### Pourquoi ?

Parce qu’elles ont compris qu’un produit numérique n’est **jamais “fini”**.  
Il évolue constamment grâce à un cycle continu :

**créer → tester → corriger → améliorer → mesurer**

C’est cette vitesse d’adaptation qui fait la différence.

Les organisations compétitives ne se limitent plus à fabriquer un produit.  
Elles combinent **trois leviers essentiels** :

- **Un produit** : simple, clair, utilisable immédiatement.  
- **Des services autour** : support, automatisation, personnalisation, expérience utilisateur.  
- **Des données** : pour analyser, optimiser et améliorer en continu.

🧩 **Résultat : la valeur ne vient plus seulement de ce qu’on construit… mais de la capacité à itérer vite.**

Pour travailler ainsi, il faut une base solide :

- du code propre  
- structuré  
- testable  
- organisé  
- capable d’évoluer  

---

## 🎯 Ce que vous allez apprendre aujourd’hui

La séance du Jour 4 vous plonge dans les fondamentaux de la **persistance côté front**.

Vous allez apprendre à :

- comprendre comment un navigateur peut conserver les données  
- utiliser **localStorage** pour sauvegarder et relire ces données  
- créer un **service dédié** (architecture propre)  
- organiser la logique métier dans un **custom hook**  
- réaliser un mini **CRUD persistant** (ajouter / liste / supprimer)  
- produire un code structuré, lisible et professionnel  
- travailler en **micro-itérations** :  
  **je code → je teste → j’évalue → j’améliore → j’apporte de la valeur**

Cette capsule introduit des concepts professionnels accessibles, pour structurer votre travail en équipe tout au long du projet.

---

# 🧭 Séquençage de l’exercice (mini-itérations)

Travaillez par **petites itérations**, comme dans le pipeline d’introduction :

**idée → maquette → composant → test → démo**

Chaque itération apporte une valeur testable immédiatement.

---

## 🔁 Itération 1 : IDÉE (5 minutes)

### 🎯 Objectif  
Définir la plus petite chose utile à construire.

### 📝 Consigne  
En équipe, répondre à :

1. **Qu’allons-nous sauvegarder ?**  
2. **Quelle action minimum l’utilisateur doit pouvoir faire ?**  
3. **Quel résultat doit persister après un refresh ?**

🎯 **Livrable :** 3 lignes — l’idée minimale.

---

## 🔁 Itération 2 : MAQUETTE (10 minutes)

### 🎯 Objectif  
Visualiser ce qui sera codé.

### 📝 Consigne  
Dessiner :

- un input  
- un bouton “Ajouter”  
- une petite liste affichée en dessous  

🎯 **Livrable :** une photo de la maquette.

---

## 🔁 Itération 3 : COMPOSANT (15 minutes)

### 🎯 Objectif  
Coder une première version **sans persistance**.

### 🧩 Étapes

- créer `MiniPersist.jsx`  
- input + bouton  
- `useState` pour stocker la donnée  
- `map()` pour afficher la liste  

🎯 **Livrable :** mini-liste fonctionnelle (mais non persistante).

---

## 🔁 Itération 4 : TEST (5 minutes)

### 🎯 Objectif  
Valider le comportement actuel.

### 📝 Vérification

- j’ajoute un nom → il apparaît  
- je refresh → il disparaît  

🎯 **Livrable :** comportement initial validé.

---

## 🔁 Itération 5 : AJOUT DE VALEUR → Persistance (15 minutes)

### 🎯 Objectif  
Faire survivre les données au refresh.

### 🧩 Étapes

**4.1 Sauvegarder dans localStorage :**

```js
useEffect(() => {
  localStorage.setItem("users", JSON.stringify(users));
}, [users]);
```

**4.2 Charger au démarrage :**

```jsx
useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("users"));
  if (saved) setUsers(saved);
}, []);
```
🎯 Livrable :
La donnée reste après rafraîchissement.

🎯 **Livrable :**  
La donnée reste après rafraîchissement.

---

## 🔁 Itération 6 : TEST (5 minutes)

### 🎯 Objectif  
Valider la persistance.

### ✔ Checklist
- ajouter plusieurs items  
- rafraîchir  
- les items sont toujours là  
- aucunes erreurs console  

🎯 **Livrable :** Check-list validée.

---

## 🔁 Itération 7 : PETIT REFACTO (10 minutes)

### 🎯 Objectif  
Nettoyer et organiser le code.

### 🧩 Étapes
- déplacer la logique dans `storageService.js`  
- nettoyer le composant  
- supprimer les `console.log`  
- renommer clairement les variables  

🎯 **Livrable :** Code propre, lisible, professionnel.

---

## 🔁 Itération 8 : DÉMO RAPIDE (5 minutes)

### 🎯 Objectif  
Montrer la valeur produite.

### 📝 Démo  
Chaque équipe présente :

- l’ajout  
- le refresh  
- la persistance  
- la structure du code  

🎯 **Livrable :** mini-démo d’1 minute.

---

# 🧩 Exercice d’application — Mini CRUD persistant

## 🎯 Objectif  
Comprendre la **persistance côté front** avec **localStorage** via un CRUD ultra-simple.

## 🟦 Étape 1 — Petit formulaire

```js
const [name, setName] = useState("");
const [users, setUsers] = useState([]);
```
## 🟩 Étape 2 — Ajouter un utilisateur

```js
const addUser = () => {
  setUsers([...users, name]);
  setName("");
};

```

## 🟨 Étape 3 — Afficher la liste

```js
<ul>
  {users.map((u, i) => (
    <li key={i}>{u}</li>
  ))}
</ul>

```

## 🟧 Étape 4 — Rendre la liste persistante
4.1 Sauvegarde

```js
useEffect(() => {
  localStorage.setItem("users", JSON.stringify(users));
}, [users]);

```

## 4.2 Chargement au démarrage

```js

useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("users"));
  if (saved) setUsers(saved);
}, []);

```
## 🟥 Étape 5 — Tester la persistance
Vérifier :
Ajouter un utilisateur
Rafraîchir
Vérifier que la liste reste affichée

## 🟩 Étape 6 — Supprimer un utilisateur (optionnel)

```jsx
const deleteUser = (index) => {
  setUsers(users.filter((_, i) => i !== index));
};
```
## 🟦 Étape 7 — Intégration dans le projet d’équipe

Chaque équipe doit :
réutiliser cette logique
adapter le CRUD à son propre contexte
intégrer la persistance via un service + hook
travailler en micro-itérations :
je code → je teste → j’évalue → j’améliore
