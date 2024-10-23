import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education</h1>
        
        <p>Education serves as the cornerstone of personal growth, professional success, and societal progress and its motives </p>
        <button className='btn'>Explore more <img src={dark_arrow}alt="" /></button>
        </div>
    </div>
  )
}

export default Hero