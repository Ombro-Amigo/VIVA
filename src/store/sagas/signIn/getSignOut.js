import { put, call } from 'redux-saga/effects';

import { auth } from '../../../services/auth';

export default function* getSignOut() {
	try {
		yield call([auth(), auth().signOut]);
		yield put({ type: 'SUCCESS_SIGN_OUT', error: null, typeUser: null });
	} catch (error) {
		yield put({
			type: 'FAILURE_SIGN_OUT',
			error: error.code,
			typeUser: null,
		});
	}
}
