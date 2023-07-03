import firebase_app from '../config';
import {
  getFirestore,
  doc,
  setDoc,
  collection,
} from 'firebase/firestore';

const db = getFirestore(firebase_app);

// Add habit needs to include a date array
export default async function addHabit(userid, data) {
  let result = null;
  let error = null;
  const ref = collection(db, `users/${userid}/habits`);

  try {
    result = await setDoc(ref, data);
  } catch (e) {
    error = e;
  }
  return { result, error };
}
