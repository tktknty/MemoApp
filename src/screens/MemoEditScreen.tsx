import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native";
import { AppBar } from "../components/AppBar";
import { CircleButton } from '../components/CircleButton';

export const MemoEditScreen = () => {
  return (
      <KeyboardAvoidingView style={styles.container} behavior='height' >
        <AppBar />
        <View style={styles.inputContainer}>
          <TextInput value="買い物リスト" multiline style={styles.input} />
        </View>
        <CircleButton name="check" />
      </KeyboardAvoidingView>
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
