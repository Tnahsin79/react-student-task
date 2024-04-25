import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
// import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
    // const [username,setUserName]=useState('');
    const [navData,setNavData]=useState([]);
    useEffect(()=>{
        console.log(JSON.parse(localStorage.getItem('user')));
        setNavData([
            {
                to:'/',
                name:'Logout'
            },
            {
                to:'/view-students',
                name:'View All Students'
            },
            {
                to:'/add-student',
                name:'Add Students'
            },
            {
                to:'/settings',
                name:'Settings'
            }
        ])
    },[])
    const submitForm=()=>{}
    return (
        <div className="container">
            <Navbar links={navData}/>
            <h1>Teacher Dashboard</h1>
        </div>
    )
}

export default TeacherDashboard;