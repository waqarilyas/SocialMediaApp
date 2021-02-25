import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import BottomTabs from "./src/navigation/BottomTabs";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <NavigationContainer>
          <BottomTabs />
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
