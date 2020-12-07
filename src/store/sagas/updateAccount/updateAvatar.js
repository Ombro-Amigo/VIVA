import { utils } from '@react-native-firebase/app';
import { put, call } from 'redux-saga/effects';

import { database, storage } from '../../../services/database';

export default function* updateAvatar(action) {
	yield console.log('chamou saga updateAvatar');
	yield console.log(action);
	try {
		const avatarRef = storage().ref(`users/${action.uid}`);

		// path to existing file on filesystem
		const pathToFile = action.avatar.uri;
		// uploads file
		//  avatarRef.putFile(pathToFile);
		yield call([avatarRef, avatarRef.putFile], pathToFile);
		// yield put({
		// 	type: 'SUCCESS_UPDATE_AVATAR',
		// 	idScheduling: action.idScheduling,
		// });
	} catch (error) {
		console.log('erro ao atualizar avatar', error);
	}
}
