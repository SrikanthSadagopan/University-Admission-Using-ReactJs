import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon' onClick={()=>{
              setPlayState(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>About university</h3>
            <h2>Nurturing the education is bliss</h2>
            <p>Education is a multifaceted endeavor with various dimensions impacting individuals and society. Firstly, from a personal development perspective, education serves as a transformative force, empowering individuals with knowledge, skills, and critical thinking .</p>
            <p>Secondly, education plays a crucial role in societal progress by serving as a catalyst for innovation, economic growth, and social cohesion. Access to quality education enables communities to harness human potential, break the cycle of poverty, and build </p>
            <p>Lastly, education serves as a gateway to opportunity and advancement in the professional realm. By acquiring specialized knowledge and skills, individuals can pursue fulfilling careers, achieve economic stability, and contribute to the global workforce.  </p>
        </div>
    </div>
  )
}

export default About