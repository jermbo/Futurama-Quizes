import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import { Welcome } from "./views/Welcome";
// import { Quiz } from "./views/Quiz";
// import { Summary } from "./views/Summary";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./AppRoutes";
import { RouteWithSubRoutes } from "./RouteWithSubRoutes";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          {AppRoutes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
