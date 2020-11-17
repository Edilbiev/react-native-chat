import React, { useEffect } from "react";
import {ScrollView, View, StyleSheet, KeyboardAvoidingView, Keyboard} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { chatLoaded } from "../../redux/actions";
import Message from "./Message";
import MessageInput from "./MessageInput";

export default function Chat({ route }) {
  const dispatch = useDispatch();

  const myId = useSelector((state) => state.profile._id);
  const { contactId } = route.params;

  useEffect(() => {
    dispatch(chatLoaded(myId, contactId));
  }, [dispatch, myId, contactId]);

  const messages = useSelector((state) => state.chat.items);
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "height"}
      style={styles.avoid}
    >
      <View style={styles.chatOuter}>
        <ScrollView style={styles.chat}>
          {messages.map(message => <Message key={message._id} content={message.content} isInbox={message.toUserId === myId} />)}
        </ScrollView>
      </View>
      <MessageInput />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  chat: {
    padding: 10,
  },
  chatOuter: {
    height: "100%",
  },
});

