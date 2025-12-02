import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import { users } from "./data/users";

function App() {


  return (
    <>
     <h1>Bonjour</h1>

    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <ProfileCard
          key={user.id}
          img={user.img}
          name={user.name}
          role={user.role}
          description={user.description}
    />
      ))}
    </div>
    </>

  )
}

export default App
