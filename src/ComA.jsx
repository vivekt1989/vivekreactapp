import React, { useEffect, useState } from 'react';
import axios from "axios";
const ComA = () =>{
    const [Num,SetNum] = useState();
    const [name, setname] =useState();
    const [mov , setmov] = useState();
    useEffect(()=>{
        async function getDate(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Num}`);
            setname(res.data.name);
            setmov(res.data.moves.length);
        }
        getDate();
    });
    return (
        <React.Fragment>
            <div className="pokemon__wrapper">
                <h1>You Choose <span style={{color:'red'}}>{Num}</span> Value</h1>
                <h1>My Name is <span style={{color:'red'}}>{name}</span> </h1>
                <h1>I have <span style={{color:'red'}}>{mov}</span> moves</h1>
                <select value={Num} onChange={(event) =>{
                    console.log(event.target.value);
                    SetNum(event.target.value);
                }}>
                    <option>1</option>
                    <option>25</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
        </React.Fragment>
    )
}

export default ComA;