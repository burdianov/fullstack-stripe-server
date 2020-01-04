import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchSurveys} from "../../actions";

const SurveyList = ({surveys, fetchSurveys}) => {
  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  const renderSurveys = () => {
    console.log(surveys);
    return surveys.map(survey => {
      return (
        <div key={survey._id} className="card darken-1">
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="#">Yes: {survey.yes}</a>
            <a href="#">No: {survey.no}</a>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      {renderSurveys()}
    </div>
  )
};

const mapStateToProps = ({surveys}) => {
  return {surveys}
};

export default connect(mapStateToProps, {fetchSurveys})(SurveyList);