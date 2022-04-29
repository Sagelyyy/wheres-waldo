import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCmCkM_VWsnvMcCtM1Gl9zIc_ax8eYLK1c",
    authDomain: "waldo-87061.firebaseapp.com",
    projectId: "waldo-87061",
    storageBucket: "waldo-87061.appspot.com",
    messagingSenderId: "901788315067",
    appId: "1:901788315067:web:0b7b6c3a2783276e85a89e",
    measurementId: "G-YXJ5XS2FK4"
  };

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp