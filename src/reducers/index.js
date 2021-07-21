import { combineReducers } from 'redux';
import { reducer as formReducer  } from 'redux-form'  //importing named export and renaming it formReducer to 'reduce' confusion!!
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,  //absolutely need to use key 'form' here
    streams: streamReducer
});