import React, { createContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
// import Loading from '../../pages/Loading';
// import firebase from '@firebase/app';
// import '@firebase/auth';
// import '@firebase/firestore';

const CadContext = createContext({
   user: {},
   setUser: () => {},
});

export const CadProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   // const [email, setEmail] = useState('');
   // const [genero, setGenero] = useState('');
   // const [nascimento, setNascimento] = useState('');
   // const [nome, setNome] = useState('');
   // const [nomeUsuario, setNomeUsuario] = useState('');
   // const [sobrenome, setSobrenome] = useState('');

   // const [cpf, setCpf] = useState('');
   // const [senha, setSenha] = useState('');

   // const [message, setMessage] = useState('');
   // const [loading, setLoading] = useState(false);

   // const [tipoUsuario, setTipoUsuario] = useState(null);

   // useEffect(() => {      
   //    const firebaseConfig = {
   //       apiKey: "AIzaSyCdq8TLHoPdCnwyvdyaMHXYtlcsP0GsHuA",
   //       authDomain: "viva-3130e.firebaseapp.com",
   //       databaseURL: "https://viva-3130e.firebaseio.com",
   //       projectId: "viva-3130e",
   //       storageBucket: "viva-3130e.appspot.com",
   //       messagingSenderId: "47514371046",
   //       appId: "1:47514371046:web:523aaf2539e114c82c0c27",
   //       measurementId: "G-13L7KHYTGB"
   //    };
   //    // Initialize Firebase
   //    if(firebase.apps.length === 0){
   //       firebase.initializeApp(firebaseConfig);
   //    }
   //    // firebase.analytics();
   // })

   //  function signIn() {
   //       setLoading(true);
   //       setMessage('');

   //    const loginUserSuccess = user => {         
   //       setLoading(false);
   //       setMessage('Sucesso!');
   //       setUser(user);
   //       console.log('foi')
   //    }
   
   //    const loginUserFailed = error => {
   //       setLoading(false);
   //       setMessage(error.code);
   //       console.log('não foi', error.code);
   //    }

   //    firebase
   //       .auth()
   //       .createUserWithEmailAndPassword(email, senha)
   //       .then(loginUserSuccess)
   //       .catch(loginUserFailed)


   //    // console.log("\n\n\n\n", userF);

      
      
   //    // const {token, user} = response;

   //    // setUser(response.user);
      
   //    // await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
   //    // await AsyncStorage.setItem('@RNAuth:token', response.token);

   //    // signIn().then(response => {
   //    //    console.log(response);
   //    // });
   // }

   // // function signOut() {
   // //    setUser(null);
   // // }

   // // if(loading) {
   // //    return <Loading />;
   // // }

   return (
      <CadContext.Provider value={{user, setUser}}>
         {children}
      </CadContext.Provider>
   );
}

export default CadContext;