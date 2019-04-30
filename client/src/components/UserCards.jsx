import React, { Component } from 'react';
import { getAllUsers } from '../redux/actions/actionCreator';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';

class UserCards extends Component {
	state = {};

	componentDidMount() {
		this.props.getAllUsers();
	}

	render() {
		const users = this.props.users;
		if (this.props.users === undefined) {
			return <div>no data</div>;
		}

		console.log('component', users);

		return (
			<div>
				<div>
					{this.props.volunteers.map((user) => (
						<div className="component-flex">
							<div>
								<Avatar className="avatar" src={`http://localhost:4000/uploads/${user.image}`} />

								<div className="singlemedia-body">
									<h5 className="mt-0 mb-1">{user.local.name}</h5>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.users.users
});

export default connect(mapStateToProps, { getAllUsers })(UserCards);
