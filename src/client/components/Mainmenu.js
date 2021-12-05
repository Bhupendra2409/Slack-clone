import React from 'react'
import Chatwin from './Chatwin'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import '../styles/mainmenu.css'

export default function Mainmenu() {
    return (
        <div className='mm-cnt'>
            <Navbar />
            <div className="sb-cw-cnt">
                <Sidebar />
                <Chatwin channelName='announcements'/>
            </div>
            
        </div>
    )
}
