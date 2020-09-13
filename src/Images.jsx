import React from 'react';
const Images = (props) => {
    return <img src={props.imgsrc} className="card__img" alt={props.alt} title={props.title} />;
};
export default Images;