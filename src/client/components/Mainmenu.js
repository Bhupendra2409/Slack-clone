import React from 'react'
import Chatwin from './Chatwin'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Mainmenu() {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Chatwin />
        </div>
    )
}
