import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'af-assignment-2.firebaseapp.com',
  projectId: 'af-assignment-2',
  storageBucket: 'af-assignment-2.appspot.com',
  messagingSenderId: '757534380241',
  appId: '1:757534380241:web:faf628fcc3bced7b4b35f0',
  measurementId: 'G-YLSEDYJXVS',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
