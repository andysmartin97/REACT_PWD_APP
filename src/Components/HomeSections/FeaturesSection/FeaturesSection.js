import React from "react";
import Features01 from "./features01.png";
import Features02 from "./features02.png";
import Features03 from "./features03.png";
import Features04 from "./features04.png";

import "./FeaturesSection.css";


export default function FeaturesSection() {
    return(
        <div className="FeaturesSection-Container">
            
            <div className="FeaturesBoxes-Container">

                 <div className="FeaturesBox">
                    <img src={Features01}/>
                    <h3>Unbeatable Quality and Affordability</h3>
                    <p>The highest quality water at the lowest prices</p>
                </div>

                <div className="FeaturesBox">
                    <img src={Features02}/>
                    <h3>Environmentally Conscious Practices </h3>
                    <p>Eco-friendly: refillable and recycled bottles.</p>
                </div>

                <div className="FeaturesBox">
                    <img src={Features03}/>
                    <h3>Flexible Services</h3>
                    <p>No contract required for service. However, we offer discounts on annual contracts.</p>
                </div>

                <div className="FeaturesBox">
                    <img src={Features04}/>
                    <h3>Trusted Accreditations</h3>
                    <p>AAA rated by Better Business Bureau. Member of the California Bottled Association.
                    Licensed and regulated by the state of California and FDA.</p>
                </div>

            </div>

        </div>


    );

}


