import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import waterBackground from './Components/Home/water_first_background.jpg';
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/aboutus">About US</NavLink></li>
            <li><NavLink to="/waterproducts">Water Products</NavLink></li>
            <li><NavLink to="/coolers">Coolers</NavLink></li>
            <li><NavLink to="/contactus">Contact Us</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>

          <div className="content">
            <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/aboutus" Component={AboutUs}/>
            <Route path="/contactus" Component={ContactUs}/>
            </Routes>

          </div>
    
        </div>
      </HashRouter>

    );
  }
}
 
export default Main;
