import React from 'react';
import "./Projects.css";

const Projects = () => {

    return (
        <div className='projects'>
            <div>
                <img className='projectDot' src="src/images/Projects_Dot.png" alt="Projects Header" />
            </div>
            <div className='projectCard'>
                <h3>POKESHELTER</h3>
                <img src="" alt="" />
                <p>A collaborative project that pulls from PokeAPI to allow users to "adopt" pokemon</p>
                <div className='tools'>
                    <p className='tool' >JavaScript</p>
                    <p className='tool'>React</p>
                    <p className='tool'>MongoDB</p>
                    <p className='tool'>Vite</p>
                </div>
                <div className='tools'>
                    <p className='tool'>Axios</p>
                    <p className='tool'>Express</p>
                    <p className='tool'>Node.js</p>
                    <p className='tool'>Material-UI</p>
                </div>
            </div>
            <div className='projectCard'>
                <h3>ENSAVE</h3>
                <img src="" alt="" />
                <p></p>
                <div className='tools'>
                    <p className='tool'>Python</p>
                    <p className='tool'>Flask</p>
                    <p className='tool'>SQL</p>
                    <p className='tool'>Bootstrap</p>
                </div>
            </div>
        </div>
    )
}

export default Projects