import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getStorage,ref} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBkuLxo7W5fABZGC6Ah2ClPM0As51Djx1Q",
  authDomain: "cloudstorage-327c0.firebaseapp.com",
  projectId: "cloudstorage-327c0",
  storageBucket: "cloudstorage-327c0.appspot.com",
  messagingSenderId: "837844095155",
  appId: "1:837844095155:web:0ef517a477c656db66a0c6",
  measurementId: "G-TYL9KSWJFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

const storage = getStorage(app);

const storageRef = ref(storage, 'gs://cloudstorage-327c0.appspot.com');


