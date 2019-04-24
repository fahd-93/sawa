import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../sass/styles.scss';
import HomePage from "./HomePage";
import EducationForm from "./EducationForm";
import MedicalForm from "./MedicalForm";
import CampaignForm from "./campaign/CampaignForm";
import MultimediaForm from "./MultimediaForm";
import LocationForm from "./campaign/LocationForm";
import SignInForm from "./SignInForm";
import Notfound from "./Notfound";

// import App from './components/App'

import SignUpForm from './SignUpForm';
import ProfilePage from './ProfilePage';
import authGuard from './HOCs/authGuard';
import EditUserProfile from './EditUserProfile';
import HowPage from './HomePage';




import Geolocation from "./Geolocation";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={HomePage}
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
                    <Route path="/geolocation"
                        component={Geolocation}
                    />

                    <Route path="/create-campaign"
                        component={authGuard(CampaignForm)}
                    />
                 {/*   <Route path="/construction-form"
                        component={ConstructionForm}
                    />*/}
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
                   {/* <Route path="/save-form"
                        component={SaveCampaignForm} />*/}
                        <Route path="/how-page"
                        component={HowPage} />
                    <Route component={Notfound} />

                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
