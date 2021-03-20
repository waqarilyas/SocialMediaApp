//import liraries
import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-paper";
import * as firebase from "firebase";
import "firebase/firestore";
import styles from "./styles";

// create a component

// name ,emai, password

const Signup = ({ navigation }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {
		setLoading(true);
		if (name == "" || email == "" || password == "") {
			setError(true);
			setLoading(false);
			return;
		}
		setError(false);

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async () => {
				await firebase
					.firestore()
					.collection("users")
					.add({
						name: name,
						email: email,
						profilePic: "",
						followers: 0,
						folllowing: 0,
						friendCount: 0,
					})
					.then(() => {
						console.log("--user data added successfully--");
					})
					.catch((err) => {
						console.log("--error storing user---", err);
					});

				console.log("User created successfully");
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	};

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.header}>SignUp</Text>
				<Text style={styles.subHeading}>Create an account to continue</Text>

				<TextInput
					label="Full Name"
					value={name}
					onChangeText={(text) => setName(text)}
					style={styles.input}
					selectionColor="#4DA9DD"
					keyboardType="name-phone-pad"
				/>
				<TextInput
					label="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
					style={styles.input}
					selectionColor="#4DA9DD"
					keyboardType="email-address"
				/>
				<TextInput
					label="Password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					style={styles.input}
					selectionColor="#4DA9DD"
					keyboardType="visible-password"
					secureTextEntry={true}
				/>

				{error ? (
					<Text style={styles.error}>Please fill all the fields</Text>
				) : null}

				<TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
					<Text style={styles.signupText}>SignUp</Text>
				</TouchableOpacity>

				<Text style={styles.alreadyContainer}>
					Already have an account?{" "}
					<Text
						style={styles.alreadyLogin}
						onPress={() => navigation.navigate("Login")}
					>
						Login
					</Text>
				</Text>
			</View>
			{loading ? (
				<View style={styles.loadingContainer}>
					<ActivityIndicator size="large" />
				</View>
			) : null}
		</>
	);
};

//make this component available to the app
export default Signup;
