// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCPAEyy5AsEJ1zu-lP-MBhNERZ8DRh-deA",
  authDomain: "whatsapp-clone-7b2ab.firebaseapp.com",
  projectId: "whatsapp-clone-7b2ab",
  storageBucket: "whatsapp-clone-7b2ab.appspot.com",
  messagingSenderId: "305712831708",
  appId: "1:305712831708:web:5cf60b0048b4583ff46819",
  measurementId: "G-FR1PQS8CEE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
