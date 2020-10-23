// import { useContext } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';

// import {AuthContext} from '../contexts/auth';

// interface Response {
//    token: string;
//    user: {
//       name: string;
//       email: string;
//    }
// }

// interface tg {
//    "isNewUser": boolean;
//    "providerId": string;
// }

// interface Provider {
//    //  displayName: null,
//     email: string,
//    //  phoneNumber: null,
//    //  photoURL: null,
//     providerId: string,
//     uid: string,
// }

// interface User {
//    apiKey: string,
//    // appName: "[DEFAULT]",
//    authDomain: string,
//    createdAt: string,
//    displayName: null,
//    email: "teste@mail.com",
//    emailVerified: false,
//    isAnonymous: false,
//    lastLoginAt: "1603409155930",
//    multiFactor: {
//      enrolledFactors: [],
//    },
//    phoneNumber: null,
//    photoURL: null,
//    providerData: [Provider],
//    redirectEventId: null,
//    stsTokenManager: {
//      accessToken: string,
//      apiKey: string,
//      expirationTime: number,
//      refreshToken: string,
//    },
//    // tenantId: null,
//    uid: string,
//  }

// interface Response {
//    additionalUserInfo: tg;
//    // credential: null;
//    operationType: string;
//    user: User;
// }

export function auth() {
   const loginUserSuccess = user => {
      return { user, error: null, response:true };
   }

   const loginUserFailed = error => {
      return { user: null, error, response:false };
   }

   firebase
      .auth()
      .signInWithEmailAndPassword('teste@mail.com', '123123')
      .then(loginUserSuccess)
      .catch(loginUserFailed)
}

// export function signIn(): Promise<Response> {
//    return new Promise(resolve => {
//       setTimeout(() => {
//          resolve({
//             token: 'asdjflasdhfoihasdiuasidhasuihduiawhsdwqeihasdckasjdhf',
//             user: {
//                name: 'Douglas',
//                email: 'douglas@gmail.com'
//             }
//          })
//       }, 2000);
//    });
// }

// setLoading(true);
//       setMessage('');
      

      