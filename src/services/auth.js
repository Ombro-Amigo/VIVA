import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

export { auth };

export const SignInWithFacebook = async () => {
	// Attempt login with permissions
	const result = await LoginManager.logInWithPermissions([
		'public_profile',
		'email',
	]);

	if (result.isCancelled) {
		throw 'User cancelled the login process';
	}

	// Once signed in, get the users AccesToken
	const data = await AccessToken.getCurrentAccessToken();

	if (!data) {
		throw 'Something went wrong obtaining access token';
	}

	// Create a Firebase credential with the AccessToken
	const facebookCredential = auth.FacebookAuthProvider.credential(
		data.accessToken
	);

	// Sign-in the user with the credential
	auth().signInWithCredential(facebookCredential);
};

export const signUp = async (email, senha) => {
	auth()
		.createUserWithEmailAndPassword(email, senha)
		.then(() => {
			console.log('inscreveu!');
		})
		.catch(error => {
			console.log(`Erro ao criar usuário: ${error.code}`);
		});
};

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
