import { put, call } from 'redux-saga/effects';

import { auth } from '../../../services/auth';
import { database } from '../../../services/database';

export default function* getSignIn(action) {
	try {
		const { user } = yield call(
			[auth(), auth().signInWithEmailAndPassword],
			action.credentials.email,
			action.credentials.password
		);

		const userRef = database().ref(`${action.credentials.type}/${user.uid}`);

		const snapshot = yield call([userRef, userRef.once], 'value');
		console.log('SNAPSHOT: ', snapshot);

		// const userRef = firestore()
		// 	.collection(action.credentials.type)
		// 	.doc(user.uid);

		// const { _exists, _data } = yield call([userRef, userRef.get]);
		const { name, lastName } = snapshot.val();

		const { uid } = user;

		const loggedUser = { uid, name, lastName };
		console.log('LOGGED USER: ', snapshot.val());
		// // user = { user, name, lastName };
		if (snapshot) {
			yield put({
				type: 'SUCCESS_SIGN_IN',
				user: loggedUser,
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
