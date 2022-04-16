import React from 'react'
import avatar from '../assets/avatar.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
// import mail from '../assets/mail.png'

export default function Hero() {
    return (
        <section className="hero-section" id="hero-section" >
            <h2>Marco Medeiros</h2>
            <h3>Frontend Developer with React JS</h3>
            <img className="avatar" src={avatar} alt="avatar" />
            <p>
            Graduate in Web Applications Development, highly technical background, with a strong knowledge of React JS, Javascript, HTML and CSS.
            </p>
            <p>
            Passionate about the development of web applications and innovation, with a strong desire to learn and improve. 
            </p>
            <nav className='social-links'>
                <a href="https://github.com/marcomedeirosfh" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/marco-medeiros-filho/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
                {/* <a href="mailto: marcomedeirosfilho@gmail.com"><img src={mail} alt="mail" /></a> */}
            </nav>
        </section>
    )
}