import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import "./style.css";

const Home = () => {
    const [navData,setNavData]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        const role=localStorage.getItem('role');
        if(role==='admin'){
            navigate('/admin-dashboard')
        }
        if(role==='teacher'){
            navigate('/teacher-dashboard')
        }
        setNavData([
            {
                to:'/admin-login',
                name:'Admin Login'
            }
        ])
    },[])
    const handleNavigate=(role)=>{
        switch(role){
            case 'student':navigate('student-login')
            break;
            case 'teacher':navigate('teacher-login')
            break;
        }
    }
    return (
        <div className="container">
            <Navbar links={navData}/>
            <button onClick={()=>handleNavigate('student')}>Login as Student</button>
            <button onClick={()=>handleNavigate('teacher')}>Login as Teacher</button>
        </div>
    );
}
export default Home;
