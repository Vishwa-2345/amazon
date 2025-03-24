import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { FaSearch, FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
      <Container>
        {/* Amazon Logo */}
        <Navbar.Brand href="#">
          <img
            src="./assets/amazon.png"
            alt="Amazon"
            style={{ height: "30px" }}
          />
          .in
        </Navbar.Brand>

        {/* Location Section */}
        <Nav className="me-auto">
          <Nav.Link href="#" className="text-white">
            <FaMapMarkerAlt /> Deliver to Chennai 600021
          </Nav.Link>
        </Nav>

        {/* Search Bar */}
        <Form className="d-flex mx-auto" style={{ width: "50%" }}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
          />
          <Button variant="warning">
            <FaSearch />
          </Button>
        </Form>

        {/* Account, Orders, Cart */}
        <Nav>
          <Nav.Link href="#" className="text-white">Hello, Sign in</Nav.Link>
          <Nav.Link href="#" className="text-white">Orders</Nav.Link>
          <Nav.Link href="#" className="text-white">
            <FaShoppingCart /> Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
