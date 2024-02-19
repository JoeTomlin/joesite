import { useState } from 'react'
import './App.css'
import Left from './components/LeftScreen'
import About from './components/About'


function App() {

  return (
    <>
      <div className='body'>
          <Left/>
        <div className='rightSide'>
          <About/>
        </div>
      </div>
    </>
  )
}

export default App
