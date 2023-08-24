import React from "react";

import {
    Router,
    Route,
    Routes,
    NavLink,
    HashRouter,

} from "react-router-dom";
import LogoImage from './logo.png';
import "./NavBar.css"

import Home from "../Home/Home"


export default function NavBar() {

    return(
        <HashRouter>
            <ul className="NavBarContainer">
                <li className="LogcPic"><img src={LogoImage} alt="Logo"/></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/s">About Us</NavLink></li>
                <li><NavLink to="/s">Water Delivery service</NavLink></li>
                <li><NavLink to="/s">Our Products</NavLink></li>
                <li><NavLink to="/s">Our Coolers</NavLink></li> 
                <li><NavLink to="/s">Testimonials</NavLink></li>
                <li><NavLink to="/s">Contact Us</NavLink></li>
            </ul>

            <div className="NavBar-Content"> 
                <Routes>
                    <Route exact path="/" Component={Home}/>
                </Routes>
            
            </div>


        </HashRouter>



    );  


}// end bar