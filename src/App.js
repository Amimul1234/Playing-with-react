import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUpPage";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <AllMeetUps/>
                </Route>
                <Route path="/new-meetup">
                    <NewMeetUpPage/>
                </Route>
                <Route path="/favourites">
                    <Favourites/>
                </Route>
            </Switch>
        </Layout>
    );
};

export default App;