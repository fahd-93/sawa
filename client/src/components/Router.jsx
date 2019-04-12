import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../sass/styles.scss';

import App from "./App";
import EducationForm from "./EducationForm";
import ConstructionForm from "./ConstructionForm";
import MedicalForm from "./MedicalForm";
//import DisplayCampaign from "./DisplayCampaign";
import MultimediaForm from "./MultimediaForm";
import LocationForm from "./LocationForm";
import SaveCampaignForm from './SaveCampaignForm';
import CampaignType from "./CampaignType";
import SignForm from "./SignForm";


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={App}
                    />

                    <Route path="/sign-form"
                        component={SignForm}
                    />
                    <Route path="/create-campaign"
                        component={CampaignType}
                    />
                    <Route path="/construction-form"
                        component={ConstructionForm}
                    />
                    <Route path="/education-form"
                        component={EducationForm}
                    />
                    <Route path="/medical-form"
                        component={MedicalForm}
                    />
                    {/*  <Route path="/confirm-entry"
                           component={CampaignConfirmation}
                    />*/}
                    {/* <Route path="/display-campaign"
                        component={DisplayCampaign} /> */}
                    <Route path="/location-form"
                        component={LocationForm} />
                    <Route path="/multimedia-form"
                        component={MultimediaForm} />
                    <Route path="/save-form"
                        component={SaveCampaignForm} />

                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
