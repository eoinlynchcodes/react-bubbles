import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import ColorList from './components/ColorList';
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/">Login</Link>
          <Link to="bubblepage">Bubble List</Link>
        </nav>

        <Route exact path="/" component={Login}/>
        <Route exact path="/bubblepage" component={BubblePage} />
        <Route exact path="/colorlist" component={ColorList} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
