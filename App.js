import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Constants from 'expo-constants';
import Home from "./screens/Home";


export default function App() {
  return (
    <View style={styles.container}>

      <Home/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEF',
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
});

