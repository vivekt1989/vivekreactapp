import React from "react";
import Homeimg from "../src/img/newmovie.jpg";
import Common from "./Common";

const Newmovies = () =>{
    return(
       <React.Fragment>
           <Common Name="New Movies Download from" Imgsrc={Homeimg} Visit="/login" btnName="Download Now!!" />
       </React.Fragment>
    )
}

export default Newmovies;