import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { theme } from '../config';
import { useNavigation } from '@react-navigation/native';

const AuthComponent = ({ heading, buttonText, handleSubmit, newUser }) => {
  const [{ email, password }, setInput] = useState({ email: '', password: '' });

  // using the navigation hook from @react-navigation/native
  const navigation = useNavigation();

  // handle user input here and save input in the state as per the type
  const handleInput = (type, value) => {
    switch (type) {
      case 'email':
        setInput((state) => ({ ...state, email: value }));
        break;
      case 'password':
        setInput((state) => ({ ...state, password: value }));
        break;
      default:
        break;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} touchSoundDisabled>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.content}>
            <Image source={require('../assets/dummy_logo.png')} style={styles.logoStyle} />
            <Text style={styles.headingText}>{heading}</Text>
            <TextInput
              style={styles.inputStyle}
              keyboardType="email-address"
              placeholder="Email ID"
              onChangeText={(text) => handleInput('email', text)}
              value={email}
            />
            <TextInput
              style={styles.inputStyle}
              secureTextEntry
              placeholder="Password"
              onChangeText={(text) => handleInput('password', text)}
              value={password}
            />
            <TouchableNativeFeedback
              onPress={() => {
                // dismiss the keyboard first then handle log in
                Keyboard.dismiss();
                // pass email and password to handle auth operations
                handleSubmit({ email: email, password: password });
              }}
              background={TouchableNativeFeedback.Ripple(theme.mainColorOpac, false)}
            >
              <View style={{ ...theme.buttonStyle }}>
                <Text style={styles.buttonTextStyle}>{buttonText}</Text>
              </View>
            </TouchableNativeFeedback>
            {/* check if newUser is there */}
            <TouchableOpacity
              onPress={() => navigation.navigate(newUser ? 'LogIn' : 'SignUp')}
              activeOpacity={theme.activeOpacity}
            >
              <View style={styles.forgotLinkStyle}>
                <Text>{newUser ? 'Already Have Account?' : 'New Here? Register'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  content: {
    width: 280,
    alignItems: 'center'
  },
  logoStyle: {
    width: 100,
    height: 106
  },
  headingText: {
    fontSize: 20,
    marginTop: 32,
    marginBottom: 20
  },
  inputStyle: {
    width: '100%',
    height: 48,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: theme.gray,
    borderRadius: 4,
    marginBottom: 16,
    fontSize: 16,
    color: theme.textMain
  },
  buttonTextStyle: {
    fontSize: 16,
    color: '#ffffff'
  },
  forgotLinkStyle: {
    padding: 4,
    marginTop: 20
  }
});

export default AuthComponent;
