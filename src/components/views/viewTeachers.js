import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { useGetStudentsQuery } from "../api/teacherSlice";
import { useGetTeachersQuery } from "../api/adminSlice";
import { useSelector } from "react-redux";
import "./../views/viewStyle.css";
import StudentModal from "./studentModal";
import TeacherModal from "./teacherModal";
import { useDeleteStudentMutation } from "../api/teacherSlice";
import { useDeleteTeacherMutation } from "../api/adminSlice";
// import { useNavigate } from "react-router-dom";

const ViewTeachers = () => {
    const [userdata, setUserData] = useState(null);
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
    const [deleteTeacher, { }] = useDeleteTeacherMutation();
    const { data, error, isLoading, refetch } = useGetTeachersQuery();
    // const store = useSelector(state => state)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (e, user) => {
        console.log('888', user);
        setUserData(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setUserData(null);
    };
    useEffect(() => {
        refetch();
        // console.log('store', store);
        // console.log(data)
    }, [data,userdata])
    const handleDelete = (e,user) => { 
        deleteTeacher(user);
    }
    return (
        <div className="studentView container">
            {
                userdata ? <TeacherModal isOpen={isModalOpen} onClose={closeModal} setIsModalOpen={setIsModalOpen} user={userdata} setUserData={setUserData}/> : null
            }
            <Navbar links={navData} />
            <h1>Teachers List</h1>
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

export default ViewTeachers;