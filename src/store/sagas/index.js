import { takeLatest, all } from 'redux-saga/effects';

import getSignIn from './signIn/getSignIn';
import getSignOut from './signIn/getSignOut';
import getFacebookSignIn from './signIn/getFacebookSignIn';

import getSignUp from './signUp/getSignUp';

// function* é uma função do tipo generator, basicamente eu posso parar a execução dessa função ao chamar o yield
export default function* root() {
	yield all([takeLatest('REQUEST_SIGN_IN', getSignIn)]);
	yield all([takeLatest('REQUEST_SIGN_OUT', getSignOut)]);
	yield all([takeLatest('REQUEST_FACEBOOK_SIGN_IN', getFacebookSignIn)]);

	yield all([takeLatest('REQUEST_SIGN_UP', getSignUp)]);
}
