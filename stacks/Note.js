import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { allNotes } from '../fake';
import NotePage from '../pages/Note';
import LoadingFullPage from '../components/LoadingFullPage';

const Note = ({ navigation }) => {
  // note data state
  const [note, setNote] = useState(undefined);

  // get navigation params using useRoute hook of react navigation
  const { params } = useRoute();

  useEffect(() => {
    if (params) {
      const noteId = params.note_id;
      // get the particular note matching the ID
      const noteObj = allNotes.filter((note) => note.id === noteId);
      // set the note data as state
      setNote(noteObj[0]);
    } else {
      // if no params there -- means a new note request
      // so set the state as null
      setNote(null);
    }
  }, [params]);

  // return according to the note data
  return note === undefined ? (
    // placeholder for note or a loading component
    <LoadingFullPage />
  ) : (
    <NotePage note={note} handleGoBack={() => navigation.navigate('Main')} />
  );
};

export default Note;
