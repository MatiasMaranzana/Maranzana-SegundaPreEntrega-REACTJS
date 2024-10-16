import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "alma-fit-suplementos.firebaseapp.com",
    projectId: "alma-fit-suplementos",
    storageBucket: "alma-fit-suplementos.appspot.com",
    messagingSenderId: "442014467291",
    appId: "1:442014467291:web:ea6d1ac2237b78381f38fe"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)


