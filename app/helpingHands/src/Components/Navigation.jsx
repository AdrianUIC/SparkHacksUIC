import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

function Navigation(props) {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand>Helping Hands</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={() => props.passedFunc("home")}>Home</Nav.Link>
          <Nav.Link onClick={() => props.passedFunc("workforce_centers")}>Workforce Centers</Nav.Link>
          <NavDropdown title="Extreme Weather">
            <NavDropdown.Item onClick={() => props.passedFunc("warming_centers")}>Warming Centers</NavDropdown.Item>
            <NavDropdown.Item onClick={() => props.passedFunc("cooling_centers")}>Cooling Centers</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link onClick={() => props.passedFunc("community_services")}>Community Services</Nav.Link>
          <Nav.Link onClick={() => props.passedFunc("health_services")}>Health Services</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;