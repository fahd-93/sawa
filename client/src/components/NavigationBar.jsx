import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signOut, signIn, signUp } from "../redux/actions/actionCreator";

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        this.props.signOut();
    }

    render() {
        return (
            <div className="border-bottom">
                <Navbar bg="light" expand="lg">
                    <Container>

                        <Navbar.Brand href={"/"}>
                            <img src="https://cdn.pixabay.com/photo/2013/07/12/15/35/community-150125_960_720.png" alt="logo" width="30"
                            /> Sawa
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href="how-page">How does it work?</Nav.Link>
                                <Nav.Link href="showcampaign">Campaigns</Nav.Link>
                                {this.props.isAuth ?
                                    <Nav.Link href="profilepage">Profile Page</Nav.Link> : null}
                                {this.props.isAuth ?
                                    <Nav.Link href="create-campaign">Create Campaign</Nav.Link> : null}


                                {!this.props.isAuth ?
                                    [<li className="nav-item"
                                        key="signup">
                                        <Link className="nav-link" to={"signup"}>
                                            Sign Up
                                    </Link>
                                    </li>,
                                    <li className="nav-item"
                                        key="signin">
                                        <Link className="nav-link"
                                            to={"/signin"}>
                                            Sign In
                                    </Link>
                                    </li>] : null}

                                {this.props.isAuth ?
                                    <li className="nav-item">
                                        <Link className="nav-link"
                                            to={""}
                                            onClick={this.signOut}>
                                            Sign Out
                                    </Link>
                                    </li> : null}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signOut, signIn, signUp })(NavigationBar);




