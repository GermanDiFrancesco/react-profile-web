import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDoWmEmIV32D1DEbk78qqVaD8Jsk5wAEEY",
    authDomain: "catalogo-qr-fa6a2.firebaseapp.com",
    projectId: "catalogo-qr-fa6a2",
    storageBucket: "catalogo-qr-fa6a2.appspot.com",
    messagingSenderId: "703588028797",
    appId: "1:703588028797:web:4d1d68282e734ee0cf7c14",
    measurementId: "G-EPG5Q31ZTL"
  });

const db = getFirestore(firebaseApp)


  