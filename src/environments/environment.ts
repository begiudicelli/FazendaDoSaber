import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebaseConfig: {
  apiKey: "AIzaSyCjRlyvrV9JA2KIIo2OHfhiH-CqlYOmTPk",
  authDomain: "fazendadosaber.firebaseapp.com",
  projectId: "fazendadosaber",
  storageBucket: "fazendadosaber.firebasestorage.app",
  messagingSenderId: "705296045287",
  appId: "1:705296045287:web:c5c8974b3f3b4d7722be42",
  measurementId: "G-0T5T3P5FRZ",
}
};

const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);