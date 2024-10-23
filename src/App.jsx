import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { useState } from 'react'


const App = () => {

  const [playState,setPlayState]=useState(false); 
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our program' title="What we offer"/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title="Campus photos  "/>
        <Campus/>
        <Title subTitle='Testimonilas' title="What study says  "/>
        <Testimonial/>
        <Title subTitle='Contact us' title="Get in touch"/>
        <Contact/>
        <Footer/>
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App