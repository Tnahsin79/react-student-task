import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import TeacherModal from "./teacherModal";
import AdminModal from "./adminModal";
// import { Button } from "bootstrap";
// import { useNavigate } from "react-router-dom";

const Settings = () => {
    const [navData, setNavData] = useState([]);
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [role,setRole]=useState(localStorage.getItem('role'))
    useEffect(() => {
        setNavData([
            {
                to: '/',
                name: 'Logout'
            },
            {
                to: `/${localStorage.getItem('role')}-dashboard`,
                name: `${localStorage.getItem('role')} Dashboard`
            }])
    }, [])
    const openModal = (e, user) => {
        console.log('888', user);
        // setUserName(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // setUserName(null);
    };
    return (
        <div className="container">
            {
                userData&&role==='teacher' ? <TeacherModal isOpen={isModalOpen} onClose={closeModal} setIsModalOpen={setIsModalOpen} user={userData} setUserData={setUserData} /> : null
            }
            {
                userData&&role==='admin' ? <AdminModal isOpen={isModalOpen} onClose={closeModal} setIsModalOpen={setIsModalOpen} user={userData} setUserData={setUserData} /> : null
            }
            <Navbar links={navData} />
            <h1>Settings</h1>
            <h3>ID: {userData._id}</h3>
            <h3>Name: {userData.name}</h3>
            <h3>Email: {userData.email}</h3>
            <h3>Age: {userData.age}</h3>
            <button onClick={(e) => openModal(e, userData)} value={userData}>Edit Details</button>
        </div>
    )
}

export default Settings;