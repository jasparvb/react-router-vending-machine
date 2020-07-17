import React from 'react';
import { Link } from "react-router-dom";
import drPepperImg from "./dr-pepper.jpg";


function DrPepper() {
    return (
        <div className="DrPepper">
            <p>Here's your Dr Pepper</p>
            <img style={{width: 300}} src={drPepperImg}/>
            <p><Link exact to="/">Go Back</Link></p>
        </div>
    );
}

export default DrPepper;