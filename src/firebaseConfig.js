import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {} from "firebase/firestore";
import {} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYzGI-m_2PCPRUW0DvsidPubYRgGiBVqE",
  authDomain: "salto-ecomerce.firebaseapp.com",
  projectId: "salto-ecomerce",
  storageBucket: "salto-ecomerce.appspot.com",
  messagingSenderId: "542292163954",
  appId: "1:542292163954:web:b8416fc533816cd6bfb1eb",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//SERVICIOS DE FIRESTORE

//                      auth

//Login
export const onSigIn = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//Register

//Login con google

//LogOut

//Olvidé la contraseña

//                    base de datos

//                    storage
