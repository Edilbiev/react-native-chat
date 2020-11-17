import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContactsList from "../components/contacts/ContactsList";
import Chat from "../components/chat/Chat";
import Navbar from "../components/contacts/Navbar";
import ChatTitle from "../components/chat/ChatTitle";

export default function ApplicationNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contacts"
        component={ContactsList}
        options={{ headerTitle: <Navbar /> }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ route }) => ({ title: route.params.fullname })}
      />
    </Stack.Navigator>
  );
}
