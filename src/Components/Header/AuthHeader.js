import React, { useState } from "react";
import logo from "../../Images/Group 32.jpg";
import { Nav, Navbar, Button } from "react-bootstrap";
import styled from "@emotion/styled";
import { Link, Redirect } from 'react-router-dom';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  > img {
    padding: 0 0.5rem;
  }
`;
const StyledButton = styled(Button)`
  background: var(--color-purple);
  padding: 0 2rem;
  margin-left: 3rem;
  border-radius: 2px;
`;


function AuthHeader({ setCurrentUser, currentUser, handleAuth }) {

    const handleLogOut = () => {
        console.log('click')
        setCurrentUser(null);
    };

  return (
    <StyledHeader>
      <img src={logo} width="250" style={{}}></img>

      <Navbar expand="lg" variant="light">
          <h1>Hello {currentUser.username}</h1>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#"></Nav.Link>
            <Nav.Link href="#"></Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <StyledButton onClick={e => handleAuth(null)}>Log Out</StyledButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledHeader>
  );
}

export default AuthHeader
