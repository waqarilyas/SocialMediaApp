import React from "react";
import { Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import { camera, checklist, bell } from "../../assets/icons";

const Stack = createStackNavigator();

function SearchStack() {
  const headerLeft = () => {
    return <Image source={camera} style={styles.leftImage} />;
  };

  const headerRight = () => {
    return <Image source={bell} style={styles.leftImage} />;
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: "Search",
          //   headerLeft: () => headerLeft(),
          //   headerRight: () => headerRight(),
          headerStyle: styles.header,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  leftImage: {
    resizeMode: "contain",
    height: 25,
    width: 25,
    marginHorizontal: 10,
    tintColor: "#4B8CF5",
  },
  header: {
    // backgroundColor: "red",
  },
});

export default SearchStack;
