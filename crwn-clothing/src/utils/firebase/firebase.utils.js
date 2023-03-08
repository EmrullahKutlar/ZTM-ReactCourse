import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpSo-fXlLkIvhO12Yxh-b2b34OnnVlBJY",
  authDomain: "crwn-clothing-eea49.firebaseapp.com",
  projectId: "crwn-clothing-eea49",
  storageBucket: "crwn-clothing-eea49.appspot.com",
  messagingSenderId: "915836280724",
  appId: "1:915836280724:web:798b3ef4309b639e85b981",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocSnapshot = await getDoc(userDocRef);

  // If user does not exist, create a new user document

  if (!userDocSnapshot.exists()) {
   const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    }
    catch(error){
      console.log("Error creating user", error.message);
    }
  }

  //if user exists, return user document reference
  return userDocRef;


};
