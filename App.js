import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import LoginScreenTest from './src/Screens/LoginScreenTest';
import DashboardScreen from './src/Screens/DashboardScreen';
import TabsComponent from './src/Components/TabsComponent';
import React, { useEffect, useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import Test3 from './src/Screens/Test3';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Text-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF-Pro-Text-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
    'SF-Pro-Rounded-Bold': require('./assets/fonts/SF-Pro-Rounded-Bold.otf'),
    'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
  });

  if (!fontsLoaded) {
    // Return a loading indicator or null while fonts are loading
    return null;
  }

  // Once fonts are loaded, render your main component
  return (
    <Test3 />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
