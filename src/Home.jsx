import React from "react";
import Homeimg from "../src/img/homepage-img.jpg";
import Common from './Common';
const Home = () =>{
    return(
        <React.Fragment>
            <Common Name="Welcome to" Imgsrc={Homeimg} Visit="/contact-us" btnName="Get Contact" />
        </React.Fragment>
    )
}
export default Home;