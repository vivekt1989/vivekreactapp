import React from 'react';
import Logo from './img/mainlogo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav__bar">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" title="Logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contact-us">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/new-movies">New Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="new-webseries">New Webseries</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        </React.Fragment>
    );
};

export default Navbar;


