import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) =>{
    return(
        <React.Fragment>
            <section className="home-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 order-1 align-self-center">
                            <h1>{props.Name} <strong>Movie Maza online website</strong></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining 
                            essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages,</p>
                            <NavLink exact to={props.Visit} className="btn btn-primary justify-content-center">{props.btnName}</NavLink>
                        </div>
                        <div className="col-md-6 order-2">
                            <img src={props.Imgsrc} alt="Home image" title="Home image"/>
                        </div>
                    </div>
                </div>  
            </section>
        </React.Fragment>
    )
}

export default Common;