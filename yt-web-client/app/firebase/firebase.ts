// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User
} from "firebase/auth";
import { getFunctions } from "firebase/functions";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "yt-clone-b1123.firebaseapp.com",
  projectId: "yt-clone-b1123",
  appId: "1:1094952523438:web:43c1a3dcd0c8395061bf3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const functions = getFunctions();

/**
 * Sign the user in with Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() { 
    return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out. 
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() { 
    return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: ( user: User | null) => void) { 
    return onAuthStateChanged(auth, callback);
}
