import React from 'react';
import AuthComponent from '../components/AuthComponent';
import auth from '@react-native-firebase/auth';
import { showErrorAlert } from '../utils';

const LogIn = () => {
  const handleLogIn = (cred) => {
    // destructure credentials from the input object
    const { email, password } = cred;

    // @react-native-firebase/auth inititate signInWithEmailAndPassword()
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.warn('Logged In Successfully!'); // successfully logged in
      })
      .catch((error) => {
        // show alert if there is any error
        showErrorAlert(error.code); // auth/invalid-email | auth/user-not-found | auth/wrong-password
      });
  };

  return <AuthComponent handleSubmit={handleLogIn} buttonText="Log In" heading="Welcome Back!" />;
};

export default LogIn;
