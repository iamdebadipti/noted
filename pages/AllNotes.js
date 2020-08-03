import React, { Fragment, useState, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import PageHeader from '../components/PageHeader';
import NoteListItem from '../components/NoteListItem';
import ModalCustom from '../components/ModalCustom';
import { NOTE_ACTIONS } from '../utils/constants';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../config';
import EmptyComponent from '../components/EmptyComponent';
import LoadingFullPage from '../components/LoadingFullPage';
import firestore from '@react-native-firebase/firestore';

const AllNotes = ({ navigation }) => {
  const [notes, setNotes] = useState(null); // state for storing all the notes
  const [selectedNoteId, setSelectedNoteId] = useState(null); // selected note id state
  const [modalShow, setModalShow] = useState(false); // modal show state

  const fetchNotes = async () => {
    const notesArr = []; // init an empty note list array
    const userId = await AsyncStorage.getItem('user_id'); // get the user id from AsyncStorage API
    // get firestore data
    await firestore()
      .collection('notes')
      .doc(userId) // user id here
      .collection('list')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          notesArr.push({ id: doc.id, ...doc.data() }); // push to the notesArr[] with id key attached
        });
      });

    setNotes(notesArr); // set the notesArr[] as the notes state array
  };

  useEffect(() => {
    console.warn('fetching the note list...');
    fetchNotes(); // fetching the notes from firebase firestore
  }, []);

  if (!notes) {
    return <LoadingFullPage />; // we are still fetching the notes
  }

  return (
    <Fragment>
      <PageHeader
        title={'All Notes'}
        leftAction={{ action: () => navigation.toggleDrawer(), icon: 'menu' }}
        rightAction={{ action: () => navigation.navigate('Search'), icon: 'search' }}
      />

      {/* all notes -- render FlatList otherwise an Empty Component if there is no data */}
      {notes.length ? (
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <NoteListItem item={item} key={item.id} setModalShow={setModalShow} setSelectedNoteId={setSelectedNoteId} />
          )}
        />
      ) : (
        <EmptyComponent title="Write your first note!" />
      )}

      {/* add note floating button -- clicking will navigate to Note stack */}
      <TouchableOpacity
        style={styles.floatingButton}
        activeOpacity={theme.activeOpacity}
        onPress={() => navigation.navigate('Note')}
      >
        <Icon name="plus" size={24} color="#ffffff" />
      </TouchableOpacity>

      {/* long press action modal */}
      <ModalCustom
        transparent={true}
        visible={modalShow}
        statusBarTranslucent={true}
        onRequestClose={() => {
          setModalShow(false);
        }}
        setModalShow={setModalShow}
      >
        {/* Multiple note long press actions -- to update please change in /utils/constants*/}
        {NOTE_ACTIONS.map((item) => {
          return (
            <TouchableOpacity
              key={item.action}
              style={styles.itemStyle}
              onPress={() => console.log(item.action, selectedNoteId)}
              activeOpacity={theme.activeOpacity}
            >
              <Icon name={item.icon} size={22} color={theme.textSecondary} />
              <Text style={styles.itemStyleText}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ModalCustom>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    padding: 12,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemStyleText: {
    marginLeft: 15,
    fontSize: 18,
    color: theme.textMain
  },
  floatingButton: {
    position: 'absolute',
    bottom: 36,
    right: 36,
    width: 54,
    height: 54,
    backgroundColor: theme.accentColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 27,
    elevation: 4
  }
});

export default AllNotes;
