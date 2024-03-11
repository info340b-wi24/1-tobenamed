import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export function NavBar() {
  return (
    <Navbar bg="#E07EC0" expand="lg" style={{ padding: '10px 0', marginBottom: '20px' }} >
      <Container>
        <Link className="navbar-brand" to="/">Scent Seeker</Link>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/search">Search</Link>
            <Link className="nav-link" to="/quiz">Quiz</Link>
            <Link className="nav-link" to="/YourListPage">Your List</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
