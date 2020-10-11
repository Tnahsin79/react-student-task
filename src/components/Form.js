import React, { useEffect, useState } from "react";
import allCountries from "./countries.js";
import allStates from "./state.js";
import allCities from "./cities.js";
import "./style.css";

const StudentForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [address1, setAdd1] = useState(null);
    const [address2, setAdd2] = useState(null);
    const [country, setCountry] = useState(null);
    const [state, setstate] = useState(null);
    const [city, setCity] = useState(null);
    const [gender, setGender] = useState(null);
    const [status, setStatus] = useState(null);
    const [favFood, setFood] = useState(null);
    const [favColor, setColor] = useState(null);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        setCountries(allCountries);
        //setStates(allStates);
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
            console.log(JSON.stringify(data));
            setName(null);
            setEmail(null);
            setAdd1(null);
            setAdd2(null);
            setCountry(null);
            setstate(null);
            setCity(null);
            setGender(null);
            setStatus(null);
            setFood(null);
            setColor(null);
            let temp = await fetch("https://react-student-server.herokuapp.com/student", {
                //let temp = await fetch("http://localhost:3001/student",{
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(temp)
            alert("Student added");
        }
        catch (error) {
            console.log(error);
            //alert(error);
        }
    }
    return (
        <div className="container">
            <h1>STUDENT FORM</h1>
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

export default StudentForm;