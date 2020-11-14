import { combineReducers } from 'redux';
// import { firebaseReducer } from 'react-redux-firebase';
import authSignInReducer from './authSignIn';
import authSignUpReducer from './authSignUp';
import appointmentReducer from './appointment';

const rootReducer = combineReducers({
	authSignIn: authSignInReducer,
	authSignUp: authSignUpReducer,
	appointment: appointmentReducer,
	// firebase: firebaseReducer,
});

export default rootReducer;
