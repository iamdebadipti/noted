import React from 'react';
import AuthComponent from '../components/AuthComponent';
import auth from '@react-native-firebase/auth';
import { showErrorAlert } from '../utils';

const SignUp = () => {
  const handleSignUp = (cred) => {
    // destructure credentials from the input object
    const { email, password } = cred;

    // @react-native-firebase/auth inititate createUserWithEmailAndPassword()
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.warn('User account created & signed in!'); // successfully user created
      })
      .catch((error) => {
        // show alert if there is any error
        showErrorAlert(error.code); // auth/email-already-in-use | auth/invalid-email | auth/weak-password
      });
  };

  return (
    <AuthComponent
      handleSubmit={handleSignUp}
      buttonText="Create My Account"
      heading="Sign up to Get Started!"
      newUser
    />
  );
};

export default SignUp;
