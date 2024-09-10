import React from 'react'
import './Styles/Webspecial.css'
import rahul from './Styles/Rahul.png'
import mask from '../assets/Image/mask.png'
const Webspecial = () => {
  return (
    <div>
        <hr/>
    
<div className='row'>
<div className='col'>
<img src={rahul} className='rahul'/>
</div>
<div className='col'>
<ul>
    <li>Cinema industry welcomes lowering GST rates</li>
    <li>Patanjali Ayurved to sell 7% stake in Patanjali</li>
    <li>Select Citywalk opens 4 new stores in June</li>
    <li>Govt imposes import restrictions on certain gold </li>
    <li>Joom Marketplace offers a global window for sellers</li>
</ul>
</div>
<div className='col'>
<img src={mask}/>
</div>
</div>
    </div>
   
  )
}

export default Webspecial