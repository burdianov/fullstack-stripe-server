// SurveyForm shows a form for a user to add input
import React from "react";
import {Field, reduxForm} from "redux-form";
import SurveyField from "./SurveyField";

const FIELDS = [
  {label: "Survey Title", name: "title"},
  {label: "Subject Line", name: "subject"},
  {label: "Email Body", name: "body"},
  {label: "Recipient List", name: "emails"}
];

const SurveyForm = (props) => {
  const renderFields = () => {
    return FIELDS.map(({label, name}) => {
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
      <form onSubmit={props.handleSubmit(values => console.log(values))}>
        {renderFields()}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);