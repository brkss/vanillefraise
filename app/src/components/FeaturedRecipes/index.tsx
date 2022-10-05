import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Item } from './Item';
import { useRecipeByCategoryQuery } from '../../generated/graphql';



export const FeaturedRecipes : React.FC = () => {

	const _recipes = useRecipeByCategoryQuery({
		fetchPolicy: "cache-first",
		variables: {
		  cat_id: "NO",
		},
	  });

	  if(_recipes.loading || _recipes.error) return null;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Recomended Recipes</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{
					_recipes.data.recipeByCategory.map((recipe, key) => (
						<Item image={recipe.image} title={recipe.name} />
					))
				}
				
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		
	},
	title: {
		fontFamily: "AvNextBold",
		fontSize: 20,
		marginBottom: 10,
	}
})