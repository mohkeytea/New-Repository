import React from 'react'
import './Kj.css'
import {FaArrowRight} from 'react-icons/fa'
import gallery_1 from '../../assets/event1.jpg'
import gallery_2 from '../../assets/event2.jpg'
import gallery_3 from '../../assets/event3.jpg'
import gallery_4 from '../../assets/event6.jpg'

const Kj = () => {
  return (
    <div className='kj' id='phot'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_1} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>see more here<FaArrowRight className="back-arrow"/></button>
    </div>
  )
}

export default Kj
