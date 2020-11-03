import database from '@react-native-firebase/database';

export const setDataUser = (codeUser, data) => {
   database()
      .ref(`/users/${codeUser}`)
      .set(data)
      .then(() => console.log('Salvou!'))
      .catch(error => console.log(`Erro ao salvar os dados: ${error}`));
}