import React,{useState,useEffect} from 'react'
import '../login_styles/login.css'
import Loginform from './Loginform'
import Signupform from './Signupform'

export default function Login() {
    
    const [status, setStatus] = useState('Login')
    const [loginbtn, setLoginbtn] = useState('active')
    const [signupbtn, setSignupbtn] = useState('')
    useEffect(() => {
        if(status==='Login'){
            setLoginbtn('active');
            setSignupbtn('');
        }
        else{
            setLoginbtn('');
            setSignupbtn('active');
        }
    }, [status])
    return (
        <div className="big-cnt container d-flex">
        <div className="outer-cnt container d-flex flex-column">
            <div className="upper-cnt">
                <button className={`${loginbtn} btn  my-2 px-2`} onClick={()=>setStatus('Login')}>Login</button>
                <button className={`${signupbtn} btn  my-2 px-2`} onClick={()=>setStatus('Signup')}>Signup</button>
            </div>
            {status==='Login' && <Loginform />}
            {status==='Signup' && <Signupform/>}
            </div>
        </div>
    )
}
