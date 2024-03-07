import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Link className="navbar-brand" to="/">Scent Seeker</Link>
      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/search">Search</Link>
          <Link className="nav-link" to="/quiz">Quiz</Link>
          <Link className="nav-link" to="/my-list">My List</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
