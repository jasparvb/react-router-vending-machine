import React from 'react';
import { Link } from "react-router-dom";
import snickersImg from "./snickers.png";


function Snickers() {
    return (
        <div className="DrPepper">
            <p>Here's your Snickers</p>
            <img style={{width: "300px"}} src={snickersImg}/>
            <p><Link exact to="/">Go Back</Link></p>
        </div>
    );
}

export default Snickers;