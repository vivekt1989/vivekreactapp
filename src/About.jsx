import React from "react";
import Homeimg from "../src/img/about-us.jpg";
import Common from "./Common";
const About = () =>{
    return(
        <React.Fragment>
            <Common Name="About to" Imgsrc={Homeimg} Visit="/new-webseries" btnName="Download" />
        </React.Fragment>
    )
}

export default About;