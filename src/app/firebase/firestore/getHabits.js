import firebase_app from '../config';
import {
  getFirestore,
  doc,
  getDoc,
  collection,
} from 'firebase/firestore';

const db = getFirestore(firebase_app);

export default async function getHabits(userid) {
  let docRef = collection(db, 'users', userid, 'habits');
  let query = await collection(
    db,
    'users',
    userid,
    'habits'
  ).select();
  // let info = query.docs.map((doc) => doc.id);

  let result = null,
    error = null;

  try {
    result = query;
  } catch (e) {
    error = e;
  }
  return { result, error };
}
