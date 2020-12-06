import { put, call } from 'redux-saga/effects';

import { firestore } from '../../../services/database';

export default function* getSchedulingsPsychologist(action) {
	try {
		const { uid } = action;

		const schedulingRef = firestore().collection('consulta');
		const userRef = firestore().collection(action.typeUser).doc(uid);
		const otherUsersRef = firestore().collection('paciente');

		const { _docs } = yield call([otherUsersRef, otherUsersRef.get]);

		const { _data } = yield call([userRef, userRef.get]);
		const { consultas } = _data;
		let snapShot2;
		let schedulingsArray;

		if (consultas) {
			snapShot2 = yield call([
				schedulingRef.where(
					firestore.FieldPath.documentId(),
					'in',
					consultas
				),
				schedulingRef.get,
			]);

			schedulingsArray = [];

			yield snapShot2.forEach(document => {
				console.log('chegou aqui');
				const { id } = document;
				let paci = null;

				_docs.forEach(documentPaci => {
					const { _ref } = documentPaci;
					const { _documentPath } = _ref;
					const { _parts } = _documentPath;
					const paciUid = _parts[1];
					if (paciUid === document.data().pacienteUid) {
						paci = documentPaci.data();
					}
				});

				schedulingsArray.push({
					...document.data(),
					id,
					paciNome: paci.name,
				});
			});

			yield console.log('Formato da consulta: ', schedulingsArray);

			yield put({
				type: 'SUCCESS_GET_SCHEDULINGS',
				schedulings: schedulingsArray,
			});
		} else {
			yield put({
				type: 'EMPTY_GET_SCHEDULINGS',
			});
		}
	} catch (error) {
		console.log('deu ruim', error);
		yield put({ type: 'FAILED_GET_SCHEDULINGS', error: error.code });
	}
}
