import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAaq2VQ4xIA94p8GNQ_1_dfGFB-duq_T_c",
  authDomain: "car-masters-21960.firebaseapp.com",
  projectId: "car-masters-21960",
  storageBucket: "car-masters-21960.appspot.com",
  messagingSenderId: "742231229037",
  appId: "1:742231229037:web:196dc37a2243975937f564"
};

initializeApp(firebaseConfig)
const db = getFirestore()
export default db