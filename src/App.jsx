import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './itemListContainer/itemListContainer'

function App() {

const greeting = "Bienvenidos"

  return (
    <>
      <Navbar />
      <ItemListContainer greeting= {greeting} />
    </>
  )
}

export default App
