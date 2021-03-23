import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/constants";

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	avatar: {
		resizeMode: "cover",
		height: 100,
		width: 100,
		borderRadius: 50,
		marginTop: 10,
	},
	name: {
		fontSize: 16,
		fontWeight: "600",
		marginVertical: 10,
	},
	settingButton: {
		backgroundColor: COLORS.primaryBlue,
		width: "90%",
		paddingVertical: 12,
		textAlign: "center",
		color: COLORS.white,
		fontWeight: "600",
		fontSize: 16,
	},
	listHeader: {
		fontSize: 16,
		marginVertical: 10,
	},
});

export default styles;
