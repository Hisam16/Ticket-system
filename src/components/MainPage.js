// src/components/MainPage.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "./Form"; // Import your Form component

const MainPage = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#B439C1 ", minHeight: "100vh" }}
    >
      <Row
        className="justify-content-start align-items-center"
        style={{ height: "100%" }}
      >
        <Col xs="auto">
          <h2 className="text-primary text-white">
            Welcome to the Help Desk Portal
          </h2>
        </Col>
        <Col>
          {/* Include the Form component on the right side */}
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
