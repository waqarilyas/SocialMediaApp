import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { bell, settingsIcon } from "../../assets/icons";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createStackNavigator();

function AuthStack() {
  const headerLeft = (navigation) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("SettingScreen")}>
        <Image source={settingsIcon} style={styles.leftImage} />
      </TouchableOpacity>
    );
  };

  const headerRight = (navigation) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("NotificationScreen")}
      >
        <Image source={bell} style={styles.leftImage} />
      </TouchableOpacity>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          //   title: "Signup",
          // headerLeft: () => headerLeft(),
          //   headerStyle: styles.header,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          title: "Login",
          // headerLeft: () => headerLeft(navigation),
          headerRight: () => headerRight(navigation),
          headerStyle: styles.header,
        })}
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

export default AuthStack;
