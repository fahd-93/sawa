import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';

class ProfilePage extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         name: '',
    //         last_name: '',
    //         date_of_birth: ''
    //     }

    // }


    // componentDidMount() {

    //     axios.get(`http://localhost:4000/api/users`)
    //         .then(res => this.setState({ posts: res.data.name }))
    //         .catch(err => console.log(err))
    // }



    render() {

        return (


            <div>

                <h1>you are logged in</h1>
                {this.props.loggedInUser &&

                    <div>
                        <h3>Name:{this.props.loggedInUser.local.name}</h3>
                        <h3>email:{this.props.loggedInUser.local.email}</h3>

                    </div>
                }


            </div>
        );
    }
}



const mapStateToProps = (state) => ({
    loggedInUser: state.userReducer.loggedInUser
});
export default connect(mapStateToProps, null)(ProfilePage);












































