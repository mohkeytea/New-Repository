import React, { useRef } from 'react'
import './Testimonials.css'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import user from '../../assets/user.jpg'


const Testimonial = () => {
      const slider = useRef();
          let tx = 0;
  const slideForward = ()=>{

        if(tx > -50){
          tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    
  }
  
  
  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

  }


  return (
    <div className='testimonials' id='Test'>
      
      <FaArrowLeft className='back-btn'onClick={slideBackward}/>
      <FaArrowRight className='next-btn' onClick={slideForward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user}alt="" />
                <div>
                  <h3>Mose</h3>
                    <span>Kcau, Kenya</span>
                </div>
              </div>
            <p>Being part of Kajubro has opened my eyes to the endless possibilities we can create together. Every meeting feels like a step closer to a brighter future, not just for us, but for the world.</p>            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
              <img src={user}alt="" />
              <div>
                  <h3>Simo</h3>
                    <span>mombasa, Kenya</span>
                </div>
              </div>
              <p>Kajubro has been a platform where my ideas are valued and nurtured. The collaborative spirit here is truly inspiring, and I’ve grown both personally and professionally through our discussions.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
              <img src={user}alt="" />
              <div>
                  <h3>Aj</h3>
                    <span>nax, Kenya</span>
                </div>
              </div>
              <p>At Kajubro, I’ve found a community that shares my passion for innovation and change. It’s more than just a group—it's a movement that’s committed to making a real difference.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
              <img src={user}alt="" />
              <div>
                  <h3>sama</h3>
                    <span>Eld, Kenya</span>
                </div>
              </div>
              <p>Joining Kajubro has been one of the best decisions I’ve made. The diversity of thought and the commitment to progress here are unmatched. We’re not just talking about change; we’re creating it.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
