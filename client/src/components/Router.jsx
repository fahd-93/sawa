import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../sass/styles.scss';

import App from "./App";
import EducationForm from "./EducationForm";
import ConstructionForm from "./ConstructionForm";
import MedicalForm from "./MedicalForm";
import CampaignConfirmation from "./CampaignConfirmation";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={App} />}
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
                    <Route path="/confirm-entery"
                           component={CampaignConfirmation}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
