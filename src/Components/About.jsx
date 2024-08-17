import React from 'react'
import aboutPic from '../Assets/Blue Minimalist Instagram Profile Picture.png'
const About = () => {
  return (
    <>
      <section id="about" className="About">
        <div className="Main">
            <div className='image'><img src={aboutPic} alt="Portrait of a man smiling on top of a building"/></div>
          <div className="aboutTextContainer">
            <div className='aboutTextBox'>
            <h2>About Me</h2>
            <h5>Web Developer <span>& Designer</span></h5>
            <p>
              I’m a passionate web developer currently pursuing a Bachelor of Science in Software Engineering. I specialize in creating dynamic, responsive websites using HTML, CSS, and JavaScript. With a keen eye for detail and a commitment to continuous learning, I strive to build user-friendly and visually appealing web applications. In my free time, I enjoy working out, watching movies, and improving my coding skills. Let's connect and bring your web ideas to life!
            </p>
            <button type="button">Let's Talk</button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About
