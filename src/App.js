import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import routes from './routes';
import Navbar from './components/navbar';
import StudentLogin from "./components/StudentLogin";
import TeacherLogin from './components/TeacherLogin';
import AdminLogin from './components/AdminLogin';
import Home from './components/Home';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import ViewStudents from './components/views/viewStudents';
import AddStudent from './components/views/addStudent';
import Settings from './components/views/settings';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import ViewTeachers from './components/views/viewTeachers';
import AddTeacher from './components/views/addTeacher';
import "./components/style.css";

function App() {

  return (
    <div className="App container">
      {/* <Navbar/> */}
      <Routes>
        <Route path={routes.home} element={<Home/>}></Route>
        <Route path={routes.studentLogin} element={<StudentLogin/>}></Route>
        <Route path={routes.teacherLogin} element={<TeacherLogin/>}></Route>
        <Route path={routes.adminLogin} element={<AdminLogin/>}></Route>
        <Route path={routes.teacherDashboard} element={<TeacherDashboard/>}></Route>
        <Route path={routes.viewStudents} element={<ViewStudents/>}></Route>
        <Route path={routes.addStudents} element={<AddStudent/>}></Route>
        <Route path={routes.settings} element={<Settings/>}></Route>
        <Route path={routes.adminDashboard} element={<AdminDashboard/>}></Route>
        <Route path={routes.viewTeachers} element={<ViewTeachers/>}></Route>
        <Route path={routes.addTeachers} element={<AddTeacher/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
/*
<Route exact={true} path={routes.authors}>
  <h1>Authors!</h1>
</Route>
*/
/*
<header>
        <ul>
          <li><Link to={routes.home}>Student Form</Link></li>
          <li><Link to={routes.display}>Display Data</Link></li>
        </ul>
      </header>*/