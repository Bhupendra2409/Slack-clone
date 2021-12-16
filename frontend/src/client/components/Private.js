import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


import '../login_styles/private.css'

export default function Private() {
    let history = useHistory();
    const [error, setError] = useState('');
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("authToken")){
            history.push("/login")
        }

        const fetchPrivateData = async()=>{
            const config ={
                header:{
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            }

            try {
                const {data}= await axios.get('http://localhost:5000/api/private',config);
                setPrivateData(data.data);
            } catch (error) {
                localStorage.removeItem('authToken');
                setError("Your are not authorized!")
            }
        }
    }, [history]);

    let logout = ()=>{
        localStorage.removeItem('authToken');
        history.push('/login');
    }

    return (
            <>
            {error && <div>{error}</div>}
            {!error &&
             <div>We are in!!
                 
                 <button className="btn btn-success" onClick={logout}>Logout</button>
                 
             </div>}
            </>)
        
    
}
