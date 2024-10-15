import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyAPDfr5AFQ0zg0V4_Jw-doF8tmCvrZ4WFo",
  authDomain: "psa-cpd.firebaseapp.com",
  databaseURL: "https://psa-cpd.firebaseio.com",
  projectId: "psa-cpd",
  storageBucket: "psa-cpd.appspot.com",
  messagingSenderId: "459330289974",
  appId: "1:459330289974:web:3e38f252df32afa1"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
