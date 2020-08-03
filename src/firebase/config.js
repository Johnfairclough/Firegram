import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2Ps9m0DkABrRa6_f04zATXUrVQM7isqg",
    authDomain: "firegram-c2ef1.firebaseapp.com",
    databaseURL: "https://firegram-c2ef1.firebaseio.com",
    projectId: "firegram-c2ef1",
    storageBucket: "firegram-c2ef1.appspot.com",
    messagingSenderId: "682852559094",
    appId: "1:682852559094:web:5709361ac762d166bd24d7",
    measurementId: "G-L4R0D17MMW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };