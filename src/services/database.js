import database from '@react-native-firebase/database';
import { signOut } from './auth';

export const setDataUser = async (uid, data) => {
   await database()
      .ref(`/users/${uid}`)
      .set(data)
      .then(() => console.log('Salvou!'))
      .catch(error => console.log(`Erro ao salvar os dados: ${error}`));
}

export const confirmTypeUser = async (uid, typeUser, setLoading) => {
   await database()
      .ref(`/users/${uid}/tipo`)
      .once('value')
      .then(snapshot => {
         if(snapshot.val() === typeUser) {
            console.log('igual = ', snapshot.val());
            setLoading(false);
         }else{
            console.log('não igual');
            signOut();
            setLoading(false);
         }
      })
      .catch(error => console.log(`Erro ao confirmar usuário: ${error}`));
}