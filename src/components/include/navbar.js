import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navbar.css';  // Import the custom CSS file
import useLogout from './use_logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { Padding } from '@mui/icons-material';

function NavBar() {
  // eslint-disable-next-line
  const [open, setOpen] = useState(false);
  const handleLogout = useLogout();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsLoggedIn(!!token);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
  const logoStyle = {
    transform: 'scale(1.5)', // Adjust the scale factor as needed
    transformOrigin: 'left center', // Ensure it scales from the left center to not overflow the navbar
    height: '50px', // Ensure it doesn't exceed the navbar height
    width: 'auto' // Maintain the aspect ratio
  };
  return (
    <>
      <Navbar bg="light" variant="light" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
              style={logoStyle}
              alt="logo of sitemark"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
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
              {isLoggedIn ? (
                <>
                  <IconButton onClick={handleMenuOpen}>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">
                    <Button variant="primary">Signup</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
