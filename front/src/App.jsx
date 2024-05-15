import { useState } from 'react'
import { Home, MyAppointments, Register, About } from './views'
import NavBar from './components/primary/NavBar'
import Login from './views/Login/Login'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/primary/Footer/Footer'
import MenuView from './views/MenuView/MenuView'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/myAppointments' element={<MyAppointments/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<MenuView/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
