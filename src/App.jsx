import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'
import Events from './Components/Events/Events'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Kj from './Components/kj/Kj'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <>
    <Navbar/>
    <Landing/>
    <div className="container">
      <Title subtitle='Our Events' title='what we do'/>
    <Events/>
    <About setPlayState={setPlayState}/>
    <Title subtitle='Gallery' title='kajubro photos'/>
    <Kj/>
    <Title subtitle='TESTIMONIALS' title='what members says '/>
    
    <Testimonial/>
    <Title subtitle='Contact us' title='Get in Touch '/>
    <Contact/>
    <Footer/>

    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>

  )
}

export default App
