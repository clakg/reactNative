import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{process.env.API_URL}</Text>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
