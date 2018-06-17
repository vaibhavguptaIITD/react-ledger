import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/expenses">Expenses</Link></li>
      <li><Link to="/income">Income</Link></li>
      <li><Link to="/balance">Balance</Link></li>
    </ul>
  </nav>
);

export default Nav;
