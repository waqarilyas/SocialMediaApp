//import liraries

import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "../theme/constants";

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
    height: hp(10),
    width: hp(10),
    borderRadius: hp(5),
    borderWidth: hp(0.3),
    borderColor: COLORS.primaryBlue,
  },
  name: {
    color: COLORS.grey,
    marginTop: hp(2),
  },
});

//make this component available to the app
export default StoryAvatar;
