import firebase_app from '../config';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);

export default async function deleteDocument(userid, habitid) {
  let docRef = doc(db, 'users', userid, 'habits', habitid);
  let result = null,
    error = null;

  try {
    result = await deleteDoc(docRef);
  } catch (e) {
    error = e;
  }
  return { result, error };
}
