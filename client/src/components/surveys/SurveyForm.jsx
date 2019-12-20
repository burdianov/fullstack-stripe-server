// SurveyForm shows a form for a user to add input
import React from "react";
import _ from "lodash";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

const SurveyForm = (props) => {
  const renderFields = () => {
    return formFields.map(({label, name}) => {
      return <Field
        key={name}
        component={SurveyField}
        type="text"
        label={label}
        name={name}/>
    })
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        {renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit"
                className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  )
};

const validate = (values) => {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");

  _.each(formFields, ({name}) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);