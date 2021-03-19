//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "firebase";
import { COLORS } from "../theme/constants";

// create a component
const SettingScreen = () => {
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>General</Text>

      <Text style={styles.button}>Account Details</Text>
      <Text style={styles.button} onPress={handleLogout}>
        Logout
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textTransform: "uppercase",
    marginTop: 25,
    marginLeft: 10,
    marginBottom: 10,
    color: "grey",
  },
  button: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    textAlign: "center",
    borderColor: "rgba(0,0,0,0.1)",
    paddingVertical: 14,
    color: COLORS.primaryBlue,
    fontSize: 16,
  },
});

//make this component available to the app
export default SettingScreen;
