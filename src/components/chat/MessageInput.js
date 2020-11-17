import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import SendButton from "./SendButton";
import {useDispatch, useSelector} from "react-redux";
import {messageSent} from "../../redux/actions";

export default function MessageInput({ route }) {
  const [inputFocused, setInputFocused] = useState(false);
  const dispatch = useDispatch();

  const myId = useSelector((state) => state.profile._id);
  const { contactId } = route.params;

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.length) {
      dispatch(
        messageSent({ myId, contactId, type: "text", content: message })
      );
    }

    setMessage("");
  };

  const handlePress = () => {
    sendMessage();
  };


  return (
    <View
      style={inputFocused ? styles.focusedMessageInput : styles.messageInput}
    >
      <TextInput
        style={styles.input}
        placeholder="Write a message"
        value={message}
        onChangeText={(text) => setMessage(text)}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
      <SendButton action={handlePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "whitesmoke",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },

  messageInput: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 0.3,
    borderTopColor: "lightgrey",
    zIndex: 999,
    justifyContent: "flex-start",
    padding: 10,
    paddingBottom: 40,
  },

  focusedMessageInput: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 0.3,
    borderTopColor: "lightgrey",
    width: "100%",
    justifyContent: "flex-start",
    padding: 10,
    paddingBottom: 40,
    marginBottom: -100,
  },
});
