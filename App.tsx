import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MainProps, QuestionsProps, RootStackParamList, TopicsProps } from './AppNavigatorTypes';

export const MainScreen = ({ navigation }: MainProps) => {
  return (
    <SafeAreaView>
      <View
        style={styles.container}
      >
        <Text>Main</Text>
        <Text>Main</Text>
      </View>

    </SafeAreaView>
  )
}

export const TopicsScreen = ({ navigation }: TopicsProps) => {
  return (
    <SafeAreaView>
      <Text>Topics</Text>
    </SafeAreaView>
  )
}

export const QuestionsScreen = ({ navigation }: QuestionsProps) => {
  return (
    <SafeAreaView>
      <Text>Questions</Text>
    </SafeAreaView>
  )
}

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: '#1ecbe9' },
          }}>
          <Tab.Screen name='Main' component={MainScreen} />
          <Tab.Screen name='Topics' component={TopicsScreen} />
          <Tab.Screen name='Questions' component={QuestionsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" backgroundColor='#2cd3cb' />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
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

