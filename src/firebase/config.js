import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBA54glrTbTqiQSJMDkr-_amsilrZf1JbA",
  authDomain: "lchallenge07.firebaseapp.com",
  projectId: "lchallenge07",
  storageBucket: "lchallenge07.firebasestorage.app",
  messagingSenderId: "43613574148",
  appId: "1:43613574148:web:77dfe006cb7faddbd0d151"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)