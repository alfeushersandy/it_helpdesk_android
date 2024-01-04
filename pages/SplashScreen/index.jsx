import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay for the splash screen (e.g., 2 seconds) and navigate to the main screen
    const timer = setTimeout(() => {
      navigation.replace('home'); // Replace 'Main' with your main screen name
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/ahg.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', // Customize the background color if needed
  },
  image: {
    width: '50%', // Adjust size as needed
    height: '50%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;