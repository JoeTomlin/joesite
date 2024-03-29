import './App.css'
import Left from './components/LeftScreen'
import About from './components/About'
import Projects from './components/Projects'
import WorkXP from './components/WorkXP'
import Footer from './components/Footer'
import React, {useEffect} from 'react'


function App() {

  useEffect(() => { 

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            entry.target.classList.add('show');
            console.log('add show');
        }
    }); 
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  return () => {
    hiddenElements.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  };
}, []);

  const boundary = document.getElementsByClassName('projectCard', 'xpCard');
  function mouseOverFunction() {
      projectCard.style.background-color == '#693ac6';
      projectCard.style.box-shadow == '4px 3px #f8f8ff';
  };
  boundary.onmouseover = mouseOverFunction;

  return (
    <>
      <div className='body'>
        <div className='leftSide'>
        <Left/>
        </div>
        <div className='rightSide'>
          <About className='about'/>
          <Projects className='projects'/>
          <WorkXP className='workXP'/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
