import React from 'react';
import AuthComponent from '../components/AuthComponent';

const LogIn = () => {
  const handleLogIn = (cred) => {
    console.warn('LOG IN WITH: ', cred);
  };

  return <AuthComponent handleSubmit={handleLogIn} buttonText="Log In" heading="Welcome Back!" />;
};

export default LogIn;
