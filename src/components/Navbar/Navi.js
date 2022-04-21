import { useState } from "react";

import { Form, Navbar, Container, Nav, FormControl } from "react-bootstrap";
import classes from "./Navi.module.css";

export default function Navi(props) {
  window.addEventListener("scroll", changeBackground);

  function changeBackground() {
    if (window.scrollY >= 50) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  }
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  return (
    <>
      <Navbar
        bg={navbarScrolled ? "dark" : "transparent"}
        expand="lg"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="#" className="text-white mx-5">
            Metoospace
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => {
              setNavbarScrolled((prev) => !prev);
            }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className={`me-auto my-2 my-lg-0 ${classes.navlinks}`}
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">About Us</Nav.Link>
              <Nav.Link href="#action1">Destination</Nav.Link>
              <Nav.Link href="#action2">Tours</Nav.Link>
              <Nav.Link href="#action2">Hostels</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center">
              <div className="input-group">
                <FormControl
                  className="form-control border-0 rounded-pill"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <span>
                  <button
                    className={`btn btn-primary border-0 rounded-pill ${classes.search}`}
                    type="button"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
              <Nav className={classes.navlinks}>
                <Nav.Link href="#action2">Sign in</Nav.Link>
                <Nav.Link href="#action2">Crete Account</Nav.Link>
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
