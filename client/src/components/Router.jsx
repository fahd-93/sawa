import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../sass/styles.scss';

import HomePage from "./HomePage";
import ConstructionForm from "./campaign/ConstructionForm";
import EducationForm from "./campaign/EducationForm";
import MedicalForm from "./campaign/MedicalForm";
import CampaignForm from "./campaign/CampaignForm";
import LocationForm from "./campaign/LocationForm";
import SignInForm from "./User Registration/SignInForm";
import Notfound from "./Notfound";
import SignUpForm from './User Registration/SignUpForm';
import ShowCampaign from './ShowCampaign';
import ProfilePage from './User Profile/ProfilePage';
import ShowSingleCampaign from './ShowSingleCampaign';
import authGuard from './HOCs/authGuard';
import NavigationBar from './NavigationBar';
import Foot from './Foot';
import EditUserProfile from './User Profile/EditUserProfile';
import HowPage from './HowPage';

import Geolocation from "./Geolocation";
import UserCards from "./UserCards";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavigationBar />

                <Switch>
                    <Route
                        exact
                        path="/"
                        component={HomePage}
                    />
                    <Route
                        exact
                        path="/showcampaign"
                        component={ShowCampaign}
                    />
                    <Route
                        exact
                        path="/users/campaign/:Id"
                        component={ShowSingleCampaign}
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
                    <Route exact
                        path="/editprofile"
                        component={EditUserProfile}
                    />
                    {/* <Route exact
                        path="/users"
                        component={UserCards}
                    /> */}

                    <Route path="/geolocation"
                        component={Geolocation}
                    />

                    <Route path="/create-campaign"
                        component={authGuard(CampaignForm)}
                    />
                    <Route path="/construction-form"
                        component={authGuard(ConstructionForm)}
                    />

                    <Route path="/education-form"
                        component={authGuard(EducationForm)}
                    />
                    <Route path="/medical-form"
                        component={authGuard(MedicalForm)}
                    />
                    <Route path="/location-form"
                        component={LocationForm} />

                    <Route path="/how-page"
                        component={HowPage} />

                    <Route component={Notfound} />

                </Switch>
                <Foot />
            </BrowserRouter>
        );
    }
}

export default Router;
