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
            
            <div className="dropdown">
            <button className="dropdown-toggle" type="button" id="menudd" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={`${mmicon}`} id='mmicon' alt="" />
            </button>
            <ul className="dropdown-menu py-3" aria-labelledby="menudd">
                <li><a className="dropdown-item grey py-2 px-4" href="/">Internships IIT Roorkee</a></li>
                <li><a className="dropdown-item grey py-2 px-4" href="/">Slack Clone Project</a></li>
                <li><a className="dropdown-item grey py-2 px-4" href="/">Whatsapp Clone</a></li>
                <li><a className="dropdown-item grey py-2 px-4" href="/">Create new Workspace</a></li>
                <li><a className="dropdown-item grey py-2 px-4" href="/">Sign out of all Workspaces</a></li>

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
            
            <div className="dropdown">
            <button className="dropdown-toggle act-cnt" type="button" id="accdd" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={`${accicon}`} id='accicon' alt="" />
            </button>
            <ul className="dropdown-menu py-3" aria-labelledby="accdd">
                <li><a className="dropdown-item grey py-2 px-4" href="/">My Profile</a></li>
                <li><a className="dropdown-item grey py-2 px-4" href="/">Saved messages</a></li>
                <li><a className="dropdown-item grey py-2 px-4" href="/">Log out</a></li>
                
            </ul>
            </div>
        </div>
    )
}
