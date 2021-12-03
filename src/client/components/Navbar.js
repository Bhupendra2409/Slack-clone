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
            <img src={`${mmicon}`} id='mmicon' alt="" />
            <div className="btn-cnt">
                <div className="nav-btn"><img src={`${bckicon}`}  alt="" /></div>
                <div className="nav-btn"><img src={`${fwdicon}`}  alt="" /></div>
            </div>
            <div className="search-cnt">
                <div id="search-text"><textarea name="search-textarea" id="" cols="30" rows="1" placeholder="Search here"></textarea> </div>
                <img src={`${searchicon}`} className='search-icon' alt="" />
            </div>
            <div className="right-cnt">Project SLACK</div>
            <div className="acc-cnt"><img src={`${accicon}`} alt="" /></div>
        </div>
    )
}
