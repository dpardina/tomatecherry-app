import React from "react";
import Spinner from 'react-bootstrap/Spinner'

const Loading = ({ text }) => {
  return (
    <Spinner animation="grow" variant="dark">
      <span className="sr-only">{text}</span>
    </Spinner>
  );
};

export default Loading;