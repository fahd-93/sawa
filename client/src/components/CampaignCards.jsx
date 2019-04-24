import React, { Component } from 'react';
import { getAllCamp } from "../redux/actions/actionCreator";
import { connect } from "react-redux";
import {  CardColumns, Card } from "react-bootstrap";

class CampaignCards extends Component{

    componentDidMount(){
        this.props.getAllCamp();
    }
    render() {

        const {campaign} = this.props.campaign;
        return(
    
                    
            <CardColumns >
                {campaign.map(user =>

                <Card key={user._id}>
                <Card.Img variant="top" src={`http://localhost:4000/uploads/${user.image}`} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>{user.title}</Card.Title>
                    <Card.Text style={{ color: 'black' }}>
                    {user.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>

                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                <button>show</button>
                </Card>

                )}
            </CardColumns>

            
        )
    }
}

function mapStateToProps(state){
    console.log('state from props CampaignCards PAGE', state.campaignReducer);
    return {
        campaign:  state.campaignReducer
      };
}



export default connect( mapStateToProps, { getAllCamp })( CampaignCards );