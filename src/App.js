import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";

function App() {
  const [mode, setMode] = useState("light");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home mode={mode} />
          </Route>
          <Route paht="/">
            <Details mode={mode} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
