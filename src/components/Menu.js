import React from "react";
import logo from '../assets/img/logo.svg';
import { Navbar, Nav, Button } from 'react-bootstrap';
class Menu extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="white" variant="light">
          <Navbar.Brand href="#home">
              <img src={logo} alt="logo" className="App-logo" ></img>
               Blog React</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
