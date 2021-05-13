import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Navigation from "./components/Navigation";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };
  return (
    <Router>
      <div className={mode === "light" ? "light__mode" : "dark__mode"}>
        <Navigation toggleMode={toggleMode} mode={mode} />

        <Switch>
          <Route path="/" exact>
            <Home mode={mode} />
          </Route>
          <Route path="/detail/:code" exact>
            <Details mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
