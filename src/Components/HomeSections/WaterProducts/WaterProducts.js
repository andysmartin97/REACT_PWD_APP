import React from "react";
import Water01 from "./Water01.png";
import Water02 from "./Water02.png";
import Water03 from "./Water03.png";
import WaterBackground from "./WaterBackground.png"

import "./WaterProducts.css";

export default function WaterProducts () {
    return(

        <div className="WaterProducts-Container">

            <div className="Water-Row01">

                <div className="Product-ContainerRow01">
                    <div className="WaterPic-Container">
                        <img src={Water01}/>
                    </div>
                    <div className="WaterDesc-Container">
                        <h3>5 Gallon Purified</h3>
                        <h4>Monthly: $8.45<br/>
                            Annual Contract: $7.95<br/>
                            Pre-Paid*: $7.45</h4>
                        <p>Our most popular client choice. Enjoy the benefits of our 
                        refreshing water and start your journey to a more refreshing 
                        lifestyle both in your office and home. </p>
                    </div>
                </div>

                <div className="Product-ContainerRow01">
                    <div className="WaterPic-Container">
                        <img src={Water01}/>
                    </div>
                    <div className="WaterDesc-Container">
                        <h3>3 Gallon Purified</h3>
                        <h4>Monthly: $6.70<br/>
                            Annual Contract: $6.20<br/>
                            Pre-Paid*: $5.70</h4>
                        <p>If you want the benefits of our water 
                        but don’t have the space. We have our 3 Gallon water. 
                        Perfect for those who live in small spaces.  </p>
                    </div>
                </div>



            </div>



            <div className="Water-Row02">
                
                <div className="Product-ContainerRow02">

                    <div className="WaterPic-Container">
                        <img src={Water03}/>
                    </div>

                    <div className="WaterDesc-Container">
                        <h3>1/2 Liter Purified</h3>
                        <h4>Monthly: $10.80 + CRV<br/>
                            Annual Contract: $10.30 + CVR<br/>
                            Pre-Paid*: $9.80 + CRV</h4>
                        <p>This bundle includes 24 bottles per case. 
                        Show your love towards staying hydrating  by 
                        sharing one of your many bottles to friends or coworkers! 
                        Enjoy and share the freshness of our water. </p>
                    </div>


                </div>


            </div>


        </div>

        



    );
}