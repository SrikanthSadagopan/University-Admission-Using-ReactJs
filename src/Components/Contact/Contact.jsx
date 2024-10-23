import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2d76db02-a945-46bf-96e2-126a1c9fd57a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>If you need to get in touch with us, please feel free to ask us anything. Whether you have questions, suggestions, or concerns, we're here to help. Our team is dedicated to providing assistance and support whenever you need it. You can reach out to us via email, phone, or through our website's contact form. Your feedback is valuable to us, and we strive to ensure that your experience with us is positive and satisfactory. Don't hesitate to reach out – we're eager to hear from you!</p>
        <ul>
            <li><img src={mail_icon} alt="" />rudrasdev95@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91837828272</li>
            <li><img src={location_icon} alt="" />bangalore,Aecs layout</li>
        </ul>
        
        
        </div>
        <div className="contact-col">
            
            <form onSubmit={onSubmit}> 
                <label>
                    Your name
                </label>
                <input type="text" name="name" placeholder='Enter your name' required/>
                <label >Phone no</label>
                <input type="tel" name='phone' placeholder='Enter your mobile no' required/>
                <label>Wrie your message</label>
                <textarea name="message"   rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn' >Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result} </span>
            </div>
        

    </div>
  )
}

export default Contact