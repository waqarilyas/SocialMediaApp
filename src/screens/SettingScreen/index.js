//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "firebase";
import styles from "./styles";

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

//make this component available to the app
export default SettingScreen;
