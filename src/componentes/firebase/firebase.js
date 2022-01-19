// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN ,
  projectId:process.env.REACT_APP_FIREBASE_PROJECTID ,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET ,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID ,
  appId:process.env.REACT_APP_FIREBASE_APIID ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const storage= getStorage(app);
export default db;














// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase-app";
// import { getAnalytics } from "firebase-firestore";
// import { getStorage} from "firebase-storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APIID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getAnalytics(app);

// export const storage = getStorage(app);
// export default db;