import firebase_app from '../config';
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';

const db = getFirestore(firebase_app);

// should add own seperate collection for dates.
// structures like date: {
// done: true;
//

export default async function addEntry(userid, habitid, data) {
  let result = null;
  let error = null;
  try {
    result = await updateDoc(
      doc(db, 'users', userid, 'habits', habitid),
      {
        dates: arrayUnion(data),
      }
    );
  } catch (e) {
    error = e;
  }
  return { result, error };
}
