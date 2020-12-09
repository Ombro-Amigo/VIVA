import { call, put } from 'redux-saga/effects';

import { database } from '../../../services/database';

export default function* getMessages(action) {
	yield console.log('chamou saga getMessages');
	const { idShceduling, callback } = action;
	try {
		const chatRef = yield database().ref(`consulta/${idShceduling}/chat`);

		yield call([chatRef, chatRef.on], 'child_added', snapshot => {
			const { text, user, createdAt: numberStamp, _id } = snapshot.val();

			const createdAt = new Date(numberStamp);

			const message = { text, user, createdAt, _id };

			console.log('puxou');

			callback(message);
		});
	} catch (error) {
		console.log('deu erro na mensagem: ', error);
	}
}
