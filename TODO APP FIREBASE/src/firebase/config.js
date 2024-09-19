
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZPFWKdspILiF02D-Qdbz8TtUYZr_Nt5g",
  authDomain: "todo-app-69580.firebaseapp.com",
  projectId: "todo-app-69580",
  storageBucket: "todo-app-69580.appspot.com",
  messagingSenderId: "245693209853",
  appId: "1:245693209853:web:9a43fd8b70b34e700bb294",
  measurementId: "G-XPKRHK9GPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app)