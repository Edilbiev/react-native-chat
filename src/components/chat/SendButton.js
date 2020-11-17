import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function SendButton({ action }) {
  return (
    <TouchableOpacity onPress={action}>
      <View style={styles.button}>
        <FontAwesome name="paper-plane" size={22} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#027cfe",
    alignItems: "center",
    justifyContent: "center",
  }
})
