import React from "react";
import Homeimg from "../src/img/login.jpg";
const Login = () =>{
    return(
        <React.Fragment>
            <section className="home-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 order-2 align-self-center">
                            Form
                        </div>
                        <div className="col-md-6 order-1">
                            <img src={Homeimg} alt="Home image" title="Home image"/>
                        </div>
                    </div>
                </div>  
            </section>
        </React.Fragment>
    )
}

export default Login;