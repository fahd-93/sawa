import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                    console.log("Axios",res.data);
                    this.setState({
                        email: res.data.local.email,
                        name: res.data.local.name,
                        lastName: res.data.last_name,
                        campaigns: res.data.created_campaigns,
                        volunteerType: res.data.type_of_volunteers,

                    })
                })
                .catch(err => console.log('Error', err))
        }
        return null;
    }

    render() {
        console.log(this.state.volunteerType);
        let path = "/png/1.png";
        if (this.props.isAuth === true && this.state.name !== '') {
            return (
                <div className="camp-form-container">
                    <h3 className='text'>
                        <img src={path} alt="Avatar" className="avatar"/>
                    </h3>
                    <h3 className='text'><span>{this.state.name} {this.state.lastName}</span></h3>
                   <div className="text">
                        <span>Volunteer Type: {this.state.volunteerType}</span>
                   </div>
                    <div className='wrapper text-center'>
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

        return (
            <div>Bad</div>
        )

    }
}



const mapStateToProps = (state) => ({
    loggedInUser: state.userReducer.loggedInUser,
    userId: state.auth.userId
});
export default connect(mapStateToProps, null)(ProfilePage);












































