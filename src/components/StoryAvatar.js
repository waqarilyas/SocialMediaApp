//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// create a component
const StoryAvatar = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.postImage} style={styles.avatar} />

      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
    alignItems: "center",
  },

  avatar: {
    resizeMode: "cover",
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "rgba(0,0,255,0.5)",
  },
  name: {
    color: "grey",
    marginTop: 5,
  },
});

//make this component available to the app
export default StoryAvatar;
