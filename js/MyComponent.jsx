import React from "react";
import { render } from "react-dom";

const MyComponent = function() {
  return (
    <div>
      <h1>
        This is a text
      </h1>
    </div>
  );
};
render(<MyComponent/>, document.getElementById("app"));
