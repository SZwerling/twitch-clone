import React from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    renderError({ error, touched }){   //takes in meta and destructures error and touched
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {    //when called this function gets passed - as argt - a bunch of stuff like 'value' and 'onChange'
                                                    //takes all input props from formProps.input object and adds to input element, //props 'label' gets passed into formProps as well so can destructure as 'label'
        const className = `field ${meta.error && meta.touched ? 'error' : ''}` //ternary to determine classname with error or not
        return (                                                                  
           <div className={className}>       
                <label>{label}</label>
                <input {...input} autoComplete="off"/>  
                {this.renderError(meta)} 
            </div>
        )                          
    }  
    //<input {...input}/> takes all the key value pairs from formProps.input and adds as props to input element
    //like onChange = {formProps.input.onChange} and value = {formProps.input.value}  
    
    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }
//if a field has same name as proptery in object returned from 'validate' function, it gets passed to renderInput
//and is accessed as meta.error
   render() {
      return (
          <form 
          onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form"
          className="ui form error" //needs this className or semantic ui blocks errors from appearing
          >
              <Field name="title" component={this.renderInput} label="Enter Title"/> 
              <Field name="description" component={this.renderInput} label="Enter Description"/>
              <button className="ui button primary">Submit</button>
          </form>
      )
   }
}

//validate defined outside the component class
const validate = formValues => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'You must enter a title.';
    }
    if(!formValues.description){
        errors.description = 'You must enter a description.';
    }

    return errors
}

const formWrapped = reduxForm({ 
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
//because we're using reduxForm and connect, the above looks better - but funcions the same as - below:

// export default connect()(reduxForm({ 
//     form: 'streamCreate',
//     validate: validate
// })(StreamCreate));
