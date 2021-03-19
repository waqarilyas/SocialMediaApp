import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-paper";
import firebase from "firebase";
import styles from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    if (email == "" || password == "") {
      setError(true);
      setLoading(false);
      return;
    }
    setError(false);

    const credential = {
      email: email,
      password: password,
    };

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        setLoading(false);
        console.log(error);
        setError(true);
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
        if (errorCode === "auth/account-exists-with-different-credential") {
          alert("Email already associated with another account.");
        } else {
          console.error(error);
        }
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Social Media App</Text>
        <Text style={styles.subHeading}>
          Sign in with your email and password
        </Text>

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
          <Text style={styles.error}>
            Please fill all the fields/ Invalid credentials
          </Text>
        ) : null}

        <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
          <Text style={styles.signupText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.alreadyContainer}>
          Create a new account{" "}
          <Text
            style={styles.alreadyLogin}
            onPress={() => navigation.navigate("Signup")}
          >
            Signup
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

// define your styles

//make this component available to the app
export default Login;
