import { put, call } from 'redux-saga/effects';

import { auth } from '../../../services/auth';
import { database } from '../../../services/database';

export default function* getSignUp(action) {
	try {
		yield console.log('chamou');

		const { user } = yield call(
			[auth(), auth().createUserWithEmailAndPassword],
			action.dataRegister.credentials.email,
			action.dataRegister.credentials.password
		);

		console.log('user: ', user);

		const uid = yield user.uid;

		// const userRef = firestore()
		// 	.collection(action.dataRegister.personalInformations.type)
		// 	.doc(uid);

		// yield call(
		// 	[userRef, userRef.set],
		// 	action.dataRegister.personalInformations
		// );

		const userRef = database().ref(
			`${action.dataRegister.personalInformations.type}/${uid}`
		);
		yield call(
			[userRef, userRef.set],
			action.dataRegister.personalInformations
		);

		yield put({
			type: 'SUCCESS_SIGN_IN',
			user,
			typeUser: action.dataRegister.personalInformations.type,
		});
	} catch (error) {
		yield put({ type: 'FAILURE_SIGN_UP', error: error.code });
	}
}
