import React from "react";

function Container(props) {
  return <div className="container" style={props.style}>{props.children}</div>;
}

export default Container;

// Copied from 19 mini project, typical use of Container need to double check where this is being 'imported'