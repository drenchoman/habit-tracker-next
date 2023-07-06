import firebase_app from '../config';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
} from 'firebase/firestore';

const db = getFirestore(firebase_app);

export default async function getHabits(userid) {
  let docRef = collection(db, 'users', userid, 'habits');
  // const q = query(collection(db, userid));
  // console.log('tester', userid);
  let qu = await getDocs(collection(db, 'users', userid, 'habits'));

  const document = [];
  qu.forEach((doc) => {
    document.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  // let info = query.docs.map((doc) => doc.id);

  let result = null,
    error = null;

  try {
    result = document;
  } catch (e) {
    error = e;
  }
  return { result, error };
}
