import firebase_app from '../config';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);

export default async function updateHabit(userid, habitid, data) {
  let result = null;
  let error = null;

  try {
    result = await updateDoc(doc(db, 'users', userid, habitid), data);
  } catch (e) {
    error = e;
  }
  return { result, error };
}
