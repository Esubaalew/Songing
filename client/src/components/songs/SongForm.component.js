import React from "react";
import { Field, reduxForm } from "redux-form";

const SongForm = ({ handleSubmit, onSubmit }) => {
    const renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    };

    const renderInput = ({ input, label, meta }) => {
        return (
            <div className={`field ${meta.touched && meta.error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div>{renderError(meta)}</div>
            </div>
        );
    };

    const handleFormSubmit = (formValues) => {
        onSubmit(formValues);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="ui form error">
            <Field
                name="title"
                component={renderInput}
                label="Enter title"
            />
            <Field
                name="description"
                component={renderInput}
                label="Enter description"
            />
            <button className="ui button primary">Submit</button>
        </form>
    );
};

const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "You must enter a title";
    }
    if (!formValues.description) {
        errors.description = "You must enter a description";
    }

    return errors;
};

export default reduxForm({
    form: "songForm",
    validate
})(SongForm);
