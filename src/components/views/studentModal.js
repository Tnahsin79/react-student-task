import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { colors } from '@mui/material';
import { useUpdateStudentMutation } from '../api/teacherSlice';

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

export default function StudentModal({isOpen,onClose,setIsModalOpen,user}) {
  const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setIsModalOpen(true);
//   const handleClose = () => setIsModalOpen(false);
  const [userDetail,setUserDetail]=React.useState(user)
  const [updateStudent,{ isLoading, isError, error, data }]=useUpdateStudentMutation();
  
  React.useEffect(()=>{
    setUserDetail(user)
    // console.log(userDetail.name);
  },[])
  const handleChange=(e,field)=>{
    setUserDetail(prev=>({
        ...prev,
        name:e.target.value
    }))
    console.log(userDetail.name);
  }
  const handleSubmit=(e)=>{
    console.log('::::::',userDetail)
    e.preventDefault();
    updateStudent(userDetail);
    setIsModalOpen(false);
  }
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h3>Edit User Form</h3>
            <form>
                <label name="name" style={{ color: 'black'}}>Name- </label>
                <input type='text' value={userDetail.name} onChange={e=>handleChange(e,'name')}></input>
                <label name="name" style={{ color: 'black'}}>Email- </label>
                <input type='text' value={userDetail.email} onChange={e=>handleChange(e,'email')}></input>
                <label name="name" style={{ color: 'black'}}>Age- </label>
                <input type='text' value={userDetail.age} onChange={e=>handleChange(e,'age')}></input>
                <button onClick={e=>handleSubmit(e)}>Submit</button>
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
  );
}