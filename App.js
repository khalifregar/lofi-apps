import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

const App = () => {
  const handlePress = () => {
    alert('Button Pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}></StatusBar>
      <Image
        source={require('./assets/images/background.jpeg')}
        style={styles.images}
      />
      <Text style={styles.title}>Welcome to Lofi Vibes 🎧</Text>
      <Text style={styles.description}>🌙 Unwind and Relax 🌙</Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.textButton}>Dive into a world</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },

  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
  },

  description: {
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
    alignItems: 'center',
    paddingBottom: 20,
  },

  button: {
    backgroundColor: '#F6C794',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 2,
  },

  textButton: {
    color: 'white',
    fontWeight: 500,
  },

  images: {
    width: '120%',
    height: '120%',
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.9,
  },
});

export default App;
