// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: "AIzaSyDthhlLVC9axHJUZQwV2GONUyF8YQLbfz8",
  authDomain: "fir-spa-525fc.firebaseapp.com",
  projectId: "fir-spa-525fc",
  storageBucket: "fir-spa-525fc.appspot.com",
  messagingSenderId: "135036706898",
  appId: "1:135036706898:web:ba88d54ad5a43b4631bf8b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
export const storageService = getStorage(app);
