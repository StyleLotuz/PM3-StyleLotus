import { useState } from 'react'
import { Home, MyAppointments, Register } from './views'
import NavBar from './components/primary/NavBar'
import Login from './views/Login/Login'


function App() {

  return (
    <>
      <NavBar />
      {/* <Home/> */}
      {/* <MyAppointments/> */}
      {<Register />}
      {/* <Login/> */}
    </>
  )
}

export default App
