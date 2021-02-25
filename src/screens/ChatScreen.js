//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import SearchComponent from "../components/SearchComponent";
import {
  postImage1,
  postImage2,
  postImage3,
  postImage4,
  postImage5,
  userImage1,
  userImage2,
} from "../../assets/images";
import StoryAvatar from "../components/StoryAvatar";
import ChatCard from "../components/ChatCard";
import { TouchableOpacity } from "react-native-gesture-handler";

const StatusData = [
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

// create a component
const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SearchComponent />
      <View style={styles.statusContainer}>
        <FlatList
          data={StatusData}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <StoryAvatar item={item} />;
          }}
        />
      </View>

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
              <ChatCard item={item} />
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
    backgroundColor: "white",
  },
  statusContainer: {
    backgroundColor: "white",
  },
});

//make this component available to the app
export default ChatScreen;
