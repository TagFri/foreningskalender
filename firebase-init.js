// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAGIn95HyxVBoZRauEcU4u-R_oM2r6lI4o",
    authDomain: "foreningskalender-d117e.firebaseapp.com",
    projectId: "foreningskalender-d117e",
    storageBucket: "foreningskalender-d117e.firebasestorage.app",
    messagingSenderId: "416170538702",
    appId: "1:416170538702:web:d33be85d248927a87e429f",
    measurementId: "G-X6RHL0Z65K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };