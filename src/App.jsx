import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './component/Login'
import Reg from './component/Reg'
import Tabledata from './component/Tabledata'
import CardData from './component/CardData'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Statebasics from './component/Statebasics'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/'element={<Login/>}/>
  <Route path='/r'element={<Reg/>}/>
  <Route path='/t'element={<Tabledata/>}/>
  <Route path='/c'element={<CardData/>}/>
  <Route path='/s'element={<Statebasics/>}/>

</Routes>
</BrowserRouter>
    </>
  )
}

export default App
