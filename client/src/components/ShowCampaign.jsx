import React, { Component } from 'react';
import { getAllCamp, getCampId } from "../redux/actions/actionCreator";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { CardColumns, Card } from "react-bootstrap";

class ShowCampaign extends Component {

    state = {}

    componentDidMount() {
        this.props.getAllCamp();
    }

    getId = (e) => {
        this.setState({
            campaignId: e
        })
        this.props.getCampId(this.state)
    }

    render() {

        if (this.props.campaign === undefined) {
            return <div>no data</div>
        }

        const campaign = this.props.campaign;
        return (

            <CardColumns >

                {campaign.map(user =>
                    <Link to="showsinglecampaign" onClick={() => this.getId(user._id)} >
                        <Card key={user._id}>
                            <Card.Img variant="top" src={`http://localhost:4000/uploads/${user.image}`} />
                            <Card.Body>
                                <Card.Title style={{ color: 'black' }}>{user.title}</Card.Title>
                                <Card.Text style={{ color: 'black' }}>{user.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>

                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                            <button>show</button>
                        </Card>
                    </Link>

                )}
            </CardColumns>


        )
    }
}
function mapStateToProps(state) {
    // console.log('state from props CampaignCards PAGE', state.campaign.campaign);
    return {
        campaign: state.campaign.campaign
    };
}


export default connect(mapStateToProps, { getAllCamp, getCampId })( ShowCampaign);