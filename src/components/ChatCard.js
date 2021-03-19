//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../theme/constants";

// create a component
const ChatCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.postImage} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subText}>{item.text}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 10,
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  avatar: {
    resizeMode: "cover",
    height: 70,
    width: 70,
    borderRadius: 35,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  subText: {
    fontSize: 13,
    color: COLORS.grey,
  },
});

//make this component available to the app
export default ChatCard;
