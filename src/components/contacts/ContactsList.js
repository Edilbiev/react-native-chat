import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet, KeyboardAvoidingView } from "react-native";
import Navbar from "./Navbar";
import { contactsLoaded, profileLoaded } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";
import Footer from "./Footer";
import dayjs from "dayjs";

export default function ContactsList({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsLoaded());
    dispatch(profileLoaded());
  }, [dispatch]);

  const loading = useSelector((state) => state.contacts.loading);

  const items = useSelector(({ application, contacts }) => {
    const { contactSearchString } = application;
    return contacts.items.filter(({ fullname }) => {
      return (
        fullname.toUpperCase().indexOf(contactSearchString.toUpperCase()) !== -1
      );
    });
  });

  const itemsSortedByTime = items.sort((a, b) => {
    return dayjs(b.lastMessage?.time) - dayjs(a.lastMessage?.time);
  });

  if (loading) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <ScrollView>
          {itemsSortedByTime.map((contact) => (
            <Contact key={contact._id} {...contact} navigation={navigation} />
          ))}
        </ScrollView>
        <Footer />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
