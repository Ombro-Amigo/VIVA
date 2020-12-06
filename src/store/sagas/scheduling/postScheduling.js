import { put, call } from 'redux-saga/effects';

import { firestore } from '../../../services/database';

export default function* setScheduling(action) {
	yield console.log('chamou saga setScheduling');
	yield console.log(action.dataScheduling);
	yield console.log(action.user);
	try {
		const schedulingRef = firestore().collection('consulta');
		const paciRef = firestore().collection('paciente').doc(action.user.uid);
		const psicoRef = firestore()
			.collection('psicologo')
			.doc(action.dataScheduling.psicologo.id);

		const snapShot = yield call([schedulingRef, schedulingRef.add], {
			pacienteUid: action.user.uid,
			psicoUid: action.dataScheduling.psicologo.id,
			date: action.dataScheduling.dateConsultation,
			start: action.dataScheduling.hora.inicio,
			end: action.dataScheduling.hora.termino,
			status: 'Pendente',
			canceled: false,
		});

		yield call([paciRef, paciRef.update], {
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
			type: 'REQUEST_SCHEDULINGS_PATIENT',
			uid: action.user.uid,
			typeUser: 'paciente',
		});
	} catch (error) {
		// yield put({ type: 'FAILURE_SIGN_UP', error: error.code });
		console.log('erro ao criar a consulta', error);
	}
}
