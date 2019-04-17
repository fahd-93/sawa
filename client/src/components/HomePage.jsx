import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import CampaignCards from './CampaignCards';



class HomePage extends Component{

    render() {
        return(
            <div>

            <div className={"App"}>
                <div className={"App__Form"}>
                    <button className="FormField__Button mr-20">
                        <Link to={"/sign-form"}>
                            Sign In
                        </Link>
                    </button>
                    <button className="FormField__Button mr-20">
                        <Link to={"/campaign-form"}>
                            Create Form
                        </Link>
                    </button>
                </div>

            </div>
              {/*  <CampaignCards />*/}
            </div>
        )
    }
}




export default HomePage;