import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(){
    return (
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="home">Stuteri Gull</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="about">Om oss</Nav.Link>
                <NavDropdown title="Hästar" id="basic-nav-dropdown">
                  <NavDropdown.Item href="horses">Våra hästar</NavDropdown.Item>
                  <NavDropdown.Item href="horses_we_remember">
                    Hästar vi minns
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="horses_visit">
                    Fina bekantskaper
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="contact">Kontakt</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header