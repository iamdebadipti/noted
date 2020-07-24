import React from 'react';
import {
  StatusBar,
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View
} from 'react-native';

const App = () => {
  const navigationView = (
    <View style={styles.navigationContainer}>
      <Text style={{ margin: 10, fontSize: 15 }}>I'm in the Drawer!</Text>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={() => navigationView}
    >
      <StatusBar backgroundColor="rgba(0,0,0,0.6)" />
      <View style={styles.container}>
        <Text style={{ margin: 10, fontSize: 15 }}>
          DrawerLayoutAndroid example
        </Text>
        <Button title="Hello" onPress={() => console.log('object')} />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    padding: 8
  }
});

export default App;
