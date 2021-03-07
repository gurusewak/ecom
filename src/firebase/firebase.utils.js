import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyCePlA2ettbKJlnJIx2DVrWkCzccqSlv6s",
    authDomain: "ecom-sample-react.firebaseapp.com",
    projectId: "ecom-sample-react",
    storageBucket: "ecom-sample-react.appspot.com",
    messagingSenderId: "402278439012",
    appId: "1:402278439012:web:7b6bc9206b4abf46266771"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle = () => (auth.signInWithPopup(provider));

  export default firebase;