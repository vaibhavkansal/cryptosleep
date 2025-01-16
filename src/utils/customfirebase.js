import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWo5uEogARmWXnXi_zC9z5rB2dnwz6wqo",
  authDomain: "cryptosleep-furniture.firebaseapp.com",
  projectId: "cryptosleep-furniture",
  storageBucket: "cryptosleep-furniture.firebasestorage.app",
  messagingSenderId: "484262202748",
  appId: "1:484262202748:web:2b18eaed53976b16b6e8f9",
  measurementId: "G-NP4017YEFW"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const auth = getAuth(app);
export const signOutfun = ()=> {    
  signOut(auth).then(() => {
    console.log("SignOut Success");
  }).catch((error) => {
    console.log(error);
  });
}


export const fetchdata = async () =>{
  try {
    const querySnapshot = await getDocs(collection(db, "products"));

    const fetchedProducts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return(fetchedProducts);
  } catch (error) {
    console.error("Error fetching products", error);
    return({})
  }


}


export const addForm = async (form)=>{
  const docRef = await addDoc(collection(db, "Forms"), form);
  console.log("Form added successfully")

}