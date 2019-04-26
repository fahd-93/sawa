import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FacebookLogin from 'react-facebook-login';
//import GoogleLogin from 'react-google-login';

import * as actions from "../redux/actions/actionCreator";

import CustomInput from './CustomInput';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);

    }
    async onSubmit(formData, ) {

        // console.log('onSubmit() has been called');
        console.log('form data', formData);

        //Call the ActionCreator
        await this.props.signIn(formData);
        if (!this.props.history.errorMessage) {
            this.props.history.push('/profilepage')
        }
    }



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

            <div className="container-col-md">
                <h2 className="form-signin-heading">Please Login</h2>
                <div className="col">
                    <div className="text-center">
                        <br />
                        <div >


                            <FacebookLogin

                                appId="2241134356214829"
                                // autoLoad={true}
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                cssClass="btnFacebook"
                                icon={< i className="fa fa-facebook" />}

                            />

                        </div>
                        <div className="divider-text">or</div>
                    </div>
                </div>

                <div className="col-md">
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <fieldset className="field">
                            <Field
                                name="email"
                                type="text"
                                id="email"
                                label="Enter your email"
                                placeholder="example@example.com"
                                component={CustomInput} />

                        </fieldset>
                        <fieldset className="field" >
                            <Field

                                name="password"
                                type="password"
                                id="password"
                                label="Enter your password"
                                placeholder="Your Password"
                                component={CustomInput} />

                        </fieldset>

                        {this.props.errorMessage ?
                            <div className="alert alert-danger">
                                {this.props.errorMessage}
                            </div> : null}




                        <div className="col text-center">
                            <button type="submit" className="continue-btn">Continue</button>
                            {/* <button type="submit" className="btn btn-outline-lg btn-success btn-block">Continue</button> */}
                            <br />
                            <div>Forgot Password?</div>
                        </div>

                    </form>

                </div>

            </div>


        )
    }
}



function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage,

    }
}




export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })

)(SignInForm);
