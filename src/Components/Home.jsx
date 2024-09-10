import React from 'react'
import logo from "../assets/Image/Group.png"
import indiaretail from '../assets/Image/indiaretail.png'
import "./Styles/Home.css"
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div className='wrapper'>

 
    <div>
        <img src={logo} alt='logo' className='logo'/>
    </div>
    <div className='home-content'>

    <div className='container mt-2'>

   
    <div class="row">
  <div class="col">
    <input className='search'
    placeholder='Search here'
    type='search'
    /></div>
  <div class="col">  <img src={indiaretail} className='logo2'/></div>
  <div class="col subcribe-button">   <Button className='btn btn-danger'>Subscribe</Button></div>
  <div class="col"> <Button variant="light">Sign In</Button></div>
</div>
</div>
        
</div>

 
</div>

   

  )
}

export default Home