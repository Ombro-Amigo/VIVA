import { put, call } from 'redux-saga/effects';

import { firestore, database } from '../../../services/database';

export default function* getSchedulingsPatient(action) {
	try {
		console.log('chamou resquest do paciente');
		const { uid } = action;

		const schedulingRef = database().ref('consulta');
		const userRef = database().ref(`${action.typeUser}/${uid}`);
		const otherUsersRef = database().ref('paciente');
		// const schedulingRef = firestore().collection('consulta');
		// const userRef = firestore().collection(action.typeUser).doc(uid);
		// const otherUsersRef = firestore().collection('psicologo');

		const snapshotOtherUser = yield call(
			[otherUsersRef, otherUsersRef.once],
			'value'
		);
		// const { _docs } = yield call([otherUsersRef, otherUsersRef.get]);

		const snapshotUser = yield call([userRef, userRef.once], 'value');
		const { consultas } = snapshotUser.val();
		let snapShot2;
		let schedulingsArray;

		if (consultas) {
			snapShot2 = yield call([schedulingRef, schedulingRef.once], 'value');
			// snapShot2 = yield call([
			// 	schedulingRef.where(
			// 		firestore.FieldPath.documentId(),
			// 		'in',
			// 		consultas
			// 	),
			// 	schedulingRef.get,
			// ]);
			const keysScheduling = Object.keys(snapShot2.val());
			const newKeysScheduling = [];
			const valuesScheduling = Object.values(snapShot2.val());
			const newValuesScheduling = [];

			keysScheduling.filter((element, i) => {
				if (consultas.indexOf(element) !== -1) {
					newKeysScheduling.push(element);
					newValuesScheduling.push(valuesScheduling[i]);
				}
				return null;
			});
			console.log('NEW: ', newKeysScheduling);
			console.log('NEW: ', newValuesScheduling);

			const keysOtherUser = Object.keys(snapshotOtherUser.val());
			const valuesOtherUser = Object.values(snapshotOtherUser.val());

			let index = 0;

			schedulingsArray = [];

			yield newValuesScheduling.forEach(document => {
				const id = newKeysScheduling[index];
				let paci = null;

				// console.log(snapshotOtherUser.val());

				let indexOther = 0;
				valuesOtherUser.forEach(documentPaci => {
					// console.log('documentPaci', documentPaci);
					// const { _ref } = documentPaci;
					// const { _documentPath } = _ref;
					// const { _parts } = _documentPath;
					// const pacienteUid = _parts[1];
					console.log(document.pacienteUid);
					if (keysOtherUser[indexOther] === document.pacienteUid) {
						paci = documentPaci;
						// console.log(documentPaci);
					}
					indexOther += 1;
				});

				schedulingsArray.push({
					...document,
					id,
					paciNome: paci.name,
				});
				index += 1;
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
		console.log('deu ruim no consulta paciente', error);
		yield put({ type: 'FAILED_GET_SCHEDULINGS', error: error.code });
	}
}
