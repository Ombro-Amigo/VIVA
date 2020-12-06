import { put, call } from 'redux-saga/effects';

import { firestore } from '../../../services/database';

export default function* confirmScheduling(action) {
	yield console.log('chamou saga confirmScheduling');
	yield console.log(action);
	try {
		const schedulingRef = firestore()
			.collection('consulta')
			.doc(action.idScheduling);

		yield call([schedulingRef, schedulingRef.update], {
			status: 'Confirmada',
		});

		yield put({
			type: 'SUCCESS_CONFIRM_SCHEDULING',
			idScheduling: action.idScheduling,
		});
	} catch (error) {
		// yield put({ type: 'FAILURE_SIGN_UP', error: error.code });
		console.log('erro ao excluir a consulta', error);
	}
}
