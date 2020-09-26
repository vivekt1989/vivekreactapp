import React from "react";
import Homeimg from "../src/img/newweb.jpg";
//import Common from "./Common";
import Sdata from './Sdata';
import Card from './Card';

const Newwebseries = () =>{
    return(
        <React.Fragment>
            <h1 className="heading_style">Download Free Web series from moviesmazaonline</h1>
            <div className="card-wrapper">
                {Sdata.map((val , index) => {
                    //console.log(index)
                    return(
                        <Card
                            key={val.id}
                            imgsrc={val.imgsrc}
                            htitle={val.htitle} 
                            sname={val.sname}     
                            links={val.links}
                            title ={val.sname}
                            alt ={val.sname}
                        />
                    );
                })}
            </div>
        </React.Fragment>
    )
}

export default Newwebseries;