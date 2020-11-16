import { put, call } from 'redux-saga/effects';
import { firestore } from '../../../services/database';

export default function* getPsicoScheduling(action) {
	yield console.log('chamou saga getPsicoScheduling');
	try {
	// 	yield console.log(action.uid);
	// 	const { uid } = action;

		const feedsRef1 = firestore().collection('psicologo');
	// 	const feedsRef2 = firestore().collection('paciente').doc(uid);
	// 	const feedsRef3 = firestore().collection('psicologo');

	// 	const { _data } = yield call([feedsRef2, feedsRef2.get]);
	// 	const { consultas } = _data;
	// 	console.log(consultas);
	// 	// .doc('69PbNY68bKSZg3vpBWct');

	// 	// console.log(feedsRef);

	// 	// const { _documentPath } = feedsRef;
	// 	// const { _parts } = _documentPath;
	// 	// const docId = _parts[1];

	// 	// console.log(_parts[1]);

		const snapShot = yield call([
			feedsRef1,
			feedsRef1.get,
		]);

		const psicoArray = [];

		snapShot.forEach(document => {
			const id = document.id;
			psicoArray.push({...document.data(), id});
		});

		console.log(psicoArray);

	// 	// console.log(snapShot2);

	// 	// console.log(appointmentsArray[0]);

	// 	// const teste = yield call([
	// 	// 	appointmentsArray[0].psicologo,
	// 	// 	appointmentsArray[0].psicologo.get,
	// 	// ]);

	// 	// console.log('teste', teste);

	// 	// appointmentsArray.forEach(appointment => {
	// 	// 	appointment["psicologo"]
	// 	// });

	// 	// _data.id = docId;
	// 	// console.log('_data', _data);

		yield put({
			type: 'SUCCESS_PSICO_CREATE_SCHEDULING',
			listPisco: psicoArray,
		});
	} catch (error) {
		// yield put({ type: 'FAILURE_SIGN_UP', error: error.code });
	}
}
