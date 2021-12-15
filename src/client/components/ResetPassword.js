import React from 'react'
import  { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../login_styles/resetPassword.css'

export default function ResetPassword({match}) {
    const [newpass, setNewpass] = useState('');
    const [conpass, setConpass] = useState('');
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("")

    let submitdetails =async (e)=>{
        e.preventDefault();

        let config = {
            headers:{
                "Content-Type":"application/json",
            },
        };

        if(newpass!==conpass){
            setConpass('');
            setNewpass("");
            setError('Passwords do not match')
            setTimeout(() => {
                setError('');
            }, 3000);
            return;
        }
        
        try {
            const {data} = await axios.put(`http://localhost:5000/api/auth/resetpassword/${match.params.resettoken}`,{password:newpass},config);
            console.log(data);
            setSuccess(data.data);
        
        } catch (error) {
            setError(error.response.data.error)          ;
        setNewpass('');
        setConpass('');
        setTimeout(()=>{
            setError('');
        },3000);
        }
        
    }

    let isEnter=(e)=>{
        if(e.key==='Enter'){
            submitdetails(e);
        }
    }
    return (
    <div className='container pb-3 d-flex flex-column vh-100 justify-content-center'>
            <div className="container d-flex my-3 fs-1 fw-bold">Password Reset</div>
        <div className="input-data">
        <input className="px-2 mt-2" type="text" placeholder="Enter new Password" value={newpass} onChange={(e)=>setNewpass(e.target.value)}/>
        <input className="px-2 mt-2" type="text" placeholder="Confirm new password" value={conpass} onChange={(e)=>setConpass(e.target.value)} onKeyDown={isEnter}/>
        </div>
        <button type='submit' className='login-page-btn btn-success btn fw-bold ' onClick={submitdetails}>Submit</button>
        <div className="h-25 mt-3">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success} <Link to="/login">Login</Link></div>}
        </div>
    </div>
    )
}
