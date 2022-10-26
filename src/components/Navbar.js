import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      sticky="top"
      expand="md"
      className={`d-flex justify-content-center ${navColour ? "sticky" : "navbar"}`}
    >
      <Container className='justify-content-center'>
        {/* <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="ms-auto justify-content-center" id="responsive-navbar-nav">
          <Nav defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link className="text-center" as={Link} to="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/whitepaper"
                onClick={() => updateExpanded(false)}
                className="text-center"
              >
                Whitepaper
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/whitepaper"
                onClick={() => updateExpanded(false)}
                className="text-center"
              >
                Litepaper
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/whitepaper"
                onClick={() => updateExpanded(false)}
                className="text-center"
              >
                Roadmap
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/whitepaper"
                onClick={() => updateExpanded(false)}
                className="text-center"
              >
                Metaverse
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/whitepaper"
                onClick={() => updateExpanded(false)}
                className="text-center"
              >
                DAO
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
