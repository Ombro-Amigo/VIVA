import { put, call } from 'redux-saga/effects';

import { firestore } from '../../../services/database';

export default function* requestPsico() {
	yield console.log('chamou saga requestPsico');
	try {
		const psicoRef = firestore().collection('psicologo');

		const snapShot = yield call([psicoRef, psicoRef.get]);

		const psicoArray = [];

		snapShot.forEach(document => {
			const { id } = document;
			psicoArray.push({ ...document.data(), id });
		});

		console.log('listofPsicos: ', psicoArray);

		yield put({
			type: 'SUCCESS_GET_PSICO',
			listPisco: psicoArray,
		});
	} catch (error) {
		console.log('deu ruim no get psico');
		// yield put({ type: 'FAILURE_SIGN_UP', error: error.code });
	}
}
