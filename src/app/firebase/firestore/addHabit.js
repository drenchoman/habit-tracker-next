import firebase_app from '../config';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);

// Add habit needs to include a date array
export default async function addHabit(userid, data) {
  let result = null;
  let error = null;

  try {
    result = await addDoc(
      collection(db, 'users', userid, 'habits'),
      data
    );
  } catch (e) {
    error = e;
  }
  return { result, error };
}
