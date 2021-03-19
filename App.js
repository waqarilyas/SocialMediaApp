import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, SafeAreaView } from "react-native";
import BottomTabs from "./src/navigation/BottomTabs";
import AuthStack from "./src/navigation/AuthStack";
import firebase from "firebase";
import { firebaseConfig } from "./config/key";

export default function App() {
  const [user, setUser] = useState(null);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((usr) => {
    setUser(usr);
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <NavigationContainer>
          {user ? <BottomTabs /> : <AuthStack />}
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
