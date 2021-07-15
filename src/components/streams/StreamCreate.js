import React from "react";
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput({ input, label, meta }){     //when called this function gets passed - as argt - a bunch of stuff like 'value' and 'onChange'
        return (                            //takes all input props from formProps.input object and adds to input element
                                            //props 'label' gets passed into formProps as well so can destructure as 'label'
           <div className="field">       
                <label>{label}</label>
                <input {...input}/>  
                <div>{meta.error}</div> 
            </div>
        )                          
    }  
    //<input {...input}/> takes all the key value pairs from formProps.input and adds as props to input element
    //like onChange = {formProps.input.onChange} and value = {formProps.input.value}  
    
    onSubmit(formValues){
        console.log(formValues)
    }

   render() {
      return (
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
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

export default reduxForm({ 
    form: 'streamCreate',
    validate: validate
})(StreamCreate);
