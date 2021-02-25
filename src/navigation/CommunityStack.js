import React from "react";
import { Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CommunityScreen from "../screens/CommunityScreen";

const Stack = createStackNavigator();

function CommunityStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="CommunityScreen"
				component={CommunityScreen}
				options={{
					title: "Friends",
					headerTitleAlign: "center",
				}}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});

export default CommunityStack;
