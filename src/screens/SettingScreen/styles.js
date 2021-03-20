import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/constants";

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	heading: {
		textTransform: "uppercase",
		marginTop: 25,
		marginLeft: 10,
		marginBottom: 10,
		color: "grey",
	},
	button: {
		backgroundColor: COLORS.white,
		borderWidth: 1,
		textAlign: "center",
		borderColor: "rgba(0,0,0,0.1)",
		paddingVertical: 14,
		color: COLORS.primaryBlue,
		fontSize: 16,
	},
});

export default styles;
