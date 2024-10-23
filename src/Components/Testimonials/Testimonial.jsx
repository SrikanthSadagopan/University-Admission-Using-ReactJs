import React, { useRef } from 'react'
import "./Testimonial.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"
const Testimonial = () => {
const slider =useRef();
    let tx =0;
const slideForward=()=>{
    if(tx>-50){
        tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
}
const slideBackward=()=>{
    if(tx<-0){
        tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;    
}


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Shreya</h3>
                                <span>Cmrit ,India</span>
                            </div>
                        </div>
                        <p>education serves as a gateway to opportunity and advancement in the professional realm. By acquiring specialized knowledge and skills, individuals can pursue fulfilling careers, achieve economic stability, and contribute to the global workforce. Furthermore, education facilitates lifelong learning and adaptation to evolving industries and technologies,</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Sri</h3>
                                <span>Cmrit ,India</span>
                            </div>
                        </div>
                        <p>education serves as a gateway to opportunity and advancement in the professional realm. By acquiring specialized knowledge and skills, individuals can pursue fulfilling careers, achieve economic stability, and contribute to the global workforce. Furthermore, education facilitates lifelong learning and adaptation to evolving industries and technologies,</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>sunag</h3>
                                <span>Cmrit ,India</span>
                            </div>
                        </div>
                        <p>education serves as a gateway to opportunity and advancement in the professional realm. By acquiring specialized knowledge and skills, individuals can pursue fulfilling careers, achieve economic stability, and contribute to the global workforce. Furthermore, education facilitates lifelong learning and adaptation to evolving industries and technologies,</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Shreyank</h3>
                                <span>Cmrit ,India</span>
                            </div>
                        </div>
                        <p>education serves as a gateway to opportunity and advancement in the professional realm. By acquiring specialized knowledge and skills, individuals can pursue fulfilling careers, achieve economic stability, and contribute to the global workforce. Furthermore, education facilitates lifelong learning and adaptation to evolving industries and technologies,</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial