import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzjP94Chts5rWaNVoo-5x6dqXf88tfHPI",
  authDomain: "react-chat-app-4c433.firebaseapp.com",
  projectId: "react-chat-app-4c433",
  storageBucket: "react-chat-app-4c433.appspot.com",
  messagingSenderId: "454837343647",
  appId: "1:454837343647:web:0ff37f51324b75492d59aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();