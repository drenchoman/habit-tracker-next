import firebase_app from './config';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const auth = getAuth(firebase_app);

export default async function forgotPassword(email) {
  let result = null,
    error = null;
  try {
    result = sendPasswordResetEmail(auth, email);
  } catch (e) {
    error = e.message;
    return { result, error };
  }
}
