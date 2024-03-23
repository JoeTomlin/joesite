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
        // console.log(entry)
        if (entry.isIntersecting) { 
            entry.target.classList.add('show');
            // entry.target.classList.remove('hidden');
            console.log('add show');
        }
        // else { 
        //     entry.target.classList.remove('show');
        //     console.log('remove show')  
        // }
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
          <About/>
          <Projects/>
          <WorkXP/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
