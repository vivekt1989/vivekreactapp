// import React from 'react';
// import Body from './Body.jsx';
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import './css/style.css'
// function App(){
//     return(
//         <React.Fragment>
//             <Header></Header>
//             <Body></Body>
//             <Footer></Footer>
//         </React.Fragment>
//     );
// }
// export default App;

// Export Import Logic

// const youtuber ="Amit Badana";
// const FavLang ="React Js";
// function Myname() {
//     let Name = 'Vivek'; 
//     return Name;
// }
// function Mynames() {
//     let Names = 'Tripathi'; 
//     return Names;
// }

// export default youtuber;
// export {FavLang , Myname , Mynames} ;

// Calc Logic

// import React from 'react';
// import {add , sub, mult, div} from './Calc.jsx';
// function App(){
//     return(
//         <React.Fragment>
//             <ul>
//                 <li>Sum of Number {add (40 , 23)}</li>
//                 <li>Sub of Number {sub (40 , 23)}</li>
//                 <li>Multi of Number {mult (40 , 23)}</li>
//                 <li>Div of Number {div (40 , 23)}</li>
                
//             </ul>
//         </React.Fragment>
//     );
// }
// export default App;


//Netflex top 10 Web series
// import React from "react";
// import Sdata from './Sdata.jsx';
// import Card from './Card.jsx';
// function App(){
//     return(
//     <React.Fragment>
//         <h1 className="heading_style">List of top 10 webseries in 2020</h1>
//         <div className="card-wrapper">
//             <Card 
//                 imgsrc={Sdata[0].imgsrc}
//                 title={Sdata[0].title} 
//                 sname={Sdata[0].sname}     
//                 links={Sdata[0].links} 
//             />
//             <Card 
//                 imgsrc={Sdata[1].imgsrc}
//                 title={Sdata[1].title} 
//                 sname={Sdata[1].sname} 
//                 links={Sdata[1].links} 
//             />
//             <Card 
//                 imgsrc={Sdata[2].imgsrc}
//                 title={Sdata[2].title} 
//                 sname={Sdata[2].sname} 
//                 links={Sdata[2].links} 
//             />
//             <Card 
//                 imgsrc={Sdata[3].imgsrc}
//                 title={Sdata[3].title} 
//                 sname={Sdata[3].sname} 
//                 links={Sdata[3].links} 
//             />
//             <Card 
//                 imgsrc={Sdata[4].imgsrc}
//                 title={Sdata[4].title} 
//                 sname={Sdata[4].sname} 
//                 links={Sdata[4].links} 
//             />
//             <Card 
//                 imgsrc={Sdata[5].imgsrc}
//                 title={Sdata[5].title} 
//                 sname={Sdata[5].sname} 
//                 links={Sdata[5].links} 
//             />
//             <Card 
//                 imgsrc={Sdata[6].imgsrc}
//                 title={Sdata[6].title} 
//                 sname={Sdata[6].sname} 
//                 links={Sdata[6].links} 
//             />
//             <Card 
//                 imgsrc={Sdata[7].imgsrc}
//                 title={Sdata[7].title} 
//                 sname={Sdata[7].sname} 
//                 links={Sdata[7].links} 
//             />
//             <Card 
//                 imgsrc={Sdata[8].imgsrc}
//                 title={Sdata[8].title} 
//                 sname={Sdata[8].sname} 
//                 links={Sdata[8].links} 
//             />
//             <Card 
//                 imgsrc={Sdata[9].imgsrc}
//                 title={Sdata[9].title} 
//                 sname={Sdata[9].sname} 
//                 links={Sdata[9].links} 
//             />
//         </div>
//     </React.Fragment>
//     )
// }
// export default App;

//Slot Machine Game in React JS

//import React from 'react';
// import Slotmaching from './Slotmaching';
// const App = () =>{
//     return(
//        <React.Fragment>
//            <h1 className="heading"> 
//                 Slot Welcome to <span style={{fontWeight:'bold'}}>Slot machine Game</span> 
//            </h1>
//            <div className="slot__innerwraper">
//                 <Slotmaching x='Smile' y='Smile' z='Smile' />
//                 <Slotmaching x='Santa' y='Manta' z='banta'/>
//                 <Slotmaching x='singh' y='singh' z='singh'/>
//            </div>
//        </React.Fragment>
//     );
// };
// export default App;

// Reatc Hooks Method
import React from 'react';
import Hooks from './Hooks';

const App = () =>{
    return (
        <Hooks />
    )
}

export default App;