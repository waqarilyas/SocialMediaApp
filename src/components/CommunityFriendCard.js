//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { COLORS } from "../theme/constants";
// create a component
const CommunityFriendsCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.avatar} />
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <View style={styles.buttoncontainer}>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => console.log(item.status)}
          color={COLORS.white}
        >
          {item.status}
        </Button>
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
    paddingVertical: 3,
    // backgroundColor: "red",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
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
    color: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  buttoncontainer: {
    // paddingLeft: 78,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

//make this component available to the app
export default CommunityFriendsCard;
