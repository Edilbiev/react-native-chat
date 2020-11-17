import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { contactSearchStringSet } from "../../redux/actions";

export default function Navbar() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.contacts.loading);

  const searchString = useSelector(
    (state) => state.application.contactSearchString
  );

  const handleChange = () => {
    dispatch(contactSearchStringSet());
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Chats</Text>
      {/*<Feather name="search" size={24} color="black" />*/}
      <View style={styles.search}>
        <TextInput
          disabled={loading}
          placeholder="Search contact"
          value={searchString}
          onChangeText={(text) => dispatch(contactSearchStringSet(text))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 10,
  },

  search: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
});
