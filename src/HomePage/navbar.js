import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Homepage.module.css';
import { NavLink } from 'react-router-dom';

function Navbars(props) {
  const handleLogout = () => {
    props.onLogout();
  };

  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles['Navbar']}>
      <Container fluid>
        <Navbar.Brand href="#">Concordia CSP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <NavDropdown title="SHOP" id="nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/computers">Computers</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/supplies">Supplies</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/books">Books</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/apparel">Apparel</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            {props.isLoggedIn && (
              <Button variant="primary" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
