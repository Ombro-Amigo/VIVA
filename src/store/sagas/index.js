import { takeLatest, all } from 'redux-saga/effects';

import getSignIn from './signIn/getSignIn';
import getSignOut from './signIn/getSignOut';
import getFacebookSignIn from './signIn/getFacebookSignIn';

import getSignUp from './signUp/getSignUp';

import getAppointments from './appointments/getAppointments';
import getScheduling from './scheduling/getScheduling';
import getPsicoScheduling from './scheduling/getPsicoScheduling';
import getDeleteScheduling from './scheduling/getDeleteScheduling';

// function* é uma função do tipo generator, basicamente eu posso parar a execução dessa função ao chamar o yield
export default function* root() {
	yield all([takeLatest('REQUEST_SIGN_IN', getSignIn)]);
	yield all([takeLatest('REQUEST_SIGN_OUT', getSignOut)]);
	yield all([takeLatest('REQUEST_FACEBOOK_SIGN_IN', getFacebookSignIn)]);

	yield all([takeLatest('REQUEST_SIGN_UP', getSignUp)]);

	yield all([takeLatest('REQUEST_APPOINTMENTS', getAppointments)]);
	yield all([takeLatest('REQUEST_PSICO_CREATE_SCHEDULING', getPsicoScheduling)]);
	yield all([takeLatest('REQUEST_CREATE_SCHEDULING', getScheduling)]);
	yield all([takeLatest('REQUEST_DELETE_SCHEDULING', getDeleteScheduling)]);
}
