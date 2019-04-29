import React, { Component } from 'react';
import Avatar from './Avatar';
import axios from 'axios';
import { connect } from 'react-redux';
import * as jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: [''],
            joined: [''],
        };
        this.userId = this.getUserId()
    }

    getUserId = () => {
        const jwtToken = localStorage.getItem('JWT_TOKEN');

        if (jwtToken) {
            try {
                let x = jwt_decode(jwtToken);

                axios.defaults.headers.common['Authorization'] = jwtToken;

                return x.sub
            }
            catch (error) {console.log(error)}
        }
        return null;
    };

    componentDidMount() {
        if (this.userId) {
            axios.get(`http://localhost:4000/api/users/${this.userId}`)
                .then(res => {
                    this.setState({
                        email: res.data.local.email,
                        name: res.data.local.name,
                        lastName: res.data.last_name,
                        campaigns: res.data.created_campaigns,
                        joined: res.data.created_campaigns,
                        volunteerType: res.data.type_of_volunteers,
                    })
                })
                .catch(err => console.log('Error', err))
        }
        return null;
    }

    render() {
        if (this.props.isAuth === true && this.state.name !== '') {

            return (

                <div className="profile-form-container">
                    <Avatar/>
                    <div className='text'>
                        <span>{this.state.name} {this.state.lastName}</span>
                    </div>
                    <div className="data-container">
                        <div className="col-left">Campaigns Created:
                            <strong> {this.state.campaigns.length}</strong>
                        </div>
                        <div className="col-right">Joined Campaigns:
                            <strong> {this.state.joined.length}</strong>
                        </div>
                    </div>
                   <div className="type-style">
                        <span>
                            Volunteer Type:
                            <b>[</b> <strong> {this.state.volunteerType} </strong> <b>]</b>
                        </span>
                   </div>
                    <div className='text-center'>
                        <div className="btn-group">
                            <Link to='editprofile' className="btn-profile">
                                Edit Profile
                            </Link>
                            <Link to='create-campaign' className="btn-profile">
                                Create Campaign
                            </Link>
                            <Link to='showcampaign' className="btn-profile">
                                Join Campaign
                            </Link>
                        </div>
                </div>
               </div>

            );
        }

        return null;

    }
}

const mapStateToProps = (state) => ({
    loggedInUser: state.userReducer.loggedInUser,
    userId: state.auth.userId
});

export default connect(mapStateToProps, null)(ProfilePage);