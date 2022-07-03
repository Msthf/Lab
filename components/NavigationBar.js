import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
const NavigationBar = (props) => {
  return (
    <Navbar>
      {/* <h1>Navigasi Testing</h1> */}
      <Navbar.Brand>Bioskop Kampus</Navbar.Brand>
      <Nav>
        <Nav.Link>Trending</Nav.Link>
        <Nav.Link>Superhero</Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default NavigationBar;
