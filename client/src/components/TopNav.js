/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Route } from 'react-router-dom';

const TopNav = () => {
  return (
  <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Home</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/register'>
                <Nav.Link>
                  <i className='fa fa-user-plus'></i> Register
                </Nav.Link>
              </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
)};

export default TopNav;
