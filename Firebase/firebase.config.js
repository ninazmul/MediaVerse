// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtL2GdMvcrKooNG3M5fuCgL2ACoO6TzVQ",
  authDomain: "media-verse.firebaseapp.com",
  projectId: "media-verse",
  storageBucket: "media-verse.appspot.com",
  messagingSenderId: "983068268639",
  appId: "1:983068268639:web:7e2c2d133a9a99822ba3ea"
};

// const firebaseConfig = {
//   VITE_apiKey: import.meta.env.VITE_apiKey,
//   VITE_authDomain: import.meta.env.VITE_authDomain,
//   VITE_projectId: import.meta.env.VITE_projectId,
//   VITE_storageBucket: import.meta.env.VITE_storageBucket,
//   VITE_messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   VITE_appId: import.meta.env.VITE_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;