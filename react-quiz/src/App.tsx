import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Welcome } from "./views/Welcome";
import { Quiz } from "./views/Quiz";
import { Summary } from "./views/Summary";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Welcome</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/summary">Summary</Link>
        </nav>
      </div>
      <Switch>
        <Route path="/summary">
          <Summary />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
