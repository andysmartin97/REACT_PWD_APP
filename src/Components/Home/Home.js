import React, { Component } from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import IntroSect from "../HomeSections/IntroSection/IntroSec";
import AboutUsSection from "../HomeSections/AboutUsSection/AboutUsSection";
import FeaturesSection from "../HomeSections/FeaturesSection/FeaturesSection";
import WaterProducts from "../HomeSections/WaterProducts/WaterProducts";
import TestimonialSection from "../HomeSections/TestimonialsSection/TestimonialSection";
import ContactSection from "../HomeSections/ContactSection/ContactSection";
import FooterSection from "../HomeSections/FooterSection/FooterSection";


class Home extends Component {
  render() {
    return (

      <div className="Home-Container">
        
        <HeroBanner/>
        <IntroSect/>
        <AboutUsSection/>
        <FeaturesSection/>
        <WaterProducts/>
        <TestimonialSection/>
        <ContactSection/>
        <FooterSection/>

      </div>


    );
  }
}
 
export default Home;