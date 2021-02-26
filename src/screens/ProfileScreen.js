//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { userImage2 } from "../../assets/images";
import FriendCard from "../components/FriendCard";

const ProfileScreen = () => {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image source={userImage2} style={styles.avatar} />
      <Text style={styles.name}>John Colton</Text>
      <Text style={styles.settingButton}>Profile Setting</Text>

      <FlatList
        data={data}
        contentContainerStyle={{
          paddingBottom: 200,
        }}
        ListHeaderComponent={() => {
          return <Text style={styles.listHeader}>Friends</Text>;
        }}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        renderItem={() => {
          return <FriendCard />;
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  avatar: {
    resizeMode: "cover",
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
  },
  settingButton: {
    backgroundColor: "#4B8CF5",
    width: "90%",
    paddingVertical: 12,
    textAlign: "center",
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  listHeader: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default ProfileScreen;
