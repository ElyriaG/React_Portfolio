import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Homepage";
import Resume from "./pages/resume";
import './style.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />} />
        <Route exact path="/resume" component={Resume} />} />
        </Switch>
    </Router>
  )
}

export default App;
