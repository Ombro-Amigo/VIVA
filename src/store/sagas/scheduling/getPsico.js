import { put, call } from 'redux-saga/effects';

import { database } from '../../../services/database';

export default function* requestPsico() {
	yield console.log('chamou saga requestPsico');
	try {
		const psicoRef = database().ref('psicologo');

		const snapshot = yield call([psicoRef, psicoRef.once], 'value');
		const keysPsico = Object.keys(snapshot.val());
		const valuesPsico = Object.values(snapshot.val());

		const psicoArray = [];
		let index = 0;

		keysPsico.forEach(document => {
			console.log('foi: ', document);
			psicoArray.push({ ...valuesPsico[index], id: document });
			index += 1;
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
