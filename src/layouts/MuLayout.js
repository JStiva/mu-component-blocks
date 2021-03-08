import React from "react";
import { Switch, Route } from "react-router-dom";
import PricingPlanPage from "../pages/PricingPlanPage";
import HomePage from "../pages/HomePage";
import NavMenu from "../components/NavMenu";

import Container from '@material-ui/core/Container';


const MuLayout = () => {
    return (
        <div>
            <NavMenu />
            <Container maxWidth="lg">
                <Switch>
                    <Route exact path="/mu/home-page" component={HomePage} />
                    <Route exact path="/mu/pricing-plan-page" component={PricingPlanPage} />
                </Switch>
            </Container>
        </div>
    )
};

export default MuLayout;
