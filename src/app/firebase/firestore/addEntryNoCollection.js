import firebase_app from '../config';
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  collection,
} from 'firebase/firestore';

const db = getFirestore(firebase_app);

export default async function addEntryNoCollection(
  userid,
  habitid,
  data
) {
  let result = null;
  let error = null;

  try {
    result = await addDoc(
      collection(db, 'users', userid, 'habits', habitid, 'dates'),
      data
    );
  } catch (e) {
    error = e;
  }
  return { result, error };
}
