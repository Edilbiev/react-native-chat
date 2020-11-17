import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Message({ content, isInbox }) {
  return (
    <View style={isInbox ? styles.inboxMessageOuter : styles.outboxMessageOuter}>
      <View style={isInbox ? styles.inboxMessage : styles.outboxMessage}>
        <Text style={isInbox ? styles.inboxContent : styles.outboxContent}>
          {content}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inboxMessageOuter: {
    marginBottom: 10,
  },

  outboxMessageOuter: {
    marginBottom: 10,
    alignItems: "flex-end"
  },

  inboxMessage: {
    maxWidth: "60%",
    backgroundColor: "#f1f5f9",
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  outboxMessage: {
    maxWidth: "60%",
    backgroundColor: "#632df8",
    color: "white",
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  inboxContent: {
    fontSize: 18,
  },

  outboxContent: {
    fontSize: 18,
    color: "white",
  },
});

