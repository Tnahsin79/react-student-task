import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { useGetStudentsQuery } from "../api/teacherSlice";
import { useSelector } from "react-redux";
import "./../views/viewStyle.css";
import StudentModal from "./studentModal";
import { useDeleteStudentMutation } from "../api/teacherSlice";
// import { useNavigate } from "react-router-dom";

const ViewStudents = () => {
    const [username, setUserName] = useState(null);
    const [navData, setNavData] = useState([
        {
            to: '/',
            name: 'Logout'
        },
        {
            to: `/${localStorage.getItem('role')}-dashboard`,
            name: `${localStorage.getItem('role')} Dashboard`
        }
        ]);
    const [deleteStudent, { }] = useDeleteStudentMutation();
    const { data, error, isLoading, refetch } = useGetStudentsQuery();
        
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (e, user) => {
        console.log('888', user);
        setUserName(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setUserName(null);
    };
    // useEffect(()=>{
    //     let role=localStorage.getItem('role');
    //     switch(role){
    //         case 'admin':setNavData(prev=>[...prev,{
    //             to: '/admin-dashboard',
    //             name: 'Admin Dashboard'
    //         }]);
    //         break;
    //         case 'teacher':setNavData(prev=>[...prev,{
    //             to: '/teacher-dashboard',
    //             name: 'Teacher Dashboard'
    //         }]);
    //         break;
    //     }
    // },[])
    useEffect(() => {
        refetch();
        // console.log('store', store);
        // console.log(data)
    }, [data])
    const handleDelete = (e,user) => { 
        deleteStudent(user);
    }
    return (
        <div className="studentView container">
            {
                username ? <StudentModal isOpen={isModalOpen} onClose={closeModal} setIsModalOpen={setIsModalOpen} user={username} /> : null
            }
            <Navbar links={navData} />
            <h1>Student List</h1>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>age</th>
                        <th>Edit action</th>
                        <th>Delete action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(user => {
                            return (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td className="View" onClick={(e) => openModal(e, user)} value={user}>Edit</td>
                                    <td className="View" onClick={(e) => handleDelete(e, user)} value={user}>Delete</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewStudents;