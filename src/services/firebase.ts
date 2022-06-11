import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  appId: '1:165101105789:web:27fded8194a4cd42a67714',
  apiKey: 'AIzaSyB2889MiSzzsXrZBlBwIud572z1qFnHn7w',
  projectId: 'spotify-eecd2',
  authDomain: 'spotify-eecd2.firebaseapp.com',
  storageBucket: 'spotify-eecd2.appspot.com',
  messagingSenderId: '165101105789',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
