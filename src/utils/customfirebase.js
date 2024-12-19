import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCr315kMXiU1G1y9AnxVRnDh6LeFEGLl_A",
  authDomain: "sheelafoamhouse-ec200.firebaseapp.com",
  projectId: "sheelafoamhouse-ec200",
  storageBucket: "sheelafoamhouse-ec200.firebasestorage.app",
  messagingSenderId: "351704864776",
  appId: "1:351704864776:web:65b877154f71139c83d9bd",
  measurementId: "G-YXTMDFJ1CX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const signOutfun = ()=> {    
  signOut(auth).then(() => {
    console.log("SignOut Success");
  }).catch((error) => {
    console.log(error);
  });
}
