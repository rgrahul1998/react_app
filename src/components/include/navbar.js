import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navbar.css';  // Import the custom CSS file

function NavBar() {
  const [open, setOpen] = React.useState(false);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };
  return (
    <>
      <Navbar bg="light" variant="light" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/">
              <img
                alt=""
                src="/img/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Company
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {/* <Nav.Link onClick={() => scrollToSection('highlights')}>Solutions</Nav.Link> */}
              <Nav.Link onClick={() => scrollToSection('product')}>Product</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('highlights')}>Highlights</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('pricing')}>Pricing</Nav.Link>
              <Nav.Link href="/academy">Academy</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about/company">Company</NavDropdown.Item>
                <NavDropdown.Item href="/about/careers">Careers</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/about/contact-us">Contact us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ml-auto d-flex align-items-center">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">
                <Button variant="primary">Signup</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
