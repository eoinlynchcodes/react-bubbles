import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";

function App() {

  function ProtectedLoginRoute({ children, ...rest}){
    const doesTokenExist = localStorage.getItem('token')
    return (
      <Route {...rest}>
        {
          doesTokenExist ? children : <Redirect to="/bubblePage"/>
        }
      </Route>
    )
  }

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedLoginRoute path="/bubblepage">
          <BubblePage />
        </ProtectedLoginRoute>
      </div>
    </Router>
  );
}

export default App;
