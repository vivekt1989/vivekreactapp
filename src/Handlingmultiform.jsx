import React, { useState } from 'react';
const Handlingmultiform = () =>{
    const [Fullname , SetFullname] = useState({
        fname : '',
        lname :'',
        email : '',
        mobile : '',
        address : '',
    });
    const InputEvent = (event) =>{
        // console.log(event.target.value);
        // console.log(event.target.name);
        // const value =(event.target.value);
        // const name =(event.target.name);
        const {value , name} = event.target;
        SetFullname((dataStore) =>{
            //console.log(preValue);
            // Using Spread operator method
            return{
                ...dataStore,
                [name] : value,
            }

            // Normal Flow of form Value

            // if(name === 'fname'){
            //     return{
            //         fname : value,
            //         lname : preValue.lname,
            //         email : preValue.email,
            //         mobile: preValue.mobile,
            //     };
            // } else if(name === 'lname'){
            //     return{
            //         fname : preValue.fname,
            //         lname : value,
            //         email : preValue.email,
            //         mobile: preValue.mobile,
            //     };
            // }else if(name === 'email'){
            //     return{
            //         fname : preValue.fname,
            //         lname : preValue.lname,
            //         mobile: preValue.mobile,
            //         email : value,
                    
            //     };
            // }else if(name === 'mobile'){
            //     return{
            //         fname : preValue.fname,
            //         lname : preValue.lname,
            //         email : preValue.email,
            //         mobile: value,
            //     };
            // }
        });
    }
    const FormSubmit = (event)=>{
        event.preventDefault();
        alert("Hey I am alert");
    }

    return(
        <React.Fragment>
            <form onSubmit ={FormSubmit}>
                <div className="form-data">
                    <h2>Hello {Fullname.fname} {Fullname.lname} {Fullname.email} {Fullname.mobile} {Fullname.address} </h2>
                    <input type='text' value={Fullname.fname} name="fname" placeholder='Enter Your Name' onChange ={InputEvent} />
                    <br />
                    <input type='text' value={Fullname.lname} name="lname" placeholder='Enter Your Last Name' onChange ={InputEvent} />
                    <br />
                    <input type='text' value={Fullname.email} name="email" placeholder='Enter Your Email' onChange ={InputEvent} />
                    <br />
                    <input type='number' value={Fullname.mobile} name="mobile" placeholder='Enter Your Mnumber' onChange ={InputEvent} />
                    <br />
                    <input type='text' value={Fullname.address} name="address" placeholder='Enter Address' onChange ={InputEvent} />
                    <button type="submit">Submit <span role="img" aria-label="Link">🔗</span></button>
                </div>
            </form>
        </React.Fragment>

    );

}

export default Handlingmultiform;