import React, {useEffect} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => {
  return <h2>Dashboard</h2>
};
const SurveyNew = () => {
  return <h2>SurveyNew</h2>
};

const App = ({fetchUser}) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header/>
          <div className="container">
            <Route exact path="/" component={Landing}/>
            <Route exact path="/surveys" component={Dashboard}/>
            <Route path="/surveys/new" component={SurveyNew}/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
};

export default connect(null, actions)(App);