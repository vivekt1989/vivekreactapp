import React from 'react';
import Logo from './img/mainlogo.png';
import MenuItem from './MenuItem';
import Header from './Header';
const Headermenu = () =>{
    return(
        <div className="header-menu">
            <a href="/" target="_blank">
                <img src={Logo} alt="Logo" title="Logo" />
            </a>
            {MenuItem.map((list) => {
                return(
                    <Header
                        key={list.id}
                        hname={list.hname}
                        hlinks={list.hname}
                    />
                );
            })}
        </div>
    )
}
export default Headermenu;


