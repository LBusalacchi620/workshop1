import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
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
//LogOut

export const logOut = () => {
  signOut(auth);
};

//Login con google
let googleProvider = new GoogleAuthProvider();
export const loginGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider);
  console.log(res);
};

//Register
export const signUp = async ({ email, password }) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
    throw error; //Lanza el error para que pueda ser capturado en el componente Register
  }
};

//Olvidé la contraseña

export const forgotPassword = async (email) => {
  try {
    let res = await sendPasswordResetEmail(auth, email);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//                    base de datos

//                    storage
