import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';


// importing pages
import WelcomePage from '../components/welcomePage';
import DashboardPage from '../components/dashboardPage';

const MainRouter = (props) => {
    return (
        <Router>
            <Switch>
                <Route component={WelcomePage} path="/" exact />
                <Route component={DashboardPage} path="/dashboard" />
            </Switch>
        </Router>
    )
}

export default MainRouter;