import './App.css'
import Left from './components/LeftScreen'
import About from './components/About'
import Projects from './components/Projects'
import WorkXP from './components/WorkXP'
import Footer from './components/Footer'
import React, { useEffect, useRef, useState } from 'react'
import Dot from './components/Dot'

function App() {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    // const colors = ['#693ac6', '#9337c2', '#b436bd', '#d139b7', '#ea3fb0', '#ff4aa8'];
    // background: linear-gradient(90deg, #693ac6, #9b3ed4, #d442e3, #f146d0, #ff4aa8);

    //   const nextCircle = circles[index + 1] || circles[0];
    //     x += (nextCircle.x - x) * 0.5;
    //     y += (nextCircle.y - y) * 0.5;
    //   });

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);


  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const handleMouseOver = (elementId) => {
    setHoveredElement(elementId);
  };

  const handleMouseOut = () => {
    setHoveredElement(null);
  };

  return (
    <>
      <div>
        <Dot x={mousePosition.x} y={mousePosition.y} color="#693ac6" />
        <Dot x={mousePosition.x + 12} y={mousePosition.y + 12} color="#9b3ed4" />
        <Dot x={mousePosition.x + 24} y={mousePosition.y + 24} color="#d442e3" />
        <Dot x={mousePosition.x + 36} y={mousePosition.y + 36} color="#f146d0" />
        <Dot x={mousePosition.x + 48} y={mousePosition.y + 48} color="#ff4aa8" />
        <div className='body'>
          <div className='leftSide'>
            <Left />
          </div>
          <div className='rightSide'>
            <About className='about' />
            <Projects className='projects' handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} hoveredElement={hoveredElement} />
            <WorkXP className='workXP' handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} hoveredElement={hoveredElement} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App