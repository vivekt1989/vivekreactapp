import React from 'react';
import Header from './Header';
import Sdata from './Sdata';
import Card from './Card';
import MenuItem from './MenuItem';
import Logo from './img/mainlogo.png';
//import Netflix from './Netflix';
//import Amazon from './Amazon';
//const Favseries ="Amazon";
// const Favs = () =>{
//     if(Favseries ==="Netflix"){
//        return <Netflix />;
//     }
//     else{
//         return <Amazon />;
//     }
// }
const Icard = () =>{
    return(
        <React.Fragment>
            <div className="header-menu">
                <span>
                    <img src={Logo} alt="Logo" title="Logo" />
                </span>
                {MenuItem.map((list) => {
                    return(
                        <Header
                            hname={list.hname}
                            hlinks={list.hname}
                        />
                    );
                })}
            </div>
            <h1 className="heading_style">Download Free Web series from moviesmazaonline</h1>
            <div className="card-wrapper">
                {Sdata.map((val , index) => {
                    console.log(index)
                    return(
                        <Card
                            key={val.id}
                            imgsrc={val.imgsrc}
                            title={val.title} 
                            sname={val.sname}     
                            links={val.links} 
                        />
                    );
                })}
            </div>
            <div className="footer-section">
                Copyright 2020 moviesmazaonline. All Rights Reserved.
            </div>
        </React.Fragment>
    
    // <React.Fragment>
    //     <Menu />
    //     <h1 className="heading_style">List of top 10 webseries in 2020</h1>
    //     <div className="card-wrapper">
    //         {/* <Favs /> */}
    //         {(Favseries ==="Netflix") ? <Netflix /> :  <Amazon />}
    //     </div>
        
    // </React.Fragment>
    )
}
export default Icard;