import React from "react";
import Homeimg from "../src/img/newweb.jpg";
import Common from "./Common";

const Newwebseries = () =>{
    return(
       <React.Fragment>
           <Common Name="New Web Series Download from" Imgsrc={Homeimg} Visit="/login" btnName="Download Now!!" />
       </React.Fragment>
    )
}

export default Newwebseries;