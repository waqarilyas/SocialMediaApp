//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import HomePostComponent from "../../components/HomePostComponent";
import {
	postImage1,
	postImage2,
	postImage3,
	postImage4,
	postImage5,
	userImage1,
	userImage2,
} from "../../../assets/images";
import StoryAvatar from "../../components/StoryAvatar";
import styles from "./styles";

const data = [
	{
		name: "Christina",
		postImage: postImage1,
		address: "lahore, london",
		text: "This is a very nice post",
		avatar: userImage1,
		likeCount: 20,
		commentCount: 20,
	},
	{
		name: "Christina",
		postImage: postImage2,
		address: "lahore, london",
		text: "This is a very nice post",
		avatar: userImage1,
		likeCount: 20,
		commentCount: 20,
	},
	{
		name: "Christina",
		postImage: postImage3,
		address: "lahore, london",
		text: "This is a very nice post",
		avatar: userImage2,
		likeCount: 20,
		commentCount: 20,
	},
	{
		name: "Christina",
		postImage: postImage4,
		address: "lahore, london",
		text: "This is a very nice post",
		avatar: userImage1,
		likeCount: 20,
		commentCount: 20,
	},
	{
		name: "Christina",
		postImage: postImage5,
		address: "lahore, london",
		text: "This is a very nice post",
		avatar: userImage2,
		likeCount: 20,
		commentCount: 20,
	},
];

const StatusData = [
	{
		name: "Christina",
		postImage: postImage1,
	},
	{
		name: "John",
		postImage: postImage2,
	},
	{
		name: "Obama",
		postImage: postImage3,
	},
	{
		name: "Clinton",
		postImage: postImage4,
	},
	{
		name: "Trump",
		postImage: postImage5,
	},
];

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.statusContainer}>
				<FlatList
					data={StatusData}
					keyExtractor={(_, index) => index.toString()}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => {
						return <StoryAvatar item={item} />;
					}}
				/>
			</View>

			<FlatList
				data={data}
				keyExtractor={(item, index) => index.toString()}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => {
					return <HomePostComponent item={item} navigation={navigation} />;
				}}
			/>
		</View>
	);
};

//make this component available to the app
export default HomeScreen;
