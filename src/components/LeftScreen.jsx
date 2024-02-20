import React from 'react';
import "./LeftScreen.css";

const Left = () => {

    return (
        <div className='leftSide'>
            <h1 className='h1'>JOE TOMLIN</h1>
            <h3 className='h3'>Full Stack Software Engineer</h3>
            <div>
                <link rel="shortcut icon" href="https://www.linkedin.com/in/josephtomlin/" type="image/x-icon" />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <a href="https://github.com/JoeTomlin" className='icon'><img src="src/images/github_logo.png" alt="Joe's GitHub" className='icon' /></a>
                <a href="https://www.linkedin.com/in/josephtomlin/" className='icon'><img src="src/images/linkedin_logo.png" alt="Joe's LinkedIn" className='icon' /></a>
                <a href="https://www.instagram.com/jouktomlin/" className='icon'><img src="src/images/instagram_logo.png" alt="Joe's Insta" className='icon'/></a>
            </div>
            <img className='profile' src="src/images/joe_dotted.png" alt="Pic of Joe" />
        </div>
    )
}

export default Left