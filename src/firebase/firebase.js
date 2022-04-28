// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyCTrhFiJlgrpgResrgR0sIh3dcb7LwyLDU",
  authDomain: "fitshopbase.firebaseapp.com",
  projectId: "fitshopbase",
  storageBucket: "fitshopbase.appspot.com",
  messagingSenderId: "654476619196",
  appId: "1:654476619196:web:d84cdb17f31ff3a1e34fb9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
