import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>{process.env.API_URL}</Text>
      <Text>Hello World</Text>
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

