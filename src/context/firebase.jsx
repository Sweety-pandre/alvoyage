import { createContext, useContext } from 'react';
import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'


const firebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyCYa46kp4hO_UK8Ufy3khj3plbh-ly5Y9c",
    authDomain: "alvoyage-52a63.firebaseapp.com",
    projectId: "alvoyage-52a63",
    storageBucket: "alvoyage-52a63.appspot.com",
    messagingSenderId: "89331690950",
    appId: "1:89331690950:web:7ba3e8ab5d424bebaa16c7",
    databaseURL : "https://alvoyage-52a63-default-rtdb.firebaseio.com/"
  };



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const useFirebase = () => useContext(firebaseContext);

export const FirebaseProvider = (props) => {
   
  const createUser = (email,password) => createUserWithEmailAndPassword(auth,email,password);
  const signinUser = (email, password) => signInWithEmailAndPassword(auth,email,password);

  return <firebaseContext.Provider value = {{createUser, signinUser}}>{props.children}</firebaseContext.Provider>
}