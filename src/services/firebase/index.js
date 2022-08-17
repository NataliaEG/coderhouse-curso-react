// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMvM5EIzEdaAW3TG6i1LX1NGxVJ5jfVFA",
  authDomain: "tiendadeaccesorios-84b1a.firebaseapp.com",
  projectId: "tiendadeaccesorios-84b1a",
  storageBucket: "tiendadeaccesorios-84b1a.appspot.com",
  messagingSenderId: "341903776810",
  appId: "1:341903776810:web:9bd53fd34fa19fea0a3753"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const dbAccesorios = getFirestore(app)//conecta a la base de datos