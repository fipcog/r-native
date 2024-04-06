//https://stackoverflow.com/questions/52197057/material-top-tab-navigator-overlapping-with-statusbar-any-way-to-fix-it
import Constants from 'expo-constants'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainProps, QuestionsProps, RootStackParamList, TopicsProps } from './types/appNavigatorTypes';
import { CustomButton } from './components/CustomButton/CustomButton';
import { defaultColors } from './styles/defaultColors';

export const MainScreen = ({ navigation }: MainProps) => {
  const onStartPress = () => navigation.navigate('Topics')
  return (
    <View style={styles.container}>
      <CustomButton
        // onPress={onStartPress}
        btnStyles={styles.startBtn}
        textStyles={styles.startBtnText}
        title='START'
      />
    </View>
  )
}

export const TopicsScreen = ({ navigation }: TopicsProps) => {
  return (
    <View>
      <Text>Topics</Text>
    </View>
  )
}

export const QuestionsScreen = ({ navigation }: QuestionsProps) => {
  return (
    <View>
      <Text>Questions</Text>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          style={{ marginTop: Constants.statusBarHeight }}
          screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: `${defaultColors.accent}` },
          }}>
          <Tab.Screen name='Main' component={MainScreen} />
          <Tab.Screen name='Topics' component={TopicsScreen} />
          <Tab.Screen name='Questions' component={QuestionsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" backgroundColor={`${defaultColors.accent}`} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    backgroundColor: `${defaultColors.light}`,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: `${defaultColors.accent}`
  },
  input: {
    width: 300,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderColor: `${defaultColors.dark}`,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  startBtn: {
    backgroundColor: `${defaultColors.accent}`,
    borderRadius: 5
  },
  startBtnText: {

  }
});

