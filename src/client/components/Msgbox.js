import React from 'react'

import '../styles/msgbox.css'

export default function Msgbox({isFile,isMsg,name,email,msg}) {
    return (
        <div id='msg-box-cnt'>
             <div id="msg-box-profile">
                P
             </div>
             <div id="msg-box-name">
                <div id="msg-name">{name}</div>
                <div id="msg-email">{email}</div>
             </div>
             <div id="msg-box-text">
                Koi jo mila to mujhe aesa lagta tha jaise meri saari duniya mein geeto ki rut aur rango ki barkha hai khushboo ki aandhi hai, khoyi hui si ab saari fizaayein hai 
            </div>
        </div>
    )
}
