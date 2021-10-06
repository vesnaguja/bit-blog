import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top mb-5">
      <Container>
        <Navbar.Brand href="/bit-blog">BIT-BLOG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link className="me-3 text-decoration-none text-dark" to="/bit-blog">Home</Link>
            <Link className="me-3 text-decoration-none text-dark" to="/authors">Authors</Link>
            <Link className="text-decoration-none text-dark" to="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
