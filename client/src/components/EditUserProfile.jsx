import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as jwt_decode from "jwt-decode";
// import AlgoliaPlaces from 'algolia-places-react';
import axios from 'axios';

class EditUserProfile extends Component {
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
                    console.log('ResData', res.data)
                    this.setState({
                        email: res.data.local.email,
                        name: res.data.local.name.toUpperCase(),
                        lastName: res.data.last_name
                    })
                })
                .catch(err => console.log('Error', err))
        }
        return null;
    }

    handleInput = e => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });

    };

    updateUserInput = async e => {
        e.preventDefault();

        await axios
            .put(`http://localhost:4000/api/users/${this.userId}`, this.state)

    };

    deleteUser = async e => {
        console.log('LOCAL Storage', localStorage)
        await axios.delete(`http://localhost:4000/api/users/${this.userId}`);
        localStorage.clear('jwt_token');

    };

    render() {
        console.log(this.state)
        return (
            <div>

                <form className='container'
                    onChange={e => this.handleInput(e)}>


                    <label>First Name:</label>
                    <input type="text"
                        name="name" readOnly
                        defaultValue={this.state.name} />
                    <br />
                    <label >Last Name:</label>
                    <input type="text"
                        name="last_name"
                        defaultValue={this.state.lastName} />
                    <br />
                    <label> Email:</label>
                    <input type="email"
                        name="email" readOnly
                        defaultValue={this.state.email} />
                    <br />
                    <label >Profession:</label>
                    <input type="text"
                        name="profession"
                        defaultValue={this.state.profession} />
                    <br />
                    <label >Date of Birth:</label>
                    <input type="date" name={this.state.dateBirth} />
                    <br />
                    <label >Gender:</label>

                    <select name="gender" >
                        <option defaultValue>Choose Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Unknown">Unknown</option>
                    </select>

                    <br />
                    <label>Location:</label>
                    {/* <AlgoliaPlaces
                        name='AlgoliaPlaces'
                        placeholder="Write an address here"
                        options={{
                            appId: 'pl48PRQJVY9X',
                            apiKey: '976ae5509e3452dbc494dd1e9f390486'
                        }}
                        onChange={(suggestion) => this.handleInput(suggestion)}
                    /> */}
                    <br />
                    <button onClick={e => this.deleteUser(e)}>
                        <Link to=''>Delete Account</Link>
                    </button>

                    <br />
                    <button onClick={e => this.updateUserInput(e)}>
                        <Link to='profilepage'>
                            Save Changes
                    </Link>
                    </button>
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
