import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Item } from './Item';

const data = [
	{
		title: "Vitamins",
		value: 19,
		status: "Low Intake !"
	},
	{
		title: "Minirals",
		value: 12,
		status: "Low Intake !"
	},
	{
		title: "Fats",
		value: 73,
		status: "Pretty Healthy !"
	},
	{
		title: "Protein",
		value: 56,
		status: "Pretty Healthy !"
	},
	{
		title: "Carbs",
		value: 203,
		status: "High intake !"
	},
		
]

export const NutritionIntakeDaily : React.FC = () => {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>You Nutrition</Text>
			{
				data.map((item, key) => (
					<Item status={item.status} title={item.title} value={item.value}  />	
				))
			}
			
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
		color: "#434343",
		marginBottom: 20,
	}
})