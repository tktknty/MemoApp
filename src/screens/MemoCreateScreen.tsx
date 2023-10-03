import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import { AppBar } from "../components/AppBar";
import { CircleButton } from '../components/CircleButton';
import { KeyboardSafeView } from '../components/KeyboardSafeView';

export const MemoCreateScreen = () => {
  return (
      <KeyboardSafeView style={styles.container} >
        <AppBar />
        <View style={styles.inputContainer}>
          <TextInput value="" multiline style={styles.input} />
        </View>
        <CircleButton name="check" />
      </KeyboardSafeView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 18,
    lineHeight: 24,
  }
});
