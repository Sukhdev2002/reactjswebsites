// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDGpPRe87Cs7ZCpTFpj_vgDHHZ5NOwESk4",
    authDomain: "facebook-clone-a9387.firebaseapp.com",
    databaseURL: "https://facebook-clone-a9387.firebaseio.com",
    projectId: "facebook-clone-a9387",
    storageBucket: "facebook-clone-a9387.appspot.com",
    messagingSenderId: "135845226063",
    appId: "1:135845226063:web:101ec0ef77fb7543b16c3a",
    measurementId: "G-T68FCWYW9L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider};
  export default db;
