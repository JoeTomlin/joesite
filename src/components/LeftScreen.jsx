import React from 'react';
import "./LeftScreen.css";
import Background_Title from '../images/Background_Title.png'
import github_logo from '../images/github_logo.png'
import linkedin_logo from '../images/linkedin_logo.png'
import instagram_logo from '../images/instagram_logo.png'
import dotted_joe from '../images/dotted_joe.png'


const Left = () => {

    return (
        <div className='leftScreen'>
            <img className='dotBackground' src={Background_Title} alt="Joe Tomlin Title" />
            <div className='mediaLinks'>
                <a href="https://github.com/JoeTomlin" target='_blank' className='icon'><img src={github_logo} alt="Joe's GitHub" className='icon' /></a>
                <a href="https://www.linkedin.com/in/josephtomlin/" target='_blank' className='icon'><img src={linkedin_logo} alt="Joe's LinkedIn" className='icon' /></a>
                <a href="https://www.instagram.com/jouktomlin/" target='_blank' className='icon'><img src={instagram_logo} alt="Joe's Insta" className='icon'/></a>
            </div>
            <img className='profile' src={dotted_joe} alt="Pic of Joe" />
        </div>
    )
}

export default Left