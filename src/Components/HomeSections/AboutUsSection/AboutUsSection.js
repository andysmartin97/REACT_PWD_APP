import React from "react";
import About01 from "./About01.png";
import About02 from "./About02.png";
import About03 from "./About03.png";
import "./AboutUsSection.css"


export default function AboutUsSection () {

    return(
        <div className="AboutUsSection-Container">

            <div className="AboutUsBoxes-Container">
                
                <div className="AboutBox">
                    <img src={About01}/>
           
                    <p>We deliver our delicious purified, 
                    spring and alkalized bottled water to homes 
                    and offices all over Orange County and beyond.</p>
                </div>

                <div className="AboutBox">
                    <img src={About02}/>
                
                    <p>Our courteous and professional 
                    delivery people will bring your bottled 
                    water to your doorstep or wherever else 
                    you prefer; we'll even put 
                    a new bottle on the cooler for you.</p>
                </div>

                <div className="AboutBox">
                    <img src={About03}/>
                    
                    <p>Paradise Drinking Water employees, 
                    both in the field and at our state 
                    of the art filtration and bottling 
                    facility, care about the quality and taste of your 
                    drinking water and your experience with us.</p>
                </div>

            </div>


        </div>


    );
}
