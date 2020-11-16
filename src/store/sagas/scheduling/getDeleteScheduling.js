import { put, call } from 'redux-saga/effects';
import { firestore } from '../../../services/database';

export default function* getDeleteScheduling(action) {
	yield console.log('chamou saga getDeleteScheduling');
	yield console.log(action)
	// yield console.log(action.dataScheduling);
	// yield console.log(action.user);
	try {
		const feedsRef = firestore().collection('consulta').doc(action.idScheduling);
		const pacRef = firestore().collection(action.typeUser).doc(action.user.uid);

		yield call(
			[feedsRef, feedsRef.delete]
		);

		yield call(
			[pacRef, pacRef.update],
			{
				consultas: firestore.FieldValue.arrayRemove(action.idScheduling),
			}
		)

		yield put({
			type: 'REQUEST_APPOINTMENTS',
			uid: action.user.uid,
			typeUser: action.typeUser,
		});
	} catch (error) {
		// yield put({ type: 'FAILURE_SIGN_UP', error: error.code });
		console.log('erro ao excluir a consulta', error)
	}
}
