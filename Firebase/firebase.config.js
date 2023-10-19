// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

VITE_APIKEY:import.meta.env.VITE_APIKEY,
VITE_AUTHDOMAIN:import.meta.env.VITE_AUTHDOMAIN,
VITE_PROJECTID:import.meta.env.VITE_PROJECTID,
VITE_STORAGEBUCKET:import.meta.env.VITE_STORAGEBUCKET,
VITE_MESSAGEINGSENDERID:import.meta.env.VITE_MESSAGEINGSENDERID,
VITE_APPID:import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;