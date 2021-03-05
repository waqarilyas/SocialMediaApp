//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>General</Text>

      <Text style={styles.button}>Account Details</Text>
      <Text style={styles.button}>Logout</Text>
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
    backgroundColor: "white",
    borderWidth: 1,
    textAlign: "center",
    borderColor: "rgba(0,0,0,0.1)",
    paddingVertical: 14,
    color: "#4B8CF5",
    fontSize: 16,
  },
});

//make this component available to the app
export default SettingScreen;
