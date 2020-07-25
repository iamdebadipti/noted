import React, { useState, Fragment } from 'react';
import { Text, StyleSheet, View, Modal } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { theme } from '../config';
import { NOTE_LONG_ACTION } from '../utils/constants';
import Icon from 'react-native-vector-icons/Feather';

const NoteListItem = ({ item }) => {
  const [modal, setModal] = useState(false);

  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => console.log(item.key)}
        style={styles.container}
        onLongPress={() => setModal()}
        delayLongPress={400}
      >
        <Text style={styles.textHeading}>{item.title}</Text>
        <Text style={styles.textDescription}>{item.description}</Text>
      </TouchableOpacity>

      {/* long press action modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        statusBarTranslucent={true}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View style={styles.modalBack} onPress={() => console.log('object')}>
          <View style={styles.modalContent}>
            {NOTE_LONG_ACTION.map((action) => {
              return (
                <TouchableNativeFeedback style={styles.modalAction} onPress={() => console.log(action.action)}>
                  <Icon name={action.icon} size={18} color={theme.textSecondary} />
                  <Text style={styles.modalActionText}>{action.title}</Text>
                </TouchableNativeFeedback>
              );
            })}
          </View>
        </View>
      </Modal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
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
    color: theme.textSecondary
  },
  modalBack: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 4,
    width: 220
  },
  modalAction: {
    padding: 12,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalActionText: {
    marginLeft: 10,
    fontSize: 18,
    color: theme.textSecondary
  }
});

export default NoteListItem;
