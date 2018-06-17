import React from "react";
import { render } from "react-dom";

const ClientApp = function() {
  return (
    <div>
      <h1>
        This is a text
      </h1>
    </div>
  );
};
render(<ClientApp/>, document.getElementById("app"));
