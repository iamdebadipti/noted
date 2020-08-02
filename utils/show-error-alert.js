import { Alert } from 'react-native';

const showErrorAlert = (errorCode) => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return Alert.alert('Error!', 'That email address is already in use.', [{ text: 'OK' }], {
        cancelable: true
      });
    case 'auth/invalid-email':
      return Alert.alert('Error!', 'That email address is invalid.', [{ text: 'OK' }], {
        cancelable: true
      });
    case 'auth/weak-password':
      return Alert.alert('Error!', 'Password should be at least 6 characters.', [{ text: 'OK' }], {
        cancelable: true
      });
    case 'auth/user-not-found':
      return Alert.alert('Error!', 'User not found.', [{ text: 'OK' }], {
        cancelable: true
      });
    case 'auth/wrong-password':
      return Alert.alert('Error!', 'Entered password is wrong.', [{ text: 'OK' }], {
        cancelable: true
      });
    default:
      // default error
      return Alert.alert('Error!', 'Something went wrong!', [{ text: 'Try Again' }], {
        cancelable: true
      });
  }
};

export default showErrorAlert;
