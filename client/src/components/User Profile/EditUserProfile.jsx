import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import VolunteerType from '../campaign/VolunteerType';
import * as jwt_decode from "jwt-decode";
import AlgoliaPlaces from 'algolia-places-react';
import axios from 'axios';

class EditUserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.userId = this.getUserId()
    }

    updateUserInput = async e => {
        e.preventDefault();
        await axios
            .put( `http://localhost:4000/api/users/${this.userId}`, this.state)
            .then(res => console.log("res.data", res.data))
            .catch( error => {
                console.log(error);
            });
    };

    componentDidMount() {
        if (this.userId) {
            axios.get(`http://localhost:4000/api/users/${this.userId}`)
                .then(res => {
                    console.log('ResData', res.data);
                    this.setState({
                        email: res.data.local.email,
                        name: res.data.local.name.toUpperCase(),
                        last_name: res.data.last_name,
                        profession: res.data.profession,
                        gender: res.data.gender,
                        dateBirth: res.data.date_of_birth,
                        volunteerType: res.data.type_of_volunteers
                    })
                })
                .catch(err => console.log('Error', err))
        }
        return null;
    };

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
    };

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });

    };

    handleLocation = suggestion => {
        let location = suggestion.suggestion;
        this.setState({
            city: location.name,
            postcode: location.postcode,
            country: location.country,
            countryCode: location.countryCode,
            type: location.type,
            latlng: {
                lat: location.latlng.lat,
                lng: location.latlng.lng
            }
        });
    };

    deleteUser = async e => {
        e.preventDefault();
        await axios.delete(`http://localhost:4000/api/users/${this.userId}`);
        localStorage.clear('jwt_token');
    };

    render() {
        return (
            <div className="camp-form-container">
                <h3 className="text">
                    <span>Edit Profile</span>
                </h3>
                <form onChange={e => this.handleInput(e)}>

                    <label>First Name:</label>
                    <input type="text"
                           name="name" readOnly
                           defaultValue={this.state.name} />

                    <label>Last Name:</label>
                    <input type="text"
                           name="last_name"
                           defaultValue={this.state.last_name} />

                    <label> Email:</label>
                    <input type="email"
                           name="email" readOnly
                           defaultValue={this.state.email} />

                    <label >Profession:</label>
                    <input type="text"
                           name="profession"
                           defaultValue={this.state.profession} />
                    <br/><br/>
                    <div className="row">
                        <div className="col-25">
                            <label> Date of Birth:</label>
                        </div>
                        <div className="col-75">
                            <input type="date" name="dateBirth"
                                   defaultValue={this.state.dateBirth} />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label><span>Gender:</span></label>
                        </div>
                        <div className="col-75">
                            <select name="gender"
                                    className="custom-select">
                                <option defaultValue>{this.state.gender}</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Unknown">Unknown</option>
                            </select>
                        </div>
                    </div>

                    <VolunteerType/>

                    <div className="row">
                        <div className="col-25">
                            <label>Your Location:</label>
                        </div>
                        <div className="col-75">
                             <AlgoliaPlaces
                                name='AlgoliaPlaces'
                                placeholder="Write an address here"
                                options={{
                                    appId: 'pl48PRQJVY9X',
                                    apiKey: '976ae5509e3452dbc494dd1e9f390486'
                                }}
                                onChange={(suggestion) => this.handleLocation(suggestion)}
                            />
                        </div>
                    </div>

                    <div onClick={e => this.updateUserInput(e)}
                         className="btn-div">
                        <Link to='profilepage'
                              className="btn-style">
                            Save Changes
                        </Link>
                    </div>

                    <div onClick={e => this.deleteUser(e)}
                         className="btn-div">
                        <Link to=''
                              className="btn-delete">
                            Delete Account
                        </Link>
                    </div>


                </form>

            </div>
        );
    }

}

/*const mapStateToProps = state => ({
    loggedInUser: state.userReducer.loggedInUser,
    userId: state.auth.userId
});*/

export default connect(null, null)(EditUserProfile);
