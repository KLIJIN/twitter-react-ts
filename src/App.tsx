import React from "react";
import { Switch, Route } from "react-router-dom";
// pages
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
