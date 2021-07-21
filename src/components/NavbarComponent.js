import React from "react";
import "./NavbarComponent.css";
import {Nav, Container, Navbar} from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <div className="Navbars">
      <Navbar className="navbar" variant="dark">
        <Container>
          <Nav>
            <Nav.Link>
              <Link className="Links" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="Links" to="/Character">
                Character
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="Links" to="/Film">
                Film
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
