import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import VendingMachine from './VendingMachine';
import Snickers from './Snickers';
import Chips from './Chips';
import DrPepper from './DrPepper';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/snickers">
          <Snickers />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/drpepper">
          <DrPepper />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
