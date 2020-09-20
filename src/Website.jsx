import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Newmovies from './Newmovies';
import Newwebseries from './Newwebseries';
import { Switch , Route, Redirect } from 'react-router-dom';

const Website = () =>{
    return(
        <Switch>
            <Route exact path="/" component = {Home}/>
            <Route exact path="/about" component = {About}/>
            <Route exact path="/contact-us" component = {Contact}/>
            <Route exact path="/new-movies" component = {Newmovies}/>
            <Route exact path="/new-webseries" component = {Newwebseries}/>
            <Route exact path="/login" component = {Login}/>
            <Redirect to ="/" />
        </Switch>
    )
};
export default Website;