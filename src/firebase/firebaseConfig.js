import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4m_rraBkhUd2CTqCTNF-9WFQBWGc8B74",
  authDomain: "recipie-e601e.firebaseapp.com",
  projectId: "recipie-e601e",
  storageBucket: "recipie-e601e.appspot.com",
  messagingSenderId: "243080596485",
  appId: "1:243080596485:web:beb6042c76afd1d10e606c",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage(app)
