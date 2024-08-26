import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

const[sticky,setSticky] = useState(false);
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false)
  })
},[])

const[mobileMenu, setMobileMenu] = useState(false);
const toogleMenu =()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}

  return (
   <nav className={`container ${sticky? 'dark-nav' :''}`}>
    <div className='k'><img src={logo} alt="" className='logo'/> <span className='kaj'>Kajubro</span></div>
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
    <li><Link to="Land" smooth={true} offset={0} duration={500}>Home</Link> </li>

        <li> <Link to="Even" smooth={true} offset={-260} duration={500}>Events</Link> </li>
       
        <li>   <Link to="Abo" smooth={true} offset={-150} duration={500}>About us</Link> </li>
       
        <li>  <Link to="phot" smooth={true} offset={-260} duration={500}>Photos</Link> </li>
        
        <li>  <Link to="Test" smooth={true} offset={-260} duration={500}>Testimonials</Link> </li>
       
        <li>   <Link to="Cont" smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link> </li>
    </ul>
      <GiHamburgerMenu size={50} style={{ fontWeight: 'bold' }} className='menu-icon' onClick={toogleMenu}/>
   </nav>
  )
}

export default Navbar
