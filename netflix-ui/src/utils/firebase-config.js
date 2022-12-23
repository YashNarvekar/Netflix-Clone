import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsPaxthZY1v_5utzG2Dm2OAx1gqRqfgJ8",
  authDomain: "netflix-d0f5a.firebaseapp.com",
  projectId: "netflix-d0f5a",
  storageBucket: "netflix-d0f5a.appspot.com",
  messagingSenderId: "491844549273",
  appId: "1:491844549273:web:6cf36cd78a677643c75608",
  measurementId: "G-E7T0T0KMXY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
