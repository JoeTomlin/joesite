import './App.css'
import Left from './components/LeftScreen'
import About from './components/About'
import Projects from './components/Projects'


function App() {

  return (
    <>
      <div className='body'>
          <Left/>
        <div className='rightSide'>
          <About/>
          <Projects/>
        </div>
      </div>
    </>
  )
}

export default App
