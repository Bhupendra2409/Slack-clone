import React from 'react'

import '../styles/navbar.css'
import mmicon from '../styles/images/mmicon.svg'
import fwdicon from '../styles/images/fwdicon.svg'
import bckicon from '../styles/images/bckicon.svg'
import searchicon from '../styles/images/searchicon.svg'
import accicon from '../styles/images/accicon.svg'


export default function Navbar() {
    return (
        <div className="big-cnt">
            
            <div class="dropdown">
            <button class="dropdown-toggle" type="button" id="menudd" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={`${mmicon}`} id='mmicon' alt="" />
            </button>
            <ul class="dropdown-menu" aria-labelledby="menudd">
                <li><a class="dropdown-item" href="">Action</a></li>
                <li><a class="dropdown-item" href="">Another action</a></li>
                <li><a class="dropdown-item" href="">Something else here</a></li>
            </ul>
            </div>
            <div className="btn-cnt">
                <div className="nav-btn"><img src={`${bckicon}`}  alt="" /></div>
                <div className="nav-btn"><img src={`${fwdicon}`}  alt="" /></div>
            </div>
            <div className="search-cnt">
                <div id="search-text"><textarea name="search-textarea" cols="30" rows="1" placeholder="Search here"></textarea> </div>
                <img src={`${searchicon}`} className='search-icon' alt="" />
            </div>
            <div className="right-cnt">Project SLACK</div>
            <div className="acc-cnt"><img src={`${accicon}`} alt="" /></div>
        </div>
    )
}
