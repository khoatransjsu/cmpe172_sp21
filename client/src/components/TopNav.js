import { Link, Route } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const TopNav = () => (
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
                  <i className='fas fa-shopping-cart'></i> Register
                </Nav.Link>
              </LinkContainer>
              
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Log In
                  </Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
);

export default TopNav;
