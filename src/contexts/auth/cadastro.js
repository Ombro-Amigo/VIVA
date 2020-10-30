import React, { createContext, useState, useEffect } from 'react';
// import { connect } from '../../config/firebaseConfig';
import firebase from '../../firebase';
// import '@firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';
// import Loading from '../../pages/Loading';
// import { SignUpUser } from '../../services/auth';

const CadContext = createContext({
   user: {},
   authentucated: false,
   setUser: () => {},
   loadingAuthState: false,
   userInfo: {},
   setUserInfo: () => {},
});

export const CadProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [userInfo, setUserInfo] = useState(null);
   const [loadingAuthState, setLoadingAuthState] = useState(true);

   useEffect(() => {      
      firebase.auth().onAuthStateChanged((user) => {
         setUser(user);
         setLoadingAuthState(false);
      });
   }, []);

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
      <CadContext.Provider
         value={{
            user, 
            authentucated: user !== null, 
            setUser,
            loadingAuthState,
            userInfo,
            setUserInfo
         }}
      >
         {children}
      </CadContext.Provider>
   );
}

export default CadContext;