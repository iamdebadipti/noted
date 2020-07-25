import React, { useState, Fragment } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../config';
import { NOTE_LONGPRESS_ACTION } from '../utils/constants';
import Icon from 'react-native-vector-icons/Feather';
import ModalCustom from './ModalCustom';

const NoteListItem = ({ item }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => console.log(item.key)}
        style={styles.container}
        onLongPress={() => setModalShow(true)}
        delayLongPress={250}
        activeOpacity={theme.activeOpacity}
      >
        <Text style={styles.textHeading}>{item.title}</Text>
        <Text style={styles.textDescription}>{item.description}</Text>
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
              onPress={() => console.log(item.action)}
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
  container: {
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.lightGray
  },
  textHeading: {
    fontSize: 18,
    color: theme.textMain,
    marginBottom: 6
  },
  textDescription: {
    fontSize: 16,
    color: theme.textSecondary,
    maxHeight: 60
  },
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

export default NoteListItem;
