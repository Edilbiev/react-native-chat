import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 90,
    fontSize: 20,
    paddingTop: 10,
    backgroundColor: "#f7f8f9",
    borderTopColor: "lightgrey",
    borderTopWidth: 0.3,
  },

  text: {
    fontSize: 20,
  },
});
