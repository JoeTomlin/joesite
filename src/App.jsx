import './App.css'
import Left from './components/LeftScreen'
import About from './components/About'
import Projects from './components/Projects'
import WorkXP from './components/WorkXP'
import Footer from './components/Footer'
import React, { useEffect, useState } from 'react'

function App() {
  
  const [hoveredElement, setHoveredElement] = useState(null);
  const coords = { x: 0, y: 0 };
  let circles = [];

  const colors = [
    '#693ac6',
    '#7f3ace', 
    '#963bd5', 
    '#af3cdd', 
    '#ca3de3', 
    '#e53fea', 
    '#f041de', 
    '#f544cd', 
    '#fa47bb', 
    '#ff4aa8'
  ];

  useEffect(() => {
    circles = document.querySelectorAll(".circle");

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      
      circle.style.scale = (circles.length - index) / circles.length;
      
      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.8;
      y += (nextCircle.y - y) * 0.8;
    });
  
    requestAnimationFrame(animateCircles);
  }

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

  const handleMouseEnter = (elementClass) => {
    setHoveredElement(elementClass);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  return (
    <>
      <div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='body'>
          <div className='leftSide'>
            <Left />
          </div>
          <div className='rightSide'>
            <About className='about' />
            <Projects className='projects' handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} hoveredElement={hoveredElement} />
            <WorkXP className='workXP' handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} hoveredElement={hoveredElement} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
