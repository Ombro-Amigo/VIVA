import React, { createContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { signIn as signInService, login as loginService }  from '../../services/auth';
import { setDataUser } from '../../services/database';
// import { connect } from '../../config/firebaseConfig';
// import firebase from '../../firebase';
// import '@firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';
// import Loading from '../../pages/Loading';
// import { SignUpUser } from '../../services/auth';

const AuthContext = createContext({
   initializing: true,
   user: {},
   // signInAndSaveData: () => {},
   // user: {},
   // authenticated() {

   // }: false,
   // setUser: () => {},
   // loadingAuthState: false,
   formInfo: {},
   setFormInfo: () => {},
   setCredentials: () => {},
});

export const AuthProvider = ({ children }) => {
   const [initializing, setInitializing] = useState(true);
   const [user, setUser] = useState(null);
   const [formInfo, setFormInfo] = useState({});
   const [credentials, setCredentials] = useState({});

   function onAuthStateChanged(user) {
      setUser(user);
      if(initializing) setInitializing(false);
   }

   useEffect(() => {
      const subscribrer = auth().onAuthStateChanged(onAuthStateChanged);
      return subscribrer;
   }, []);

   useEffect(() => {
      if(formInfo.email && formInfo.senha) {
         signInService(formInfo.email, formInfo.senha);
         if(user){
            delete formInfo.email;
            delete formInfo.senha;
            delete formInfo.confirmaSenha;
         }
      }
      
      if(user && formInfo !== {}){
         setDataUser(user.uid, formInfo);
      }
   });

   useEffect(() => {
      if(credentials.email && credentials.senha){
         loginService(credentials.email, credentials.senha);
         setCredentials({});
      }
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