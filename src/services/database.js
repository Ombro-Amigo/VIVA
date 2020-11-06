import database from '@react-native-firebase/database';
import { signOut } from './auth';

export const setDataUser = async (uid, data) => {
   await database()
      .ref(`/users/${uid}`)
      .set(data)
      .then(() => console.log('Salvou!'))
      .catch(error => console.log(`Erro ao salvar os dados: ${error}`));
}

export const confirmTypeUser = async (uid, typeUser, setSignOut) => {
   let result = false;
   console.log('tipo: ', typeUser);
   console.log('uid: ', uid);
   await database().ref(`/users/${uid}/tipo`).once('value')
      .then(snapshot => {
         if(snapshot.val() === typeUser) {
            console.log('tipo: ', typeUser);
            console.log('igual = ', snapshot.val());
            result = true;
            // setLoading(false);
         }else{
            console.log('não igual', typeUser);
            console.log('value: ', snapshot.val());
            signOut();
            // setLoading(false);
         }
      })
      .catch(error => alert(`Erro ao confirmar o tipo de usuário: ${error}`));
   
   return result;
}