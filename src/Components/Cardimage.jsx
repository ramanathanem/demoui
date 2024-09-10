import React from 'react'
import "./Styles/Cardimage.css"
import menuimage1 from "../assets/Image/menuimage1.png"
import menuimage2 from "../assets/Image/menuimage2.png"
import menuimage3 from "../assets/Image/menuimage3.png"
const Cardimage = () => {
  return (
    <div>
        <div className='cardsimage'>

<div className=' mt-2 ms-5'>
    <div className='card-bg'>
        <img src={menuimage1} className='menucard mt-2 ms-2'/>
        <div>
        <h1 className='hotsport ms-3 mt-4'>HOTSPORT</h1>
        <p className='hotsport-content ms-2'>Luxury hotspots: 5 most expensive high streets in the..</p>
        </div>
    </div>
</div>
<div >
<div className=' mt-2 ms-5'>
    <div className='card-bg'>
        <img src={menuimage2} className='menucard mt-2 ms-2'/>
        <div>
        <h1 className='hotsport ms-3 mt-4'>All</h1>
        <p className='hotsport-content ms-2'>5 ways to leverage the power of ChatGPT in retail</p>
        </div>
    </div>
</div>
</div>
<div>
<div className=' mt-2 ms-5'>
    <div className='card-bg'>
        <img src={menuimage3} className='menucard mt-2 ms-2'/>
        <div>
        <h1 className='hotsport ms-3 mt-4'>Shipping</h1>
        <p className='hotsport-content ms-2'>Reliance to open 250 Azorte stores in 2-3 years</p>
        </div>
    </div>
</div>
</div>
</div>
        </div>
    
  )
}

export default Cardimage