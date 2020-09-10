import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import NotePage from '../pages/Note';
import LoadingFullPage from '../components/LoadingFullPage';
import { useNoteStore } from '../store';
import { showToast } from '../utils';

const Note = ({ navigation }) => {
  const [{ id, title, body, tags }, setNote] = useState({ id: '', title: '', body: '', tags: [] }); // note initial state
  const [loading, setLoading] = useState(true);
  const { params } = useRoute(); // get navigation params using useRoute hook
  const allNotes = useNoteStore((state) => state.allNotes); // useNoteStore hook from zustand -- allNotes subscribed
  const saveNote = useNoteStore((state) => state.saveNote); // saveNote hook from zustand
  const deleteNote = useNoteStore((state) => state.deleteNote); // saveNote hook from zustand

  useEffect(() => {
    if (params) {
      const noteId = params.note_id; // get note_id from route params
      const singleNote = allNotes.filter((note) => note.id === noteId)[0]; // filter a single
      setNote({ id: params.note_id, title: singleNote.title, body: singleNote.body, tags: singleNote.tags }); // setting the fetched note data in state
      setTimeout(() => {
        setLoading(false); // setting loading to false
      }, 200);
    } else {
      setTimeout(() => {
        setLoading(false); // no params -- set loading to false after 200ms
      }, 200);
    }
  }, [params]);

  // save the note in firebase
  const handleSaveNote = async () => {
    const noteObj = { title: title ? title : '(Empty Title)', body: body, tags: tags };
    // check the note body before saving
    if (body !== '') {
      await saveNote(noteObj);
    } else {
      showToast('Please write something!');
    }
    return;
  };

  // handle note input field changes
  const handleInputChange = (type, value) => {
    switch (type) {
      case 'title':
        setNote((note) => ({ ...note, title: value }));
        break;
      case 'body':
        setNote((note) => ({ ...note, body: value }));
        break;
      default:
        break;
    }
  };

  // handle note tool action
  const handleToolIconClick = async (action) => {
    // console.warn('action', action); // available tool actions - INFO | SHARE | DELETE
    switch (action) {
      case 'DELETE':
        if (id) {
          await deleteNote(id); // delete the note passing the note id
        } else {
          showToast('Note is not saved yet');
        }
        break;

      default:
        break;
    }
  };

  return loading ? (
    <LoadingFullPage /> // placeholder for note or a loading component
  ) : (
    <>
      <NotePage
        note={{ title: title, body: body, tags: tags }}
        handleGoBack={() => navigation.navigate('Main')}
        handleInputChange={handleInputChange}
        handleToolIconClick={handleToolIconClick}
        handleSaveNote={handleSaveNote}
      />
    </>
  );
};

export default Note;
