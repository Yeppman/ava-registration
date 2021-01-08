import React from 'react'
import { Route } from "react-router-dom";
import ScoutRegistation from './ScotReg'
import PlayerRegistration from './PlayerReg'
import CoachRegistration from './CoachReg'
import HomePage from './home'

const BaseRouter = () => (
    <>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/scout-registration" component={ScoutRegistation} />{" "}
        <Route exact path="/coach-registration" component={CoachRegistration} />{" "}
        <Route exact path="/player-registration" component={PlayerRegistration} />{" "}
    </>
)

export default BaseRouter 