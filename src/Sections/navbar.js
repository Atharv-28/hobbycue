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

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navItems">
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
            <NavDropdown.Item href="#action/3.1">
              People - Community
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.2">
              Places -Venues
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.3">
              Programs - Events
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Product - Store
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.4">Blogs</NavDropdown.Item>
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
            <NavDropdown.Item href="#action/3.1">Hobby 1</NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.2">
              Hobby 2
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Hobby 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Hobby 4
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
          <Button variant="outline" style={{borderColor:"#8064a2", color: "#8064a2", backgroundColor:"white"}} className="signIn">
            SignIn
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
