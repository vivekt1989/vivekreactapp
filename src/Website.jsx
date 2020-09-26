import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Newmovies from './Newmovies';
import Newwebseries from './Newwebseries';
import Navbar from './Navbar';
import { Switch , Route, Redirect } from 'react-router-dom';

const Website = () =>{
    return(
        <React.Fragment>
        <Navbar />
            <Switch>
                <Route exact path="/" component = {Home}/>
                <Route exact path="/about" component = {About}/>
                <Route exact path="/contact-us" component = {Contact}/>
                <Route exact path="/new-movies" component = {Newmovies}/>
                <Route exact path="/new-webseries" component = {Newwebseries}/>
                <Route exact path="/login" component = {Login}/>
                <Redirect to ="/" />
            </Switch>
            <div className="copy__right">Copyright 2020 Movie Maza online. All Rights Reserved.</div>
        </React.Fragment>
    )
};
export default Website;