import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FacebookLogin from 'react-facebook-login';
import * as actions from "../../redux/actions/actionCreator";
import CustomInput from '../CustomInput';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
    }

    async onSubmit(formData, ) {
        await this.props.signIn(formData);
        if (!this.props.history.errorMessage) {
            this.props.history.push('/profilepage')
        }
    }

    async responseFacebook(res) {
        await this.props.oauthFacebook(res.accessToken);
        if (!this.props.errorMessage) {
            this.props.history.push('/profilepage')

        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (

            <div className="registration-form-container">
                <div className="text"><span>Login</span></div>
                <div>
                    <div >
                        <div className="text-center">
                            <FacebookLogin
                                appId="2241134356214829"
                                autoLoad={true}
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
                    <form onSubmit={handleSubmit(this.onSubmit)}
                          className="container">
                        <fieldset>
                            <Field
                                name="email"
                                type="text"
                                id="email"
                                label="Enter your email"
                                placeholder="example@example.com"
                                component={CustomInput} />

                        </fieldset>

                        <fieldset>
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


                        <div className="text-center">
                            <button type="submit"
                                    className="continue-btn">
                                CONTINUE
                            </button>
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
