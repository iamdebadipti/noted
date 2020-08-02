import React from 'react';
import AuthComponent from '../components/AuthComponent';

const SignUp = () => {
  const handleSignUp = (cred) => {
    console.warn('SIGN UP WITH: ', cred);
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
