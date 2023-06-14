import firebase_app from './config';
import {
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';

const auth = getAuth(firebase_app);

export default async function signUp(email, password) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (e) {
    if (e.code == 'auth/invalid-email') {
      error = 'Invalid Email address';
    } else if (e.code == 'auth/email-already-in-use') {
      error = 'Email already in use';
    } else {
      console.log(e);
      error = 'Something went wrong';
    }
  }
  return { result, error };
}
