import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
// import { useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = (props) => {
    // const [user,setUser]=useState(sessionStorage.getItem('user'));
    // console.log(props);
    return (
        <nav>
            <ul>
                {
                    props.links.map(item =>
                        {
                            return item.name==='Logout'?
                            <li key={item.to} onClick={()=>{localStorage.clear()}}><Link to={item.to}>{item.name}</Link></li>:
                            <li key={item.to}><Link to={item.to}>{item.name}</Link></li>
                        }
                    )
                }
            </ul>
        </nav>
    );
}
export default Navbar;
