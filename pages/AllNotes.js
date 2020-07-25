import React, { Fragment, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PageHeader from '../components/PageHeader';
import NoteListItem from '../components/NoteListItem';
import ModalCustom from '../components/ModalCustom';
import { NOTE_LONGPRESS_ACTION } from '../utils/constants';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../config';
import EmptyComponent from '../components/EmptyComponent';

import { allNotes } from '../fake';

const AllNotes = ({ navigation }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <PageHeader
        title={'All Notes'}
        leftAction={{ action: () => navigation.toggleDrawer(), icon: 'menu' }}
        rightAction={{ action: () => navigation.navigate('Search'), icon: 'search' }}
      />

      {/* all notes */}
      {allNotes.length ? (
        <FlatList
          data={allNotes}
          renderItem={({ item }) => (
            <NoteListItem item={item} key={item.id} setModalShow={setModalShow} setSelectedItemId={setSelectedItemId} />
          )}
        />
      ) : (
        <EmptyComponent title="Write your first note!" />
      )}

      {/* add note floating button */}
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
        {NOTE_LONGPRESS_ACTION.map((item) => {
          return (
            <TouchableOpacity
              key={item.action}
              style={styles.itemStyle}
              onPress={() => console.log(item.action, selectedItemId)}
              activeOpacity={theme.activeOpacity}
            >
              <Icon name={item.icon} size={18} color={theme.textMain} />
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
    marginLeft: 10,
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
