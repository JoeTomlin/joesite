import React from 'react';
import "./About.css";

const About = () => {

    return (
        <div className='aboutCard'>
            <img className='aboutDot' src="src/images/About_Dot.png" alt="About Header" />
            <p>" I wasn't always a software engineer. In past lives I was a student at <span style={{fontWeight: "bold", fontStyle: "italic"}}>UC Berkeley</span>, a Publicity Coordinator for Universal Studios & Paramount Pictures, and even an Account Manager for a sustainable product manufacturer.
            </p>
            <p> During the pandemic, I took the opportunity to finally work at a <span style={{fontWeight: "bold", fontStyle: "italic"}}>SaaS startup</span>. I was hands on with customers, <span style={{fontWeight: "bold", fontStyle: "italic"}}>Solution Architects</span>, and <span style={{fontWeight: "bold", fontStyle: "italic"}}>Product Managers</span>, bridging the gap between clients and developers by listening, learning, and effectively communicating customer needs.
            </p>
            <p> My time in SaaS taught me what I truly value: <span style={{fontWeight: "bold", fontStyle: "italic"}}>learning</span>. I then taught myself <span style={{fontWeight: "bold", fontStyle: "italic"}}>Python</span> and <span style={{fontWeight: "bold", fontStyle: "italic"}}>SQL</span> and ultimately took the leap to certification in <span style={{fontWeight: "bold", fontStyle: "italic"}}>JavaScript</span> and <span style={{fontWeight: "bold", fontStyle: "italic"}}>Python</span>. Now, I want to be the best Software Engineer I can possibly be.
            </p>
            <p> I love working on projects that challenge me or teach me something new about data structures. I also love working with organizations that are trying to make the world a <span style={{fontWeight: "bold", fontStyle: "italic"}}>better</span> place."
            </p>
        </div>
    )
}

export default About