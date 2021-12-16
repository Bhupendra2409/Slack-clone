import React,{useState} from 'react'
import '../login_styles/forgotPassword.css'
import axios from 'axios';



export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("")

    let forgotPassword= async (e)=>{
        e.preventDefault();
        let config = {
            headers:{
                "Content-Type":"application/json",
            },
        }

        
    try {
        const {data} = await axios.post("http://localhost:5000/api/auth/forgotpassword",{email},config);

        setSuccess(data.data);

    } catch (error) {
        setError(error.response.data.error)          ;
        setEmail('');
        setTimeout(()=>{
            setError('');
        },3000);
    }   
    }

    return (
        <form className='container d-flex vh-100 flex-column justify-content-center ' onSubmit={forgotPassword}>
            <h1 className='fw-bold mb-4'>Forgot password </h1>
            <h6>A password reset link will be sent to your registered email id. Please check your inbox !</h6>
            <label htmlFor="inp-email" className="fw-bold mt-3">Email</label>
            <input className='mb-3 mt-1' type="email" required id="inp-email" value={email} placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
            <button className="btn btn-success px-3 align-self-center mb-3">Send Email</button>
            <div className="h-25">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
            </div>
           
           
        </form>
    )
}
