import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB9ijXHByQ9vntYH0R86mZtUjcqrbKLItM",
    authDomain: "complaintforumw.firebaseapp.com",
    projectId: "complaintforumw",
    storageBucket: "complaintforumw.appspot.com",
    messagingSenderId: "817600629351",
    appId: "1:817600629351:web:61e079bd882f8e14e822c2"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


