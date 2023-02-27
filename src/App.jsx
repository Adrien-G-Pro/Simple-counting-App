import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TitleApp from './componants/TitleApp'
import Home from './pages/Home'
import OneCounting from './pages/OneCounting'
import ThreeCounting from './pages/ThreeCounting'
import TwoCounting from './pages/TwoCounting'
import './App.css'

export default function App() {

  return (
    <BrowserRouter>
        <TitleApp />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/onecounting' element={<OneCounting />} />
          <Route path='/twocounting' element={<TwoCounting />} />
          <Route path='/threecounting' element={<ThreeCounting />} />
        </Routes>
    </BrowserRouter>
  )
}
