import React, { useEffect, useState } from "react";
import EditForm from "./EditForm"
import "./style.css";

const Display = () => {
    const [data, setData] = useState([]);
    const [id, setid] = useState("");
    const [delid, setDelid] = useState("");
    //const [student, setStudent] = useState([]);

    useEffect(() => {
        //setid("");
        fetch("https://react-student-server.herokuapp.com/students")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, [id, data, delid]);

    const changeId = () => {
        setid("");
    }

    const clickDelete = async (e) => {
        setDelid(e.target.id);
        console.log(e.target.id);
        console.log(delid);
        try {
            var data = {
                delsid: e.target.id
            }
            //let temp = 
            await fetch("https://react-student-server.herokuapp.com/delete", {
                //let temp = await fetch("http://localhost:3000/student",{
                method: "DELETE",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            alert("Student deleted");
        }
        catch (error) {
            console.log(error);
            //alert(error);
        }
        setDelid("");
    }

    const clickUpdate = (e) => {
        console.log(e.target.id);
        setid(e.target.id);
        //setStudent(data.filter(element => element._id === e.target.id));
        console.log(id);
    }

    return (
        <div className="container-fluid">
            <h1>STUDENT DATA</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Country</th>
                        <th scope="col">State</th>
                        <th scope="col">City</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Marital Status</th>
                        <th scope="col">Favorite Food</th>
                        <th scope="col">Favorite Color</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(info => {
                            return (
                                <tr key={info._id}>
                                    <td>{info.Name}</td>
                                    <td>{info.Email}</td>
                                    <td>{info.Address1} {info.Address2}</td>
                                    <td>{info.Country}</td>
                                    <td>{info.State}</td>
                                    <td>{info.City}</td>
                                    <td>{info.Gender}</td>
                                    <td>{info.Status}</td>
                                    <td>{info.Food}</td>
                                    <td>{info.Color}</td>
                                    <td>
                                        <button className="btn btn-danger" id={info._id} onClick={clickDelete}>DELETE</button>
                                        <a href="#editForm"><button className="btn btn-primary" onClick={clickUpdate} id={info._id}>UPDATE</button></a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div id="editForm">
                <EditForm id={id} changeId={changeId} />
            </div>
        </div>
    );
}
export default Display;
/*
{
                    id !== "" ? <EditForm id={id} student={student[0]} /> : null
                }*/