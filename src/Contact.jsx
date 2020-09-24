import React from "react";
import Homeimg from "../src/img/contact.jpg";
import Common from "./Common";
const Contact = () =>{
    return(
        <React.Fragment>
            <Common Name="Contact to" Imgsrc={Homeimg} Visit="/new-webseries" btnName="Download" />
        </React.Fragment>
    )
}

export default Contact;