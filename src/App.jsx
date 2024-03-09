import './App.css'
import Left from './components/LeftScreen'
import About from './components/About'
import Projects from './components/Projects'
import WorkXP from './components/WorkXP'


function App() {

  return (
    <>
      <div className='body'>
        <div className='leftSide'>
        <Left/>
        </div>
        <div className='rightSide'>
          <About/>
          <Projects/>
          <WorkXP/>
        </div>
      </div>
    </>
  )
}

export default App
