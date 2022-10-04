import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export const NutritionIntakeDaily : React.FC = () => {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>You Nutrition</Text>
			
		</View>
	)

}

const styles = StyleSheet.create({
	container: {
		//padding: 10,
	},
	title: {
		fontFamily: "AvNextBold",
		fontSize: 20,
		fontWeight: "bold",
		color: "#434343"
	}
})