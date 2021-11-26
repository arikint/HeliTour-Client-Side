import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/helitour.png';
import './Header.css';


const Header = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes-----
 -------------------------------------------------*/
    const { user, logOut } = useAuth();

/* --------------------------------------------
 -----Header to be rendered on the UI--------
 ---------------------------------------------*/
    return (
        <>
        <div className="header">
            <Navbar  variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand href="home"><img
        src={logo}
        width="250"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            {user.email && <Nav.Link as={HashLink} to="/mytours#mytours">My Bookings</Nav.Link>}
            {user.email && <Nav.Link as={HashLink} to="/allbookings#allbookings">Manage All Bookings</Nav.Link>}
            {user.email && <Nav.Link as={HashLink} to="/addtours#addtours">Add Tour</Nav.Link>}
                {user.email && <span style={{ color: 'rgb(90, 250, 225)' }}>Welcome {user.displayName} </span>}
                {
                    user.email ?
                        <button className="btnlog" onClick={logOut}>Log Out</button>
                        :
                        <Nav.Link as={HashLink} to="/login#login">Login</Nav.Link>}
                        </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </div>
        </>
    );
};

export default Header;