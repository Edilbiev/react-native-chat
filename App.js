import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux";
import { NavigationContainer } from "@react-navigation/native";
import ApplicationNavigator from "./src/navigators/ApplicationNavigator";
import ContactsList from "./src/components/contacts/ContactsList";
import Chat from "./src/components/chat/Chat";
import {createStackNavigator} from "@react-navigation/stack";
import Navbar from "./src/components/contacts/Navbar";

export default function App() {
  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
        <NavigationContainer>
           <ApplicationNavigator />
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
