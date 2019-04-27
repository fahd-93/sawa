import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FacebookLogin from 'react-facebook-login';
//import GoogleLogin from 'react-google-login';

import * as actions from "../../redux/actions/actionCreator";

import CustomInput from '../CustomInput';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);

  }
  async onSubmit(formData) {
    console.log('onSubmit() has been called');
    console.log('form data', formData);
    //Call the ActionCreator
    await this.props.signUp(formData);
    if (!this.props.history.errorMessage) {
      this.props.history.push('/profilepage')
    }
  }

/*  responseGoogle(res) {
    console.log('responseGoogle', res);

  }*/


  async responseFacebook(res) {
    console.log('responseFacebook', res);
    await this.props.oauthFacebook(res.accessToken);
    if (!this.props.errorMessage) {
      this.props.history.push('/profilepage')

    }
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="camp-form-container">
        <h3><span>Sign Up</span></h3>
        <div>
          <div>
            <div className="text-center">
              <FacebookLogin
                appId="2241134356214829"
                // autoLoad={true}
                fields="name,email,picture"
                callback={this.responseFacebook}
                cssClass="btnFacebook"
                icon={< i className="fa fa-facebook"/>}
              />
            </div>
            <div className="divider-text">or</div>
          </div>
        </div>

        <div>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <fieldset>
                <Field
                  name="name"
                  type="text"
                  id="name"
                  label="Enter your name:"
                  placeholder="Enter Your name"
                  component={CustomInput} />
              </fieldset>
              <fieldset>
                <Field
                  name="email"
                  type="text"
                  id="email"
                  label="Enter your email:"
                  placeholder="example@example.com"
                  component={CustomInput} />
              </fieldset>

              <fieldset>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  label="Enter your Password:"
                  placeholder="Your Password"
                  component={CustomInput} />

              </fieldset>
              {this.props.errorMessage ?
                <div className="alert alert-danger">
                  {this.props.errorMessage}
                </div> : null}





              <button type="submit" className="continue-btn">Sign up</button>
            </form>
          </div>
          <br />


      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}


export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })

)(SignUpForm);





















































































// import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import axios from 'axios';
// //import { reduxForm } from 'redux-form';

// class SignUpForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: '',
//       name: '',
//       hasAgreed: false
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     let target = e.target;
//     let value = target.type === 'checkbox' ? target.checked : target.value;
//     let name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const newUser = {
//       email: this.state.email,
//       password: this.state.password,
//       name: this.state.name,

//     };
//     axios({
//       method: 'post',
//       url: 'http://localhost:4000/api/users/signup',
//       data: newUser,
//     })
//       .then(response => {
//         console.log(response);

//       })
//       .catch(error => {
//         console.log(error);
//       });

//     console.log('The form was submitted with the following data:');
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="App__Aside"></div>
//         <div className="App__Form">
//           <div className="PageSwitcher">
//             <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
//             <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
//           </div>

//           {<div className="FormTitle">
//             <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
//           </div>}

//           <div className="FormCenter">
//             <form onSubmit={this.handleSubmit} className="FormFields">
//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="name">Full Name</label>
//                 <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
//               </div>
//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="password">Password</label>
//                 <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
//               </div>
//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
//                 <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
//               </div>

//               <div className="FormField">
//                 <label className="FormField__CheckboxLabel">
//                   <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="/#" className="FormField__TermsLink">terms of service</a>
//                 </label>
//               </div>

//               <div className="FormField">
//                 <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
//               </div>
//               <br></br>
//               <div className="col">
//                 <div className="text-center">
//                   <div className="alert alert-primary">
//                     or sign in with your social media account
//                   </div>
//                   <button className="btn btn-default">Facebook</button>
//                   <button className="btn btn-default">Google</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default SignUpForm;
// //reduxForm({ form: 'signup' })(SignUpForm);