import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export const MainScreen = () => {
  return (
    <SafeAreaView>
      <Text>Main</Text>
    </SafeAreaView>
  )
}

export const TopicsScreen = () => {
  return (
    <SafeAreaView>
      <Text>Topics</Text>
    </SafeAreaView>
  )
}

export const QuestionsScreen = () => {
  return (
    <SafeAreaView>
      <Text>Questions</Text>
    </SafeAreaView>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>

      </NavigationContainer>
    </SafeAreaProvider>
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
