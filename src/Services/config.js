import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxczctRqRzd7NKmDQKjIE8XGWhaUl-IAk",
  authDomain: "dalas-tennis-store.firebaseapp.com",
  projectId: "dalas-tennis-store",
  storageBucket: "dalas-tennis-store.appspot.com",
  messagingSenderId: "38028859764",
  appId: "1:38028859764:web:8135ace56b136488fd7421",
};

const app = initializeApp(firebaseConfig);

export const bd = getFirestore(app);
