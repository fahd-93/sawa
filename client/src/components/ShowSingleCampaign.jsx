import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { getAllUsers } from '../redux/actions/actionCreator';
import UserCards from './UserCards';
import {Button} from 'react-bootstrap';


import axios from 'axios';

class ShowSingleCampaign extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		const id = this.props.campaign_id;
		axios
			.get(`http://localhost:4000/api/users/campaign/${id}`)
			.then((res) => {
				console.log('Resssss', res);
				this.setState({
					categories: res.data.categories,
					title: res.data.title,
					created_by: res.data.created_by,
					description: res.data.description,
					created_at: res.data.created_at,
					//campaign_location: res.data.campaign_location,
					country_code: res.data.country_code,
					num_of_volunteers: res.data.num_of_volunteers,
					type_of_volunteers: res.data.type_of_volunteers,
					start_date: res.data.start_date,
					materials: res.data.materials,
					end_date: res.data.end_date,
					image: res.data.image
				});
			})
            .catch((err) => console.log(err));
           
            this.props.getAllUsers();
	}

	render() {
		if (this.props.campaign_id === undefined) {
			return <div>nossssss data</div>;
		}

		// const campaign = this.props.campaign;
        console.log(this.props.campaign_id);
        console.log('this.props.users', this.props.users)

		return (
			<div className="cam-singlecontainer">
				<div className="row" />
				<div className="row">
					<div className="col-9 cam-singlecontainer">
						<h1 className="cam-singleheader">{this.state.title}</h1>
                        
						<img
							className="singlecampimage"
							src={`http://localhost:4000/uploads/${this.state.image}`}
							alt=""
						/>
                        
                        <Button className = "share-to-fb">{< i className="fa fa-facebook" ></i>}</Button> &nbsp;
                        
                        <Button className = "tweeter">{<i className="fab fa-twitter"></i>}</Button>
                        
                        
						<p>Category: {this.state.categories} </p>
					
						<p>Created by: {this.state.created_by} </p>
						
						<p className="description">
							Description Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
							sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
							condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. :{' '}
							{this.state.description}{' '}
						</p>
						<hr />

						<p>Created the {this.state.created_at}</p>
						{/* <p>Located: {this.state.campaign_location}</p> */}
						<p>Country code: {this.state.country_code}</p>
						<p>Number of volunteers: {this.state.num_of_volunteers}</p>
						<p>Type of volunteers: {this.state.type_of_volunteers}</p>
						<p>Start date: {this.state.start_date}</p>
						<p>Materials: {this.state.materials}</p>
						<p>End date: {this.state.end_date}</p>
					</div>

					<div className="col-3">
						<Button className = "join">Join Campaign</Button>{' '}
                        <UserCards userData={this.state.users}/>
					
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
    campaign_id: state.campaign.campaign_id,
    users: state.users
});

export default connect(mapStateToProps, { getAllUsers })(ShowSingleCampaign);
