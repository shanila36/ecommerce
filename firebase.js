import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBPqO-uooxZ4svjx0P-zpVhSkDL_tOdi9A",
  authDomain: "clone-675d1.firebaseapp.com",
  databaseURL: "https://clone-675d1.firebaseio.com",
  projectId: "clone-675d1",
  storageBucket: "clone-675d1.appspot.com",
  messagingSenderId: "432248601416",
  appId: "1:432248601416:web:6886f4245ed72339d7917d",
  measurementId: "G-8BH4BCKVZG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};
