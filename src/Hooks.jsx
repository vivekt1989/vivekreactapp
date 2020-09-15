import React, { useState } from 'react';
const Hooks = () =>{
    const [count , setCount] = useState(0); 
    const [Name , Setname] = useState('clcik Me')
    const IncNum = () =>{
        setCount(count + 1);
        Setname("Click More");
    };
    return(
        <React.Fragment>
            <div className="visiterClick">
                <h1>{count}</h1>
                <button onClick={IncNum}>{Name}</button>
            </div>
        </React.Fragment>
    );
};

export default Hooks;