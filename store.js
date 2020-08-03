import create from 'zustand';
import firestore from '@react-native-firebase/firestore';
import { AsyncStorage } from 'react-native';

export const [useNoteStore] = create((set) => ({
  allNotes: null,
  // fetch all the notes from firebase firestore
  fetchAllNotes: async () => {
    const notesArr = []; // init an empty note list array
    const userId = await AsyncStorage.getItem('user_id'); // get the user id from AsyncStorage API
    // get firestore data
    await firestore()
      .collection('notes')
      .doc(userId) // user id here
      .collection('list')
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length > 0) {
          querySnapshot.forEach((doc) => {
            notesArr.push({ id: doc.id, ...doc.data() }); // push to the notesArr[] with id key attached
          });
        }
      })
      .catch((err) => {
        console.warn(err);
      });

    set({ allNotes: notesArr }); // set the notesArr[] as the notes state array
  },

  // save note to firestore
  saveNote: async (noteObj) => {
    const { title, body, tags } = noteObj; // getting note object details
    // console.warn('noteObj', noteObj);
    const userId = await AsyncStorage.getItem('user_id'); // get the user id from AsyncStorage API
    await firestore()
      .collection('notes')
      .doc(userId) // user id here
      .collection('list')
      .add({
        title: title,
        body: body,
        tags: ['Ideas', 'Motivations']
      })
      .then((snap) => {
        snap.onSnapshot((snapshot) => {
          console.warn('state update complete...');
          set((state) => ({ allNotes: [...state.allNotes, { id: snapshot.id, ...snapshot.data() }] }));
        });
      })
      .catch((err) => {
        console.warn(err);
      });
    // set({ allNotes: [...allNotes] });
  }
}));
