import { combineReducers } from 'redux';
// import { firebaseReducer } from 'react-redux-firebase';
import authSignInReducer from './authSignIn';
import authSignUpReducer from './authSignUp';
import appointmentReducer from './appointment';
import schedulingReducer from './scheduling';

const rootReducer = combineReducers({
	authSignIn: authSignInReducer,
	authSignUp: authSignUpReducer,
	appointment: appointmentReducer,
	scheduling: schedulingReducer,
});

export default rootReducer;
