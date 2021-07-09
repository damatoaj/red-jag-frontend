import React from "react";
import logo from "../../Images/TRKR.svg";
import { Button } from "react-bootstrap";

function DefaultHeader({ handleShow }) {
  return (
    <header>
      <img src={logo} className="headerLogo"></img>
      <Button 
        onClick={handleShow} 
        className="headerBtn"
        >
          Sign In
        </Button>
    </header>
  );
}

export default DefaultHeader;
