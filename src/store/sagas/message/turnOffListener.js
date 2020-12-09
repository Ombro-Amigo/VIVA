import { call } from 'redux-saga/effects';

import { database } from '../../../services/database';

export default function* turnOffListener(action) {
	yield console.log('chamou saga turnOffListener');
	const { idShceduling } = action;
	try {
		const chatRef = database().ref(`consulta/${idShceduling}/chat`);

		yield call([chatRef, chatRef.off]);
	} catch (error) {
		console.log('deu erro na mensagem: ', error);
	}
}
