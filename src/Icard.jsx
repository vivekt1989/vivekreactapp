import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
import Headermenu from './Headermenu';
import Footer from './Footer';
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
            <Headermenu />
            <h1 className="heading_style">Download Free Web series from moviesmazaonline</h1>
            <div className="card-wrapper">
                {Sdata.map((val , index) => {
                    //console.log(index)
                    return(
                        <Card
                            key={val.id}
                            imgsrc={val.imgsrc}
                            htitle={val.htitle} 
                            sname={val.sname}     
                            links={val.links}
                            title ={val.sname}
                            alt ={val.sname}
                        />
                    );
                })}
            </div>
            <Footer />
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