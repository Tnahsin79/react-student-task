import React, { useEffect, useState } from "react";
import allCountries from "./countries.js";
import allStates from "./state.js";
import allCities from "./cities.js";
import "./style.css";

const EditForm = (props) => {

    const id = props.id;
    //const student = props.student;
    const changeId = props.changeId;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address1, setAdd1] = useState("");
    const [address2, setAdd2] = useState("");
    const [country, setCountry] = useState("");
    const [state, setstate] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [favFood, setFood] = useState("");
    const [favColor, setColor] = useState("");
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        //console.log(id, student);
        setCountries(allCountries);
    }, [countries]);

    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changeAdd1 = (e) => {
        setAdd1(e.target.value);
    }
    const changeAdd2 = (e) => {
        setAdd2(e.target.value);
    }
    const changeCountry = (e) => {
        let id = e.target.value.split("-")[0];
        setCountry(e.target.value.split("-")[1]);
        setStates(allStates.filter(s => s.country_id === id));
    }
    const changeState = (e) => {
        //setstate(e.target.value);
        let id = e.target.value.split("-")[0];
        setstate(e.target.value.split("-")[1]);
        setCities(allCities.filter(c => c.state_id === id));
    }
    const changeCity = (e) => {
        setCity(e.target.value);
    }
    const changeGender = (e) => {
        setGender(e.target.value);
    }
    const changeStatus = (e) => {
        setStatus(e.target.value);
    }
    const changeFood = (e) => {
        setFood(e.target.value);
    }
    const changeColor = (e) => {
        setColor(e.target.value);
    }
    const submit = async () => {
        try {
            var data = {
                sid: id,
                Name: name,
                Email: email,
                Address1: address1,
                Address2: address2,
                Country: country,
                State: state,
                City: city,
                Gender: gender,
                Status: status,
                FavFood: favFood,
                FavColor: favColor
            }
            let temp = await fetch("https://react-student-server.herokuapp.com/update", {
                //let temp = await fetch("http://localhost:3001/update",{
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(temp)
            alert("Student updated");
        }
        catch (error) {
            console.log(error);
            //alert(error);
        }
        changeId();
    }
    return (
        <div className="container">
            <h1>UPDATE FORM</h1>
            <h4 className="note">Kindly click on the update button to update entry</h4>
            <h4 className="note">NOTE: the values will not be updated unless the "student id" field below has a value</h4>
            <h4>Student id: {id}</h4>
            <form>
                <input onChange={changeName} type="text" placeholder="Enter Name" required /><br></br><br></br>
                <input onChange={changeEmail} type="text" placeholder="Enter Email" required /><br></br><br></br>
                <input onChange={changeAdd1} type="text" placeholder="Enter Address line 1" required /><br></br><br></br>
                <input onChange={changeAdd2} type="text" placeholder="Enter Address line 2" required /><br></br><br></br>

                <select onChange={changeCountry} name="country">
                    <option value="">Select Country</option>
                    {
                        countries.map((c) => <option key={c.id} id={c.id} >{c.id}-{c.name}</option>)
                    }
                </select>
                <select onChange={changeState} name="state">
                    <option value="">Select State</option>
                    {
                        states.map((s) => <option key={s.id} id={s.id} >{s.id}-{s.name}</option>)
                    }
                </select>
                <select onChange={changeCity} name="city">
                    <option value="">Select City</option>
                    {
                        cities.map((c) => <option key={c.id} id={c.id} >{c.name}</option>)
                    }
                </select>

                <div onChange={changeGender} className="radio">
                    <label className="label">Gender</label><br></br>
                    <label><input value="Male" type="radio" name="gender" />Male</label><br></br>
                    <label><input value="Female" type="radio" name="gender" />Female</label>
                </div>
                <div onChange={changeStatus} className="radio">
                    <label className="label">Marital status</label><br></br>
                    <label><input value="Unmarried" type="radio" name="status" />Unmarried</label><br></br>
                    <label><input value="Married" type="radio" name="status" />Married</label>
                </div>
                <input onChange={changeFood} type="text" placeholder="Enter favorite food" /><br></br><br></br>
                <input onChange={changeColor} type="text" placeholder="Enter favorite color" /><br></br><br></br>
                <button className="btn btn-outline-primary" onClick={submit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default EditForm;