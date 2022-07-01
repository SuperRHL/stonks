
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: "stonks-11aac",
    storageBucket: "stonks-11aac.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-9VHMM0ZZ1F"
};
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)