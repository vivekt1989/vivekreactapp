import React from 'react';
import Images from './Images';
const Card =(props) =>{
    //console.log(props);
    return(
        <React.Fragment>
        <div className="cards">
            <div  className="card">
                <div className="card__info">
                    <Images imgsrc={props.imgsrc} alt = {props.alt} title ={props.title}/>
                    <span className="card__categary">{props.htitle}</span>
                    <h3 className="card__heading">{props.sname}</h3>
                    <a href={props.links}>
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    </React.Fragment>
    );
}
export default Card;