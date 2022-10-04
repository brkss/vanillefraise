import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'; 

interface Props {
	selectRecipes: () => void;
}

export const NoSelectedRecipes : React.FC<Props> = ({selectRecipes}) => {

	return (
		<View style={styles.container}>
			<Text style={styles.txt}> Select recipes that match your appetite 😋 </Text>
			<Pressable onPress={selectRecipes}  style={styles.btn}>
				<Text style={styles.btnTxt}>Select Recipes</Text>
			</Pressable>
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txt: {
		fontWeight: "bold",
		fontFamily: "AvNextBold"
	},
	btn: {
		backgroundColor: "#000",
		padding: 15,
		paddingTop: 17,
		width: '50%',
		marginTop: 10,
		borderRadius: 12	
	},
	btnTxt: {
		fontFamily: "AvNextBold",
		fontWeight: "bold",
		color: "white",
		textAlign: "center"
	}
})