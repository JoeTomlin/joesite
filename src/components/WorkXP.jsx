import React from 'react';
import "./WorkXP.css";

const WorkXP = () => {

    return (
        <div>
            <img className='xpDot' src="src/images/XP_Dot.png" alt="Work XP Header" />
            <div className='xpCard'>
                <div className='header'>
                    <div>
                        <h3>ACCOUNT MANAGER</h3>
                        <p className='company'>DEPUTY.COM</p>
                    </div>
                    <p className='timeline' >2021-2023</p>
                </div>
                <p>I collaborated with Solutions Architects and Products Managers to create custom SaaS product roadmaps for 50 renewed contracts in AMER and EMEA.</p>
            </div>
            <div className='xpCard'>
                <div className='header'>
                    <div>
                        <h3>ACCOUNT MANAGER</h3>
                        <p className='company'>QUE FACTORY</p>
                    </div>
                    <p className='timeline'>2019-2020</p>
                </div>
                <p>I closed $1M inbound B2B sales for over 600 wholesale accounts at a sustainability-focused startup.</p>
            </div>
            <div className='xpCard'>
                <div className='header'>
                    <div>
                        <h3>PUBLICITY COORDINATOR</h3>
                        <p className='company'>ALLIED GLOBAL MARKETING</p>
                    </div>
                    <p className='timeline'>2018-2019</p>
                </div>
                <p>I enacted promo events, press tours, film screenings, and red carpet events for Universal Studios and Paramount Pictures films. Sometimes on a budget of $0.</p>
            </div>
        </div>
    )
}
    
    export default WorkXP