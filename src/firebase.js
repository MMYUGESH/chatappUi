import firebase from "firebase";


const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCJ7y4RonWCK2uvHCaRDa-RrO7w7Go80oM",
    authDomain: "chatapp-3383e.firebaseapp.com",
    projectId: "chatapp-3383e",
    storageBucket: "chatapp-3383e.appspot.com",
    messagingSenderId: "184524558972",
    appId: "1:184524558972:web:ea8a843a4b7435ba91eff9",
    measurementId: "G-8M83FN6FK3"


});

const db = firebaseApp.firestore();



export { db };