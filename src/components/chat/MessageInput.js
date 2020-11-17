import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from "react-native";

export default function MessageInput() {
  const [inputFocused, setInputFocused] = useState(false);

  console.log(inputFocused);

  return (
    <View style={inputFocused? styles.focusedMessageInput : styles.messageInput}>
      <TextInput
        style={styles.input}
        placeholder="Write a message"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "whitesmoke",
    padding: 10,
    borderRadius: 10,
  },

  messageInput: {
    backgroundColor: "#fff",
    borderTopWidth: 0.3,
    borderTopColor: "lightgrey",
    position: "absolute",
    bottom: 0,
    zIndex: 999,
    width: "100%",
    justifyContent: "flex-start",
    padding: 10,
    paddingBottom: 40,
  },

  focusedMessageInput: {
    backgroundColor: "#fff",
    borderTopWidth: 0.3,
    borderTopColor: "lightgrey",
    position: "absolute",
    bottom: 60,
    zIndex: 999,
    width: "100%",
    justifyContent: "flex-start",
    padding: 10,
    paddingBottom: 40,
  }
});

