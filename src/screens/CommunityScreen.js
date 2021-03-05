//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  userImage1,
  userImage2,
  userImage3,
  userImage4,
  userImage5,
  userImage6,
} from "../../assets/images";
import CommunityFriendCard from "../components/CommunityFriendCard";
import SearchComponent from "../components/SearchComponent";

const friendsData = [
  {
    image: userImage1,
    name: "Christian",
    status: "Accept",
  },
  {
    image: userImage4,
    name: "Ayesha",
    status: "Unfriend",
  },
  {
    image: userImage3,
    name: "Alberta",
    status: "Unfriend",
  },
  {
    image: userImage2,
    name: "Darreno",
    status: "Unfriend",
  },
  {
    image: userImage5,
    name: "Hannan",
    status: "Unfriend",
  },
  {
    image: userImage6,
    name: "Yousaf",
    status: "Unfriend",
  },
];

// create a component
const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <SearchComponent />
      <FlatList
        data={friendsData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return <CommunityFriendCard item={item} />;
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

//make this component available to the app
export default CommunityScreen;
