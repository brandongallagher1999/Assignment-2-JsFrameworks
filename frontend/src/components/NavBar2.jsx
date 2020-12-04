import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import LogoutButton from "./LogoutButton";
import { useAuth0} from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/crud"
      exact
      activeClassName="router-link-exact-active"
    >
      CRUD
    </Nav.Link>

    <Nav.Link
      as={RouterNavLink}
      to="https://github.com/brandongallagher1999/Assignment-2-JsFrameworks"
      exact
      activeClassName="router-link-exact-active"
    >
      Documentation
    </Nav.Link>
  </Nav>
);

const AuthNav = () => {
    const { isAuthenticated} = useAuth0();

    return (
        <Nav className="justify-content-end">
            { isAuthenticated ? <LogoutButton /> : <LoginButton/>}
        </Nav>
    )
}

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;