import React from "react";
import { Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "../screens/ChatScreen";
import { checklist } from "../../assets/icons";
import ChatDetailScreen from "../screens/ChatDetailScreen";

const Stack = createStackNavigator();

function ChatStack() {
	const headerRight = () => {
		return <Image source={checklist} style={styles.leftImage} />;
	};

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="ChatScreen"
				component={ChatScreen}
				options={{
					title: "Chat",
					headerRight: () => headerRight(),
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name="ChatDetailScreen"
				component={ChatDetailScreen}
				options={{
					title: "Chat Post Detail",
				}}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	leftImage: {
		resizeMode: "contain",
		height: 30,
		width: 30,
		marginHorizontal: 10,
	},
});

export default ChatStack;
