import React from 'react';
import "./WorkXP.css";

const WorkXP = ({ handleMouseOver, handleMouseOut, hoveredElement }) => {

    return (
        <div>
            <img className='xpDot' src="src/images/XP_Dot.png" alt="Work XP Header" />
            <a style={{textDecoration: 'none'}} href="https://www.deputy.com/" target='_blank'>
                <div className={hoveredElement === 'deputy' ? 'projectCard hovered' : 'projectCard'} onMouseOver={() => handleMouseOver('deputy')} onMouseOut={handleMouseOut}>
                    <div className='header'>
                        <div>
                            <h3>ACCOUNT MANAGER</h3>
                            <p className='company'>DEPUTY.COM</p>
                        </div>
                        <p className='timeline' >2021-2023</p>
                    </div>
                    <p>Collaborated with Solutions Architects and Products Managers to create custom SaaS product roadmaps for 50 renewed contracts in AMER and EMEA.</p>
                </div>
            </a>
            <a style={{textDecoration: 'none'}} href="https://www.getque.com/" target='_blank'>
                <div className={hoveredElement === 'queFactory' ? 'projectCard hovered' : 'projectCard'} onMouseOver={() => handleMouseOver('queFactory')} onMouseOut={handleMouseOut}>
                    <div className='header'>
                        <div>
                            <h3>ACCOUNT MANAGER</h3>
                            <p className='company'>QUE FACTORY</p>
                        </div>
                        <p className='timeline'>2019-2020</p>
                    </div>
                    <p>Closed $1M inbound B2B sales for over 600 wholesale accounts at a sustainability-focused startup.</p>
                </div>
            </a>
            <a style={{textDecoration: 'none'}} href="https://alliedglobalmarketing.com/#clients" target='_blank'>
                <div className={hoveredElement === 'allied' ? 'projectCard hovered' : 'projectCard'} onMouseOver={() => handleMouseOver('allied')} onMouseOut={handleMouseOut}>
                    <div className='header'>
                        <div>
                            <h3>PUBLICITY COORDINATOR</h3>
                            <p className='company'>ALLIED GLOBAL MARKETING</p>
                        </div>
                        <p className='timeline'>2018-2019</p>
                    </div>
                    <p>Enacted promo events, press tours, film screenings, and red carpet events for Universal Studios and Paramount Pictures films. Usually on a budget of $0.</p>
                </div>
            </a>
            <a className='link' style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/josephtomlin/" target='_blank'>
                <button type='button' id = 'fullResume'>FULL RESUME</button>
            </a>
        </div>
    )
}
    
    export default WorkXP