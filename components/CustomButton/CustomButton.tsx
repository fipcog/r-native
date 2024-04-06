import { Pressable, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

type Props = {
  btnStyles?: ViewStyle
  textStyles?: TextStyle
  title: string
  onPress?: () => void
}

export const CustomButton = ({ onPress, textStyles, btnStyles, title }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.Button, btnStyles]}>
      <Text style={[styles.BtnText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777777',
  },
  BtnText: {
    fontSize: 26,
    color: '#ffffff'
  }
})