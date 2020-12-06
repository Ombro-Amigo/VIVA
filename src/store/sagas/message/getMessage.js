import { call, put } from 'redux-saga/effects';

import { database } from '../../../services/database';

export default function* getMessages(action) {
	yield console.log('chamou saga getMessages');
	const { idShceduling, callback } = action;
	try {
		const chatRef = database().ref(`consulta/${idShceduling}/chat`);
		console.log(chatRef);

		yield call([chatRef, chatRef.on], 'child_added', snapshot => {
			console.log('teste aqui');
			// const { teste, user, createdAt, _id } = snapshot.val();

			// const message = { teste, user, createdAt, _id };
			// console.log('FOI NO GET ', message);

			// callback(message);
		});

		// console.log(snapshot.val());

		// yield put({
		// 	type: 'SUCCESS_GET_MESSAGES',
		// 	idShceduling,
		// });
	} catch (error) {
		console.log('deu erro na mensagem: ', error);
	}
}
