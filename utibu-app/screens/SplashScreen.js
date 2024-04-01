import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 5000); // Replace 'Home' with the name of your home screen
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Utibu Health</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Adjust background color as needed
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff', // Adjust text color as needed
  },
});

export default SplashScreen;
