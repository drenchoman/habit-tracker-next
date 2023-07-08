import firebase_app from '../config';
import {
  getFirestore,
  getDocs,
  collection,
} from 'firebase/firestore';
import addEntryNoCollection from './addEntryNoCollection';
import addEntryExistingCollection from './addEntryExistingCollection';

const db = getFirestore(firebase_app);

export default async function checkCollectionExists(
  userid,
  habitid,
  data
) {
  let result = null;
  let error = null;

  // REFACTOR: Perhaps there is a more elegant way to check if documents exist within the collection

  try {
    const collectionExists = await getDocs(
      collection(db, 'users', userid, 'habits', habitid, 'dates')
    );

    const document = [];
    collectionExists.forEach((doc) => {
      document.push({ id: doc.id });
    });

    // Gets ID for Habit
    if (document.length == 0) {
      // No collection exists, add entryNoCollection
      console.log('check');

      result = await addEntryNoCollection(userid, habitid, data);
    } else {
      // Collection exists, add entry
      let dateid = document[0].id;
      result = await addEntryExistingCollection(
        userid,
        habitid,
        dateid,
        data
      );
    }
  } catch (e) {
    error = e;
  }
  return { result, error };
}
