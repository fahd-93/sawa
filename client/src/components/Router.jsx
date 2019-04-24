import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../sass/styles.scss';
import App from "./App";
import EducationForm from "./EducationForm";
import ConstructionForm from "./campaign/ConstructionForm";
import MedicalForm from "./MedicalForm";
import CampaignForm from "./campaign/CampaignForm";
import MultimediaForm from "./MultimediaForm";
import LocationForm from "./campaign/LocationForm";
import SaveCampaignForm from './SaveCampaignForm';
import SignInForm from "./SignInForm";
import Notfound from "./Notfound";

// import App from './components/App'

import SignUpForm from './SignUpForm';
import ProfilePage from './ProfilePage';
import authGuard from './HOCs/authGuard';
import Header from './Header';
import Geolocation from "./Geolocation";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={App}
                    />
                    <Route exact
                        path="/signup"
                        component={SignUpForm}
                    />
                    <Route exact
                        path="/signin"
                        component={SignInForm}
                    />
                    <Route exact
                        path="/profilepage"
                        component={authGuard(ProfilePage)}
                    />
                    <Route path="/geolocation"
                           component={Geolocation}
                    />
                    <Route path="/campaign-form"
                           component={CampaignForm}
                    />
                    <Route path="/create-campaign"
                        component={CampaignForm}
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
                    <Route path="/location-form"
                        component={LocationForm} />
                    <Route path="/multimedia-form"
                        component={MultimediaForm} />
                    <Route path="/save-form"
                        component={SaveCampaignForm} />
                    <Route component={Notfound} />

                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
