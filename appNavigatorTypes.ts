import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined
  Topics: undefined
  Questions: undefined
}

export type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>