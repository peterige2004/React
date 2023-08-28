import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBXyiktrKGpvLWGEbx90Q26DIf9BDH6cdE",
    authDomain: "ecommerce-d609e.firebaseapp.com",
    projectId: "ecommerce-d609e",
    storageBucket: "ecommerce-d609e.appspot.com",
    messagingSenderId: "408130129526",
    appId: "1:408130129526:web:cde9fefc4d711c182a5957"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

export const auth = getAuth();
export const signInWitGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'user', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error){
            console.log('error creating the user', error.message)
        }

        return userDocRef;
    }
};