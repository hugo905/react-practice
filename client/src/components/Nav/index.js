import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          React Reading List
        </a>

        <Link to="/" style={{ color: "black" }}>
          Home
        </Link>

        <Link to="/book" style={{ color: "black" }}>
          Book
        </Link>
      </nav>
    </Router>
  );
}

export default Nav;
