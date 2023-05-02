/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "react-bootstrap";

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button variant="outline-primary">Login with Google</Button>{" "}
      <Button variant="outline-secondary">Login with Github</Button>{" "}
    </div>
  );
};

export default RightNav;
