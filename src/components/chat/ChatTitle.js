import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import {useSelector} from "react-redux";


export default function ChatTitle({ route }) {
  const { contactId } = route.params;

  const contactInfo = useSelector((state) =>
    state.contacts.items.find((item) => item._id === contactId)
  );
  return (
    <View>
      {contactId}
    </View>
  );
}
