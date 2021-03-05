//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// create a component
const NotificationsCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.postImage} style={styles.avatar} />

      <Text style={styles.subText}>{item.text}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 7,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  avatar: {
    resizeMode: "cover",
    height: 50,
    width: 50,
    borderRadius: 35,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  subText: {
    fontSize: 16,
    // color: "grey",
  },
});

//make this component available to the app
export default NotificationsCard;
