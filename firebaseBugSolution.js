// Correct Firebase initialization
import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Example usage
database.ref('/').on('value', (snapshot) => {
  console.log(snapshot.val());
});