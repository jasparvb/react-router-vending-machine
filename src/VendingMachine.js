import React from 'react';
import { NavLink } from "react-router-dom";


function VendingMachine() {
    return (
        <div className="VendingMachine">
            <div><p>Hello I'm a Vending Machine. What would you like to eat?</p></div>
            <nav className="MyNavBarClass">
                <NavLink exact to="/snickers">Snickers</NavLink>
                <NavLink exact to="/chips">Chips</NavLink>
                <NavLink exact to="/drpepper">Dr Pepper</NavLink>
            </nav>
        </div>
    );
}

export default VendingMachine;