import React from 'react';
import { Modal, StyleSheet, View, TouchableOpacity } from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ModalCustom = ({ children, setModalShow, ...props }) => {
  return (
    <Modal {...props}>
      <TouchableOpacity onPress={() => setModalShow(false)} activeOpacity={1} style={styles.modalBack}>
        <View style={styles.modalContent}>{children}</View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default ModalCustom;
