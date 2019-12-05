import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <switch>
          {" "}
          <Route exact path="/books" component={Books} /> */}
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
