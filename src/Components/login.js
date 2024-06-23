import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../Styles/login.css"

const Login = () => {
  return (
    <Tabs
      defaultActiveKey="Sign In"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Sign In" title="Sign In">
        Tab content for Profile
      </Tab>
      <Tab eventKey="Join In" title="Join In">
        Tab content for Loooonger Tab
      </Tab>
    </Tabs>
  );
};

export default Login;
