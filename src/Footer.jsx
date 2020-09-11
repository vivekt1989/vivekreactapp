import React from 'react';
const Link = "Home";
const Link2 = "Contact-us";
const Link3 = "Login";
const Footer = () =>{
    return(
        <footer className="footer-data">
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
        </footer>
    );
}
export default Footer;