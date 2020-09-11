import React from 'react';
const Link = "Home";
const Link2 = "Contact-us";
const Link3 = "Login";
function Header(){
    return(
        <header className="header-data">
            <ul>
                <li>
                    <a href="{}">{Link}</a>
                </li>
                <li>
                    <a href="{}">{Link2}</a>
                </li>
                <li>
                    <a href="{}">{Link3}</a>
                </li>
            </ul>
        </header>
    );
}
export default Header;