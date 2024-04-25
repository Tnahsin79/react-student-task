import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminLoginMutation } from "./api/adminSlice";
import "./style.css";

const AdminLogin = () => {
    const [username,setUserName]=useState('admin@mail.com');
    const [password,setPassword]=useState('123456');
    const [role,setRole]=useState('teacher')
    const [loginAdmin,{ isLoading, isError, error, data }]=useAdminLoginMutation();
    const navigate=useNavigate();
    const handleInput=(e,field)=>{
        switch(field){
            case 'username': setUserName(e.target.value)
            break;
            case 'password': setPassword(e.target.value)
            break;
        }
    }
    useEffect(()=>{
        let token=localStorage.getItem('token');
        let userDetail=localStorage.getItem('user')
        if(token){
            console.log('??',token);
            // localStorage.setItem('token',token);
            // localStorage.setItem('user',userDetail);
            navigate('/admin-dashboard')
        }
    },[])

    useEffect(()=>{
        console.log('!!',data);
        if(data && data.token){
            console.log('??',data);
            localStorage.setItem('token',data.token);
            localStorage.setItem('user',JSON.stringify(data.userDetail));
            localStorage.setItem('role',data.Role);
            navigate('/admin-dashboard')
        }
    },[data])
    
    const submitForm=()=>{
        // console.log(username,password)
        loginAdmin({username,password});
        // if(data.token)
            // console.log('??',data);
            // localStorage.setItem('token',data.token);
            // localStorage.setItem('user',data.userDetail);
            // navigate('/teacher-dashboard')
    }
    return (
        <div className="container">
            <h1>ADMIN LOGIN FORM</h1>
            <input type='text' placeholder="username" onChange={e=>handleInput(e,'username')} value={username}></input>
            <input type='password' placeholder="password" onChange={e=>handleInput(e,'password')} value={password}></input>
            <button onClick={()=>submitForm()}>Login</button>
            <button onClick={()=>{navigate('/')}}>Back</button>
        </div>
    )
}

export default AdminLogin;