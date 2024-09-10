import React from 'react'
import date from "../assets/Image/Vector.png"
import menu from "../assets/Image/vectormenu.png"
import "./Styles/Menu.css"
const Menu = () => {
  return (
    <div className='mt-3'>
        <ul className='menu-style'>
            <li><img src={menu} className='menu'/></li>
            <li className='home-menu'>Home</li>
            <li className='caregories'>Categories</li>
            <li className='caregories'> IR Prime</li>
            <li className='caregories'>Events</li>
            <li className='caregories'>Bookstore</li>
            <li className='caregories'>Newsletter</li>
          <li className='caregories'>Video</li>
          <li className='date'>Friday, 30 June 2023</li>
        </ul>
        <div>
            <ul className='lifestyle-display'>
                <li className='lifestyle'>Fashion & Lifestyle</li>
                <li className='lifestyle'>Beauty & Wellness</li>
                <li className='lifestyle'>Food & Beverage</li>
                <li className='lifestyle'>Consumer Durables & IT</li>
                <li className='lifestyle'>Entertainment</li>
                <li className='lifestyle'>Home Decor & Furnishing</li>
                <li className='lifestyle'>Specialty Retail</li>
            </ul>
        </div>
    </div>
  )
}

export default Menu