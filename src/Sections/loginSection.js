import React from "react";
import ExpHobby from "../Components/ExpHobby";
import Login from "../Components/login";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LoginSection = () => {
  return (
    <Container style={{backgroundColor: "#f7f5f9"}}>
      <Row>
        <Col sm={6}>
          <ExpHobby />
        </Col>
        <Col sm={6}>
          <Login />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSection;
