import React, { Component } from 'react';
import { getAllUsers } from "../redux/actions/actionCreator";
import { connect } from "react-redux";
import {  CardColumns, Card } from "react-bootstrap";

class UserCards extends Component {
    state = {};

    componentDidMount(){
        this.props.getAllUsers();
        console.log(this.props.users)
    }

    render () {
        const users = this.props.users;
        if ( this.props.users === undefined ) {
            return <div>no data</div>
        }

        console.log('component',users);
        
        return (
            <CardColumns >

           
            {users.map(user =>

            <Card key={user._id}>
            <Card.Img variant="top" src={`http://localhost:4000/uploads/${user.image}`} />
            <Card.Body>
                 <Card.Title style={{ color: 'black' }}>
                     {user.local.name}
                </Card.Title>
            </Card.Body>
            <Card.Footer>
               
                <small className="text-muted">Last updated:</small>
            </Card.Footer>
            </Card>
            )}
            
            </CardColumns>
           
        )
    }
}

function mapStateToProps(state){
   console.log('state from props UserCards PAGE', state.users.user);
    return {
        users:  state.users.user
    }

}

export default connect( mapStateToProps, { getAllUsers })( UserCards );