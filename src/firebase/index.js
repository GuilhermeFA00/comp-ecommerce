import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCNnM0BRCqyBrR9dU9ei59gGFOCZdZFs20",
    authDomain: "vueecommerce-44ffe.firebaseapp.com",
    projectId: "vueecommerce-44ffe",
    storageBucket: "vueecommerce-44ffe.appspot.com",
    messagingSenderId: "530351656635",
    appId: "1:530351656635:web:5670f456d1b3d07dd8e39e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };