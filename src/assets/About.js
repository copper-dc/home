import React from 'react'
import Logo from "../images/copper.png";
import "./About.css";

const About = () => {
  return (
    <div className='about'>
        <img src={Logo}/>
        <div className='about-content'>
        <p>Copper is an established, stable and easy to use multipurpose bot with rising popularity to make your Discord server awesome! It features an activity based fishing idle-game / economy, virtual gambling games, moderation and much more!</p>
        <span>
            <button>Join Us</button>
            <button>Invite Me</button>
        </span>
        </div>
    </div>
  )
}

export default About