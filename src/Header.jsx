import React from 'react';
const Header = (props) =>{
    return(
        <a href={props.hlinks}>{props.hname}</a>
    )
}
export default Header;