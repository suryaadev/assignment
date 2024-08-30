import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-auth-domain",
//   projectId: "your-project-id",
//   storageBucket: "your-storage-bucket",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id"
  apiKey: "AIzaSyBLYNa9mZuXF0hSRyHFR6FJVvDlcT4wL5g",
  authDomain: "kartoos-26b37.firebaseapp.com",
  projectId: "kartoos-26b37",
  storageBucket: "kartoos-26b37.appspot.com",
  messagingSenderId: "452364820405",
  appId: "1:452364820405:web:1bc073ccd116540f5183fc",
  measurementId: "G-H320FJMP0V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
