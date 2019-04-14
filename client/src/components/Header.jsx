import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../redux/actions/actionCreator";


export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: '30px' }}>
                <Link className="navbar-brand" to="/">Sawa</Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li classname="nav-item">
                            <Link className="nav-link" to="/profilepage">Profile Page</Link>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav m1-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signout">Sign Out</Link>
                        </li>
                    </ul>
                </div>


            </nav>
        );
    }
}





