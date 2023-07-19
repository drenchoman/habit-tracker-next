import firebase_app from '../config';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import getDatesFromHabits from './getDatesFromHabits';

const db = getFirestore(firebase_app);

export default async function getSingleHabit(userid, habitid) {
  let docRef = doc(db, 'users', userid, 'habits', habitid);
  let result = null,
    error = null;

  try {
    result = await getDoc(docRef);
    result = result.data();
  } catch (e) {
    error = e;
  }
  return { result, error };
}
