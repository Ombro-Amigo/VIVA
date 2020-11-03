import auth from '@react-native-firebase/auth';

export const login = (email, senha) => {
  auth()
    .signInWithEmailAndPassword(email, senha)
    .then(() => {
      console.log('logou!');
    })
    .catch(error => {
      console.log(`Erro: ${error.code}`);
    });
}

export const signIn = (email, senha) => {
  auth()
    .createUserWithEmailAndPassword(email, senha)
    .then(() => {
      console.log('inscreveu!');
    })
    .catch(error => {
      console.log(`Erro: ${error.code}`);
    });
}

export const signOut = () => {
  auth()
    .signOut()
    .then(() => console.log('Saiu!'))
    .catch(error => {
      console.log(`Erro inesperado ao sair: ${error}`)
    });
}