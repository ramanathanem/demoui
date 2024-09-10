import React from 'react'
import "./Styles/News.css"
import latestnews from '../assets/Image/latestnews.png'
import shopping from '../assets/Image/shopping.png'
import group from '../assets/Image/groubphoto.png'
import image34 from '../assets/Image/image34.png'
import flower from '../assets/Image/flower.png'
const News = () => {
  return (
    <div>
        <div className='d-flex'>

        <div className=' mt-4 ms-4'>
            <div className='image-verlay'>

            
<button className='btnfocus mt-5 ms-3' variant="danger">In Focus</button>
<p className='news-content p-2'>Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car</p>
       <span className='name p-2'>Rahul Gandhi</span>
       </div>

      
<div className=' mt-2 ms-2'>
    <div className='card-bg'>
        <img src={group} className='menucard mt-2 ms-2'/>
        <div>
        <h1 className='hotsport ms-3 mt-4'>Select Citywalk</h1>
        <p className='hotsport-content ms-2'>Wow! Momo Foods enters Bhopal with Wow! </p>
        {/* <p className='content-card'># Citywalk</p> */}
        </div>
    </div>
</div>
<div className=' mt-2 ms-2'>
    <div className='card-bg'>
        <img src={image34} className='menucard mt-2 ms-2'/>
        <div>
        <h1 className='hotsport ms-3 mt-4'>Food & Beverage</h1>
        <p className='hotsport-content ms-2'>KFC opens another outlet in Punjab KFC opens another outlet in Punjab </p>
        {/* <p className='content-card'># Citywalk</p> */}
        </div>
    </div>
</div>
<div className=' mt-2 ms-2'>
    <div className='card-bg'>
        <img src={flower} className='menucard mt-2 ms-2'/>
        <div>
        <h1 className='hotsport ms-3 mt-4'>Select Citywalk</h1>
        <p className='hotsport-content ms-2'>FNP (Ferns N Petals) appoints Ashish Goel</p>
        {/* <p className='content-card'># Citywalk</p> */}
        </div>
    </div>
</div>
        </div>
        

<div>
   <h3 className='latestnews ms-5'>Latest News</h3>
   <img src={latestnews} className='ms-5 mt-4 latest'/>
   <h3 className='latestnews ms-5 mt-5'>Unwrapping the Archies’ reinvention plan</h3>
   <img src={shopping} className='ms-5 mt-2 latest'/>
   <h4 className='ms-5 stores'>How AI is enhancing stores, How AI is enhancing stores</h4>
   <h4 className='ms-5 mt-3 stores'>Croma opens 58 outlets in 6, Croma retails more than 16,000</h4>
<h6 className='stores2 ms-5'>These companies created a lot of hype when they listed on the...</h6>
<h6 className='ms-5 mt-3 stores'>Select Citywalk opens 4 new stores in June</h6>
<h6 className='stores2 ms-5'>These companies created a lot of hype when they listed on the...</h6>
</div>

</div>

    </div>

  )
}

export default News