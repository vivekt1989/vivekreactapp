import React from "react";
import Homeimg from "../src/img/login.jpg";
const Signup = () =>{
    return(
        <React.Fragment>
            <section className="home-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 order-2 align-self-center">
                            <form>
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="validationServer01">First name</label>
                                    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required />
                                </div>
                                <div class="col-md-6 mb-3">
                                <label for="validationServer02">Last name</label>
                                <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                <label for="validationServer03">City</label>
                                <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                                <div id="validationServer03Feedback" class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                                </div>
                            </div>
                            <button class="btn btn-primary" type="submit">Submit form</button>
                            </form>
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

export default Signup;