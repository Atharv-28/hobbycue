import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, Button, InputGroup } from "react-bootstrap";
import logo from "../Assets/logo.png";
import saveLogo from "../Assets/save.png";
import exploreLogo from "../Assets/exploreLogo.png";
import kart from "../Assets/kart.png";
import notificationLogo from "../Assets/notification.png";
import hobbyLogo from "../Assets/hobby.png";
import "../Styles/nav.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand className="navEle" href="#home">
          <img className="logo" src={logo} />
        </Navbar.Brand>
        <InputGroup className="mb-3 searchInputGroup">
          <Form.Control className="searchB" placeholder="Search..." />
          <Button
            className="search-button"
            variant="outline-secondary"
            id="button-addon2"
          >
            🔍
          </Button>
        </InputGroup>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navItems">
            <NavDropdown
              className="navEleR"
              title={
                <React.Fragment>
                  <img className="dropImg" src={exploreLogo} />
                  <span className="dropText">Explore</span>
                </React.Fragment>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="navEleR"
              title={
                <React.Fragment>
                  <img className="dropImg" src={hobbyLogo} />
                  <span className="dropText">Hobby</span>
                </React.Fragment>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navEleR" href="#saved">
              <img className="dropImg" src={saveLogo} />
            </Nav.Link>
            <Nav.Link className="navEleR" href="#notification">
              <img className="dropImg" src={notificationLogo} />
            </Nav.Link>
            <Nav.Link className="navEleR" href="#kart">
              <img className="dropImg" src={kart} />
            </Nav.Link>
            <Button variant="outline-primary" className="signIn">Sign In</Button>{' '}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
