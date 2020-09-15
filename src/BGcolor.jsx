import React, { useState } from 'react';

const BGcolor = () =>{
    const [count , SetTime] = useState(0);
    console.log("Clicked");
    const btnClick = () =>{
        SetTime(count +1);
    }
    return(
        <React.Fragment>
            <div>
                <h1>{count}</h1>
                <button onClick={btnClick}>Clicked!</button>
            </div>
        </React.Fragment>
    )
}
export default BGcolor;