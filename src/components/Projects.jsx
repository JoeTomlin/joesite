import React from 'react';
import "./Projects.css";

const Projects = ({ handleMouseEnter, handleMouseLeave, hoveredElement }) => {

    return (
        <div className='projects'>
            <img className='projectDot' src="src/images/Projects_Dot.png" alt="Projects Header" />
            <a style={{textDecoration: 'none'}} href="https://github.com/CloudedEevee/PokeShelter" target='_blank' className='pokeshelter'>
                <div className={hoveredElement === 'pokeshelter' ? 'Card hovered' : 'Card'} onMouseEnter={() => handleMouseEnter('pokeshelter')} onMouseLeave={handleMouseLeave}>
                    <h3>POKESHELTER</h3>
                    <p>A collaborative project that pulls from PokeAPI to allow users to "adopt" pokemon. One of the biggest challenges I overcame on this project was learning to how take arrays from multiple API requests and store them as objects.</p>
                    <div className='tools'>
                        <p className='tool'>JavaScript</p>
                        <p className='tool'>React</p>
                        <p className='tool'>MongoDB</p>
                        <p className='tool'>Vite</p>
                        <p className='tool'>Axios</p>
                        <p className='tool'>Express</p>
                    </div>
                    <div className='tools'>
                        <p className='tool'>Node.js</p>
                        <p className='tool'>Material-UI</p>
                    </div>
                </div>
            </a>
            <a style={{textDecoration: 'none'}} href="https://github.com/JoeTomlin/EnSave" target='_blank'>
                <div className={hoveredElement === 'ensave' ? 'Card hovered' : 'Card'} onMouseEnter={() => handleMouseEnter('ensave')} onMouseLeave={handleMouseLeave}>
                    <h3>ENSAVE</h3>
                    <p>An app designed for homeowners to keep track of their home renovation projects. I learned how different frameworks have varying strengths and weaknesses. I plan to add a data scraping element to this in a future iteration that utilizes MERN.</p>
                    <div className='tools'>
                        <p className='tool'>Python</p>
                        <p className='tool'>Flask</p>
                        <p className='tool'>SQL</p>
                        <p className='tool'>Bootstrap</p>
                    </div>
                </div>
            </a>
            <a className='link' style={{textDecoration: 'none'}} href="https://github.com/JoeTomlin" target='_blank'>
                <button type='button' id='allProjects'>ALL PROJECTS</button>
            </a>
        </div>
    )
}

export default Projects