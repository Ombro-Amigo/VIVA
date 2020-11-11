import { combineReducers } from 'redux';
// import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './auth';
import appointmentReducer from './appointment';

const rootReducer = combineReducers({
	auth: authReducer,
	appointment: appointmentReducer,
	// firebase: firebaseReducer,
});

export default rootReducer;
