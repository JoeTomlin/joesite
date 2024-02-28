import React from 'react';
import "./LeftScreen.css";

const Left = () => {

    return (
        <div className='leftSide'>
            <img className='dotBackground' src="src/images/Background_Title.png" alt="dotted background" />
            <div>
                <link rel="shortcut icon" href="https://www.linkedin.com/in/josephtomlin/" type="image/x-icon" />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <a href="https://github.com/JoeTomlin" className='icon'><img src="src/images/github_logo.png" alt="Joe's GitHub" className='icon' /></a>
                <a href="https://www.linkedin.com/in/josephtomlin/" className='icon'><img src="src/images/linkedin_logo.png" alt="Joe's LinkedIn" className='icon' /></a>
                <a href="https://www.instagram.com/jouktomlin/" className='icon'><img src="src/images/instagram_logo.png" alt="Joe's Insta" className='icon'/></a>
            </div>
            <img className='profile' src="src/images/dotted_joe.png" alt="Pic of Joe" />
        </div>
    )
}

export default Left