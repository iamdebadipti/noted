import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text, RefreshControl } from 'react-native';
import PageHeader from '../components/PageHeader';
import NoteListItem from '../components/NoteListItem';
import ModalCustom from '../components/ModalCustom';
import { NOTE_ACTIONS } from '../utils/constants';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../config';
import EmptyComponent from '../components/EmptyComponent';
import LoadingFullPage from '../components/LoadingFullPage';
import { useNoteStore } from '../store';
import { useIsFocused } from '@react-navigation/native';

const AllNotes = ({ navigation }) => {
  const [selectedNoteId, setSelectedNoteId] = useState(null); // selected note id state
  const [modalShow, setModalShow] = useState(false); // modal show state
  // zustand store
  const allNotes = useNoteStore((state) => state.allNotes); // allNotes state
  const fetchAllNotes = useNoteStore((state) => state.fetchAllNotes); // fetchAllNotes action

  const isFocused = useIsFocused(); // needs allNotes to work properly -- re-renders the component

  useEffect(() => {
    // console.warn('fetching...');
    fetchAllNotes(); // fetching the notes from firestore once
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchAllNotes(); // refetch all the notes from the store

    setTimeout(() => {
      setRefreshing(false);
    }, 500); // hard coding the refresh timeout
  }, []);

  if (!allNotes) {
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
      {allNotes.length ? (
        <FlatList
          refreshControl={<RefreshControl colors={[theme.accentColor]} refreshing={refreshing} onRefresh={onRefresh} />}
          data={allNotes}
          renderItem={({ item }) => (
            <NoteListItem item={item} key={item.id} setModalShow={setModalShow} setSelectedNoteId={setSelectedNoteId} />
          )}
          keyExtractor={(item) => item.id} // virtualized list needs a keyExtractor
        />
      ) : (
        <EmptyComponent title="Write your first note!" />
      )}

      {/* add note floating button -- clicking will navigate to Note stack */}
      {isFocused && (
        <TouchableOpacity
          style={styles.floatingButton}
          activeOpacity={theme.activeOpacity}
          onPress={() => navigation.navigate('Note')}
        >
          <Icon name="plus" size={24} color="#ffffff" />
        </TouchableOpacity>
      )}

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
    bottom: 46,
    right: 30,
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
