// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQVOzItEIk4YtQfyV5vymHc9u4LDf5i84",
  authDomain: "campusconnect-4838a.firebaseapp.com",
  projectId: "campusconnect-4838a",
  storageBucket: "campusconnect-4838a.firebasestorage.app",
  messagingSenderId: "773616396300",
  appId: "1:773616396300:web:ce8b1eefc5927f4f592629",
  measurementId: "G-HD9QW62DLL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

export { app, analytics };
