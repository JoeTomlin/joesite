import './App.css'
import Left from './components/LeftScreen'
import About from './components/About'
import Projects from './components/Projects'
import WorkXP from './components/WorkXP'
import Footer from './components/Footer'
import React, {useEffect} from 'react'
import { useState } from 'react'


function App() {

  const [hoveredElement, setHoveredElement] = useState(null);

  // Function to handle mouse over event
  const handleMouseOver = (elementId) => {
    setHoveredElement(elementId);
  };

  // Function to handle mouse out event
  const handleMouseOut = () => {
    setHoveredElement(null);
  };

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

  return (
    <>
      <div className='body'>
        <div className='leftSide'>
        <Left/>
        </div>
        <div className='rightSide'>
          <About className='about'/>
          <Projects className='projects' handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} hoveredElement={hoveredElement}/>
          <WorkXP className='workXP' handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} hoveredElement={hoveredElement}/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
