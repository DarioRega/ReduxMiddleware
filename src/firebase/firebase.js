import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDSj2YGJ4Bo-cgmW1xGcmlO9CvyzXy43E8',
  authDomain: 'routerhooks.firebaseapp.com',
  databaseURL: 'https://routerhooks.firebaseio.com',
  projectId: 'routerhooks',
  storageBucket: 'routerhooks.appspot.com',
  messagingSenderId: '771264826757',
  appId: '1:771264826757:web:f6768671d8aaed869648ec',
  measurementId: 'G-N6MQH3WRS3'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)


const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }
