//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        style={{
          backgroundColor: "rgba(255,255,255,0.4)",
          width: "90%",
          height: 35,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  input: {
    backgroundColor: "rgba(105,105,105,0.2)",
    width: "90%",
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});

//make this component available to the app
export default SearchComponent;
