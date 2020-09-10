import { ToastAndroid } from 'react-native';

// show toast
const showToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
};

export default showToast;
