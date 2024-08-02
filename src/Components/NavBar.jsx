import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget"
import { NavLink } from 'react-router-dom';

export const NavBar = () => (

    <><><Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand as={NavLink} to="/">E-commerce</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/category/PC">PC</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Accesorios">Accesorios</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
    </></>

)  
