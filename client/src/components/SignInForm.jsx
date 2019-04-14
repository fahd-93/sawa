import React, { Component } from 'react';

export default class SignInForm extends Component {
    render() {
        return (
            <div>
                this is sign in page hsbfdhsbf
            </div>
        )
    }
}














































































// import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import { connect } from 'react-redux';




// class SignInForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     handleChange(e) {
//         e.preventDefault();
//         let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

//         this.setState({
//             [e.target.name]: value
//         });

//         // console.log('handleChange', this.state);

//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         // console.log('handleSubmit', this.state);
//         axios
//             .post('http://localhost:4000/api/users/signin', this.state)
//             .then(response => {
//                 console.log(response.data);

//                 this.props.saveLoggedInUser(response.data.user);

//                 this.props.history.push("/profilepage");

//             })
//             .catch(error => {
//                 console.log(error);
//             });


//     }

//     render() {
//         return (
//             <React.Fragment>


//                 <div className="App">
//                     <div className="App__Aside"></div>
//                     <div className="App__Form">
//                         <div className="PageSwitcher">
//                             <NavLink to="/sign-in"
//                                 activeClassName="PageSwitcher__Item--Active"
//                                 className="PageSwitcher__Item">
//                                 Sign In
//                         </NavLink>
//                             <NavLink exact to="/"
//                                 activeClassName="PageSwitcher__Item--Active"
//                                 className="PageSwitcher__Item">
//                                 Sign Up
//                         </NavLink>
//                         </div>

//                         {<div className="FormTitle">
//                             <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
//                         </div>}


//                         <div className="FormCenter">
//                             <form className="FormFields"
//                                 onChange={e => this.handleChange(e)}  >
//                                 <div className="FormField">
//                                     <label className="FormField__Label" htmlFor="email">
//                                         Email
//                                 </label>
//                                     <input type="email" id="email"
//                                         className="FormField__Input"
//                                         placeholder="Enter your email"
//                                         name="email"
//                                     />
//                                 </div>

//                                 <div className="FormField">
//                                     <label className="FormField__Label"
//                                         htmlFor="password">
//                                         Password
//                                 </label>
//                                     <input type="password" id="password"
//                                         className="FormField__Input"
//                                         placeholder="Enter your password"
//                                         name="password" />
//                                 </div>

//                                 <div className="FormField">
//                                     <button onClick={e => this.handleSubmit(e)}
//                                         className="FormField__Button mr-20">
//                                         Sign In
//                                 </button>
//                                     <Link to="/" className="FormField__Link">
//                                         Create an account
//                                 </Link>
//                                 </div>

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }
// const mapDispatchToProps = dispatch => ({
//     saveLoggedInUser: (user) => dispatch({ type: 'SAVE_LOGGED_IN_USER', payload: user })
// })

// export default connect(null, mapDispatchToProps)(SignInForm);