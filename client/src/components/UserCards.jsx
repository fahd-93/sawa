
import React, { Component } from 'react';
import { getAllUsers } from "../redux/actions/actionCreator";
import { connect } from "react-redux";
import {  CardColumns, Card, Button } from "react-bootstrap";
import Avatar from 'react-avatar';

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

			<div >
			
            {/* <CardColumns >

			
			{users.map(user =>
			<div>
				  
			<Card key={user._id}>
			<Avatar className="avatar" src={`http://localhost:4000/uploads/${user.image}`} /> 
			 
			  <Card.Body>
				<Card.Title style={{ color: 'black' }}>{user.local.name}</Card.Title>
				<Card.Subtitle>Rating: {user.rating} *</Card.Subtitle>
				<Button>Button</Button>
			  </Card.Body>
			</Card>
		  </div>

            
            )}
            
            </CardColumns> */}

			<div >
			{users.map(user =>
                       
						<ul className="list-unstyled">


                            <li className="">
							<Avatar className="avatar" src={`http://localhost:4000/uploads/${user.image}`} /> 
								
								<div className="singlemedia-body">
									<h5 className="mt-0 mb-1">{user.local.name}</h5> 

									<span>Rating: {user.rating}</span> <br/>
									<span>Created Campaigns: <li>{user.created_campaigns}</li></span>
									<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante</p> 
									
								</div>
							</li>
						</ul>
					
						 )}
						 	
					</div>
			</div>
        )
    }
}

function mapStateToProps(state){
   console.log('state from props UserCards PAGE', state.users.users);
    return {
        users:  state.users.users
    }

}

export default connect( mapStateToProps, { getAllUsers })( UserCards );