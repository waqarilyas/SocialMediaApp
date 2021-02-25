//import liraries
import React from "react";
import { View, StyleSheet, Text } from "react-native";

// create a component
function ChatDetailScreen(props) {
	return (
		<View style={styles.container}>
			<Text>Chat Detail Screen</Text>
		</View>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F4CE6A",
	},
});

//make this component available to the app
export default ChatDetailScreen;
