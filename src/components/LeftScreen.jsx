import React from 'react';
import "./LeftScreen.css";

const Left = () => {

    return (
        <div className='leftSide'>
            <img className='dotBackground' src="src/images/Background_Title.png" alt="Joe Tomlin Title" />
            <div className='mediaLinks'>
                <a href="https://github.com/JoeTomlin" target='_blank' className='icon'><img src="src/images/github_logo.png" alt="Joe's GitHub" className='icon' /></a>
                <a href="https://www.linkedin.com/in/josephtomlin/" target='_blank' className='icon'><img src="src/images/linkedin_logo.png" alt="Joe's LinkedIn" className='icon' /></a>
                <a href="https://www.instagram.com/jouktomlin/" target='_blank' className='icon'><img src="src/images/instagram_logo.png" alt="Joe's Insta" className='icon'/></a>
            </div>
            <img className='profile' src="src/images/dotted_joe.png" alt="Pic of Joe" />
        </div>
    )
}

export default Left