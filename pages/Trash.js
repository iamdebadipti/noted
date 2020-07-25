import React, { Fragment } from 'react';
import PageHeader from '../components/PageHeader';
import EmptyComponent from '../components/EmptyComponent';

export default function Trash({ navigation }) {
  return (
    <Fragment>
      <PageHeader
        title={'Trash'}
        leftAction={{ action: () => navigation.toggleDrawer(), icon: 'menu' }}
        rightAction={{ action: () => console.log('empty trash'), icon: 'trash-2' }}
      />
      <EmptyComponent title="No Trash" />
    </Fragment>
  );
}
