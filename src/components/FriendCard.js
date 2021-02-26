//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { userImage2 } from "../../assets/images";

// create a component
const FriendCard = () => {
  return (
    <View style={styles.container}>
      <Image source={userImage2} style={styles.avatar} />
      <Text style={styles.name}>Arthur Shelby</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 6,
  },
  avatar: {
    resizeMode: "cover",
    height: 100,
    width: 100,
  },
  name: {},
});

//make this component available to the app
export default FriendCard;
