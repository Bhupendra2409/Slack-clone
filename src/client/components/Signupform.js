import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Signupform() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setConpassword] = useState('');
    const  [error,setError]= useState('');

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
          history.push("/");
        }
      }, [history]);

    let config = {
        headers:{
            "Content-Type":"application/json",
        },
    }

    let register =async (e)=>{
        e.preventDefault();
        
            if(password!==conpassword){
                setPassword('');
                setConpassword('');
                setError('Password do not match');
                setTimeout(()=>{
                    setError('')
                },3000);
            }
            else{
                try {
                    const {data} = await axios.post("http://localhost:5000/api/auth/register",{name,email,password},config);

                    localStorage.setItem("authToken",data.token);

                    history.push('/');
                } catch (error) {
                    console.log(error);
                    setError(error.response.data.error);
                    setTimeout(()=>{
                        setError('')
                    },5000);
                }
            }
        
    }
    let isEnter=(e)=>{
        if(e.key==='Enter'){
            register(e);
        }
    }

    return (
        <form className='login-form-cnt pb-3' onSubmit={register}>
            <div className="input-data">
            <input className="px-2 mt-2" required type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter name" />
            <input className="px-2 mt-2" required type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter email" />
            <input className="px-2 mt-2" required type="text" minLength={6} onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter password" />
            <input className="px-2 mt-2" required type="text" minLength={6} onChange={(e)=>setConpassword(e.target.value)} value={conpassword} placeholder="Confirm password" onKeyDown={isEnter}/>
            </div>
            <button type='submit' className='login-page-btn btn-success btn' >Signup</button>
            {error && <div className="alert alert-danger text-center p-2 mt-3">{error}</div>}
        </form>
    )
}
