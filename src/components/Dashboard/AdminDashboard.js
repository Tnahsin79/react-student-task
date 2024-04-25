import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
// import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
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
            },
            {
                to:'/view-teachers',
                name:'View All Teachers'
            },
            {
                to:'/add-teacher',
                name:'Add Teacher'
            }
        ])
    },[])
    const submitForm=()=>{}
    return (
        <div className="container">
            <Navbar links={navData}/>
            <h1>Admin Dashboard</h1>
        </div>
    )
}

export default AdminDashboard;