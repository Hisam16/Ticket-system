// src/components/Navbar.js
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {/* Logo on the left side */}
        <Navbar.Brand href="#">E-Complain</Navbar.Brand>

        {/* Buttons on the right side */}
        <Nav className="ms-auto">
          <Nav.Link href="#">Helpdesk</Nav.Link>
          <Button variant="outline-light" className="mx-2">
            Admin
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
