import React from 'react';
import { Link } from "react-router-dom";


function VendingMachine() {
    return (
        <div className="VendingMachine">
            <div><p>Hello I'm a Vending Machine. What would you like to eat?</p></div>
            <nav className="VendingMachine-nav">
                <p><Link exact to="/snickers">Snickers</Link></p>
                <p><Link exact to="/chips">Chips</Link></p>
                <p><Link exact to="/drpepper">Dr Pepper</Link></p>
            </nav>
        </div>
    );
}

export default VendingMachine;