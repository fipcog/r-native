import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';

export const MainScreen = () => {
  return (
    <View />
  )
}

export const TopicsScreen = () => {
  return (
    <View />
  )
}

export const QuestionsScreen = () => {
  return (
    <View />
  )
}

export default function App() {
  const [state, setstate] = useState('');


  return (
    <View style={styles.container}>
      <Text>{state}</Text>
      <TextInput style={styles.input} value={state} onChangeText={setstate} />
      <StatusBar style="dark" backgroundColor='#2cd3cb' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'solid',
  }
});
