import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

// we need to showhow seed the database

// we need to configure here
const config = {
  apiKey: 'AIzaSyBz3CM__6L7feqlo7jTKNVDd2aZx-6OS0c',
  authDomain: 'netflix-clone-42efc.firebaseapp.com',
  databaseURL: 'https://netflix-clone-42efc.firebaseio.com',
  projectId: 'netflix-clone-42efc',
  storageBucket: 'netflix-clone-42efc.appspot.com',
  messagingSenderId: '418558546611',
  appId: '1:418558546611:web:e937168611ab5ec39196c6'
};

const firebase = Firebase.initializeApp(config);

// send data to fireStore
// seedDatabase(firebase);

export { firebase };
