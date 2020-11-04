import database from '@react-native-firebase/database';
import { signOut } from './auth';

export const setDataUser = (uid, data) => {
   database()
      .ref(`/users/${uid}`)
      .set(data)
      .then(() => console.log('Salvou!'))
      .catch(error => console.log(`Erro ao salvar os dados: ${error}`));
}

export const confirmTypeUser = (uid, typeUser, setLoading) => {
   // const { setLoading } = useContext(AuthContext)
   database()
      .ref(`/users/${uid}/tipo`)
      .once('value')
      .then(snapshot => {
         if(snapshot.val() === typeUser) {
            console.log('igual');
            setLoading(false);
         }else{
            console.log('não igual');
            signOut();
            setLoading(false);
         }
      })
      .catch(error => console.log(`Erro ao confirmar usuário: ${error}`));
}