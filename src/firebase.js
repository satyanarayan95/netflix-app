import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD3ObyJ--Rmo1t_nOMVHZN_pktwaY4TYns",
  authDomain: "netflix-73846.firebaseapp.com",
  projectId: "netflix-73846",
  storageBucket: "netflix-73846.appspot.com",
  messagingSenderId: "917743545267",
  appId: "1:917743545267:web:7ae0476fb33f3369fab9c6"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();

let auth = firebase.auth();

export  default auth


