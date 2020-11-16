import { put, call } from 'redux-saga/effects';
import { firestore } from '../../../services/database';

export default function* getAppointments(action) {
	yield console.log('chamou saga appointment');
	try {
		yield console.log(action.uid);
		const { uid } = action;

		const feedsRef1 = firestore().collection('consulta');
		const feedsRef2 = firestore().collection(action.typeUser).doc(uid);

		const { _data } = yield call([feedsRef2, feedsRef2.get]);
		const { consultas } = _data;
		console.log(consultas);

		const snapShot = yield call([
			feedsRef1.where(firestore.FieldPath.documentId(), 'in', consultas),
			feedsRef1.get,
		]);

		const appointmentsArray = [];

		yield snapShot.forEach(document => {
			const id = document.id;
			appointmentsArray.push({...document.data(), id});
		});

		console.log('appointmentsArray: ', appointmentsArray);

		if(appointmentsArray.length === 0){
			yield put({
				type: 'EMPTY_GET_APPOINTMENT',
			});
		}else{
			yield put({
				type: 'SUCCESS_GET_APPOINTMENT',
				appointments: appointmentsArray,
			});
		}

	} catch (error) {
		yield put({ type: 'FAILED_GET_APPOINTMENT', error: error.code });
	}
}
