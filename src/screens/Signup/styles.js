import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/constants";

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.white,
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
		marginVertical: 20,
	},
	input: {
		width: "90%",
		marginTop: 20,
		backgroundColor: COLORS.white,
	},
	subHeading: {
		color: COLORS.grey,
	},
	signupButton: {
		backgroundColor: COLORS.primaryBlue,
		paddingVertical: 13,
		width: "90%",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
	},
	signupText: {
		color: COLORS.white,
		fontSize: 18,
		fontWeight: "700",
	},
	alreadyContainer: {
		color: COLORS.grey,
		marginTop: 10,
	},
	alreadyLogin: {
		color: COLORS.black,
		fontSize: 16,
	},
	error: {
		marginTop: 20,
		color: COLORS.red,
		fontSize: 12,
	},
	loadingContainer: {
		position: "absolute",
		backgroundColor: "rgba(0,0,0,0.2)",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default styles;
