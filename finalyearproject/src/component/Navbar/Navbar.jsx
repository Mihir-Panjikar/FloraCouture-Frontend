import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/1741534887310.png'
import search from '../../assets/search1.png'
import {link} from 'react-router-dom'
const Navbar = () =>{

const [menu,setMeu] = useState("shop");

return (
  <div className ='navbar'>
    <img src={logo} alt="" className='logo'/>

    <ul>
    <li>
      <link to='/home' >Home</link>
    </li>
        <li> <link to='/craftitems' >Craft Items</link></li>
        <li><link to='/Jewels' >Jewels</link></li>
    </ul>

    <div className='Login'>
        <button>Login</button>
    </div>

    <div className='search-box'>
        <input type="text" placeholder='search'/>
        <img src={search} alt="" className='search'/>
    </div>


  </div>
)
}

export default Navbar