import * as firebase from 'firebase'
import 'firebase/auth'
import firebaseConfig from '../config/firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export const SignUpUser = (email, passswod) => {
  return auth.createUserWithEmailAndPassword(email, passswod);
};

// export const SignInUser = (email, passswod) => {
//   return new Promise(function(resolve, reject) {
//     auth
//       .signInWithEmailAndPassword(email, passswod)
//       .then(() => {
//         resolve('Sign In Successfully');
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };

// export const SignOutUser = () => {
//   return new Promise(function(resolve, reject) {
//     auth
//       .signOut()
//       .then(() => {
//         resolve('Sign Out Successfully');
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };

// export const submitUser = (Id, Name, Position) => {
//   return new Promise(function(resolve, reject) {
//     let key;
//     if (Id != null) {
//       key = Id;
//     } else {
//       key = database()
//         .ref()
//         .push().key;
//     }
//     let dataToSave = {
//       Id: key,
//       Name: Name,
//       Position: Position,
//     };
//     database()
//       .ref('users/' + key)
//       .update(dataToSave)
//       .then(snapshot => {
//         resolve(snapshot);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// };