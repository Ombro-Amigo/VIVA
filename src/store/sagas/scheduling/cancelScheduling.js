import { put, call } from 'redux-saga/effects';

import { database } from '../../../services/database';

export default function* cancelScheduling(action) {
	yield console.log('chamou saga deleteScheduling');
	yield console.log(action);
	try {
		const schedulingRef = database().ref(`consulta/${action.idScheduling}`);
		// const schedulingRef = firestore()
		// 	.collection('consulta')
		// 	.doc(action.idScheduling);

		yield call([schedulingRef, schedulingRef.update], {
			canceled: true,
		});

		yield put({
			type: 'SUCCESS_CANCEL_SCHEDULING',
			idScheduling: action.idScheduling,
		});
	} catch (error) {
		// yield put({ type: 'FAILURE_SIGN_UP', error: error.code });
		console.log('erro ao excluir a consulta', error);
	}
}
