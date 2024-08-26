import React from 'react'
import './Events.css'
import event1 from '../../assets/event1.jpg'
import event2 from '../../assets/event2.jpg'
import event6 from '../../assets/event6.jpg'
import event3 from '../../assets/game.png'
import event4 from '../../assets/meeting.png'
import event5 from '../../assets/cel.png'

const Events = () => {
  return (
    <div className='Events' id='Even'>
      <div className="Event">
        <img src={event1} alt="" />
        <div className="caption">
         <img src={event3}/>
         <p>Gaming and fun</p>
        </div>
      </div> 
      
      <div className="Event">
        <img src={event2} alt="" />
        <div className="caption">
         <img src={event5}/>
         <p>Interactive session</p>
        </div>
      </div>
      
       <div className="Event">
        <img src={event6} alt="" />
        <div className="caption">
         <img src={event4}/>
         <p>Meetings</p>
        </div>
      </div>
    </div>
  )
}

export default Events
