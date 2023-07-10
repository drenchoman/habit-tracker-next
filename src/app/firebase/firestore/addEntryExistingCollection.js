import firebase_app from '../config';
import {
  getFirestore,
  setDoc,
  updateDoc,
  collection,
} from 'firebase/firestore';

const db = getFirestore(firebase_app);

export default async function addEntryExistingCollection(
  userid,
  habitid,
  data
) {
  let result = null;
  let error = null;

  try {
    console.log('testing');
    result = await updateDoc(
      collection(db, 'users', userid, 'habits', habitid, 'dates'),
      data,
      { merge: true }
    );
  } catch (e) {
    error = e;
  }
  return { result, error };
}
