import { combineReducers } from 'redux';

// import { firebaseReducer } from 'react-redux-firebase';
import authSignInReducer from './authSignIn';
import authSignUpReducer from './authSignUp';
import schedulingReducer from './scheduling';

const rootReducer = combineReducers({
	authSignIn: authSignInReducer,
	authSignUp: authSignUpReducer,
	scheduling: schedulingReducer,
});

export default rootReducer;
