import { put, call } from 'redux-saga/effects';

import { auth, getFacebookCredential } from '../../../services/auth';

export default function* getFacebookSignIn() {
	try {
		const facebookCredential = yield getFacebookCredential();

		const { user } = yield call(
			[auth(), auth().signInWithCredential],
			facebookCredential
		);

		yield put({
			type: 'SUCCESS_SIGN_IN',
			user,
			typeUser: 'paciente',
		});
	} catch (error) {
		yield put({ type: 'FAILURE_SIGN_IN', error: error.code });
	}
}
