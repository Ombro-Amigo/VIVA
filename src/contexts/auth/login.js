import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
// import { auth } from '../services/auth'
import Loading from '../../pages/Loading';
import firebase from '@firebase/app';
import '@firebase/auth';
// import { FirebaseNamespace } from '@firebase/app-types';
// import { EmailAuthProvider } from '@firebase/auth-types';

// interface User {
//    email: string;
//    senha: string;
// }

// interface Credentials {
//    email: string;
//    senha: string;
// }

// interface AuthContextData {
//    signed: Boolean;
//    // credential: Credentials;
//    setCredential: void;
//    user: Object | null;
//    message: string;
//    signIn(): Promise<void>;
//    // signOut(): void;
// }

const LoginContext = createContext({
   signed: false,
   typeUser: null,
   setTypeUser: () => {},
   email: '',
   senha: '',
   setEmail: () => {},
   setSenha: () => {},
   loading: false,
   user: {},
   setUser: () => {},
   message: '',
   signIn: () => {},
   /*signOut*/
});

export const LoginProvider = ({ children }) => {
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   
   const [user, setUser] = useState(null);
   const [message, setMessage] = useState('');
   const [loading, setLoading] = useState(false);

   const [typeUser, setTypeUser] = useState(null);

   useEffect(() => {
      // const firebase = connectFirebase();
      
      const firebaseConfig = {
         apiKey: "AIzaSyCdq8TLHoPdCnwyvdyaMHXYtlcsP0GsHuA",
         authDomain: "viva-3130e.firebaseapp.com",
         databaseURL: "https://viva-3130e.firebaseio.com",
         projectId: "viva-3130e",
         storageBucket: "viva-3130e.appspot.com",
         messagingSenderId: "47514371046",
         appId: "1:47514371046:web:523aaf2539e114c82c0c27",
         measurementId: "G-13L7KHYTGB"
      };
      // Initialize Firebase
      if(firebase.apps.length === 0){
         firebase.initializeApp(firebaseConfig);
      }
      // firebase.analytics();


      // async function loadStorageData() {
      //    const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      //    const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      //    if(storagedUser && storagedToken) {
      //       setUser(JSON.parse(storagedUser));
      //       setLoading(false);
      //    }
      // }

      // loadStorageData();
   })

    function signIn() {
         setLoading(true);
         setMessage('');
      // const response = await auth.signIn();

      // const { user, error, response } = auth();

      const loginUserSuccess = user => {         
         setLoading(false);
         setMessage('Sucesso!');
         setUser(user);
         console.log('foi')
      }
   
      const loginUserFailed = error => {
         setLoading(false);
         setMessage(error.code);
         console.log('não foi', error.code);
      }

      // if(response) {
      // } else {
        
      // }

      firebase
         .auth()
         .signInWithEmailAndPassword(email, senha)
         .then(loginUserSuccess)
         .catch(loginUserFailed)


      // console.log("\n\n\n\n", userF);

      
      
      // const {token, user} = response;

      // setUser(response.user);
      
      // await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
      // await AsyncStorage.setItem('@RNAuth:token', response.token);

      // signIn().then(response => {
      //    console.log(response);
      // });
   }

   // function signOut() {
   //    setUser(null);
   // }

   // if(loading) {
   //    return <Loading />;
   // }

   return (
      <LoginContext.Provider value={{
         signed: !!user,
         typeUser: typeUser,
         setTypeUser,
         email,
         senha,
         setEmail,
         setSenha,
         loading: loading,
         user: user,
         setUser,
         message: message,
         signIn,
         /*signOut*/
      }}>
         {children}
      </LoginContext.Provider>
   );
}

export default LoginContext;