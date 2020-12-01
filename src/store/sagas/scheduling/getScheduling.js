import { put, call } from 'redux-saga/effects';

import { firestore } from '../../../services/database';

export default function* getScheduling(action) {
	yield console.log('chamou saga getScheduling');
	yield console.log(action.dataScheduling);
	yield console.log(action.user);
	try {
		const feedsRef = firestore().collection('consulta');
		const pacRef = firestore().collection('paciente').doc(action.user.uid);
		const psicoRef = firestore()
			.collection('psicologo')
			.doc(action.dataScheduling.psicologo.id);

		const snapShot = yield call([feedsRef, feedsRef.add], {
			crp: action.dataScheduling.psicologo.crp,
			date: action.dataScheduling.dateConsultation,
			end: action.dataScheduling.hora.termino,
			paciente: action.user.name,
			pacienteUid: action.user.uid,
			psicoUid: action.dataScheduling.psicologo.id,
			psicologo: action.dataScheduling.psicologo.name,
			start: action.dataScheduling.hora.inicio,
			status: 'confirmada',
		});

		yield call([pacRef, pacRef.update], {
			consultas: firestore.FieldValue.arrayUnion(
				snapShot._documentPath._parts[1]
			),
		});

		yield call([psicoRef, psicoRef.update], {
			consultas: firestore.FieldValue.arrayUnion(
				snapShot._documentPath._parts[1]
			),
		});

		console.log(action.user.uid);

		yield put({
			type: 'REQUEST_APPOINTMENTS',
			uid: action.user.uid,
			typeUser: 'paciente',
		});
	} catch (error) {
		// yield put({ type: 'FAILURE_SIGN_UP', error: error.code });
		console.log('erro ao criar a consulta', error);
	}
}
