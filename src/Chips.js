import React from 'react';
import { Link } from "react-router-dom";
import chipsImg from "./chips.jpg";


function Chips() {
    return (
        <div className="Chips">
            <p>Here are your chips</p>
            <img style={{width: "300px"}} src={chipsImg}/>
            <p><Link exact to="/">Go Back</Link></p>
        </div>
    );
}

export default Chips;