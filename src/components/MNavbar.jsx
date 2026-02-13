import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function MNavbar() {
    return (
        <Navbar
            expand="lg"
            bg="dark"
            data-bs-theme="dark"
            className="border-bottom border-2 border-light">
            <Container>
                <Navbar.Brand
                    as={NavLink}
                    to="/"
                    className="d-flex align-items-center gap-2">
                    <img
                        src="/logo.svg"
                        alt="MjölnirWeather Logo"
                        style={{ height: "87px" }}
                    />
                    <span style={{ color: "#989ea4" }}>MjölnirWeather</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/search">
                            Search
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MNavbar;
