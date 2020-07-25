import React, { Fragment } from 'react';
import { FlatList } from 'react-native';
import PageHeader from '../components/PageHeader';
import NoteListItem from '../components/NoteListItem';

import { allNotes } from '../fake';

const AllNotes = ({ navigation }) => {
  return (
    <Fragment>
      <PageHeader
        title={'All Notes'}
        leftAction={{ action: () => navigation.toggleDrawer(), icon: 'menu' }}
        rightAction={{ action: () => console.log('handle search'), icon: 'search' }}
      />
      <FlatList data={allNotes} renderItem={({ item }) => <NoteListItem item={item} key={item.key} />} />
    </Fragment>
  );
};

export default AllNotes;
