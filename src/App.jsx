import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Blue from './comps/blue'
import Red from './comps/red'
import Green from './comps/green'
import Orange from './comps/orange'
import Home from './comps/home'
import './index.css'

function App() {


  return (
    <>
    <div id="container">
      <div id="navbar"> 
        <Link to='/'>Home</Link>
        <Link to='/blue'>Blue</Link>
        <Link to='/red'>Red</Link>
        <Link to='/green'>Green</Link>
        <Link to='/orange'>Orange</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue/>}/>
          <Route path='/red' element={<Red/>}/> 
          <Route path='/green' element={<Green/>}/>
          <Route path='/orange' element={<Orange/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </div> 
      </div>

    </>
  )
}

export default App
