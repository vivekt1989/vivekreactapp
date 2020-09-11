import React, { useState } from 'react';
const Hooks = () =>{
    const [count , setCount] = useState(0); 
    const IncNum = () =>{
        setCount(count + 1);
    };
    return(
        <React.Fragment>
            <div className="visiterClick">
                <h1>{count}</h1>
                <button onClick={IncNum}>Click</button>
            </div>
        </React.Fragment>
    );
};

export default Hooks;