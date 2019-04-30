import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { getAllUsers, joinCampaign } from '../redux/actions/actionCreator';
import UserCards from './UserCards';
import {Button} from 'react-bootstrap';
import * as jwt_decode from "jwt-decode";
import axios from 'axios';



class ShowSingleCampaign extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		let id = this.props.campaign_id;


		if(!id){
			let url =  window.location.href;
			let arr = url.split('campaign/');
			id = arr[1];
		}

		axios
			.get(`http://localhost:4000/api/users/campaign/${id}`)
			.then((res) => {
				let campaign = res.data.campaign
				this.setState({
					categories: campaign.categories,
					title: campaign.title,
					created_by: campaign.created_by,
					description: campaign.description,
					created_at: campaign.created_at,
					country_code: campaign.country_code,
					num_of_volunteers: campaign.num_of_volunteers,
					type_of_volunteers: campaign.type_of_volunteers,
					start_date: campaign.start_date,
					materials: campaign.materials,
					end_date: campaign.end_date,
					image: campaign.image,
					volunteers: res.data.volunteers
				});
			})
            .catch((err) => console.log(err));
           
            this.props.getAllUsers();
	}

	joinCampaign=()=>{

			
		const jwtToken = localStorage.getItem('JWT_TOKEN');

		if (jwtToken) {
			try {
				let user = jwt_decode(jwtToken);

				axios.defaults.headers.common['Authorization'] = jwtToken;
				this.props.joinCampaign(user.sub, this.props.campaign_id);
			}
	
			catch (error) {console.log(error)}
		}
};

	render() {

		return (
			<div className="cam-singlecontainer">
				<div className="row" />
				<div className="row">
					<div className="col-9">
						<div className="text">
							<span>{this.state.title}</span>
						</div>

						<img className="singlecampimage"
							src={`http://localhost:4000/uploads/${this.state.image}`}
							alt=""/>
                        
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
						<p>Number of volunteers: {this.state.num_of_volunteers}</p>
						<p>Type of volunteers: {this.state.type_of_volunteers}</p>
						<p>Start date: {this.state.start_date}</p>
						<p>Materials: {this.state.materials}</p>
						<p>End date: {this.state.end_date}</p>
					</div>

					<div className="col-3">
						<Button className = "join" onClick={this.joinCampaign}>Join Campaign</Button>
                       	{this.state.volunteers && <UserCards volunteers={this.state.volunteers}/>}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
    campaign_id: state.campaign.campaign_id,
	users: state.users,
	volunteers: state.users.volunteers
});

export default connect(mapStateToProps, { getAllUsers, joinCampaign })(ShowSingleCampaign);