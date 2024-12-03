import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home/home'
import Login from './Component/Authorization/Login'
import SignUp from './Component/Authorization/SignUp'
import NavBar from './Component/Header/NavBar'
import Footer from './Component/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
