import { initializeApp } from 'firebase/app';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ1krGx0AAq98s9Uhs_D6a0iu6iHysyqg",
  authDomain: "jobhound-7cfeb.firebaseapp.com",
  projectId: "jobhound-7cfeb",
  storageBucket: "jobhound-7cfeb.appspot.com",
  messagingSenderId: "447508536494",
  appId: "1:447508536494:web:e49d629aafb6e506fca13f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
//Dammit Alex