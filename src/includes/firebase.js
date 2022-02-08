import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCc69Kja5BguPPoX5WjAbE6RTBnOgaj3kk',
  authDomain: 'spotify-app-vue.firebaseapp.com',
  projectId: 'spotify-app-vue',
  storageBucket: 'spotify-app-vue.appspot.com',
  appId: '1:272372842463:web:5556279e9f526fbffb0e6a',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// The collection doesn't need to exist for Firebase to select it.
// users is the name of the collection to select
// This function will return an object with methods
// and properties for working with the user's collection.
const usersCollection = db.collection('users');

const songsCollection = db.collection('songs');

const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
