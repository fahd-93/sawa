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
        this.props.getCampId(e)
    }

    render() {
        
        //window.location.reload(true);
        if (this.props.campaign === undefined) {
            return <div>no data</div>
        }

        const campaign = this.props.campaign;
        return (
           
            <div className = "cam-container">
                <h1 className= "cam-header">Existing Campaingns</h1>
            <CardColumns >

                {campaign.map(user =>
                
                    <Link to={`/users/campaign/${user._id}`} onClick={() => this.getId(user._id)}>
                        <Card key={user._id}>
                        <div className="element">
                            <Card.Img variant="top" style={{width: '100%', height: "100%"}} src={`http://localhost:4000/uploads/${user.image}`} />
                            </div>
                            <Card.Body>
                                <Card.Title> {user.title}</Card.Title>
                                <Card.Text>Created by: {user.created_by}</Card.Text>
                                <Card.Text>Description: {user.description}</Card.Text>
                                <Card.Text>Category: {user.categories}</Card.Text>
                            </Card.Body>
                            <Card.Footer>

                                <small className="text-muted">Created at: {user.created_at}</small>
                                
                            </Card.Footer>
                           
                        </Card>
                    </Link>

                )
                }
            </CardColumns>
          <hr/>
            </div>


        )
    }
}
function mapStateToProps(state) {
   
    return {
        campaign: state.campaign.campaign
    };
}


export default connect(mapStateToProps, { getAllCamp, getCampId })(ShowCampaign);