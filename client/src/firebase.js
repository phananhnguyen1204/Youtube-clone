import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyBkEmwlCfAYlZTv3CCqbPS-QKHTuQwo2Lo",
  authDomain: "video-1fea6.firebaseapp.com",
  projectId: "video-1fea6",
  storageBucket: "video-1fea6.appspot.com",
  messagingSenderId: "469758942331",
  appId: "1:469758942331:web:5c1af37c322d8bdf6c16de",
  measurementId: "G-C6J1N27B6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth;
export const provider = new GoogleAuthProvider();

export default app;
