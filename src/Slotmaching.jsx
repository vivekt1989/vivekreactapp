import React from 'react';
const Slotmaching = (props) =>{
    // let x ='Smile';
    // let y ='Smile';
    // let z ='Smile';
    // let x =props.x;
    // let y =props.y;
    // let z =props.z;
    let {x,y,z} = props;

    if(x===y && y===z){
        return(
            <React.Fragment>
                <div className="slot__wrapper">
                    <p><span>{x}</span><span>{y}</span><span>{z}</span></p>
                    <h2>This is Matching</h2>
                    <hr />
                </div>
            </React.Fragment>
        )
    }
    else{
        return(
            <React.Fragment>
                <div className="slot__wrapper">
                    <p><span>{x}</span><span>{y}</span><span>{z}</span></p>
                    <h2>This is not Matching</h2>
                    <hr />
                </div>
            </React.Fragment>
        )
    }
}
export default Slotmaching;
