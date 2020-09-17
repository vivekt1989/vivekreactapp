// import React, { useState } from 'react';
// const Eventdata = () =>{
//     // array destructing
//     const purplecolor ="purple";
//     const [bg , Setbg]= useState(purplecolor);
//     const [name , setName] = useState('Click Me');
//     const bgChange = () =>{
//         const newbg = '#34495e';
//         Setbg (newbg);
//         setName ("Ouch"); 
//     }
//     const bgName = () =>{
//         Setbg(purplecolor);
//         setName("Click Me")
//     }
//     return(
//         <React.Fragment>
//             <div className="input-data" style={ {backgroundColor: bg} }>
//                 <button onMouseEnter= {bgChange} onMouseLeave={bgName}>{name}</button>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Eventdata;

import React, { useState } from 'react';

const Eventdata = () =>{
    const purple = "#8e44ad";
    const newbg = '#f00';
    const [bg, setBg] = useState(purple);
    const [name , setName] = useState('Click me');
    const Bgchange = () =>{
        setBg(newbg);
        setName('Ohh');
    }
    const DblClick = () =>{
        setBg(purple);
        setName('Ayyo 🤸‍♀️');
    }
    return(
        <React.Fragment>
            <div style={{ backgroundColor :bg ,height : "500px"}}>
                <button onClick = {Bgchange} onDoubleClick = {DblClick}> 
                    {name}
                </button>
            </div>
        </React.Fragment>
    )
}

export default Eventdata;