import { put, call } from 'redux-saga/effects';

import { firestore } from '../../../services/database';

export default function* getPsicoScheduling() {
	yield console.log('chamou saga getPsicoScheduling');
	try {
		const feedsRef1 = firestore().collection('psicologo');

		const snapShot = yield call([feedsRef1, feedsRef1.get]);

		const psicoArray = [];

		snapShot.forEach(document => {
			const { id } = document;
			psicoArray.push({ ...document.data(), id });
		});

		console.log(psicoArray);

		yield put({
			type: 'SUCCESS_PSICO_CREATE_SCHEDULING',
			listPisco: psicoArray,
		});
	} catch (error) {
		// yield put({ type: 'FAILURE_SIGN_UP', error: error.code });
	}
}
