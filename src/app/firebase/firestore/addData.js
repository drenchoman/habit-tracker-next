import firebase_app from '../config';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);
export default async function addData(
  collection,
  userid,
  collection2,
  date,
  data
) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(
      doc(db, collection, userid, collection2, date),
      data,
      {
        merge: true,
      }
    );
  } catch (e) {
    error = e;
  }
  return { result, error };
}
