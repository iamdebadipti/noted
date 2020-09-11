import create from 'zustand';
import firestore from '@react-native-firebase/firestore';
import { AsyncStorage } from 'react-native';
import { showToast } from './utils';

export const [useNoteStore] = create((set, get) => ({
  allNotes: null,
  // fetch all the notes from firebase firestore
  fetchAllNotes: async () => {
    // console.warn('fetching.....');
    const notesArr = []; // init an empty note list array
    const userId = await AsyncStorage.getItem('user_id'); // get the user id from AsyncStorage API
    // get firestore data
    await firestore()
      .collection('notes')
      .doc(userId) // user id here
      .collection('list')
      .orderBy('updated_at', 'desc')
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
    // console.warn('saving.....');
    const { title, body, tags } = noteObj; // getting note object details
    // console.warn('noteObj', noteObj);
    const userId = await AsyncStorage.getItem('user_id'); // get the user id from AsyncStorage API
    await firestore()
      .collection('notes')
      .doc(userId) // user id here
      .collection('list')
      .add({
        created_at: new Date(),
        updated_at: new Date(),
        title: title,
        body: body,
        tags: tags
      })
      .then((snap) => {
        snap.onSnapshot((snapshot) => {
          set((state) => ({ allNotes: [{ id: snapshot.id, ...snapshot.data() }, ...state.allNotes] }));
          showToast('Saved Successfully!');
        });
      })
      .catch((err) => {
        console.warn(err);
        showToast('Error Saving');
      });
    // set({ allNotes: [...allNotes] });
  },

  // delete note to firestore
  deleteNote: async (noteId) => {
    // console.warn('delete.....');
    const userId = await AsyncStorage.getItem('user_id'); // get the user id from AsyncStorage API
    await firestore()
      .collection('notes')
      .doc(userId) // user id here
      .collection('list')
      .doc(noteId)
      .delete()
      .then(() => {
        set((state) => ({ allNotes: state.allNotes.filter((note) => note.id !== noteId) }));
        showToast('Deleted Successfully!');
      })
      .catch((err) => {
        console.warn(err);
      });
    // set({ allNotes: [...allNotes] });
  },

  // update note in the firebase
  updateNote: async (noteId, noteObj) => {
    // console.warn('updating...');
    const { title, body, tags } = noteObj; // getting note object details
    // console.warn('noteObj', noteObj);
    const userId = await AsyncStorage.getItem('user_id'); // get the user id from AsyncStorage API
    await firestore()
      .collection('notes')
      .doc(userId) // user id here
      .collection('list')
      .doc(noteId) // note id here
      .update({
        updated_at: new Date(),
        title: title,
        body: body,
        tags: tags
      })
      .then(() => {
        // console.warn(notes);
        // set((state) => ({ allNotes: [{ id: snapshot.id, ...snapshot.data() }, ...state.allNotes] }));
        showToast('Updated Successfully!');
      })
      .catch((err) => {
        console.warn(err);
        showToast('Error Updating');
      });

    await firestore()
      .collection('notes')
      .doc(userId) // user id here
      .collection('list')
      .doc(noteId)
      .get()
      .then((snap) => {
        const updatedNote = snap.data();
        const notesArr = get().allNotes.filter((item) => item.id !== noteId);
        notesArr.splice(0, 0, updatedNote);
        // update the store
        set({ allNotes: notesArr });
      })
      .catch((err) => {
        console.warn(err);
        showToast('Something went wrong!');
      });
  }
}));
