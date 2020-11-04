import React, { createContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { signIn as signInService, login as loginService, currentUser }  from '../../services/auth';
import { confirmTypeUser, setDataUser } from '../../services/database';
// import { connect } from '../../config/firebaseConfig';
// import firebase from '../../firebase';
// import '@firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';
// import Loading from '../../pages/Loading';
// import { SignUpUser } from '../../services/auth';

const AuthContext = createContext({
   initializing: true,
   user: {},
   typeUser: '',
   setTypeUser: () => {},
   // signInAndSaveData: () => {},
   // user: {},
   // authenticated() {
   // }: false,
   // setUser: () => {},
   // loadingAuthState: false,
   formInfo: {},
   setFormInfo: () => {},
   setCredentials: () => {},
   loading: false,
   setLoading: () => {},
});

export const AuthProvider = ({ children }) => {
   const [initializing, setInitializing] = useState(true);
   const [user, setUser] = useState(null);
   const [formInfo, setFormInfo] = useState({});
   const [credentials, setCredentials] = useState({});
   const [typeUser, setTypeUser] = useState('');
   const [loading, setLoading] = useState(false);

   function onAuthStateChanged(user) {
      setUser(user);
      if(initializing) setInitializing(false);
   }

   useEffect(() => {
      const subscribrer = auth().onAuthStateChanged(onAuthStateChanged);
      return subscribrer;
   }, []);

   useEffect(() => {
      if(formInfo.email && formInfo.senha && !user) {
         signInService(formInfo.email, formInfo.senha);
         if(user){
            delete formInfo.email;
            delete formInfo.senha;
            delete formInfo.confirmaSenha;

            formInfo["tipo"] = typeUser;
            
            setDataUser(user.uid, formInfo);
            setTypeUser('');
         }
      }
      
      // if(user && formInfo !== {}){
      // }
   });

   useEffect(() => {
      async function logar() {
         if(credentials.email && credentials.senha && typeUser && !user){
            await loginService(credentials.email, credentials.senha);
            console.log(`Tipo: ${typeUser}`)
            confirmTypeUser(currentUser().uid, typeUser, setLoading);
            setCredentials({});
            setTypeUser('');
         }
      }

      logar();
   })

   // function login() {

   // }

   // const [user, setUser] = useState(null);
   // const [userInfo, setUserInfo] = useState(null);
   // const [loadingAuthState, setLoadingAuthState] = useState(true);

   // useEffect(() => {      
   //    firebase.auth().onAuthStateChanged((user) => {
   //       setUser(user);
   //       setLoadingAuthState(false);
   //    });
   // }, []);

   // async function register(user) {
   //    const { email, senha } = user;
   //    try {
   //       // await firebase.auth().createUserWithEmailAndPassword(email, senha)
   //       await SignUpUser(email, senha)
   //       console.log('Foi');
   //    }catch(err) {
   //       console.log(error);
   //    }
   //    // try{

   //    //    // firebase.database().ref(`/users/${newUser.user.uid}`)
   //    //    //    .push(user)
   //    //    //    .then(() => {console.log('Foi porra')})
   //    //    //    .catch(err => {console.log(err)});
   //    //    // console.log(newUser.user.uid);
   //    // }catch(err) {
   //    //    console.log(err);
   //    // }
   // }

   return (
      <AuthContext.Provider
         value={{
            initializing,
            user,
            // signInAndSaveData,
            formInfo,
            setFormInfo,
            setCredentials,
            typeUser,
            setTypeUser,
            loading,
            setLoading,
            // authenticated() {

            // }: user !== null, 
            // setUser,
            // loadingAuthState,
            // userInfo,
            // setUserInfo
         }}
      >
         {children}
      </AuthContext.Provider>
   );
}

export default AuthContext;