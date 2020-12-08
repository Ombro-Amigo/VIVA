import { call } from 'redux-saga/effects';

import { database } from '../../../services/database';

export default function* sendMessage(action) {
	yield console.log('chamou saga sendMessage');
	const { idShceduling, messages } = action;
	try {
		const chatRef = database().ref(`consulta/${idShceduling}/chat`);

		yield call([chatRef, chatRef.push], messages);
	} catch (error) {
		console.log('deu erro na mensagem: ', error);
	}
}
