import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const StudentLogin = () => {
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [role,setRole]=useState('student')
    const navigate=useNavigate();
    const handleInput=(e,field)=>{
        switch(field){
            case 'username': setUserName(e.target.value)
            break;
            case 'password': setPassword(e.target.value)
            break;
        }
    }
    const submitForm=()=>{alert(username,password)}
    return (
        <div className="container">
            <h1>STUDENT LOGIN FORM</h1>
            <input type='text' placeholder="username" onChange={e=>handleInput(e,'username')}></input>
            <input type='text' placeholder="password" onChange={e=>handleInput(e,'password')}></input>  
            <button onClick={()=>submitForm()}>Login</button>
            <button onClick={()=>{navigate('/')}}>Back</button>
        </div>
    )
}

export default StudentLogin;