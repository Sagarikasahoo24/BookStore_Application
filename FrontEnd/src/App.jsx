import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Contacts from './components/Contacts'
import About from './components/About'

const App = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
