import React from "react";
import { string } from "prop-types";

const Card = props => (
  <div>
    <div className="card-heading">{props.heading}</div>
    <div className="card-body">{props.body}</div>
  </div>
);

Card.propTypes = {
  heading: string.isRequired,
  body: string.isRequired
};

export default Card;
