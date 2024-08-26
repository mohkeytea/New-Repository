import React from 'react'
import './Contact.css'
import { FaEnvelope, FaComment, FaPhone, FaMapPin, FaArrowRight } from 'react-icons/fa'; 

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3cc926b0-f2f1-4ec9-9554-5c3bda733691");
  
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
    <div className='contact' id='Cont'>
      <div className="contact-col">
      <h3>Send us a message <FaEnvelope className='img'/></h3>
        <p>We’d love to hear from you! Whether you have questions, ideas, or just want to connect, feel free to reach out. Your thoughts and feedback are important to us, and we’re here to help in any way we can.</p>
        <ul>
            <li><FaEnvelope className='img'/>mohkeytea@kajubro.com </li>
            <li><FaPhone className='img'/>+254 111-877-448</li>
            <li><FaMapPin className='img'/>1960 Kayolll, Nai <br/>KN 01969, Kenya</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel"name='phone' placeholder='Enter your Mobile number' required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'> submit now<FaArrowRight/></button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
