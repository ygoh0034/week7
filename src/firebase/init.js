// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAOpsFMuCswZlQ3X2vce5DcRyyHZIedjrU',
  authDomain: 'week7-yashaswi.firebaseapp.com',
  projectId: 'week7-yashaswi',
  storageBucket: 'week7-yashaswi.firebasestorage.app',
  messagingSenderId: '541719588687',
  appId: '1:541719588687:web:89dfb5095870b73c3d1f3a',
  measurementId: 'G-N065EBPCJ8',
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
