import firebase_app from '../config';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);
export default async function addEntry(userid, habitid, data) {
  let result = null;
  let error = null;
  try {
    result = await setDoc(
      doc(db, 'users', userid, 'habits', habitid),
      data
    );
  } catch (e) {
    error = e;
  }
  return { result, error };
}
