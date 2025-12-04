# 🎓 Capsule Formateur :  
# Comment deux composants peuvent communiquer en React ?

En React, **les composants ne se parlent jamais directement**.  
Ils communiquent **via un state partagé dans un composant parent**.

---

## 🔁 Le fonctionnement

1. Le **parent** stocke une information (state).  
2. Le **composant A** déclenche une action → il appelle une fonction venant du parent.  
3. Le parent met à jour le **state**.  
4. Le **composant B** reçoit la nouvelle valeur en **prop**.  
5. Le composant B réagit grâce à `useEffect`.

---

# 🧪 Petite mise en pratique

## 1️⃣ Lever l’état au parent  
> (La meilleure pratique 90% du temps)

Quand deux composants doivent « se parler » :

➡️ **Ils ne communiquent pas directement, ils passent par le parent.**
Parent
├── ComposantA (on clique ici)
└── ComposantB (réagit au clic de A)

---

# 📝 Exercices d'application

## 📌 Parent.jsx

```jsx
import { useState } from "react";
import ComposantA from "./ComposantA";
import ComposantB from "./ComposantB";

export default function Parent() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <ComposantA onTrigger={() => setClicked(true)} />
      <ComposantB isTriggered={clicked} />
    </>
  );
}
```
📌 ComposantA.jsx

```jsx
export default function ComposantA({ onTrigger }) {
  return (
    <button onClick={onTrigger}>
      Clique-moi
    </button>
  );
}

```
📌 ComposantB.jsx

```jsx
export default function ComposantB({ isTriggered }) {
  return (
    <p>{isTriggered ? "B a détecté le clic !" : "En attente..."}</p>
  );
}

```
👉 Résultat :
Quand tu cliques A → B réagit instantanément.

### 2️⃣ Utiliser un contexte (React Context API)

Tu en as besoin si les composants sont très éloignés dans l’arborescence.

👉 C’est un state global léger, parfait pour :

un mode sombre
un utilisateur connecté
une sélection active
un menu ouvert / fermé

## 🛠 Exemple : Créer un contexte
📌 ClickContext.jsx

```jsx
import { createContext, useState } from "react";

export const ClickContext = createContext();

export function ClickProvider({ children }) {
  const [clicked, setClicked] = useState(false);

  return (
    <ClickContext.Provider value={{ clicked, setClicked }}>
      {children}
    </ClickContext.Provider>
  );
}
```
📌 Dans ton App.jsx

```jsx
<ClickProvider>
   <App />
</ClickProvider>
```
📌 ComposantA.jsx (avec contexte)

```jsx
import { useContext } from "react";
import { ClickContext } from "./ClickContext";

export default function ComposantA() {
  const { setClicked } = useContext(ClickContext);

  return <button onClick={() => setClicked(true)}>Clique</button>;
}
```
📌 ComposantB.jsx (avec contexte)

```jsx
import { useContext } from "react";
import { ClickContext } from "./ClickContext";

export default function ComposantB() {
  const { clicked } = useContext(ClickContext);

  return <p>{clicked ? "Clic détecté" : "…"}</p>;
}

```

### 3️⃣ Communiquer avec useEffect

Quand un composant doit réagir à un changement déclenché par un autre

🧠 Rappel important :

useEffect ne sert jamais à envoyer un événement,
mais à réagir à un changement d’un state ou d’une prop.

### 🧪 Exercice d'application

Composant A2 → déclenche un state dans Parent2
Composant B2 → écoute le changement avec useEffect

📌 1) Parent2.jsx (state partagé)

```jsx
import { useState } from "react";
import ComposantA2 from "./ComposantA2";
import ComposantB2 from "./ComposantB2";

export default function Parent2() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <ComposantA2 onClickAction={() => setIsClicked(true)} />
      <ComposantB2 isClicked={isClicked} />
    </>
  );
}
```
📌 2) ComposantA2.jsx (déclenche l'action)

```jsx
export default function ComposantA2({ onClickAction }) {
  return (
    <button onClick={onClickAction}>
      Clique ici
    </button>
  );
}
```
📌 3) ComposantB2.jsx (écoute avec useEffect)

```jsx
import { useEffect } from "react";

export default function ComposantB2({ isClicked }) {

  useEffect(() => {
    if (isClicked) {
      console.log("⚡ Composant A a été cliqué !");
      // possibilité : animation, API, changement de state, etc.
    }
  }, [isClicked]); // 👈 useEffect écoute le changement

  return <div>{isClicked ? "Clic détecté" : "En attente..."}</div>;
}

```
### 🧠 Pourquoi ça marche ?

Composant A modifie un state dans le Parent
Le Parent transmet ce state à Composant B en prop
Composant B utilise useEffect([isClicked]) pour réagir

➡️ C’est la manière recommandée pour “écouter” quelque chose en React.



