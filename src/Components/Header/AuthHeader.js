import React from "react";
import logo from "../../Images/TRKR.svg";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';
import '../../css/header.css'

function AuthHeader({ 
    setAuthRedirect, 
    authRedirect, 
    setCurrentUser, 
    currentUser, 
    handleAuth 
}) {
    const handleLogOut = (e) => {
        handleAuth(null);
        setCurrentUser(null);
        setAuthRedirect(false);
        console.log(authRedirect)
        if(!currentUser.username) {
          console.log(currentUser, '&&&&&&&&')
        }
      };
      
      if(currentUser=== null) return <Redirect to='/' />
      

  return (
    <header>
      <img src={logo} className="headerLogo"></img>

      <Navbar expand="lg" variant="light">
          <h1 className ='showUsername'>Hello {currentUser.username}</h1>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/portal/jobs" className="headerLinks">Dashboard</Link>
            <Link to="/profile" className="headerLinks">Profile</Link>
            <Button onClick={handleLogOut} className="headerBtn">Log Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default AuthHeader
