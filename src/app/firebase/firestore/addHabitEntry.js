import firebase_app from '../config';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);

// Creates the collection dates and adds the document with the id of DATE

export default async function addHabitEntry(userid, habitid, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(
      doc(db, 'users', userid, 'habits', habitid, 'dates', data.date),
      data
    );
  } catch (e) {
    error = e;
  }
  return { result, error };
}
