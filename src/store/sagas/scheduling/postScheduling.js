import { call } from 'redux-saga/effects';

import { database } from '../../../services/database';

export default function* setScheduling(action) {
	yield console.log('chamou saga setScheduling');
	yield console.log(action.dataScheduling);
	yield console.log(action.user);
	try {
		const schedulingRef = database().ref('consulta').push();
		const paciRef = database().ref(`paciente/${action.user.uid}`);
		const psicoRef = database().ref(
			`psicologo/${action.dataScheduling.psicologo.id}`
		);
		// const schedulingRef = firestore().collection('consulta');
		// const paciRef = firestore().collection('paciente').doc(action.user.uid);
		// const psicoRef = firestore()
		// 	.collection('psicologo')
		// 	.doc(action.dataScheduling.psicologo.id);

		yield call([schedulingRef, schedulingRef.set], {
			pacienteUid: action.user.uid,
			psicoUid: action.dataScheduling.psicologo.id,
			date: action.dataScheduling.dateConsultation,
			start: action.dataScheduling.hora.inicio,
			end: action.dataScheduling.hora.termino,
			status: 'Pendente',
			canceled: false,
		});
		// const snapShot = yield call([schedulingRef, schedulingRef.add], {
		// 	pacienteUid: action.user.uid,
		// 	psicoUid: action.dataScheduling.psicologo.id,
		// 	date: action.dataScheduling.dateConsultation,
		// 	start: action.dataScheduling.hora.inicio,
		// 	end: action.dataScheduling.hora.termino,
		// 	status: 'Pendente',
		// 	canceled: false,
		// });

		const paciSnapshot = yield call([paciRef, paciRef.once], 'value');
		const paciConsultas = paciSnapshot.val().consultas;

		if (paciConsultas) {
			const newConsultas = paciConsultas.concat([schedulingRef.key]);
			console.log('PACICONSUTLAS: ', newConsultas);
			yield call([paciRef, paciRef.update], {
				consultas: newConsultas,
			});
		} else {
			yield call([paciRef, paciRef.update], {
				consultas: [schedulingRef.key],
			});
		}
		// yield call([paciRef, paciRef.update], {
		// 	consultas: firestore.FieldValue.arrayUnion(
		// 		snapShot._documentPath._parts[1]
		// 	),
		// });

		const psicoSnapshot = yield call([psicoRef, psicoRef.once], 'value');
		console.log('psicoRef: ', psicoSnapshot.val());
		const psicoConsultas = psicoSnapshot.val().consultas;

		if (psicoConsultas) {
			const newConsultas = psicoConsultas.concat([schedulingRef.key]);
			console.log('PSICONSUTLAS: ', newConsultas);
			yield call([psicoRef, psicoRef.update], {
				consultas: newConsultas,
			});
		} else {
			yield call([psicoRef, psicoRef.update], {
				consultas: [schedulingRef.key],
			});
		}
		// yield call([psicoRef, psicoRef.update], {
		// 	consultas: firestore.FieldValue.arrayUnion(
		// 		snapShot._documentPath._parts[1]
		// 	),
		// });

		// console.log(action.user.uid);

		// yield put({
		// 	type: 'REQUEST_SCHEDULINGS_PATIENT',
		// 	uid: action.user.uid,
		// 	typeUser: 'paciente',
		// });
	} catch (error) {
		// yield put({ type: 'FAILURE_SIGN_UP', error: error.code });
		console.log('erro ao criar a consulta', error);
	}
}
