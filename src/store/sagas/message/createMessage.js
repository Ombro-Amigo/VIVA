import { call } from 'redux-saga/effects';

import { database } from '../../../services/database';

export default function* createMessage(action) {
	yield console.log('chamou saga createMessage');
	const { idShceduling, messages } = action;
	try {
		const chatRef = database().ref(`consulta/${idShceduling}/chat`);

		messages.createdAt = database.ServerValue.TIMESTAMP;

		yield call([chatRef, chatRef.push], messages);
	} catch (error) {
		console.log('deu erro na mensagem: ', error);
	}
}
