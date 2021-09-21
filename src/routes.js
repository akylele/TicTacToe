import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import GamePlayPage from "./Pages/GamePlayPage";
import MainPage from "./Pages/MainPage";

function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <MainPage />
            </Route>
            <Route path="/gameplay/:id" exact>
                <GamePlayPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
export default Routes