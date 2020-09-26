
// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // ReactDOM.render(
// // <React.Fragment>
// //     <h1>India top 5 web series</h1>
// //     <p>List are given below:</p>
// //     <ol>
// //         <li>Secred Game</li>
// //         <li>Meerjapur</li>
// //         <li>Abhay</li>
// //         <li>Samanter</li>
// //         <li>Hostrages</li>
// //     </ol>
// // </React.Fragment>,
// // document.getElementById("root"))

// //Litrels

// // import React from "react";
// // import ReactDOM from "react-dom";
// // const Fname= "Vivek";
// // const Lname= "Tripathi";
// // const Rolename= "Front End Engineer";
// // const Designation= "Assistant manager";
// // ReactDOM.render(
// //     <React.Fragment>
// //     <h1> {`My Name is ${Fname} ${Lname}`}</h1>
// //     <h2>{`My role is ${Rolename} and designation  ${Designation}`}</h2>
// //     <p>my admire web is {9+290}</p>
// //     </React.Fragment>,
// //     document.getElementById("root")
// // );

// // Local date and time
// // import React from "react";
// // import ReactDOM from "react-dom";
// // const Yname ="Vivek Tripathi";
// // const currTime  = new Date().toLocaleTimeString();
// // const currDate = new Date().toLocaleDateString();
// // ReactDOM.render(
// //     <React.Fragment>
// //         <h1>Your Name {`${Yname}`} </h1>
// //         <p>Current time is {currTime}</p>
// //         <p>Current Date is {currDate} </p>
// //     </React.Fragment>,
// //     document.getElementById("root")
    
// // );

// // import React from "react";
// // import ReactDOM from "react-dom";
// // import "./css/style.css";
// // const name = "Vivek";
// // const img1 = "https://picsum.photos/seed/picsum/200/300";
// // const img2 = "https://picsum.photos/seed/picsum/250/300";
// // const img3 = "https://picsum.photos/seed/picsum/230/300";

// // const heading = {
// //     color:'#ff0000',
// //     textTransform: 'capitalize',
// //     textAlign:'center',
// // }
// // ReactDOM.render(
// //     <React.Fragment>
// //         <h1 style={ heading}>My Name is {name}</h1>
// //         <div className="img__div">
// //             <img src={img1} alt="Randome Images 1" />
// //             <img src={img2} alt="Randome Images 2" />
// //             <img src={img3} alt="Randome Images 3" />
// //         </div>
// //     </React.Fragment> ,
// //     document.getElementById("root")
// // )
// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import "./css/style.css";
// // const name ="Vivek Tripathi";
// // const greetingstyle = {
// //     color:'green',
// //     textTransfrom:'uppercase',
// //     fontSize:'30px',
// // }

// //greeting Page
// // const cssStyle = {}
// // let currDate = new Date();
// // let greeting = '';
// // currDate =currDate.getHours();
// // if(currDate >= 1 && currDate < 12){
// //     greeting ="Good Moring!!";
// //     cssStyle.color='green';
// // }
// // else if(currDate >= 12 && currDate <19){
// //     greeting ="Good Afternoon!!";
// //     cssStyle.color='red';
// // }
// // else{
// //     greeting = "Good Night!!!";
// //     cssStyle.color='Blue';
// // }
// // ReactDOM.render(
// //     <React.Fragment>
// //         <div className="border__box">
// //             <h1>Hello {name} <span style={cssStyle}>{greeting}</span></h1>
// //         </div>
// //     </React.Fragment>,
// //     document.getElementById('root')
// // );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// ReactDOM.render(
//     <App></App> ,
//     document.getElementById("BodyPage")
// );

// Export Import Logic
// import React from 'react';
// import ReactDOM from 'react-dom';
// import youtuber ,{Myname , Mynames ,FavLang} from './App';
// ReactDOM.render(
//     <React.Fragment>
//         <ol>
//             <li>{Myname()}</li>
//             <li>{Mynames()}</li>
//             <li>{youtuber}</li>
//             <li>{FavLang}</li>

//         </ol>
//     </React.Fragment>,
//     document.getElementById('root') 
// );
// Reacr Simple Calculator
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// ReactDOM.render(<App /> ,document.getElementById('root'));
// Top 5 Netflex Movies

//My Website code 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './css/style.css';
// import Icard from './Icard';
//     ReactDOM.render(<Icard />, document.getElementById('root')
// );

// spread operator

// const fullname = ['Vivek' , 'Tripathi'];

// const biodata = [1, ...fullname, 26, 'male'];
// console.log(fullname);
// console.log(biodata);

// const Firstname = {
//     fname: 'Vivek',
//     lname : 'Tripathi',
//     age : 30,
//     gendet : 'Male'

// }

// const biodata2 ={
//     id:1,
//     ...Firstname,
// }

// console.log(biodata2);
// import React from 'react';
// import ReactDOM from "react-dom";
// import './css/style.css';
// import App from "./App.jsx";
// ReactDOM.render(<App /> , document.getElementById('root'));

// New Website Static

import React from 'react';
import ReactDOM from "react-dom";
import Website from './Website';
import "./css/index.css";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.Fragment>
        <BrowserRouter>
            <Website/> 
        </BrowserRouter>
    </React.Fragment>
, document.getElementById("root"));