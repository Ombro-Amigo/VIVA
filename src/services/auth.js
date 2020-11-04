import auth from '@react-native-firebase/auth';
import { confirmTypeUser } from './database';

export const login = async (email, senha) => {
  await auth()
    .signInWithEmailAndPassword(email, senha)
    .then(userInfo => {
      console.log('logou!');
    })
    .catch(error => {
      console.log(`Erro ao logar: ${error.code}`);
    });
}

export const signIn = async (email, senha) => {
  await auth()
    .createUserWithEmailAndPassword(email, senha)
    .then(() => {
      console.log('inscreveu!');
    })
    .catch(error => {
      console.log(`Erro ao criar usuário: ${error.code}`);
    });
}

export const signOut = async () => {
  await auth()
    .signOut()
    .then(() => console.log('Saiu!'))
    .catch(error => {
      console.log(`Erro inesperado ao sair: ${error}`)
    });
}

export const currentUser = () => auth().currentUser;