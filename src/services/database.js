import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export { firestore, database, storage };

// export const setDataUser = (uid, data) => {
// 	database()
// 		.ref(`/users/${uid}`)
// 		.set(data)
// 		.then(() => console.log('Salvou!'))
// 		.catch(error => console.log(`Erro ao salvar os dados: ${error}`));
// };

// export const confirmTypeUser = async (uid, typeUser, setAuthenticated) => {
// 	console.log('tipo fora: ', typeUser);
// 	console.log('uid: ', uid);
// 	await database()
// 		.ref(`/users/${uid}/tipo`)
// 		.once('value')
// 		.then(snapshot => {
// 			if (snapshot.val() === typeUser) {
// 				console.log('tipo dentro: ', typeUser);
// 				console.log('igual = ', snapshot.val());
// 				setAuthenticated(true);
// 				// setLoading(false);
// 			} else {
// 				console.log('não igual', typeUser);
// 				console.log('value: ', snapshot.val());
// 				setAuthenticated(false);
// 				// signOut();
// 				// setLoading(false);
// 			}
// 		})
// 		.catch(error => {
// 			alert(`Erro ao confirmar o tipo de usuário: ${error}`);
// 			setAuthenticated(false);
// 		});
// };
