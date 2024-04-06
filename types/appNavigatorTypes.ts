import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined
  Topics: undefined
  Questions: undefined
}

export type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>
export type TopicsProps = NativeStackScreenProps<RootStackParamList, 'Topics'>
export type QuestionsProps = NativeStackScreenProps<RootStackParamList, 'Questions'>