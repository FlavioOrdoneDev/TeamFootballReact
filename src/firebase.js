import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyA0yu7TVlcodanWi9Sp6XldNAXvZ1Lqlr0",
    authDomain: "team-football.firebaseapp.com",
    databaseURL: "https://team-football.firebaseio.com",
    projectId: "team-football",
    storageBucket: "",
    messagingSenderId: "648427740697",
    appId: "1:648427740697:web:c163949498214129"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
      
export {
    firebase,
    firebaseMatches
}