import React, { Fragment, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PageHeader from '../components/PageHeader';
import NoteListItem from '../components/NoteListItem';
import ModalCustom from '../components/ModalCustom';
import { NOTE_LONGPRESS_ACTION } from '../utils/constants';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../config';

import { allNotes } from '../fake';
import EmptyComponent from '../components/EmptyComponent';

const AllNotes = ({ navigation }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <PageHeader
        title={'All Notes'}
        leftAction={{ action: () => navigation.toggleDrawer(), icon: 'menu' }}
        rightAction={{ action: () => console.log('handle search'), icon: 'search' }}
      />
      {!allNotes.length ? (
        <FlatList
          data={allNotes}
          renderItem={({ item }) => (
            <NoteListItem item={item} key={item.id} setModalShow={setModalShow} setSelectedItemId={setSelectedItemId} />
          )}
        />
      ) : (
        <EmptyComponent title="No Notes Found" />
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
  }
});

export default AllNotes;
