import React, { useState } from 'react';

const Formfirst = () =>{
    const [Nametype ,setName ] = useState("");
    const [Lastname , SetLast] = useState("");
    const [FullName , setfullName] = useState("");
    const [LastAdd , LastShow] = useState("");
    const Inputevent = (event) =>{
        console.log(event.target.value);
        setName(event.target.value);
    }
    const Onsubmit = (event) =>{
        event.preventDefault();
        setfullName(Nametype);
        LastShow(Lastname);
    }
    const Inputeventtwo = (event) =>{
        SetLast(event.target.value);
    }
    return(
        <React.Fragment>
            <div className="form-data">
                <form onSubmit ={Onsubmit}>
                    <h2>Hello {FullName} {LastAdd}</h2>
                    <input type='text' value={Nametype} placeholder='Enter Your Name' onChange ={Inputevent} />
                    <br />
                    <input type='text' value={Lastname} placeholder='Enter Your Last Name' onChange ={Inputeventtwo} />
                    <button type="submit">Submit <span role="img" aria-label="Link">🔗</span></button>
                </form>
            </div>
        </React.Fragment>
    );

};

export default Formfirst;