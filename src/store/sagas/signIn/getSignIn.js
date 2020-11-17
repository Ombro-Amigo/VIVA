import { put, call } from 'redux-saga/effects';
import { auth } from '../../../services/auth';
import { firestore } from '../../../services/database';

export default function* getSignIn(action) {
	try {
		const { user } = yield call(
			[auth(), auth().signInWithEmailAndPassword],
			action.credentials.email,
			action.credentials.password
		);

		const uid = yield user.uid;
		const feedsRef = firestore().collection(action.credentials.type).doc(uid);

		const { _exists } = yield call([feedsRef, feedsRef.get]);
		if (_exists) {
			yield put({
				type: 'SUCCESS_SIGN_IN',
				user,
				typeUser: action.credentials.type,
			});
		} else {
			yield put({
				type: 'FAILURE_TYPE_USER',
				error: 'auth/invalid-type-user',
			});
		}
	} catch (error) {
		yield put({ type: 'FAILURE_SIGN_IN', error: error.code });
	}
}
