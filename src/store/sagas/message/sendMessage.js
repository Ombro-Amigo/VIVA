import { call } from 'redux-saga/effects';

import { database } from '../../../services/database';

export default function* sendMessage(action) {
	yield console.log('chamou saga sendMessage');
	const { idShceduling, messages } = action;
	try {
		const chatRef = database().ref(`consulta/${idShceduling}/chat`);

		for (let i = 0; i < messages.length; i += 1) {
			const { _id, text, user, createdAt } = messages[i];
			console.log(createdAt);
			const message = {
				_id,
				text,
				user,
				createdAt: database.ServerValue.TIMESTAMP,
			};
			yield call([chatRef, chatRef.push], message);
		}

		// yield call([chatRef, chatRef.push], messages);
	} catch (error) {
		console.log('deu erro na mensagem: ', error);
	}
}
