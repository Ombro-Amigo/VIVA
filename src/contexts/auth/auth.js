import React, { createContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import {
   signIn as signInService,
   login as loginService, currentUser,
   loginWithFacebook as facebookService
}  from '../../services/auth';
import { confirmTypeUser, setDataUser } from '../../services/database';
// import { connect } from '../../config/firebaseConfig';
// import firebase from '../../firebase';
// import '@firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';
// import Loading from '../../pages/Loading';
// import { SignUpUser } from '../../services/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [initializing, setInitializing] = useState(true);
   const [user, setUser] = useState(null);
   const [formInfo, setFormInfo] = useState({});
   const [credentials, setCredentials] = useState({});
   const [typeUser, setTypeUser] = useState('');
   const [loading, setLoading] = useState(false);
   const [facebookLogin, setFacebookLogin] = useState(false);

   function onAuthStateChanged(user) {
      setUser(user);
      if(initializing) setInitializing(false);
   }

   useEffect(() => {
      const subscribrer = auth().onAuthStateChanged(onAuthStateChanged);
      return subscribrer;
   }, []);

   useEffect(() => {
      async function signIn() {
         if(!user) {
            await signInService(formInfo.email, formInfo.senha)
         }

         if(user) {
            delete formInfo.email;
            delete formInfo.senha;
            delete formInfo.confirmaSenha;

            formInfo["tipo"] = typeUser;
            
            await setDataUser(user.uid, formInfo);
            // setTypeUser('');
         }
      }

      if(formInfo.email && formInfo.senha)
         signIn();
      
      // if(user && formInfo !== {}){
      // }
   });

   useEffect(() => {
      async function logar() {
         await loginService(credentials.email, credentials.senha);
         console.log(`Tipo: ${typeUser}`)
         await confirmTypeUser(currentUser().uid, typeUser, setLoading);
         setCredentials({});
         // setTypeUser('');         
      }

      if(credentials.email && credentials.senha && !user && typeUser)
         logar();
   });

   useEffect(() => {
      async function logarFacebook() {
         await facebookService();
         setFacebookLogin(false);
      }

      if(facebookLogin)
         logarFacebook();
   });

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
            setFacebookLogin,
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