import firebase_app from '../config';
import {
  getFirestore,
  getDocs,
  collection,
} from 'firebase/firestore';

const db = getFirestore(firebase_app);

export default async function getDatesFromHabits(userid, habitid) {
  let query = await getDocs(
    collection(db, 'users', userid, 'habits', habitid, 'dates')
  );

  const document = [];
  query.forEach((doc) => {
    document.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  let result = null,
    error = null;

  try {
    result = document;
  } catch (e) {
    error = e;
  }
  return { result, error };
}
