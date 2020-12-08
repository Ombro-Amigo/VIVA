import { combineReducers } from 'redux';

// import { firebaseReducer } from 'react-redux-firebase';
import authSignInReducer from './authSignIn';
import authSignUpReducer from './authSignUp';
import messagesReducer from './messages';
import schedulingReducer from './scheduling';
import updateAccountReducer from './updateAccount';

const rootReducer = combineReducers({
	authSignIn: authSignInReducer,
	authSignUp: authSignUpReducer,
	scheduling: schedulingReducer,
	messages: messagesReducer,
	updateAccount: updateAccountReducer,
});

export default rootReducer;
