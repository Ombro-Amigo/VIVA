import { takeLatest, all } from 'redux-saga/effects';

import getMessages from './message/getMessage';
import sendMessage from './message/sendMessage';
import cancelScheduling from './scheduling/cancelScheduling';
import confirmScheduling from './scheduling/confirmScheduling';
import getPsico from './scheduling/getPsico';
import getSchedulingsPatient from './scheduling/getSchedulingsPatient';
import getSchedulingsPsychologist from './scheduling/getSchedulingsPsychologist';
import postScheduling from './scheduling/postScheduling';
import getFacebookSignIn from './signIn/getFacebookSignIn';
import getSignIn from './signIn/getSignIn';
import getSignOut from './signIn/getSignOut';
import getSignUp from './signUp/getSignUp';
import updateAvatar from './updateAccount/updateAvatar';

// function* é uma função do tipo generator, basicamente eu posso parar a execução dessa função ao chamar o yield
export default function* root() {
	yield all([takeLatest('REQUEST_SIGN_IN', getSignIn)]);
	yield all([takeLatest('REQUEST_SIGN_OUT', getSignOut)]);
	yield all([takeLatest('REQUEST_FACEBOOK_SIGN_IN', getFacebookSignIn)]);

	yield all([takeLatest('REQUEST_SIGN_UP', getSignUp)]);

	yield all([
		takeLatest('REQUEST_SCHEDULINGS_PATIENT', getSchedulingsPatient),
	]);
	yield all([
		takeLatest(
			'REQUEST_SCHEDULINGS_PSYCHOLOGIST',
			getSchedulingsPsychologist
		),
	]);

	yield all([takeLatest('REQUEST_GET_PSICO', getPsico)]);
	yield all([takeLatest('REQUEST_POST_SCHEDULING', postScheduling)]);
	yield all([takeLatest('REQUEST_CONFIRM_SCHEDULING', confirmScheduling)]);
	yield all([takeLatest('REQUEST_CANCEL_SCHEDULING', cancelScheduling)]);

	yield all([takeLatest('REQUEST_CREATE_MESSAGE', sendMessage)]);
	yield all([takeLatest('REQUEST_GET_MESSAGES', getMessages)]);

	yield all([takeLatest('REQUEST_UPDATE_AVATAR', updateAvatar)]);
}
