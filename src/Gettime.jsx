import React, { useState } from "react";
const gtime = "Get Time";
const Gettime =() =>{
    let Newtime = new Date().toLocaleTimeString();
    const [ctime , setCtime] = useState(Newtime);
    const UpdateTime = () =>{
        let NewCtime = new Date().toLocaleTimeString();
        setCtime(NewCtime);
    }
    setInterval(UpdateTime , 1000);
    return(
        <React.Fragment>
            <div className="get-time visiterClick">
                <h3>{ctime}</h3>
                <button onClick = {UpdateTime}>{gtime}</button>
            </div>
        </React.Fragment>
    );
}; 
 export default Gettime;