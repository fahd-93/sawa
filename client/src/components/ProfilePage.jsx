import React, {  Component } from 'react';
import axios from 'axios';

class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            last_name: '',
            date_of_birth: ''
        }

    }


    componentDidMount() {

        axios.get(`http://localhost:4000/api/users`)
            .then(res => this.setState({ posts: res.data.name }))
            .catch(err => console.log(err))
    }



    render() {

        return (

            <div>
                <h1>you are logged in</h1>
                <h2>{}</h2>
            </div>
            );
    }
}




export default ProfilePage;