import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

export { auth };

export function* getFacebookCredential() {
	// Attempt login with permissions
	const result = yield LoginManager.logInWithPermissions([
		'public_profile',
		'email',
	]);

	if (result.isCancelled) {
		throw 'User cancelled the login process';
		// throw new Error('User cancelled the login process');
	}

	// Once signed in, get the users AccesToken
	const data = yield AccessToken.getCurrentAccessToken();

	if (!data) {
		throw 'Something went wrong obtaining access token';
	}

	// Create a Firebase credential with the AccessToken
	const facebookCredential = auth.FacebookAuthProvider.credential(
		data.accessToken
	);

	return facebookCredential;

	// Sign-in the user with the credential
	// return yield auth().signInWithCredential(facebookCredential);
}

export function* signUp(email, senha) {
	return yield auth()
		.createUserWithEmailAndPassword(email, senha)
		.then(() => {
			console.log('inscreveu!');
		})
		.catch(error => {
			console.log(`Erro ao criar usuário: ${error.code}`);
		});
}

export const signOut = async () => {
	auth()
		.signOut()
		.then(() => console.log('Saiu!'))
		.catch(error => {
			console.log(`Erro inesperado ao sair: ${error}`);
		});
};

export const currentUser = () => auth().currentUser;

export const listenerAuth = async func => auth().onAuthStateChanged(func);
