import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Homepage";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import ErrorPage from "./pages/404Page";
import ApiExamples from "./pages/apis";

import './style.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />} />
        <Route exact path="/resume" component={Resume} />} />
        <Route exact path="/portfolio" component={Portfolio} />} />
        <Route exact path="/contact" component={Contact} />} />
        <Route exact path="/apiExamples" component={ApiExamples} />} />
        <Route component={ErrorPage} />
        </Switch>
    </Router>
  )
}

export default App;
