//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import NotificationsCard from "../components/NotificationsCard";
import {
  postImage1,
  postImage2,
  postImage3,
  postImage4,
  postImage5,
  userImage1,
  userImage2,
} from "../../assets/images";

const data = [
  {
    name: "Christina",
    postImage: postImage1,
  },
  {
    name: "John",
    postImage: postImage2,
  },
  {
    name: "Obama",
    postImage: postImage3,
  },
  {
    name: "Clinton",
    postImage: postImage4,
  },
  {
    name: "Trump",
    postImage: postImage5,
  },
];
const ChatData = [
  {
    name: "Christina",
    postImage: postImage1,
    text: "MF how are you??",
  },
  {
    name: "John",
    postImage: postImage2,
    text: "MF how are you??",
  },
  {
    name: "Obama",
    postImage: postImage3,
    text: "MF how are you??",
  },
  {
    name: "Clinton",
    postImage: postImage4,
    text: "MF how are you??",
  },
  {
    name: "Trump",
    postImage: postImage5,
    text: "MF how are you??",
  },
];

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ChatData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ChatDetailScreen");
              }}
            >
              <NotificationsCard item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default NotificationScreen;
