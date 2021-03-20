//import liraries
import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	FlatList,
	ScrollView,
} from "react-native";
import { userImage2 } from "../../../assets/images";
import FriendCard from "../../components/FriendCard";
import styles from "./styles";
import firebase from "firebase";

const ProfileScreen = ({ navigation }) => {
	const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

	const user = firebase.auth().currentUser;

	console.log(user);

	return (
		<ScrollView
			contentContainerStyle={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<Image source={userImage2} style={styles.avatar} />
			<Text style={styles.name}>{user.email}</Text>

			<Text
				style={styles.settingButton}
				onPress={() => navigation.navigate("SettingScreen")}
			>
				Profile Setting
			</Text>

			<FlatList
				data={data}
				contentContainerStyle={{
					paddingBottom: 200,
				}}
				ListHeaderComponent={() => {
					return <Text style={styles.listHeader}>Friends</Text>;
				}}
				keyExtractor={(_, index) => index.toString()}
				showsVerticalScrollIndicator={false}
				numColumns={3}
				renderItem={() => {
					return <FriendCard />;
				}}
			/>
		</ScrollView>
	);
};

export default ProfileScreen;
