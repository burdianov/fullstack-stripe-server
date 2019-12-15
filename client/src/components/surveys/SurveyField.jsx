// SurveyField contains logic to render a single label and a text input
import React from "react";

const SurveyField = ({input, label}) => {
  return (
    <>
      <label>{label}</label>
      <input {...input}/>
    </>
  )
};

export default SurveyField;