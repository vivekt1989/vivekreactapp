import React, { useContext } from 'react';
//import CompC from './CompC';
import { FName , LName } from "./App";
const CompB = ()=>{
    const fname = useContext(FName);
    const lname = useContext(LName);
    return <h1>My Name is {fname} {lname}</h1>;
}
export default CompB;