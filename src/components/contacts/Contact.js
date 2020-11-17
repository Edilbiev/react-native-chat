import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import Calendar from "dayjs/plugin/calendar";

export default function Contact({
  fullname,
  lastMessage,
  _id,
  online,
  navigation,
}) {
  dayjs.extend(Calendar);

  const lastMessageTime = lastMessage
    ? dayjs(lastMessage.time).calendar(null, {
        sameDay: "HH:mm",
        lastDay: "[Вчера]",
        lastWeek: "dddd",
        sameElse: "DD.MM.YY",
      })
    : null;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate("Chat", {
          contactId: _id,
          fullname
        });
      }}
    >
      <View style={styles.contact}>
        <View style={styles.avatar}>
          <Text style={styles.avatarLetter}>{fullname[0]}</Text>
        </View>
        <View>
          <View>
            <Text style={styles.name}>{fullname}</Text>
          </View>
          <View>
            <Text style={styles.lastMessage}>
              {lastMessage && lastMessage.content}
            </Text>
          </View>
        </View>
        <View style={styles.time}>
          <Text style={styles.timeString}>{lastMessageTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.3,
  },

  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "#709ee8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginRight: 10,
  },

  avatarLetter: {
    fontSize: 20,
    color: "white",
  },

  name: {
    fontSize: 18,
  },

  lastMessage: {
    color: "grey",
  },

  time: {
    flex: 1,
    alignItems: "flex-end",
  },

  timeString: {
    color: "grey",
  },
});
