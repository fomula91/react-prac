import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTRURXFl3yiK4e9Qx9OhFPShBkrSzeHB4",
  authDomain: "eshop-ec5db.firebaseapp.com",
  projectId: "eshop-ec5db",
  storageBucket: "eshop-ec5db.appspot.com",
  messagingSenderId: "352593022874",
  appId: "1:352593022874:web:89f6597d9c972e2391f423",
  measurementId: "G-XV169H4J41",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
