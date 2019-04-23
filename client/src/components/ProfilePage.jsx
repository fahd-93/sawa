import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as jwt_decode from "jwt-decode";
import Campaign from '../redux/reducer/Campaign';
import { Link } from 'react-router-dom';

class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {}
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
            catch (error) {
                console.log(error);
            }

        }
        return null;
    }

    componentDidMount() {
        if (this.userId) {
            axios.get(`http://localhost:4000/api/users/${this.userId}`)
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        email: res.data.local.email,
                        name: res.data.local.name,
                        lastName: res.data.last_name,
                        campaigns: res.data.created_campaigns,

                    })
                })
                .catch(err => console.log('Error', err))
        }
        return null;
    }



    render() {

        console.log(this.state)
        if (this.props.isAuth === true && this.state.name !== '') {

            console.log('state', this.userId);

            return (
                <div>

                    <h1>your id {this.userId}</h1>

                    <div>
                        <h3>Name: {this.state.name}</h3>
                        <h3>email: {this.state.email}</h3>
                        <h3>Last Name: {this.state.lastName}</h3>
                        <Link to='editprofile'
                            className="btn btn-default">
                            Edit Profile
                        </Link>
                        <Link to=''
                            className="btn btn-default">
                            Create Campaign
                        </Link>
                        <Link to=''
                            className="btn btn-default">
                            Join Campaign
                        </Link>



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












































