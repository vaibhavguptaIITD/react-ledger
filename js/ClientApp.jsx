import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Content from "./Content";
import Header from "./Header";
import Nav from "./Nav";

const ClientApp = function() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Nav />
        <Content />
      </div>
    </BrowserRouter>
  );
};
render(<ClientApp />, document.getElementById("app"));
