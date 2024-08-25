import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget"


export const NavBar = () => (

    <><><Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand as={NavLink} to="/">E-commerce</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Teclado">Teclado</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Grafica">Grafica</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Mouse">Mouse</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Notebook">Notebook</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
    </></>

)  
