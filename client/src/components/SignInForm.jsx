import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,

        };



        axios({
            method: 'post',
            url: 'http://localhost:4000/api/users/signin',
            data: user,
        })

            .then(response => {
                console.log('signin forrm callback respons', response.data);
                this.props.history.push("/profilepage");


                //await Auth.signIn(this.state.email, this.state.password);
                //this.props.userHasAuthenticated(true);



            })
            .catch(error => {
                console.log(error);
            });


    }

    render() {
        return (
            <div className="App">
                <div className="App__Aside"></div>
                <div className="App__Form">
                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    </div>

                    {<div className="FormTitle">
                        <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                    </div>}


                    <div className="FormCenter">
                        <form onSubmit={this.handleSubmit} className="FormFields" >
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="username">User Name</label>
                                <input type="username" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.email} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="password">Password</label>
                                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInForm;