import React from 'react'
import './About.css'
import play from '../../assets/play-icon.png'
import image from '../../assets/image.png'
const About = ({setPlayState}) => {
  return (
    <div className='about' id='Abo'>
      <div className="about-left">
        <img src={image} alt=""className='about-img'/>
        <img src={play} alt=""className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>  
        
        <div className="about-right">
    <h3>About Kajubro</h3>
    <h2>Shaping the Future, Together</h2>
    <p>Kajubro is more than just a group; it’s a movement dedicated to designing a better future for everyone. Our diverse team comes together to explore innovative ideas, tackle challenges, and create meaningful solutions across various domains.</p>
    <p>We believe in the power of collaboration and open discussion. By bringing together different perspectives, we aim to drive positive change and inspire new ways of thinking that can make a real difference in the world.</p>
    <p>At Kajubro, we’re committed to fostering an environment where creativity thrives and ideas become reality. Join us on our journey as we work towards a brighter, more inclusive future for all.</p>
</div>

    </div>
  )
}

export default About
