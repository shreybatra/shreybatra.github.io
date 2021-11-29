import { useState } from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const defaultVal = path.split("/")[1] || "home";
  const [active, setActive] = useState(defaultVal);

  const handleOnSelect = (e) => {
    setActive(e);
  };

  return (
    <Navbar
      className="custom-background"
      variant="dark"
      collapseOnSelect
      expand="md"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image
            src="https://avatars.githubusercontent.com/u/22788006?v=4"
            width="40"
            height="40"
            roundedCircle
          />{" "}
          Shrey Batra
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav fill onSelect={handleOnSelect}>
            <Nav.Link
              as={Link}
              to="/"
              eventKey="home"
              active={active === "home"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/masterclass"
              eventKey="masterclass"
              active={active === "masterclass"}
            >
              Masterclass
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              eventKey="about"
              active={active === "about"}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              eventKey="contact"
              active={active === "contact"}
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
