import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { useGetStudentsQuery } from "../api/teacherSlice";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./../views/viewStyle.css";
// import { useAddStudentMutation } from "../api/teacherSlice";
import { useAddTeacherMutation } from "../api/adminSlice";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddTeacher = () => {
    const [open, setOpen] = React.useState(false);
    const navigate=useNavigate();
    const [userDetail, setUserDetail] = React.useState({})
    const [isModalOpen, setIsModalOpen] = useState(true);
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
    const [addTeacher,{ isLoading, isError, error, data }]=useAddTeacherMutation();
    // useEffect(() => {
    // }, [])
    const handleChange = (e, field) => {
        switch (field) {
            case 'name': setUserDetail(prev => ({
                ...prev,
                name: e.target.value
            }));
                break;
            case 'email': setUserDetail(prev => ({
                ...prev,
                email: e.target.value
            }));
                break;
            case 'age': setUserDetail(prev => ({
                ...prev,
                age: parseInt(e.target.value)
            }));
                break;
            case 'password': setUserDetail(prev => ({
                ...prev,
                password: e.target.value
            }));
                break;
        }
    }
    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log('::::::', userDetail);
        addTeacher(userDetail);
        setUserDetail({});
        // e.preventDefault();
        // updateStudent(userDetail);
        // setIsModalOpen(false);
    }
    const openModal = (e, user) => {
        console.log('888');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        console.log('bla bla')
        navigate(`/${localStorage.getItem('role')}-dashboard`)
    };
    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Navbar links={navData} />
            <Modal
                open={isModalOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3>Add Teacher Form</h3>
                    <form>
                        <label name="name" style={{ color: 'black' }}>Name- </label>
                        <input type='text' value={userDetail.name} onChange={e => handleChange(e, 'name')}></input>
                        <label name="name" style={{ color: 'black' }}>Email- </label>
                        <input type='text' value={userDetail.email} onChange={e => handleChange(e, 'email')}></input>
                        <label name="name" style={{ color: 'black' }}>Age- </label>
                        <input type='number' value={userDetail.age} onChange={e => handleChange(e, 'age')}></input>
                        <label name="name" style={{ color: 'black' }}>Password- </label>
                        <input type='password' value={userDetail.password} onChange={e => handleChange(e, 'password')}></input>
                        <button onClick={e => handleSubmit(e)}>Submit</button>
                    </form>
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
                </Box>
            </Modal>
        </div>
    )
}

export default AddTeacher;