import { useState } from 'react'
import {Home, MyAppointments} from './views'
import NavBar from './components/primary/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      {/* <Home/> */}
      <MyAppointments/>
    </>
  )
}

export default App
