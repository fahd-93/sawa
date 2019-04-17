import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavigationBar = (props) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href={"/"}>
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/15/35/community-150125_960_720.png" alt="logo" /> Sawa
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#howworks">How does it work?</Nav.Link>
                        <Nav.Link href="#campaigns">Campaigns</Nav.Link>
                        <Nav.Link href={"/create-campaign"}>Create Campaign</Nav.Link>
                        <Nav.Link href={"/sign-form"}>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;