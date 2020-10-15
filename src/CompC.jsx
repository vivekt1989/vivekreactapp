import React from 'react';
import { FName , LName } from "./App";    

const CompC = ()=>{
    return(
        <React.Fragment>
            <FName.Consumer>
                {(fname) => {
                    return (
                        <LName.Consumer>
                            {(lname) =>{
                                return <h1>My Name is {fname} {lname}</h1>;
                            }}
                        </LName.Consumer>
                    );
                }}
            </FName.Consumer>
        </React.Fragment>
    );
}
export default CompC;